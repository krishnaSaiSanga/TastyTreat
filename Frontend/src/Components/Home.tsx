import { lazy, Suspense } from "react";
import treat from "./Images/tastyTreatIcon.jpg";
import FooterData from "./Footer";
import treaticon from "./Images/treat.jpg";
import Loading from "./Loading";
import Navbar from "./NavBar";

import Greeting from "./Greeting";
import { useEffect, useState } from "react";
const Firstpage = lazy(() => import("./Firstpage"));
const FoodTypes = lazy(() => import("./Foodtypes"));
const Testimonials = lazy(() => import("./Testimonials"));

const Home = () => {
  const [greet, setGreet] = useState(false);
  useEffect(() => {
    async function greetFunction() {
      if (
        sessionStorage.getItem("greet") == null ||
        sessionStorage.getItem("greet") == "No"
      ) {
        setGreet(true);
        sessionStorage.setItem("greet", "yes");
      }
    }
    greetFunction();
  }, []);

  return (
    <div>
      {greet == true ? <Greeting /> : ""}
      {/* ----------NAVBAR------------- */}
      <Navbar treat={treat} />
      {/* ------------First Page--------- */}
      <Suspense fallback={<Loading />}>
        <Firstpage />
      </Suspense>
      {/* ----------FoodTypes------------- */}
      <Suspense fallback={<Loading />}>
        <FoodTypes />
      </Suspense>
      {/* ------------searchFood------------ */}
      {/* <SearchFoodItem /> */}
      {/* -----------testimonials----------- */}
      <Suspense fallback={<Loading />}>
        <Testimonials />
      </Suspense>
      {/* ----------footer------------ */}
      <FooterData treaticon={treaticon} />
    </div>
  );
};

export default Home;
