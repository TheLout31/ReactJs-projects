import Products from "./components/Products/Products";
import Header from "./components/Layout/header"
import SubHeader from "./components/Layout/subHeader"
const App = () => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <Products/>
    </div>
  );
}

export default App;