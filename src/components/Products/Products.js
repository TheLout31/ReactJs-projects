import { useEffect, useState } from "react";
import ListItem from "./ListItems/ListItems";
import axios from "axios";
import Loader from "../UI/Loader";

const Products = () => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://react-ecommerce-bb608-default-rtdb.firebaseio.com/items.json"
      )
      .then((res) => {
        const data = res.data;

        const tranformed = Object.values(data).map((item, index) => {
          return {
            ...item,
            id: index,
          };
        });
        setLoader(false);
        setItem(tranformed);
      })
      .catch((error) => {
        setLoader(false);
        console.log("Error occured while getting the data", error);
      });
  }, []);

  const updateItemID = async (itemID) => {
    try {
      let title = "update title";
      await axios.patch(
        `https://react-ecommerce-bb608-default-rtdb.firebaseio.com/items/${itemID}.json`,
        { title: title }
      );
      let data = [...item];
      let index = data.findIndex((e) => e.id === itemID);
      data[index]["title"] = title;
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={"product-list"}>
        <div className={"product-list--wrapper"}>
          {item.map((item) => {
            return (
              <ListItem data={item} key={item.id} updateItem={updateItemID} />
            );
          })}
        </div>
      </div>
      {loader && <Loader />}
    </>
  );
};

export default Products;
