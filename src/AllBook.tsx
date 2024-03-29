import BookList from "./Data/BookList.json";
import ImgShow from "./components/ImgShow";
import { Link } from "react-router-dom";

import BigButton from "./components/BigButton";
import { FC, useEffect } from "react";
import ToggleMode from "./components/ToggleMode";

const ShowAllBook: FC = () => {
  return (
    <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 grid">
      {/* loop to show all books */}
      {BookList.map((book, id) => {
        return (
          <div key={id} className="pb-10">
            <div className="text-center text-slate-800 dark:text-white  text-xl sm:text-lg">
              <Link
                className="hover:underline inline-block transition-all"
                to={`/${book.name}`}
                title="คลิกเพื่อชมสิ่งที่หน้าสนใจ"
              >
                <b>{book.name}</b>
              </Link>
            </div>
            <div className="text-center text-lg sm:text-base p-1 text-slate-600 dark:text-white">
              <a
                title="คลิกเพื่อค้นหาผู้เขียนบน Google"
                className="underline sm:no-underline hover:underline inline-block"
                target={"_blank"}
                href={`https://www.google.com/search?q=${book.writer}`}
              >
                ผู้เขียน <b>{book.writer}</b>
              </a>
            </div>
            <ImgShow img={book.img} url={book.link ?? ""} name={book.name} />
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

const AllBook: FC = () => {
  useEffect(() => {
    document.title = "หนังสือทั้งหมด";
  }, []);
  return (
    <main className="dark:bg-slate-900 m-0">
      <ToggleMode />
      <h1 className="text-center text-4xl px-2">
        <span className="w-full text-2xl sm:text-2xl bg-purple-700 dark:bg-purple-700 shadow-slate-400 dark:shadow-gray-700 text-white py-1 px-4 rounded-lg inline-block">
          รายการหนังสือทั้งหมด
        </span>
      </h1>
      <div className="text-center text-4xl  pb-5 m-1">
        <Link to={"/"}>
          <BigButton title="อ่านอะไรดี" onclick={() => {}} />
        </Link>
      </div>
      <ShowAllBook />
    </main>
  );
};

export default AllBook;
