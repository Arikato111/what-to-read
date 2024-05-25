import { FC } from "react";

interface BT {
  onclick: Function;
  title: string;
}

const BigButton: FC<BT> = ({ onclick, title }) => {
  return (
    <button
      className="p-2 bg-green-400 dark:bg-green-600 hover:bg-green-500/90 dark:hover:bg-green-500 shadow shadow-zinc-200 dark:shadow-zinc-500 hover:shadow-zinc-500/90 rounded text-white text-4xl active:scale-95 active:shadow-none transition-all duration-200 dark:shadow-none"
      onClick={() => onclick()}
      title="คลิกเพื่อสุ่ม"
    >
      {title}
    </button>
  );
};

export default BigButton;
