import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Loading from "./Components/Loading";
// import Home from "./Components/Home";

const Home = lazy(() => import("./Components/Home"));
const Billing = lazy(() => import("./Components/Billing"));
const Payment = lazy(() => import("./Components/Payment"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
