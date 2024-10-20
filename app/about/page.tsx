"use client";

import BashBox from "@page_component/about/block-code";
import Backdrop from "@page_component/root/backdrop/i10e-backdrop";
import BackButton from "@ui/button/back-button";

export default function AboutPage() {
  return (
    <Backdrop>
      <div className="flex items-center gap-4 mb-4">
        <BackButton />
        <h1 className="font-mono text-3xl font-bold flex-grow">About</h1>
      </div>

      {/* profile */}
      <BashBox>
        <BashBox.Header>Profile</BashBox.Header>
        <BashBox.Text>
          An IT nerd with experience in designing server architecture and
          developing React applications. 👩🏻‍💻
        </BashBox.Text>
      </BashBox>

      {/* skills */}
      <BashBox className="mt-4">
        <BashBox.Header>Skills</BashBox.Header>
        <BashBox.Text>
          - Web development: React (Vite, Next.js), Tailwind CSS, Bootstrap,
          jQuery, Node.js
        </BashBox.Text>
        <BashBox.Text>
          - Server architecture: Docker, Nginx, MySQL, PostgreSQL
        </BashBox.Text>
        <BashBox.Text>
          - Programming languages: JavaScript, TypeScript, Java, Python
        </BashBox.Text>
        <BashBox.Text>
          - <b>[Special]</b> Type in 100 words/minute with 99% accuracy and eyes
          closed
        </BashBox.Text>
      </BashBox>

      {/* hobby */}
      <BashBox className="mt-4">
        <BashBox.Header>Hobby</BashBox.Header>
        <BashBox.Text>
          Playing games (Genshin Impact, Zenless Zone Zero, Honkai Star Rail,
          Apex Legends, and AAA based games), watching anime, and reading manga.
        </BashBox.Text>
      </BashBox>
    </Backdrop>
  );
}
