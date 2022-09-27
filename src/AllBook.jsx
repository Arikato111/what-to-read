import BookList from "./Data/BookList.json";
import ImgShow from "./components/ImgShow";

export default function AllBook() {
    return (
        <main>
            <h1 className="text-center text-4xl p-10">รายการหนังสือทั้งหมด</h1>
            <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid">
                {BookList.map((book) => {
                    return (
                        <div className="pb-10">
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
        </main>
    );
}
