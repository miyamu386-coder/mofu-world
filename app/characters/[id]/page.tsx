import Link from "next/link";
import { notFound } from "next/navigation";
import {
  characters,
  getCharacter,
} from "../../data/characters";

type Props = {
  params: Promise<{ id: string }>;
};

// キャラクターごとのページを生成
export function generateStaticParams() {
  return characters.map((character) => ({
    id: character.id,
  }));
}

export default async function CharacterDetailPage({
  params,
}: Props) {
  const { id } = await params;

  const character = getCharacter(id);

  if (!character) {
    notFound();
  }

  return (
    <main className="character-detail-page">
      <div className="character-detail-card">

        {/* お庭に戻る */}
        <Link href="/" className="character-back-link">
          ← お庭に戻る
        </Link>

        {/* キャラクター画像 */}
        <img
          src={character.profileImage ?? character.image}
          alt={character.name}
          className="character-detail-image"
        />

        {/* キャラクター名 */}
        <h1>{character.name}</h1>

        {/* 詳細プロフィール */}
        <p>{character.description}</p>

      </div>
    </main>
  );
}