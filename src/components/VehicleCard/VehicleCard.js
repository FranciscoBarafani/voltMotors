import React from "react";
//Components
import { Card } from "antd";
import { Parallax } from "rc-scroll-anim";
import Icon from "@ant-design/icons";
import { ReactComponent as VoltLogo } from "../../assets/volt-logo.svg";

import "./VehicleCard.scss";

export default function VehicleCard(props) {
  const { vehicle, scrollToVehicle } = props;

  const VoltIcon = () => (
    <Icon component={VoltLogo} style={{ fontSize: 100 }} />
  );

  return (
    <Parallax
      animation={{ x: 0, opacity: 1, playScale: [0.1, 0.6] }}
      style={{ transform: "translateX(-100px)", opacity: 0 }}
    >
      <div className="vehicle-card">
        <div
          className="vehicle-card-info"
          onClick={() => scrollToVehicle(vehicle.model)}
        >
          <Card
            hoverable
            bordered
            style={{ backgroundColor: "#313131", borderColor: "#313131" }}
            cover={<img src={vehicle.image} alt={vehicle.model} />}
          >
            <h1>VOLT {vehicle.model}</h1>
            <VoltIcon />
            <h3>{vehicle.description}</h3>
          </Card>
        </div>
      </div>
    </Parallax>
  );
}
