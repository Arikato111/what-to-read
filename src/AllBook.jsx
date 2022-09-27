import BookList from "./Data/BookList.json";
import ImgShow from "./components/ImgShow";
import { Link } from "react-router-dom";

import BigButton from "./components/BigButton";
const ShowAllBook = ()=> {
    return             <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid">
    {BookList.map((book, id) => {
        return (
            <div key={id} className="pb-10">
                <div className="text-center text-slate-800 text-lg">
                    <b>{book.name}</b>
                </div>
                <div className="text-center p-1 text-slate-600">
                    ผู้เขียน <b>{book.writer}</b>
                </div>
                <ImgShow img={book.img} url={book.link} />
                <div></div>
            </div>
        );
    })}
</div>
}
export default function AllBook() {
    return (
        <main>
            <h1 className="text-center text-4xl m-1">
                <span className="text-2xl sm:text-4xl bg-purple-500 text-white py-1 px-5 rounded">
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
}
