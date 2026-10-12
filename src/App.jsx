import { useEffect, useState } from "react";

import HauntedEntrance from "./components/HauntedEntrance";
import SecretInvitation from "./components/SecretInvitation";
import PartyDetails from "./components/PartyDetails";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";

import "./App.css";

function App() {
const [entered, setEntered] = useState(false);

useEffect(() => {
if (!entered) return;

const timer = setTimeout(() => {
  document.getElementById("invitation")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 100);

return () => clearTimeout(timer);


}, [entered]);

return ( <main id="top">
<HauntedEntrance onEnter={() => setEntered(true)} />


  {entered && (
    <>
      <SecretInvitation />

      <PartyDetails />

      <Countdown />

      <Footer />
    </>
  )}
</main>


);
}

export default App;
