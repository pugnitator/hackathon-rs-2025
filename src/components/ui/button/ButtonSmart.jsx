import PropTypes from "prop-types";
import { Button } from "antd";
import "./Button.scss";

export const ButtonSmart = ({ color, text, clickFunc }) => {
  const handleClick = (clickFunc) => {
    clickFunc();
  };

  return (
    <Button
      className="btn-base"
      style={{ background: `${color}` }}
      onClick={() => handleClick(clickFunc)}
    >
      {text}
    </Button>
  );
};

ButtonSmart.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  clickFunc: PropTypes.func,
};
