import "./App.css";
import { Card } from "./components/card";
import { Bread } from "./components/bread";
import { TrackCard } from "./components/track_card";
import { Navbar } from "./components/navbar/navbar";
import { AboutMe } from "./components/contact";

function App() {

  return (
    <>
      <Navbar />
      <TrackCard
        artist="Ray Jepson"
        track="Blues Skies"
        album="Day and Night"
        album_art="album art"
      />
      <AboutMe 
        aboutMe="About me: I like building things."
        hobby="Hobby: Rock Climbing"
        biography="I love rock climbing!"
        address="123 Main St"
      />
      <Card
        name="Alex"
        age={28}
        email={"alex@gmail.com"}
        occupation={"QA software tester"}
        phoneNumber="1234567890"
      />
      <Card
        name="James"
        age={28}
        email="james@gmail.com"
        occupation="Software Developer"
        phoneNumber="123-456-7890"
      />
      <Bread
        product_name="Chocolate Chip Banana Bread"
        description="Banana Bread with Chocolate Chips"
        price={14.99}
        image="Image of product"
      />
    </>
  );
}

export default App;

/**
 * users card
 * name
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
