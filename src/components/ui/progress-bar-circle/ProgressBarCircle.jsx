import PropTypes from "prop-types";
import { Progress } from "antd";
import "../progress-bar-basic/progress-basic.scss";

export const ProgressBarCircle = ({ progress, title }) => {
  return (
    <section className="progress__wrapper">
      <span className="progress__label">{title}</span>
      <Progress
        type="circle"
        percent={progress}
        size={[300, 20]}
        strokeColor="#6C63FF"
      />
    </section>
  );
};

ProgressBarCircle.propTypes = {
  progress: PropTypes.number,
  title: PropTypes.string,
};
