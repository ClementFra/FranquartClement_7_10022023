import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../components/sass/pages/houseDescriptions.scss";
import Collapse from "../../components/collapse/collapse";
import Loader from "../../components/loader/loader";
import Slide from "../../components/slide/slide";

const HouseDescription = () => {
  function useFetchDatas() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [state, setData] = useState({
      items: [],
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
            items: currentAccommodation,
            loading: false,
          });
        } catch (error) {
          console.log(error);
        }
      };
      fetchDatas();
    }, [id, navigate]);
    return [state.items, state.loading];
  }
  const [item, loading] = useFetchDatas();
  if (loading) {
    return <Loader />;
  }
  return (
    <>
    <Slide pictures={item.pictures}></Slide>
      <section>
        <article className="accommodation">
          <div className="info">
            <h1 className="info__title">{item.title}</h1>
            <p className="info__location">{item.location}</p>
            <ul className="info__tag">
              {item.tags.map((tag, index) => {
                return (
                  <li className="tag__items" key={index}>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="host">
            <p className="host__name">{item.host.name}</p>
            <img
              className="host__picture"
              src={item.host.picture}
              alt="photo de l'hôte"
            />
          </div>
        </article>
        <article>
          <Collapse title="Description" text={<li>{item.description}</li>} />
          <Collapse
            title="Equipements"
            text={item.equipments.map((equipments) => {
              return <li className="equipements">{equipments}</li>;
            })}
          />
        </article>
      </section>
    </>
  );
};
export default HouseDescription;
