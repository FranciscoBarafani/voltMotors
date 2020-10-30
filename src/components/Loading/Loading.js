import React from "react";
//Components
import { Spin, Space } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as VoltLogo } from "../../assets/volt-logo.svg";

export default function Loading() {
  const VoltIcon = () => (
    <Icon spin component={VoltLogo} style={{ fontSize: 50 }} />
  );
  return (
    <div className="loading">
      <Space size="large">
        <Spin indicator={<VoltIcon />} />
      </Space>
    </div>
  );
}
