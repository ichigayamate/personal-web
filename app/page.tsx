import { faContactCard } from "@fortawesome/free-regular-svg-icons";
import { faNewspaper, faPhone } from "@fortawesome/free-solid-svg-icons";
import LandingPageButton from "@page_component/landing-page/landingpage-button";
import Backdrop from "@page_component/root/backdrop/i10e-backdrop";

function Page() {
  return (
    <Backdrop>
      <div className="text-center">
        <h1 className="font-bold font-mono text-3xl my-2">Hello World!👋🏻</h1>
        <p className="font-mono">
          Just call me Ichigayamate, a front-end web developer and an IT
          Infrastructure Specialist.
        </p>
      </div>
      <div className="mt-4 lg:grid lg:grid-cols-2 gap-1">
        <LandingPageButton icon={faContactCard} link="/about">
          About Me
        </LandingPageButton>
        <LandingPageButton icon={faNewspaper} link="/projects">
          Projects and Portofolio
        </LandingPageButton>
        <LandingPageButton icon={faPhone} link="/contact">
          Contact
        </LandingPageButton>
      </div>
    </Backdrop>
  );
}

export default Page;
