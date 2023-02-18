import React from "react";
import { useState, useEffect } from "react";
import Banner from "../../components/banner/banner";
import BannerHomepage from "../../assets/images/header-banner-homepage.png";
import Card from "../../components/card/card";
import "../../components/sass/homepage.scss";

const Home = () => {
  function useFetchDatas() {
    const [state, setData] = useState({
      items: [],
    });

    useEffect(() => {
      const fetchDatas =  async () => {
        try {
          const config = await fetch("/locations.json");
          const response = await config.json();
          setData({
            items: response,
          });
        } catch(error) {
          console.log(error);
        }
      };
      fetchDatas();
    },[]);
    return [state.items];
  }
  const [items] = useFetchDatas();

  return (
    <>
      <Banner
        title="Chez vous, partout et ailleurs"
        srcImg={BannerHomepage}
        altTexte="falaise montagneuse avec une mer agitée "
      />
      <div className="homepage">
        {items.map((accommodation,index) => (
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
