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

    // プロフィール項目
    const profileItems = [
        { label: "🎂 誕生日", value: character.birthday },
        { label: "🌸 性格", value: character.personality },
        { label: "❤️ 好きなもの", value: character.likes },
        { label: "💦 苦手なもの", value: character.dislikes },
        { label: "⭐ 特技・趣味", value: character.specialty },
    ].filter((item) => item.value);

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
                <h1>
                    {character.id === "hina-mama" ? (
                        <>
                            <ruby>
                                夢乃崎
                                <rt>ゆめのさき</rt>
                            </ruby>
                            {" さくら"}
                        </>
                    ) : character.familyRuby && character.givenRuby ? (
                        <>
                            <ruby>
                                夢乃崎
                                <rt>{character.familyRuby}</rt>
                            </ruby>
                            {" "}
                            <ruby>
                                {character.name.split(" ")[1]}
                                <rt>{character.givenRuby}</rt>
                            </ruby>
                        </>
                    ) : (
                        character.name
                    )}
                </h1>

                {/* 詳細プロフィール */}
                <p>{character.description}</p>

                {/* プロフィール一覧 */}
                <div className="character-profile-list">
                    {profileItems.map((item) => (
                        <div
                            key={item.label}
                            className="character-profile-item"
                        >
                            <span className="character-profile-label">
                                {item.label}
                            </span>

                            <span className="character-profile-value">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 自己紹介 */}
                {character.introduction && (
                    <div className="character-introduction">
                        「{character.introduction}」
                    </div>
                )}

            </div>
        </main>
    );
}