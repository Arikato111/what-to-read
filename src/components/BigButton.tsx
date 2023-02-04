import { FC } from "react"

interface BT {
  onclick: Function
  title: string
}

const BigButton: FC<BT> = ({ onclick, title }) => {
  return (
    <button
      className="p-2 bg-green-400 dark:bg-green-700 hover:bg-green-500/80 dark:hover:bg-green-600 shadow shadow-transparent hover:shadow-zinc-400 dark:hover:shadow-gray-400 rounded-lg text-white text-4xl active:scale-95 active:shadow-none transition-all duration-200"
      onClick={() => onclick()}
      title="คลิกเพื่อสุ่ม"
    >
      {title}
    </button>
  );
}

export default BigButton