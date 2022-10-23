import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Atropos from "atropos/react";
import BookList from "./Data/BookList.json";
import ImgShow from "./components/ImgShow";
import { FC } from "react";
import { BookInput } from "./components/interface";

const SingleBook: FC = () => {
  const { bookname } = useParams();

  let theBook: BookInput = BookList.filter((book) => book.name == bookname)[0];
  if (Object.keys(theBook).length < 1) {
    return <Navigate to={"/"} />;
  }
  document.title = theBook.name ?? "ไม่พบหนังสือ";
  return (
    <main className="box-border  bg-purple-50 dark:bg-slate-900  min-h-screen">
      <div className="flex min-h-screen justify-center items-center flex-col">
        <Atropos shadowScale={1} activeOffset={40}>
          <ImgShow name={theBook.name ?? "ไม่พบชื่อหนังสือ"} img={theBook.img ?? ""} url={theBook.link ?? ""} />
        </Atropos>
      </div>
    </main>
  );
}

export default SingleBook