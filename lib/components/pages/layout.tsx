import { ThemeProvider } from "next-themes";
import Footer from "../ui/components/Footer";
import Navbar from "../ui/components/Navbar";

export default function Layout({ children }) {
    return (
        <ThemeProvider attribute="class" disableTransitionOnChange>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </ThemeProvider>
    )
}