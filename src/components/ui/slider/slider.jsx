import { Carousel } from "antd";

export const Slider = ({ urlArr }) => {
  return !Array.isArray(urlArr) || urlArr.length === 0 ? null : (
    <Carousel autoplay arrows>
      {urlArr.map((url, i) => (
        <div key={i}>
          <img src={url} alt={`portfolio-item-${i}`}></img>
        </div>
      ))}
    </Carousel>
  );
};
