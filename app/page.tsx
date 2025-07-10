import Hero from "./hero/page";
import About from "./about/page";
import Campuses from "./campuses/page";
import Programs from "./programs/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Campuses />
      <Programs />
      <Contact />
    </>
  );
}
