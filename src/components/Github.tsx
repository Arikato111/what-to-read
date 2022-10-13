import { FC } from "react";

const Github: FC = () => {
  return (
    <div className="fixed bottom-0 p-1 right-0 opacity-90 hover:opacity-100 transition-all">
      <a
        target="_blank"
        href="https://github.com/Arikato111/what-to-read"
        title="ดู source code บน Github"
      >
        <img
          className="w-12 inline-block mr-2 mb-2"
          src="/github.png"
          alt="github logo"
        />
      </a>
    </div>
  );
}

export default Github