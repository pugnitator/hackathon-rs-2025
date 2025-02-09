import PropTypes from "prop-types";
import { Progress } from "antd";
import "./progress-bar-basic.scss";

export const ProgressBarBasic = ({ progress, title }) => {
  return (
    <section className="progress__wrapper">
      <span className="progress__label">{title}</span>
      <Progress
        percent={progress}
        percentPosition={{
          align: "end",
          type: "inner",
        }}
        size={[300, 20]}
        strokeColor="#6C63FF"
      />
    </section>
  );
};

ProgressBarBasic.propTypes = {
  progress: PropTypes.number,
  title: PropTypes.string,
};
