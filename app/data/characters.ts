/* ========================================
   Mofu World - Character Data
======================================== */

export type Character = {
  id: string;
  name: string;

  // お庭に表示する画像
  image: string;

  // 紹介画面用の画像（未設定ならお庭の画像を使用）
  profileImage?: string;

  // お庭での配置に使用するCSSクラス
  className: string;

  // 簡易プロフィール
  shortDescription: string;

  // 詳細プロフィール
  description: string;
};

/* ========================================
   Characters
======================================== */

export const characters: Character[] = [
  // モフ
  {
    id: "mofu",
    name: "モフ",
    image: "/images/characters/mofu.png",
    className: "mofu",

    shortDescription:
      "思ったことを淡々と口にする、モフワールドの住人。",

    description:
      "周囲に振り回されながらも、自分のペースを崩さないモフ。思ったことを淡々と口にする、ちょっと皮肉屋なキャラクター。",
  },

  // メカモフ
  {
    id: "mecha-mofu",
    name: "メカモフ",
    image: "/images/characters/mecha-mofu.png",
    className: "mecha-mofu",

    shortDescription:
      "モフワールドに登場するメカモフ。",

    description:
      "メカモフの詳しいプロフィールは、これから公開予定。",
  },

  // ひなちゃん
  {
    id: "hina",
    name: "ひなちゃん",
    image: "/images/characters/hina.png",
    className: "hina",

    shortDescription:
      "遊ぶことが大好きな、元気いっぱいの女の子。",

    description:
      "楽しいことが大好きなひなちゃん。今日もモフたちを誘って、新しい遊びを探している。",
  },

  // ひなちゃんのお母さん
  {
    id: "hina-mama",
    name: "ひなちゃんのお母さん",
    image: "/images/characters/hina-mama-sitting.png",
    className: "hina-mama",

    shortDescription:
      "ひなちゃんのお母さん。",

    description:
      "ひなちゃんのお母さん。詳しいプロフィールは、これから公開予定。",
  },

  // ひなちゃんのお父さん
  {
    id: "hina-papa",
    name: "ひなちゃんのお父さん",
    image: "/images/characters/hina-papa-sitting.png",
    className: "hina-papa",

    shortDescription:
      "ひなちゃんのお父さん。",

    description:
      "ひなちゃんのお父さん。詳しいプロフィールは、これから公開予定。",
  },
];

/* ========================================
   Character Search
======================================== */

export function getCharacter(id: string): Character | undefined {
  return characters.find((character) => character.id === id);
}