import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import BookList from "./Data/BookList.json";

import Github from "./components/Github";
import ImgShow from "./components/ImgShow";
import BigButton from "./components/BigButton";

function App() {
    const [book, setBook] = useState({}); // keep book details
    const [count, setCount] = useState(0); // keep random count

    // for random book
    const randomBook = () => {
        let result = Math.floor(Math.random() * BookList.length);
        setBook(BookList[result]);
    };

    useEffect(() => {
        // load first content
        randomBook();
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
        <main className="box-border  bg-purple-50  min-h-screen">
            <div className="text-center text-4xl pt-10 pb-5">
                <BigButton
                    title="อ่านอะไรดี"
                    onclick={() => {
                        // check count before start random
                        if (count === 0) {
                            setCount(10);
                        }
                        randomBook();
                    }}
                />
            </div>
            <div className="text-center">
                <div className="text-2xl p-2 text-slate-600 font-bold">
                    {book.name}
                </div>
            </div>
            <ImgShow img={book.img} url={book.link} />
            <div className="text-center p-1 text-slate-600">
                ผู้เขียน <b>{book.writer}</b>
            </div>
            <Github />
        </main>
    );
}

export default App;
