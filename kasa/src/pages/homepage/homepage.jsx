import React from "react";
import { useState, useEffect } from "react";
import Banner from "../../components/banner/banner";
import Loader from "../../components/loader/loader";
import BannerHomepage from "../../assets/images/header-banner-homepage.png";
import Card from "../../components/card/card";
import Styles from "./homepage.module.scss";

const Home = () => {
  function useFetchDatas() {
    const [state, setData] = useState({
      items: [],
      loading: true,
    });

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          const config = await fetch("/locations.json");
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
        title="Chez vous, partout et ailleurs"
        srcImg={BannerHomepage}
        altTexte="falaise montagneuse avec une mer agitée "
      />
      <div className={Styles.homepage}>
        {items.map((accommodation, index) => (
          <Card
            title={accommodation.title}
            cover={accommodation.cover}
            id={accommodation.id}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
export default Home;
