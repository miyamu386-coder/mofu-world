"use client";

import { useRef, useState } from "react";
import CharacterModal from "./CharacterModal";
import { characters } from "../data/characters";
import type { Character } from "../data/characters";

export default function MofuWorldStage() {
  // BGM
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);

  // 選択されたキャラクター
  const [selectedCharacter, setSelectedCharacter] =
    useState<Character | null>(null);

  // BGMの再生・停止
  const toggleBgm = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch (error) {
      console.error("BGMの再生に失敗しました", error);
    }
  };

  return (
    <div className="mofu-world-stage">
      {/* ========================================
          BGM
      ======================================== */}
      <audio
        ref={audioRef}
        src="/audio/mofu-world-bgm.mp3"
        loop
        preload="auto"
        onPlay={() => setIsBgmPlaying(true)}
        onPause={() => setIsBgmPlaying(false)}
      />

      {/* ========================================
          お庭の背景
      ======================================== */}
     <picture>
  <source
    media="(max-width: 767px)"
    srcSet="/images/garden-mobile.png"
  />
  <img
    src="/images/garden.png"
    alt="モフワールドのお庭"
    className="mofu-world-background"
  />
</picture>

      {/* ========================================
          キャラクター5体
      ======================================== */}
      {characters.map((character) => (
        <button
          key={character.id}
          type="button"
          className={`world-character-button ${character.className}`}
          onClick={() => setSelectedCharacter(character)}
          aria-label={`${character.name}の紹介を見る`}
        >
          <img
            src={character.image}
            alt=""
            className="world-character-image"
          />
        </button>
      ))}

      {/* ========================================
          BGMボタン
      ======================================== */}
      <button
        type="button"
        className={`bgm-button ${isBgmPlaying ? "playing" : ""}`}
        onClick={toggleBgm}
        aria-label={isBgmPlaying ? "BGMを停止" : "BGMを再生"}
      >
        {isBgmPlaying ? "♫ ON" : "♪ OFF"}
      </button>

      {/* ========================================
          キャラクター簡易プロフィール
      ======================================== */}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </div>
  );
}