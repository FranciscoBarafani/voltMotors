import React from "react";
//Components
import Icon from "@ant-design/icons";
import { ReactComponent as VoltLogo } from "../../assets/volt-logo.svg";

import "./SpecsCard.scss";

export default function SpecsCard(props) {
  const { vehicle } = props;

  const VoltIcon = () => <Icon component={VoltLogo} style={{ fontSize: 30 }} />;

  return (
    <div className="specs-card">
      <h1>{vehicle.description}</h1>
      <h2>
        {vehicle.caracs[0]} <VoltIcon />
      </h2>
      <h2>
        {vehicle.caracs[1]} <VoltIcon />
      </h2>
      <h2>
        {vehicle.caracs[2]} <VoltIcon />
      </h2>
    </div>
  );
}
