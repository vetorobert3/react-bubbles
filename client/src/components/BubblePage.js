import React, { useState, useEffect } from "react";
import { authWithAxios } from "./authWithAxios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    authWithAxios()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        setColorList(res.data);
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
