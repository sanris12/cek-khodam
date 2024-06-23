import { useEffect, useState } from "react";
import useTextKetik from "../hooks/useTextKetik";
import penyihir2 from "/penyihir2.png";
import bomb from "/bomb.gif";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setShowResult } from "../features/showResult/showResultSlice";

const HasilKhodam = () => {
  const name = useSelector((state) => state.name);
  const khodam = useSelector((state) => state.khodam);

  const [hasil, setHasil] = useState("");
  const [showButton, setShowButton] = useState(false);
  const text = `Baiklah  ${name}  aku akan memulai membaca khodam di dalam dirimu tunggu sebentar...`;
  const displayText = useTextKetik(text);
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(setShowResult());
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setHasil("loading");
    }, 5000);

    const timer2 = setTimeout(() => {
      setHasil("hasil");
    }, 6000);

    const timer3 = setTimeout(() => {
      setShowButton(true);
    }, 7000);

    // Bersihin timeout pas component di-unmount biar ga ada memory leak
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="fixed inset-0 top-0 z-50 h-svh bg-black bg-opacity-70 backdrop-blur-sm md:container md:max-w-[400px]">
      <div className="p-5">
        <img src={penyihir2} alt="penyihir" className="m-auto w-60" />
        <div className=" rounded-md bg-white bg-opacity-70 p-3 py-2 backdrop-blur-sm">
          <p>{displayText}</p>

          {hasil === "loading" && (
            <img src={bomb} alt="" srcset="" className="m-auto" />
          )}
          {hasil === "hasil" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="py-5 text-center"
            >
              <p className="text-zinc-500">khodam mu: </p>
              <h1 className="text-3xl font-bold">{khodam.hasilKhodam.nama}</h1>
              <p className="text-lg ">{khodam.hasilKhodam.arti}</p>
            </motion.div>
          )}
        </div>
        {showButton && (
          <motion.button
            onClick={handleButton}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="m-auto mt-5 w-full rounded-sm bg-blue-800 py-2 text-center text-white"
          >
            lihat khodam teman
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default HasilKhodam;
