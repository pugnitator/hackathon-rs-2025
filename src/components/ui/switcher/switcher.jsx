import { Switch } from "antd";
import { PieChartOutlined, BarChartOutlined } from "@ant-design/icons";

export const Switcher = () => {
  const handleSwitch = () => {};

  return (
    <Switch
      checkedChildren={<PieChartOutlined />}
      unCheckedChildren={<BarChartOutlined />}
      onChange={handleSwitch}
    />
  );
};
