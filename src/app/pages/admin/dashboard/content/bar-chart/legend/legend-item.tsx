import React from "react";
import { Typography } from "antd";
const { Text } = Typography;

interface P {
  value: string;
  color: string;
  title: string;
}

const LegendItem = ({ value, title, color }: P) => {
  return (
    <div className="flex-ver">
      <Text strong> {value} </Text>
      <div className="flex-hor ver-center mt5">
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "5px",
            backgroundColor: color,
            marginRight: "10px",
          }}
        ></div>
        <Text type="secondary" className="text-xs">
          {title}
        </Text>
      </div>
    </div>
  );
};

export default React.memo(LegendItem);
