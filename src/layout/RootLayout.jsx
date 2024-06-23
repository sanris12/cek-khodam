import { Outlet } from "react-router-dom";
import background from "/background.jpg";

const RootLayout = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
  };

  return (
    <div
      style={backgroundStyle}
      className="container h-svh max-w-[400px] bg-blue-400"
    >
      <Outlet />
    </div>
  );
};

export default RootLayout;
