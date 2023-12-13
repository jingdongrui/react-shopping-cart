import { useEffect, useState } from "react";
import "./app.css";
import NavBar from "./components/NavBar/index";
import Container from "./components/Container/index";
import SpHeader from "./components/SpHeader/index";
import SpList from "./components/SpList/index";

import listMockData from "../src/assets/json/listData.json";

const App = () => {
  const [listData, setListData] = useState([
    {
      id: "",
      name: "",
      price: "",
      imgUrl: "",
    },
  ]);
  useEffect(() => {
    const res = listMockData;
    setListData(res.data);
  }, []);
  return (
    <>
      <div className="container">
        <NavBar></NavBar>
        <Container>
          <SpHeader></SpHeader>
          <SpList listData={listData}></SpList>
        </Container>
      </div>
    </>
  );
};

export default App;
