import { FaChevronDown } from "react-icons/fa";

function ThirdHeader() {
  return (
    <div className="ThirdHeader">
      <nav>
        <ul>
          <li>Home</li>
          <li>
            Features <FaChevronDown />
          </li>
          <li>
            Collection <FaChevronDown />
          </li>
          <li>
            Shop <FaChevronDown />
          </li>
          <li>About Us</li>
          <li>Contact us</li>
        </ul>

        <div className="sec">
          <h4>Special Offers</h4>
          <h4>Purchase Theme</h4>
        </div>
      </nav>
    </div>
  );
}

export default ThirdHeader;
