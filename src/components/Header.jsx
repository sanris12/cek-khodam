import penyihir from "/penyihir.png";
import segitigi from "/segitiga.svg";
import useTextKetik from "../hooks/useTextKetik";

const Header = () => {
  const text =
    "Hai, aku adalah penyihir terhebat di dunia. Dengan memberitahukan namamu padaku, aku bisa melihat khodam yang ada di dalam dirimu...";
  const displayedText = useTextKetik(text, 30);
  return (
    <div className=" flex flex-col items-center  gap-2 px-10 pt-10">
      <div className="relative min-h-max  min-w-full rounded-md border bg-white p-2 text-zinc-800">
        {displayedText}
        <img
          src={segitigi}
          alt="segitiga"
          className="absolute -bottom-7 right-20 h-14 w-14"
        />
      </div>
      <img src={penyihir} alt="penyihir" className=" h-40 w-40" />
    </div>
  );
};

export default Header;
