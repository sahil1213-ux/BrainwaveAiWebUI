import PropTypes from "prop-types";
import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={` flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      }`}
    >
      <img className=" w-5 h5 mr-4 " src={loading} alt="loading" />
      Ai is generating code
    </div>
  );
};

Generating.propTypes = {
  className: PropTypes.string,
};

export default Generating;
