"use client";

type NumberChordWrapperProps = {
    songText?: string;
};

export default function NumberChordWrapper({
    songText,
}: NumberChordWrapperProps) {
    return (
        <div className="prose-red">
            <pre>{songText}</pre>
        </div>
    );
}
