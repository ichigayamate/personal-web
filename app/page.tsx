import { faContactCard } from "@fortawesome/free-regular-svg-icons";
import { faNewspaper, faPhone } from "@fortawesome/free-solid-svg-icons";
import Button from "@page_component/landing-page/button";
import Backdrop from "@page_component/landing-page/i10e-backdrop";

function Page() {
  return (
    <Backdrop>
      <div className="text-center">
        <h1 className="font-bold font-mono text-3xl my-2">Hello World!👋🏻</h1>
        <p className="font-mono">
          Just call me Ichigayamate, a front-end web developer and an IT
          Architecture Staff.
        </p>
      </div>
      <div className="mt-4 lg:grid lg:grid-cols-2 gap-1">
        <Button icon={faContactCard} link="/about">
          About Me
        </Button>
        <Button
          icon={faNewspaper}
          link="/portfolio">
          Portfolio
        </Button>
        <Button
          icon={faPhone}
          link="/contact">
          Contact
        </Button>
      </div>
    </Backdrop>
  );
}

export default Page;
