import { Footer } from "react-daisyui";
import Image from "next/image";

export default function Foot() {
    return (
        <footer>
            <Footer className="p-10 bg-neutral text-neutral-content shadow-md">
                <div>
                    <Image src="/manifest/icon-384x384.png" width={75} height={75} alt="Ichigayamate Personal Website" className="rounded-sm" />
                    <p>
                        © Copyright 2018 - {new Date().getFullYear()} 市ヶ谷山手.
                        <br />
                        Designed and developed by 市ヶ谷山手 using <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>. Powered by <a href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a>
                    </p>
                </div>
                <div>
                    <Footer.Title>Sitemap</Footer.Title>
                    <a className="link link-hover">Top Page</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Projects</a>
                    <a className="link link-hover">Blog</a>
                </div>
                <div>
                    <Footer.Title>My SNS</Footer.Title>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Github</a>
                </div>
            </Footer>
        </footer>
    )
}