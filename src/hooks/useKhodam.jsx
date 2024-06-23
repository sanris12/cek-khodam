import { useState, useEffect } from "react";

const useKhodam = (name) => {
  const [namaKhodam, setNamaKhodam] = useState([
    { id: 1, nama: "macan putih", arti: "Kekuatan dan keberanian" },
    { id: 2, nama: "garuda emas", arti: "Kemuliaan dan kebijaksanaan" },
    { id: 3, nama: "srigala pemalu", arti: "Keberanian tersembunyi" },
    { id: 4, nama: "naga kekuatan", arti: "Kekuatan luar biasa" },
    { id: 5, nama: "kuda besi", arti: "Ketekunan dan ketahanan" },
    { id: 6, nama: "singa perkasa", arti: "Keberanian dan kekuasaan" },
    { id: 7, nama: "ular naga", arti: "Kekuatan magis dan kebijaksanaan" },
    { id: 8, nama: "harimau petir", arti: "Kekuatan dan kecepatan" },
    { id: 9, nama: "elang sakti", arti: "Ketajaman dan penglihatan jauh" },
    { id: 10, nama: "banteng baja", arti: "Keteguhan dan kekuatan" },
    { id: 11, nama: "kerbau api", arti: "Semangat dan kekuatan" },
    { id: 12, nama: "burung garuda", arti: "Kemuliaan dan perlindungan" },
    { id: 13, nama: "kucing mistis", arti: "Kecerdikan dan misteri" },
    { id: 14, nama: "rusa cahaya", arti: "Kecepatan dan keanggunan" },
    { id: 15, nama: "gajah bijaksana", arti: "Kekuatan dan kebijaksanaan" },
    { id: 16, nama: "buaya emas", arti: "Kekuatan dan kemakmuran" },
    { id: 17, nama: "serigala hitam", arti: "Keberanian dan kekuatan" },
    { id: 18, nama: "kuda angin", arti: "Kecepatan dan kebebasan" },
    { id: 19, nama: "macan api", arti: "Kekuatan dan semangat" },
    { id: 20, nama: "kelinci emas", arti: "Keberuntungan dan kelincahan" },
    { id: 21, nama: "rajawali putih", arti: "Kemurnian dan keagungan" },
    { id: 22, nama: "badak perkasa", arti: "Kekuatan dan ketahanan" },
    { id: 23, nama: "tikus bijaksana", arti: "Kecerdikan dan kebijaksanaan" },
    {
      id: 24,
      nama: "burung hantu",
      arti: "Kebijaksanaan dan penglihatan malam",
    },
    { id: 25, nama: "rubah perak", arti: "Kecerdikan dan ketangkasan" },
    { id: 26, nama: "serigala api", arti: "Semangat dan keberanian" },
    { id: 27, nama: "kera sakti", arti: "Kecerdasan dan kekuatan" },
    { id: 28, nama: "monyet pintar", arti: "Kecerdasan dan kelincahan" },
    { id: 29, nama: "burung elang", arti: "Ketajaman dan kekuatan" },
    { id: 30, nama: "singa emas", arti: "Kemuliaan dan kekuasaan" },
    { id: 31, nama: "kerbau kuat", arti: "Kekuatan dan ketekunan" },
    { id: 32, nama: "naga angin", arti: "Kekuatan dan kebebasan" },
    { id: 33, nama: "kuda hitam", arti: "Misteri dan kekuatan" },
    { id: 34, nama: "ular emas", arti: "Kekuatan dan keberuntungan" },
    { id: 35, nama: "kambing bijak", arti: "Kebijaksanaan dan ketabahan" },
    { id: 36, nama: "harimau putih", arti: "Kekuatan dan keberanian" },
    { id: 37, nama: "kuda api", arti: "Semangat dan kecepatan" },
    { id: 38, nama: "burung phoenix", arti: "Kebangkitan dan keabadian" },
    { id: 39, nama: "macan hitam", arti: "Kekuatan dan ketangkasan" },
    { id: 40, nama: "kelinci perak", arti: "Kelincahan dan keberuntungan" },
    { id: 41, nama: "gajah emas", arti: "Kekuatan dan kemakmuran" },
    { id: 42, nama: "kera cerdik", arti: "Kecerdikan dan kelincahan" },
    { id: 43, nama: "elang putih", arti: "Kemurnian dan ketajaman" },
    { id: 44, nama: "kambing emas", arti: "Kemakmuran dan kebijaksanaan" },
    { id: 45, nama: "burung rajawali", arti: "Keagungan dan ketajaman" },
    { id: 46, nama: "serigala putih", arti: "Keberanian dan kemurnian" },
    { id: 47, nama: "rusa emas", arti: "Keanggunan dan kemakmuran" },
    { id: 48, nama: "badak putih", arti: "Keteguhan dan kemurnian" },
    { id: 49, nama: "buaya hitam", arti: "Kekuatan dan misteri" },
  ]);

  const [hasilKhodam, setHasilKhodam] = useState({});

  //   function menggubah nama menjadi angka
  const nameToNumber = (name) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const nameArray = name.toLowerCase().split("");
    let sum = 0;
    let multiplier = 1;

    for (let i = 0; i < nameArray.length; i++) {
      const charIndex = alphabet.indexOf(nameArray[i]);
      sum += charIndex * multiplier;
      multiplier++;
    }

    const uniqueNumber = sum % 50;
    return uniqueNumber === 0 ? 50 : uniqueNumber;
  };

  //   mencari nama khodam melalu anggka yang dihasilkan
  const yourKhodam = (nama) => {
    let number = nameToNumber(nama);
    const khodam = namaKhodam.find((items) => items.id === number);
    setHasilKhodam(khodam);
  };

  useEffect(() => {
    yourKhodam(name);
  }, [name]);

  return { hasilKhodam };
};

export default useKhodam;
