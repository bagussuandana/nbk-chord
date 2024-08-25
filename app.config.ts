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
    title: "Welcome to NBK Chord",
    description:
      "Apliaksi chord untuk Nyanyian Bala Keselamatan dipersembahkan untuk kemuliaan Tuhan Yesus Kristus",
    hero: {
      image: "/assets/marketing1.svg",
      imageAlt: "/assets/white-wave.svg",
    },
  },
};

export default appConfig;
