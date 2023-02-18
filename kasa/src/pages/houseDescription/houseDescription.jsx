import React, { useState, useEffect } from "react";
import "../../components/sass/houseDescriptions.scss";
import Collapse from "../../components/collapse/collapse";

const HouseDescription = () => {
  function useFetchDatas() {
    const [state, setData] = useState({
      items: [],
    });

    useEffect(() => {
      const fetchDatas = async () => {
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
    }, []);
    return [state.items];
  }
  const [items] = useFetchDatas();
  return (
    <>
      <section>
        <article className="accommodation">
          <div className="info">
            <h1 className="info__title">{items.title}</h1>
            <p className="info__location">{items.location}</p>
            <ul className="info__tag">
              {items.tags.map((tag, index) => {
                return (
                  <li className="tag__items" key={index}>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="host">
            <p className="host__name">{items.host.name}</p>
            <picture
              className="host__picture"
              src={items.host.picture}
              alt="photo de l'hôte"
            />
          </div>
        </article>
        <article>
          <Collapse title="Description" text={<li>{items.description}</li>} />
          <Collapse
            title="Equipements"
            text={items.equipements.map((equipements) => {
              return <li className="equipements">{equipements}</li>;
            })}
          />
        </article>
      </section>
    </>
  );
};
export default HouseDescription;
