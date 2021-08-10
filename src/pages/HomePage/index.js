import React, { useState, useEffect } from "react";

import Map from "../../components/Map";

function HomePage(props) {
  const [petitions, setPetitions] = useState([])

  useEffect( () => {
    const fetchPetitions = async () => {
      const resp = await fetch('http://localhost:5000/api/petitions')
      const json = await resp.json()
      setPetitions(json)
    }
    fetchPetitions()
    
  }, [])
  return (
    <div>
      <div className="Hi"></div>
      <Map petitions={petitions} />
    </div>
  );
}

export default HomePage;
