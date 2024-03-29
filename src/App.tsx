import { FC, useEffect } from "react";
import { useState } from "react";
import BookList from "./Data/BookList.json";
import { BookInput } from "./components/interface";

import ImgShow from "./components/ImgShow";
import BigButton from "./components/BigButton";
import ToggleMode from "./components/ToggleMode";
import Footer from "./components/Footer";

const App: FC = () => {
  const [book, setBook] = useState<BookInput>({}); // keep book details
  const [count, setCount] = useState<number>(0); // keep random count

  // for random book
  const randomBook: Function = () => {
    let result: number = Math.floor(Math.random() * BookList.length);
    // document.title = BookList[result].name; // change title by book's name
    setBook(BookList[result]);
  };

  useEffect(() => {
    document.title = "อ่านอะไรดี";
    // load first content
    randomBook();
    setCount(10);
  }, []);

  useEffect(() => {
    // it's work when click the button
    if (count > 0) {
      setCount(count - 1); // count random when it === 0 it should stop
      setTimeout(() => {
        // delay 300 ms for random book
        randomBook();
      }, 300);
    }
  }, [book]);
  return (
    <>
      <main className="box-border  bg-purple-50 dark:bg-slate-900 min-h-screen">
        <ToggleMode />
        <div className="text-center text-4xl pt-10 pb-5">
          <BigButton
            title="อ่านอะไรดี"
            onclick={() => {
              // check count before start random
              if (count === 0) {
                setCount(10);
                randomBook();
              }
            }}
          />
        </div>
        <div className="text-center">
          <div className="text-2xl p-2 text-slate-600 dark:text-white font-bold">
            <a
              className="hover:underline inline-block transition-all"
              target={"_blank"}
              href={`https://www.google.com/search?q=${book.name}`}
              title="คลิกเพื่อค้นหาหนังสือเล่มนี้บน Google"
            >
              {book.name}
            </a>
          </div>
        </div>

        <ImgShow
          img={book.img ?? ""}
          url={book.link ?? ""}
          name={book.name ?? ""}
        />
        <div className="text-center p-1 text-slate-600 dark:text-white">
          <a
            title="คลิกเพื่อค้นหาผู้เขียนบน Google"
            className="underline sm:no-underline hover:underline inline-block"
            target={"_blank"}
            href={`https://www.google.com/search?q=${book.writer}`}
          >
            ผู้เขียน <b>{book.writer}</b>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
