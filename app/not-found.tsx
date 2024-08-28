import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
    return (
        <div className="container">
            <div className="prose dark:prose-invert max-w-full">
                <h1>Halaman tidak ditemukan</h1>
                <p>
                    Kembali ke Halaman{" "}
                    <Link href={"/song-list"}>Daftar Lagu</Link>
                </p>
            </div>
        </div>
    );
}
