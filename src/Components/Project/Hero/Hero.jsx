import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import hero_1 from "../../../images/smart8hd.jpg";
import "./Hero.css";
function Hero() {
  return (
    <div className="Hero">
      <FaChevronCircleLeft className="ic" />
      <FaChevronCircleRight className="icc" />
      <img src={hero_1} alt="" />
      <div className="witeUp">
        <h1>
          New SmartPhone <br />
          Compare Models Air
        </h1>
        <p>Awaken Your in-between moments</p>

        <a href="">Shop Now</a>
      </div>
      <div className="indicators">
        <div className="indicator"></div>
        <div className="indicator"></div>
        <div className="indicator"></div>
      </div>
    </div>
  );
}

export default Hero;
