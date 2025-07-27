import Referencie from "../components/Referencie";
import AboutSection from "../components/AboutSection";

import ServiceOffer from "../components/ServiceOffer";
import AkoFunguje from "../components/AkoFunguje";
import PrecoIskrovka from "../components/PrecoIskrovka";

export default function Home() {
  return (
    <>
      <AboutSection />
      <ServiceOffer />
      <AkoFunguje />
      <PrecoIskrovka/>
      <Referencie/>

    </>
  );
}