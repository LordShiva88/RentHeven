import Navbar from "../Shared/Navbar";
import image from "../../assets/bannerHouse.png";
import imageBg from "../../assets/abstrack_backhround_blue__generated.jpg";
import TypeWriter from "../../Components/TypeWriter";
import logo from "../../assets/Logo_Text.png";
import Search from "../../Components/Search";
const Home = () => {
  return (
    <div>
      <div className="top-0">
        <Navbar />
      </div>
      <div
        className="md:min-h-screen h-[500px] bg-cover flex items-center"
        style={{
          backgroundImage: `url(${imageBg})`,
        }}
      >
        <div className="container mx-auto flex md:flex-row flex-col justify-between items-center">
          <div className="flex-1">
            <div>
              <img src={logo} alt="" className="w-20" />
              <p>Want to buy or rent Home ?</p>
            </div>
            <div className="">
              <TypeWriter />
            </div>
            <Search/>
          </div>
          <div className="md:flex hidden">
            <div className="rounded-lg shadow-sm border">
              <img src={image} alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
