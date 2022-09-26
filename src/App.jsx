import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import BookList from "./Data/BookList.json";

function App() {
    const [book, setBook] = useState({});
    const [count, setCount] = useState(0);

    const randomBook = () => {
        let result = Math.floor(Math.random() * BookList.length);
        setBook(BookList[result]);
    };
    useEffect(() => {
        randomBook();
    }, []);

    useEffect(() => {
        if (count > 0) {
            setCount(count - 1);
            setTimeout(() => {
                randomBook();
            }, 300);
        }
    }, [book]);
    return (
        <main className="box-border  bg-purple-50  min-h-screen">
            <div className="text-center text-4xl pt-10 pb-5">
                <button
                    className="p-2 bg-green-400 shadow-purple-600 shadow rounded text-white text-4xl active:scale-95 active:shadow-none active:translate-y-1 transition-all"
                    onClick={() => {
                        if (count === 0) {
                            console.log("count start", count);
                            setCount(10);
                        }
                        randomBook();
                    }}
                >
                    อ่านอะไรดี
                </button>
            </div>
            <div className="text-center">
                <div className="text-2xl p-2 text-slate-600 font-bold">{book.name}</div>
            </div>
            <div className="text-center">
                <a target="_blank" href={book.link}>
                    <img
                        className="transition-all w-52 inline-block border-2 rounded border-purple-400 shadow-sm shadow-purple-600 p-1"
                        src={book.img}
                        alt="book image"
                    />
                </a>
            </div>
            <div className="text-center p-1 text-slate-600">
                ผู้เขียน <b>{book.writer}</b>
            </div>
            <div className="fixed bottom-0 p-1 text-right w-full">
              <a target="_blank" href="https://github.com/Arikato111/what-to-read">
                <img className="w-12 inline-block mr-2 mb-2" src="/github.png" alt="github logo" />
              </a>
            </div>
        </main>
    );
}

export default App;
