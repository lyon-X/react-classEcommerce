import { CiUser } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import ThirdHeader from "./ThirdHeader";
function SecondHeader() {
  return (
    <>
      <div className="sec_sec_nav">
        <div className="d">
          <div className="imgBx">
            <img src="images/images-removebg-preview (1).png" alt="" />
          </div>
          <p>Make shopping Easy</p>
        </div>

        <div className="form">
          <input type="search" placeholder="Search Product..." />
          <button className="btn_1">
            All Categories <FaChevronDown />
          </button>
          <button className="btn_2">Search</button>
        </div>

        <div className="third_div">
          <div className="fi">
            <CiUser size={50} />
            <div className="fi_2">
              <p>Welcome Back</p>
              <a href="#">Login/ Register</a>
            </div>
          </div>
          <div className="fii">
            <PiShoppingCartSimpleLight size={50} />
            <span className="crt_no">1</span>
            <div className="fi_2">
              <p className="my_cart">Your Cart</p>
              <span>
                <del>N</del>0.00
              </span>
            </div>
          </div>
        </div>
      </div>
      <ThirdHeader />
    </>
  );
}

export default SecondHeader;
