import { FC } from "react";
import { Link } from "react-router-dom";
import Github from "./Github";

const Footer: FC = () => {
  return (
    <footer>
      <Link to={"/books"}>
        <div className="fixed shadow hover:shadow-gray-400 bottom-0 left-0 p-2 m-3 bg-yellow-200 dark:bg-yellow-600 hover:bg-yellow-300/90 dark:hover:bg-yellow-500 text-slate-800 dark:text-white rounded transition-all duration-300">
          หนังสือทั้งหมด
        </div>
      </Link>
      <Github />
    </footer>
  );
};

export default Footer;
