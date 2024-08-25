const appConfig: any = {
  author: "Gusti Bagus Suandana",
  logo: {
    image: "/logo.png",
    text: "NBK Chord",
    isHomeLink: true,
  },

  title: "NBK Chord",
  description: "Apliaksi chord untuk Nyanyian Bala Keselamatan",
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
      name: "Kebijakan Privasi",
      value: "/privacy-policy",
    },
    {
      name: "Syarat & Ketentuan",
      value: "/terms-and-conditions",
    },
  ],
  socials: {
    email: "visiarch@gmail.com",
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
};

export default appConfig;
