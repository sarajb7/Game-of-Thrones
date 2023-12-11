import { useEffect, useState } from "react";
import MenuInicio from "../../components/MenuInicio/MenuInicio";
import axios from "axios";
import MenuIdiomas from "../../components/MenuIdiomas/MenuIdiomas";
import "./CronologyPage.css";
import CronologiaImpar from "../../components/Cronologia/CronologiaImpar";
import CronologiaPar from "../../components/Cronologia/CronologiaPar";

export default function CronologyPage() {
  const [characters, setCharacters] = useState([]);
  const [isAscendingOrder, setIsAscendingOrder] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await axios("http://localhost:3000/Characters");

      const sortedData = isAscendingOrder ? data.sort((a, b) => a.age - b.age) : data.sort((a, b) => b.age - a.age);
      setCharacters(sortedData);
    };
    getCharacters();
  }, [isAscendingOrder]);

  

  const toggleOrder = () => {
    setIsAscendingOrder((prevOrder) => !prevOrder);
  };

  return (
    <body className="Cronologybody">
      <nav class="Cronologynavbar">
        <MenuIdiomas />
      </nav>
      <div className="flechydiv">
        <div className="Ellipse" onClick={toggleOrder}>
          {isAscendingOrder ? "0" : "400"}
        </div>
        <img
          className="flechy"
          src="https://res.cloudinary.com/dvmkyxyc0/image/upload/v1697994269/Vector_rhzrgt.png"
          alt="flecha"
        ></img>
      </div>
      <div className="CronologyMain">
        <div className="CronologyLeft">
          <div className="empty"></div>
          <CronologiaImpar sortedData={characters} />
        </div>
        <div className="CronologyRight">
          <div className="emptier"></div>
          <CronologiaPar sortedData={characters} />
        </div>
      </div>
      <MenuInicio />
    </body>
  );
}
