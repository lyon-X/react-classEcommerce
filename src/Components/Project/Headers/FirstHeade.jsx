import { MdEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import "./Headers.css";
import SecondHeader from "./SecondHeader";
function FirstHeade() {
  return (
    <>
      <div className="f_nav">
        <div className="first_nav">
          <small>Welcome to Arial House</small>
          <small>
            <MdEmail color="orange" />
            Email:Website@gmail.com
          </small>
          <small>
            {" "}
            <CiPhone /> mobile:+(234 )816 294 2636, +(234 )816 294 2636
          </small>
        </div>

        <div className="sec_nav">
          <button>
            Usd
            <FaChevronDown />
          </button>
          <button>
            English <FaChevronDown />
          </button>
        </div>
      </div>
      <SecondHeader />
    </>
  );
}

export default FirstHeade;
