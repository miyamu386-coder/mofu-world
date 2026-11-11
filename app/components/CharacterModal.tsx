"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { Character } from "../data/characters";

type Props = {
  character: Character;
  onClose: () => void;
};

export default function CharacterModal({
  character,
  onClose,
}: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="character-modal-overlay"
      onClick={onClose}
    >
      <div
        className="character-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${character.name}の紹介`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="character-modal-close"
          onClick={onClose}
          aria-label="閉じる"
        >
          ×
        </button>

        <img
          src={character.profileImage ?? character.image}
          alt={character.name}
          className="character-modal-image"
        />

        <h2>{character.name}</h2>

        <p>{character.shortDescription}</p>

        <Link
          href={`/characters/${character.id}`}
          className="character-detail-button"
        >
          詳しく見る →
        </Link>
      </div>
    </div>
  );
}