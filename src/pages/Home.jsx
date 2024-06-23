import { useState } from "react";
import Form from "../components/Form";
// import HasilKhodam from "../components/HasilKhodam";
import Header from "../components/Header";
import HasilKhodam from "../components/HasilKhodam";
import { useSelector } from "react-redux";

const Home = () => {
  const showResult = useSelector((state) => state.showResult);
  // const [showResulKhodam, setShowResultKhodam] = useState(false);
  // const [namex, setNamex] = useState("");

  // const handleButton = (name) => {
  //   setNamex(name);
  //   // setShowResultKhodam(!showResulKhodam);
  //   console.log(namex);
  // };
  return (
    <div>
      {/* {showResulKhodam && <HasilKhodam handleButton={handleButton} />} */}
      {showResult && <HasilKhodam />}

      <Header />
      <Form />
    </div>
  );
};

export default Home;
