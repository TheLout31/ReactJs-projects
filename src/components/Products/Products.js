import ListItem from "./ListItems/ListItems";

const items = [
  {
    id: 0,
    title: "Title of this Item 1",
    price: 450,
    discountedPrice: 340,
  },
  {
    id: 1,
    title: "Title of this Item 2",
    price: 100,
    discountedPrice: 80,
  },
  {
    id: 2,
    title: "Title of this Item 2",
    price: 100,
    discountedPrice: 80,
  },
];

const Products = () => {
  return (
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        {items.map((item) => {
          return <ListItem data={item} key={item.id}/>;
        })}
      </div>
    </div>
  );
};

export default Products;
