import { useEffect, useState } from "react";

const useTextKetik = (text, duration = 30) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, duration); // Durasi tiap huruf (ms)

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [index, displayedText, text, duration]);

  return displayedText;
};

export default useTextKetik;
