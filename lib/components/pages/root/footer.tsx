export default function Footer() {
  return (
    <footer className="bg-neutral-700 text-white p-2">
      <p>© 2019 - {new Date().getFullYear()} Ichigayamate</p>
      <p>Powered by Next.js and Vercel</p>
    </footer>
  );
}
