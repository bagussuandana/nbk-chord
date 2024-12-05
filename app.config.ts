import keywords from "./app-config/keywords";
// songs
import song_1_50 from "./songs/song-1-50";
import song_50_100 from "./songs/song-51-100";
import song_100_150 from "./songs/song-101-150";
import song_150_200 from "./songs/song-151-200";
import song_200_250 from "./songs/song-201-250";
import song_250_300 from "./songs/song-251-300";
import song_300_350 from "./songs/song-301-350";
import song_350_400 from "./songs/song-351-400";
import song_400_422 from "./songs/song-401-442";
// worships
import worship_1_50 from "./worships/worship-1-50";

const appConfig: any = {
    author: "Gusti Bagus Suandana",
    logo: {
        image: "/logo.png",
        text: "NBK Chord",
        isHomeLink: true,
    },

    title: "NBK Chord",
    description: "Apliaksi chord untuk Nyanyian Bala Keselamatan",
    url: "https://nbk-chord.vercel.app/",
    ...keywords,
    theme: "light",
    githubRepo: "https://github.com/bagussuandana/nbk-chord",
    routes: [
        {
            name: "Beranda",
            value: "/",
        },
        {
            name: "Daftar Lagu",
            value: "/song-list",
        },
        {
            name: "Worships",
            value: "/worship-list",
        },
        {
            name: "Kebijakan Privasi",
            value: "/privacy-policy",
        },
        {
            name: "Syarat & Ketentuan",
            value: "/terms-and-conditions",
        },
    ],
    socials: {
        email: "musik.k2dps@gmail.com",
        github: "https://github.com/bagussuandana/nbk-chord",
        twitter: "",
        linkedin: "",
        facebook: "",
        instagram: "",
        youtube: "",
    },
    home: {
        title: "Selamat Datang di NBK Chord",
        description:
            "Apliaksi chord untuk Nyanyian Bala Keselamatan dipersembahkan untuk kemuliaan Tuhan Yesus Kristus",
        hero: {
            image: "/assets/marketing1.svg",
            imageAlt: "/assets/white-wave.svg",
        },
    },
    song_list: {
        title: "Daftar Lagu",
        description:
            "Daftar lagu lagu dari buku lagu Bala Keselamatan dengan mudah, dan nikmati fitur transpose akor untuk memainkan lagu sesuai dengan nada favorit Anda.",
    },
    worship_list: {
        title: "Daftar Pujian",
        description:
            "Daftar pujian umum dari banyak sumber dilengkapi akor dan lirik.",
    },
    privacy_policy: {
        title: "Kebijakan Privasi",
        description:
            "Kebijakan privasi ini menjami untuk mengumpulkan, menyimpan, dan memproses data pengguna dalam bentuk apapun. Aplikasi ini sepenuhnya berbasis klien, sehingga data Anda tetap aman dan privat.",
    },
    terms_and_conditions: {
        title: "Syarat dan Ketentuan",
        description:
            "Selamat datang di NBK Chord! Dengan menggunakan aplikasi ini, Anda setuju dengan syarat dan ketentuan berikut:",
    },

    tempos: [
        {
            id: "adagietto",
            name: "adagietto",
            description: "agak lambat, sedikit lebih cepat dari adagio",
            bpm_range: "72-76",
        },
        {
            id: "adagio",
            name: "adagio",
            description: "lambat",
            bpm_range: "66-76",
        },
        {
            id: "allegretto",
            name: "allegretto",
            description: "cukup cepat, sedikit lebih lambat dari allegro",
            bpm_range: "112-120",
        },
        {
            id: "allegrissimo",
            name: "allegrissimo",
            description: "sangat cepat, lebih cepat dari allegro",
            bpm_range: "172-176",
        },
        {
            id: "allegro",
            name: "allegro",
            description: "cepat",
            bpm_range: "120-168",
        },
        {
            id: "allegro-moderato",
            name: "allegro moderato",
            description: "cukup cepat, sedikit lebih lambat dari allegro",
            bpm_range: "116-120",
        },
        {
            id: "andante",
            name: "andante",
            description: "kecepatan berjalan",
            bpm_range: "76-108",
        },
        {
            id: "andante-moderato",
            name: "andante moderato",
            description: "kecepatan berjalan moderat, lebih cepat dari andante",
            bpm_range: "92-112",
        },
        {
            id: "andantino",
            name: "andantino",
            description: "tempo moderat, sedikit lebih cepat dari andante",
            bpm_range: "80-108",
        },
        {
            id: "grave",
            name: "grave",
            description: "sangat lambat",
            bpm_range: "25-45",
        },
        {
            id: "larghetto",
            name: "larghetto",
            description:
                "agak lambat dan lebar, sedikit lebih cepat dari largo",
            bpm_range: "60-66",
        },
        {
            id: "larghissimo",
            name: "larghissimo",
            description: "sangat lambat, lebih lambat dari largo",
            bpm_range: "0-25",
        },
        {
            id: "largo",
            name: "largo",
            description: "sangat lambat dan lebar",
            bpm_range: "40-60",
        },
        {
            id: "lento",
            name: "lento",
            description: "lambat",
            bpm_range: "45-60",
        },
        {
            id: "moderato",
            name: "moderato",
            description: "moderat",
            bpm_range: "108-120",
        },
        {
            id: "prestissimo",
            name: "prestissimo",
            description: "sangat cepat, lebih cepat dari presto",
            bpm_range: "200-999",
        },
        {
            id: "presto",
            name: "presto",
            description: "sangat cepat",
            bpm_range: "168-200",
        },
        {
            id: "vivace",
            name: "vivace",
            description: "cepat dan ringan",
            bpm_range: "140-176",
        },
        {
            id: "vivacissimo",
            name: "vivacissimo",
            description: "sangat cepat dan ringan, lebih cepat dari vivace",
            bpm_range: "172-176",
        },
    ],

    songs: [
        ...song_1_50,
        ...song_50_100,
        ...song_100_150,
        ...song_150_200,
        ...song_200_250,
        ...song_250_300,
        ...song_300_350,
        ...song_350_400,
        ...song_400_422,
    ],
    worships: [...worship_1_50],
};

export default appConfig;
