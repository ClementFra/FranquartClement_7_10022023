import React from "react";
import { useState, useEffect } from "react";
import BannerAbout from "../../assets/images/header-a-propos.PNG";
import Collapse from "../../components/collapse/collapse";
import Banner from "../../components/banner/banner";
import Loader from "../../components/loader/loader";
import Styles from "../../components/sass/pages/about.module.scss";
const About = () => {
  function useFetchDatas() {
    const [state, setData] = useState({
      items: [],
      loading: true,
    });

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          const config = await fetch("/about.json");
          const response = await config.json();

          setData({
            items: response,
            loading: false,
          });
        } catch (error) {
          console.log(error);
        }
      };
      fetchDatas();
    }, []);
    return [state.items, state.loading];
  }
  const [items, loading] = useFetchDatas();
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Banner
        srcImg={BannerAbout}
        alt="Montagne verdoyante avec des montages plus haute en fond"
      />
      <section className={Styles.drop}>
        {items.map((about, index) => {
          return (
            <Collapse
              page="about"
              classList="flex_col_80"
              title={about.title}
              text={<li>{about.text}</li>}
              key={index}
              style={{ borderRadius: `${5}px` }}
            />
          );
        })}
      </section>
    </>
  );
};
export default About;
