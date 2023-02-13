import React from "react";
import { useState, useEffect } from "react";
import Banner from "../../components/banner/banner";
import BannerHomepage from "../../assets/images/header-banner-homepage.png";
import Card from "../../components/card/card";
import Loader from "../../components/loading/loading";
import "../../components/sass/homepage.scss";

const Home = () => {
  function useFetchDatas() {
    const [state, setData] = useState({
      items: [],
      loading: true,
    });

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          let config = await fetch("/location.json");
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
      <div className="homepage">
        {items.map((accos, index) => (
          <Card
            title={accos.title}
            cover={accos.cover}
            id={accos.id}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
export default Home;
