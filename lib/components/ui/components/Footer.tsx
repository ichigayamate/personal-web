import Image from "next/image";

export default function Footer() {
    return (
        <footer className="p-10 relative z-10 bg-zinc-900 text-gray-300 text-neutral-content shadow-md">
            <div className="flex justify-center w-full">
                <div className="flex flex-wrap max-w-[1200px] w-full">
                    <div className="w-full lg:w-8/12 mb-6 lg:mb-0">
                        <Image src="/manifest/icon-384x384.png" width={75} height={75} alt="Ichigayamate Personal Website" className="rounded-sm" />
                        <div>
                            © Copyright 2018 - {new Date().getFullYear()} 市ヶ谷山手.
                            <br />
                            Designed and developed by 市ヶ谷山手 using <a className="text-gray-300 hover:underline" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS.</a>
                            <div className="hidden lg:block"><span className="inline-block mt-2 py-2 px-5 bg-black rounded-md font-medium text-white">Deployed by ▲ Vercel</span></div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-2/12 mb-6 lg:mb-0">
                        <span className="block mb-4 text-2xl font-bold">Sitemap</span>
                        <a className="block my-2 text-gray-300 hover:underline">Top Page</a>
                        <a className="block my-2 text-gray-300 hover:underline">About</a>
                        <a className="block my-2 text-gray-300 hover:underline">Projects</a>
                        <a className="block my-2 text-gray-300 hover:underline">Blog</a>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-2/12 mb-3">
                        <span className="block mb-4 text-2xl font-bold">My SNS</span>
                        <a className="block my-2 text-gray-300 hover:underline">Facebook</a>
                        <a className="block my-2 text-gray-300 hover:underline">Twitter</a>
                        <a className="block my-2 text-gray-300 hover:underline">Instagram</a>
                        <a className="block my-2 text-gray-300 hover:underline" href="https://github.com/ichigayamate/" target="_blank" rel="noreferrer">Github</a>
                    </div>
                    <div className="text-center w-full block lg:hidden"><span className="inline-block mt-4 py-2 px-5 bg-black rounded-md font-medium text-white">Deployed by ▲ Vercel</span></div>
                </div>
            </div>
        </footer>
    )
}