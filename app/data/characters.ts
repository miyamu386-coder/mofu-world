/* ========================================
   Mofu World - Character Data
======================================== */

export type Character = {
    id: string;
    name: string;

    // ふりがな（夢乃崎家のみ）
    familyRuby?: string;
    givenRuby?: string;

    // お庭に表示する画像
    image: string;

    // 紹介画面用の画像
    profileImage?: string;

    // お庭での配置に使用するCSSクラス
    className: string;

    // 簡易プロフィール
    shortDescription: string;

    // 詳細プロフィール
    description: string;

    // キャラクター設定
    birthday?: string;
    personality?: string;
    likes?: string;
    dislikes?: string;
    specialty?: string;
    introduction?: string;
};

/* ========================================
   Characters
======================================== */

export const characters: Character[] = [
    // モフ太郎
    {
        id: "mofu",
        name: "モフ太郎",
        image: "/images/characters/mofu.png",
        className: "mofu",

        birthday: "6月10日",
        personality: "淡々としていて、ちょっと毒舌",
        likes: "ツナ缶",
        dislikes: "みかん",
        specialty: "器用貧乏",
        introduction: "ちょっとした心の隙間を埋めてくれる存在",

        shortDescription:
            "淡々としていて、ちょっと毒舌なモフワールドの住人。",

        description:
            "自分のペースを崩さず、思ったことを淡々と口にするモフ太郎。ちょっと毒舌だけど、どこか憎めない存在。",
    },

    // メカモフ太郎
    {
        id: "mecha-mofu",
        name: "メカモフ太郎",
        image: "/images/characters/mecha-mofu.png",
        className: "mecha-mofu",

        birthday: "2xxx年11月22日",
        personality: "真面目で律儀",
        likes: "コーヒー焙煎",
        dislikes: "ゴキブリ",
        specialty: "家政婦ロボ",
        introduction: "カジハワタシニオマカセクダサイ",

        shortDescription:
            "真面目で律儀な、モフワールドの家政婦ロボ。",

        description:
            "家事をこなす真面目で律儀なロボット。コーヒー焙煎が好きで、ゴキブリが苦手。",
    },

    // 夢乃崎 陽向
    {
        id: "hina",
        name: "夢乃崎 陽向",
        familyRuby: "ゆめのさき",
        givenRuby: "ひなた",
        image: "/images/characters/hina.png",
        className: "hina",

        birthday: "2022年9月2日",
        personality: "元気いっぱい",
        likes: "お母さんの作ってくれたハンバーグ",
        dislikes: "お化け",
        specialty: "外遊び",
        introduction: "みんないっしょにあーそぼっ！！",

        shortDescription:
            "遊ぶことが大好きな、元気いっぱいの女の子。",

        description:
            "夢乃崎家の元気いっぱいな女の子。みんなと外で遊ぶことが大好き。",
    },

    // 夢乃崎 さくら
    {
        id: "hina-mama",
        name: "夢乃崎 さくら",
        familyRuby: "ゆめのさき",
        givenRuby: "さくら",
        image: "/images/characters/hina-mama-sitting.png",
        className: "hina-mama",

        birthday: "2000年3月4日",
        personality: "おっとりだけどしっかり者",
        likes: "カフェオレ",
        dislikes: "数学",
        specialty: "手遊び・ピアノ",
        introduction: "今日もカフェオレおいしーい！",

        shortDescription:
            "おっとりしているけれど、しっかり者の保育士。",

        description:
            "夢乃崎家のお母さん。保育士として働いていて、手遊びやピアノが得意。",
    },

    // 夢乃崎 悠
    {
        id: "hina-papa",
        name: "夢乃崎 悠",
        familyRuby: "ゆめのさき",

        givenRuby: "ゆう",
        image: "/images/characters/hina-papa-sitting.png",
        className: "hina-papa",

        birthday: "2000年8月8日",
        personality: "温和で芯をしっかり持つ",
        likes: "バスケ",
        dislikes: "芯が通っていないこと",
        specialty: "3ポイントシュート",
        introduction: "みんなよろしくなっ！",

        shortDescription:
            "温和だけど、自分の芯をしっかり持つバスケットプレイヤー。",

        description:
            "夢乃崎家のお父さん。バスケットボールが得意で、3ポイントシュートが特技。",
    },
];

/* ========================================
   Character Search
======================================== */

export function getCharacter(id: string): Character | undefined {
    return characters.find((character) => character.id === id);
}