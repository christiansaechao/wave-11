import "./App.css";
import { RenderFruitList } from "./mapping/FruitList";
import { CapitalizeWords } from "./mapping";
import { ConditionalRender } from "./mapping/ConditionalRender";
import { AdminsOnly } from "./filtering/AdminsOnly";
import { PreFilter } from "./filtering/PreFilter";
import { CartTotal } from "./reducing/CartTotal";
import { CountOccurences } from "./reducing/CountOccurences";

function App() {
  const animes = ["One Piece", "Cyberpunk Edge Runners 2", "Bleach", "Boruto"];

  return (
    <div>
      <RenderFruitList />
      <CapitalizeWords />
      <ConditionalRender />
      <AdminsOnly />
      <PreFilter />
      <CartTotal />
      <CountOccurences />
    </div>
  );
}

export default App;

/**
 * users card
 * names
 * age
 * email
 * phone number
 * job/occupation
 */

/**
 * album
 * track_id
 * artist
 *
 *
 */

/**
 * recipes (baked goods)
 * product_name
 * description
 * price
 * <img>
 */

/**
 *
 * about me
 * about our team
 *  contact number
 */

/*
 * home
 * about
 * services
 * contact
 */
