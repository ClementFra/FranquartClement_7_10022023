import React from "react";
import { useState, useEffect } from "react";
import Loader from "../../components/loading/loading";
import ImageAbout  from "../../assets/images/header-a-propos.png";

const About = () => {
  function useFetchDatas() {
    const [state, setData] = useState({
      items: [],
      Error: false,
      loading: true,
    });

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          let config = await fetch("/about.json");
          let response = await config.json();

          setData({
            items: response,
            loading: false,
          });
        } catch {
          setData((state) => ({ ...state, loading: false }));
        }
      };
      fetchDatas();
    });
    return[state.items,state.loading];
  }
  const [items, loading] = useFetchDatas();

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Banner srcImg={ImageAbout} altTexte="Photo de paysage de montagnes" />
      <section className={styles.dropdowns}>
        {items.map((about, index) => {
          return (
            <Accordion
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