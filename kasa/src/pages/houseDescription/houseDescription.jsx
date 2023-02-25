import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Styles from "../../assets/sass/pages/houseDescriptions.module.scss";
import Collapse from "../../components/collapse/collapse";
import Loader from "../../components/loader/loader";
import Slide from "../../components/slide/slideShow";
import starEmpty from "../../assets/images/starEmpty.svg";
import starFilled from "../../assets/images/starFilled.svg";

const HouseDescription = () => {
  const stars = [0, 1, 2, 3, 4];
  function useFetchDatas() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [state, setData] = useState({
      item: [],
      loading: true,
    });

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          const config = await fetch("/locations.json");
          const response = await config.json();
          const currentAccommodation = response.find(
            (accommodation) => accommodation.id === id
          );
          if (currentAccommodation === undefined) {
            navigate("404");
          }
          setData({
            item: currentAccommodation,
            loading: false,
          });
        } catch (error) {
          console.log(error);
        }
      };
      fetchDatas();
    }, [id, navigate]);
    return [state.item, state.loading];
  }
  const [item, loading] = useFetchDatas();
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Slide pictures={item.pictures} />
      <section className={Styles.container}>
        <div className={Styles["container-general"]}>
          <div className={Styles["container-infos"]}>
            <h1 className={Styles["container-infos__title"]}>{item.title}</h1>
            <p className={Styles["container-infos__accommodation"]}>
              {item.location}
            </p>
            <ul className={Styles["container-infos__tags"]}>
              {item.tags.map((tag, index) => {
                return (
                  <li
                    className={Styles["container-infos__tags__item"]}
                    key={index}
                  >
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={Styles["container-host-rate"]}>
            <div className={Styles["container-host-rate__host"]}>
              <p className={Styles["container-host-rate__host__name"]}>
                {item.host.name}
              </p>
              <img
                className={Styles["container-host-rate__host__picture"]}
                src={item.host.picture}
                alt=""
              />
            </div>
            <div className={Styles["container-host-rate__star"]}>
              {stars.map((rate) =>
                item.rating >= rate ? (
                  <img
                    key={rate.toString()}
                    className={Styles.star}
                    src={starFilled}
                    alt="Etoile remplie orange"
                  />
                ) : (
                  <img
                    key={rate.toString()}
                    className={Styles.star}
                    src={starEmpty}
                    alt="Etoile vide grise"
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className={Styles.drop}>
          <Collapse
            page="houseDescriptions"
            classList="flex_col_45"
            title="Description"
            text={<li>{item.description}</li>}
            style={{ borderRadius: `${10}px` }}
          />
          <Collapse
            page="houseDescriptions"
            classList="flex_col_45"
            title="Equipements"
            style={{ borderRadius: `${10}px` }}
            text={item.equipments.map((equipments, index) => {
              return (
                <li className={Styles.equipments} key={index}>
                  {equipments}
                </li>
              );
            })}
          />
        </div>
      </section>
    </>
  );
};
export default HouseDescription;
