import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useKhodam from "../hooks/useKhodam";

import { useDispatch } from "react-redux";
import { setName } from "../features/name/nameSlice";
import { setShowResult } from "../features/showResult/showResultSlice";
import { setKhodam } from "../features/khodam/khodamSlice";

const Form = () => {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState("");
  const [isDisable, setIsDisable] = useState(true);
  const hasilKhodam = useKhodam(formValue);

  const handleButton = () => {
    dispatch(setName(formValue));
    dispatch(setShowResult());
    dispatch(setKhodam(hasilKhodam));
  };

  useEffect(() => {
    if (formValue.length >= 2) {
      setIsDisable(false);
    } else setIsDisable(true);
  }, [formValue]);

  const handleNameChange = (e) => {
    setFormValue(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 6, duration: 0.3 }}
      className=" px-5 pt-5 "
    >
      <div className="flex flex-col gap-3 rounded-md border border-zinc-400 p-5  backdrop-blur-sm">
        <input
          value={formValue}
          onChange={handleNameChange}
          type="text"
          className="rounded-sm px-3 py-2 outline-none "
          placeholder="masukan namamu..."
        />
        <button
          onClick={handleButton}
          disabled={isDisable}
          className={`rounded-sm border border-zinc-500 bg-zinc-900 py-2  text-white  active:bg-zinc-700 active:text-zinc-300`}
        >
          cek khodam
        </button>
        {name}
      </div>
    </motion.div>
  );
};

export default Form;
