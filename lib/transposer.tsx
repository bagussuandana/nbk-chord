"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Key {
  name: string;
  value: number;
  type: "N" | "S" | "F";
}

const keys: Key[] = [
  { name: "Ab", value: 0, type: "F" },
  { name: "A", value: 1, type: "N" },
  { name: "A#", value: 2, type: "S" },
  { name: "Bb", value: 2, type: "F" },
  { name: "B", value: 3, type: "N" },
  { name: "C", value: 4, type: "N" },
  { name: "C#", value: 5, type: "S" },
  { name: "Db", value: 5, type: "F" },
  { name: "D", value: 6, type: "N" },
  { name: "D#", value: 7, type: "S" },
  { name: "Eb", value: 7, type: "F" },
  { name: "E", value: 8, type: "N" },
  { name: "F", value: 9, type: "N" },
  { name: "F#", value: 10, type: "S" },
  { name: "Gb", value: 10, type: "F" },
  { name: "G", value: 11, type: "N" },
  { name: "G#", value: 0, type: "S" },
];

const getKeyByName = (name: string): Key | undefined => {
  if (name.endsWith("m")) {
    name = name.slice(0, -1);
  }
  return keys.find((key) => key.name === name);
};

const getChordRoot = (input: string): string => {
  return input.length > 1 && (input[1] === "b" || input[1] === "#")
    ? input.slice(0, 2)
    : input.slice(0, 1);
};

const getNewKey = (
  oldKey: string,
  delta: number,
  targetKey: Key
): Key | undefined => {
  let keyValue = (getKeyByName(oldKey)?.value ?? 0) + delta;
  if (keyValue > 11) keyValue -= 12;
  else if (keyValue < 0) keyValue += 12;

  if ([0, 2, 5, 7, 10].includes(keyValue)) {
    return keys.find(
      (key) =>
        key.value === keyValue &&
        ((["A", "A#", "B", "C", "C#", "D", "D#", "E", "F#", "G", "G#"].includes(
          targetKey.name
        ) &&
          key.type === "S") ||
          key.type === "F")
    );
  }
  return keys.find((key) => key.value === keyValue);
};

const getDelta = (oldIndex: number, newIndex: number): number => {
  return oldIndex > newIndex ? -(oldIndex - newIndex) : newIndex - oldIndex;
};

const wrapChords = (input: string, chordReplaceRegex: RegExp): string => {
  return input.replace(chordReplaceRegex, (str, p1, p2, p3) => {
    if (p1) return `<span class='c'>${p1}</span>`;
    else if (p3) return `<span class='on'>/</span>`;
    return str;
  });
};

const isChordLine = (input: string, chordRegex: RegExp): boolean => {
  const tokens = input.replace(/\s+/g, " ").split(" ");
  return tokens.every(
    (token) => !token.trim().length || chordRegex.test(token)
  );
};

interface TransposerProps {
  initialKey: string;
  songText: string;
  chordRegex?: RegExp;
  chordReplaceRegex?: RegExp;
}

const Transposer: React.FC<TransposerProps> = ({
  initialKey,
  songText,
  chordRegex = /^[A-G][b\#]?(6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7b5|m7|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus2|sus4|sus|2|5|6|7|9|11|13)*(\/[A-G][b\#]*)*$/,
  chordReplaceRegex = /([A-G][b\#]?(6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7b5|m7|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus2|sus4|sus|2|5|6|7|9|11|13)*)|([/])/g,
}) => {
  const [currentKey, setCurrentKey] = useState<Key | undefined>(
    getKeyByName(initialKey)
  );
  const [transposedText, setTransposedText] = useState<string>("");

  useEffect(() => {
    const lines = songText.split(/\r\n|\n/g);
    const output = lines.map((line) =>
      isChordLine(line, chordRegex)
        ? `<span>${wrapChords(line, chordReplaceRegex)}</span>`
        : `<span>${line}</span>`
    );
    setTransposedText(output.join("\n"));
  }, [songText]);

  const transposeSong = (newKeyName: string) => {
    const newKey = getKeyByName(newKeyName);
    if (!newKey || !currentKey) return;

    const delta = getDelta(currentKey.value, newKey.value);

    const newTransposedText = transposedText.replace(
      /<span class='c'>(.*?)<\/span>/g,
      (_, chord) => {
        const oldChordRoot = getChordRoot(chord);
        const newChordRoot = getNewKey(oldChordRoot, delta, newKey);
        return `<span class='c'>${
          newChordRoot?.name + chord.slice(oldChordRoot.length)
        }</span>`;
      }
    );

    setCurrentKey(newKey);
    setTransposedText(newTransposedText);
  };

  return (
    <div>
      <div className="key-selector">
        {keys.map((key) => (
          <a
            key={key.name}
            href="#"
            className={
              currentKey?.name === key.name ? "active-chord" : "normal-chord"
            }
            onClick={(e) => {
              e.preventDefault();
              transposeSong(key.name);
            }}
          >
            <Button
              size={"xs"}
              variant={currentKey?.name === key.name ? "default" : "outline"}
            >
              {key.name}
            </Button>
          </a>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: transposedText }} />
    </div>
  );
};

export default Transposer;
