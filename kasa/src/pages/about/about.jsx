import React from "react";
import { useState, useEffect } from "react";
import BannerAbout from "../../assets/images/header-a-propos.PNG";
import Collapse from "../../components/collapse/collapse";
import Banner from "../../components/banner/banner";
const About = () => {
  function useFetchDatas() {
    const [state, setData] = useState({
      items: [],
    });

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          const config = await fetch("/about.json");
          const response = await config.json();

          setData({
            items: response,
          });
        } catch {
          setData((state) => ({ ...state }));
        }
      };
      fetchDatas();
    }, []);
    return [state.items];
  }
  const [items] = useFetchDatas();
  return (
    <>
      <Banner
        srcImg={BannerAbout}
        alt="Montagne verdoyante avec des montages plus haute en fond"
      />
      <section className="about">
        {items.map((about, index) => {
          return (
            <Collapse
              title={about.title}
              text={<li>{about.text}</li>}
              key={index}
            />
          );
        })}
      </section>
    </>
  );
};
export default About;
