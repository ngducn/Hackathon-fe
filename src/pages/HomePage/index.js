import React, { useState, useEffect } from "react";

import Map from "../../components/Map";

const url = process.env.REACT_APP_BACKEND_API;

function HomePage() {
  const [petitions, setPetitions] = useState([]);

  useEffect(() => {
    const fetchPetitions = async () => {
      const resp = await fetch(url + "/petitions");
      const json = await resp.json();
      setPetitions(json.data.petitions);
    };
    fetchPetitions();
  }, []);
  return (
    <div>
      <div className="Hi"></div>
      <Map petitions={petitions} />
    </div>
  );
}

export default HomePage;
