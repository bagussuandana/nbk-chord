import appConfig from "@/app.config";
import MusicYoga from "@/components/svg/music-yoga";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: appConfig.home.title,
    description: appConfig.home.description,
};
export default function Home() {
    const { home } = appConfig;
    return (
        <>
            <section className="relative">
                <section className="relative">
                    <div className="container">
                        <div className="grid lg:grid-cols-7 grid-cols-1 gap-16 items-center">
                            <div
                                className="lg:col-span-4"
                                data-aos="fade-right"
                            >
                                <div className="relative 2xl:-ml-64 lg:-ml-28 2xl:min-w-[130%] lg:w-[113%] w-full">
                                    <MusicYoga />
                                </div>
                            </div>
                            <div className="lg:col-span-3" data-aos="fade-left">
                                <div className="text-center sm:text-start">
                                    <h1 className="text-3xl/snug sm:text-4xl/snug xl:text-5xl/snug font-semibold mb-7">
                                        Selamat Datang di{" "}
                                        <span className="relative after:bg-red-500/50 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">
                                            NBK
                                        </span>{" "}
                                        Chord
                                    </h1>
                                    <p className="text-base/relaxed text-gray-500">
                                        Temukan lagu-lagu dari buku lagu Bala
                                        Keselamatan dengan mudah, dan nikmati
                                        fitur transpose akor untuk memainkan
                                        lagu sesuai dengan nada favorit Anda.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="pb-20">
                <div className="container">
                    <div className="text-center">
                        <h2 className="md:text-3xl text-xl font-semibold my-5">
                            Fitur Utama:
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-16">
                        <div
                            className="text-center relative"
                            data-aos="fade-up"
                            data-aos-duration={300}
                        >
                            <h3 className="text-xl">Daftar Lagu Lengkap</h3>
                            <p className="mt-3">
                                Akses koleksi lagu-lagu rohani dari buku lagu
                                Bala Keselamatan.
                            </p>

                            <div className="absolute h-3 w-3 rounded-full bg-red-600 bottom-8" />
                            <div className="absolute h-3 w-3 rounded-full bg-yellow-300 top-32 end-12" />
                        </div>
                        <div
                            className="text-center relative"
                            data-aos="fade-up"
                            data-aos-duration={300}
                        >
                            <h3 className="text-xl">Transpose Akor</h3>
                            <p className="mt-3">
                                Ubah nada lagu agar sesuai dengan rentang vokal
                                atau instrumen Anda.
                            </p>

                            <div className="absolute h-3 w-3 rounded-full bg-red-400 bottom-8" />
                            <div className="absolute h-3 w-3 rounded-full bg-blue-400 top-24 end-16" />
                        </div>
                        <div
                            className="text-center relative"
                            data-aos="fade-up"
                            data-aos-duration={300}
                        >
                            <h3 className="text-xl">Pencarian Cepat</h3>
                            <p className="mt-3">
                                Temukan lagu dengan mudah menggunakan fitur
                                pencarian kami.
                            </p>

                            <div className="absolute h-3 w-3 rounded-full bg-yellow-400 bottom-8 end-0" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
