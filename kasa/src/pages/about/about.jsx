import React from "react";
import { useState, useEffect } from "react";

const About = () => {
  function useFetchDatas() {
    const [state, setData] = useState({
      items: "",
      Error: false,
      loading: true,
    });

    useEffect(() => {
      const fetchDatas = async () => {
        try {
          let config = await fetch("../about.json");
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
};
