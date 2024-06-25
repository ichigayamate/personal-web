import Backdrop from "@page_component/landing-page/i10e-backdrop";

export default function NotFound() {
    return <Backdrop error>
    <div className="text-center">
      <h1 className="font-bold font-mono text-3xl mb-2">Did you find something?</h1>
      <p className="font-mono">
        If not, it may be moved or deleted. Please check the URL and try again.
      </p>
    </div>
  </Backdrop>
}