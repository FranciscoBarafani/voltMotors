import React, { useState, useEffect } from "react";
//Components
import Loading from "../../components/Loading";
import { Button, Typography } from "antd";
import { Parallax } from "rc-scroll-anim";
import SpecsCard from "../../components/SpecsCard";
import Title from "../../components/Title";
import VehicleCards from "../../components/VehicleCards";
//Assets
import VoltLogo from "../../assets/volt-logo.png";

import "./home.scss";

export default function Home() {
  const [vehicles, setVehicles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVehicles();
  }, []);

  //React Scroll Set Up
  const Scroll = require("react-scroll");
  var Element = Scroll.Element;
  var scroller = Scroll.scroller;

  //Scrolls to the desired vehicle
  const scrollToVehicle = (reference) => {
    scroller.scrollTo(reference, {
      duration: 1200,
      delay: 100,
      smooth: true,
    });
  };

  //Gets vehicles from the API
  const getVehicles = async () => {
    const query = await fetch("https://voltmotors.com.ar/api/exam/");
    let vehicles = await query.json();
    setVehicles(vehicles.cars);
    //Timeout is set to delay load and show loading icon.
    setTimeout(function () {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="home">
      <div className="home-main-page">
        <img
          src={VoltLogo}
          alt="Volt Motors Logo"
          width={400}
          style={{ marginTop: 20, marginBottom: 30 }}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <Button
            size="large"
            type="primary"
            shape="round"
            onClick={() => scrollToVehicle("vehicle-cards")}
          >
            Conocé Nuestros Modelos
          </Button>
        )}
      </div>
      {!isLoading && vehicles ? (
        <>
          <Element name="vehicle-cards">
            <div className="home-vehicle-cards" id="models">
              <Parallax
                animation={{ x: 0, opacity: 1, playScale: [0.1, 0.6] }}
                style={{ transform: "translateX(-100px)", opacity: 0 }}
              >
                <Typography.Title>Nuestros Modelos</Typography.Title>
              </Parallax>
              <VehicleCards
                vehicles={vehicles}
                scrollToVehicle={scrollToVehicle}
              />
            </div>
          </Element>
          <Element name={vehicles[0].model}>
            <div
              className="home-vehicle-1"
              style={{ backgroundImage: `url("${vehicles[0].image}")` }}
              id="z1"
            >
              <div className="home-vehicle-1-model">
                <Title model={vehicles[0].model} />
              </div>
              <div className="home-vehicle-1-specs">
                <Parallax
                  animation={{ x: 0, opacity: 1, playScale: [0.1, 0.6] }}
                  style={{ transform: "translateX(100px)", opacity: 0 }}
                >
                  <SpecsCard vehicle={vehicles[0]} />
                </Parallax>
              </div>
            </div>
          </Element>
          <Element name={vehicles[1].model}>
            <div
              className="home-vehicle-2"
              style={{ backgroundImage: `url("${vehicles[1].image}")` }}
              id="w1"
            >
              <div className="home-vehicle-1-model">
                <Title model={vehicles[1].model} />
              </div>

              <div className="home-vehicle-1-specs">
                <Parallax
                  animation={{ x: 0, opacity: 1, playScale: [0.1, 0.6] }}
                  style={{ transform: "translateX(100px)", opacity: 0 }}
                >
                  <SpecsCard vehicle={vehicles[1]} />{" "}
                </Parallax>
              </div>
            </div>
          </Element>
          <Element name={vehicles[2].model}>
            <div
              className="home-vehicle-3"
              style={{ backgroundImage: `url("${vehicles[2].image}")` }}
              id="e1"
            >
              <div className="home-vehicle-1-model">
                {" "}
                <Title model={vehicles[2].model} />
              </div>
              <div className="home-vehicle-1-specs">
                {" "}
                <Parallax
                  animation={{ x: 0, opacity: 1, playScale: [0.1, 0.6] }}
                  style={{ transform: "translateX(100px)", opacity: 0 }}
                >
                  <SpecsCard vehicle={vehicles[2]} />{" "}
                </Parallax>
              </div>
            </div>
          </Element>
          <div className="home-about">
            <h3>Sitio Web Desarrollado por Francisco Barafani</h3>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
