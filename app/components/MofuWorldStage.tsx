"use client";

import { useRef, useState } from "react";

export default function MofuWorldStage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);

  const toggleBgm = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isBgmPlaying) {
      audio.pause();
      setIsBgmPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsBgmPlaying(true);
    } catch (error) {
      console.error("BGMの再生に失敗しました", error);
    }
  };

  return (
    <div className="mofu-world-stage">
      <audio
        ref={audioRef}
        src="/audio/mofu-world-bgm.mp3"
        loop
        preload="auto"
      />

      <img
        src="/images/garden.png"
        alt="モフワールドのお庭"
        className="mofu-world-background"
      />

      <img
        src="/images/characters/mofu.png"
        alt="モフ"
        className="world-character mofu"
      />

      <img
        src="/images/characters/mecha-mofu.png"
        alt="メカモフ"
        className="world-character mecha-mofu"
      />

      <img
        src="/images/characters/hina.png"
        alt="ひなちゃん"
        className="world-character hina"
      />

      <img
        src="/images/characters/hina-mama.png"
        alt="ひなちゃんのお母さん"
        className="world-character hina-mama"
      />

      <img
        src="/images/characters/hina-papa.png"
        alt="ひなちゃんのお父さん"
        className="world-character hina-papa"
      />

      <button
        type="button"
        className={`bgm-button ${isBgmPlaying ? "playing" : ""}`}
        onClick={toggleBgm}
        aria-label={isBgmPlaying ? "BGMを停止" : "BGMを再生"}
      >
        {isBgmPlaying ? "♫ ON" : "♪ OFF"}
      </button>
    </div>
  );
}