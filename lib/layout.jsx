import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}