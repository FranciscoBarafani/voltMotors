import React from "react";
//Components
import VehicleCard from "../VehicleCard";
import { List } from "antd";

import "./VehicleCards.scss";

export default function VehicleCards(props) {
  const { vehicles, scrollToVehicle } = props;

  return (
    <div className="vehicle-cards">
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={vehicles}
        renderItem={(vehicle) => (
          <List.Item>
            <VehicleCard vehicle={vehicle} scrollToVehicle={scrollToVehicle} />
          </List.Item>
        )}
      />
    </div>
  );
}
