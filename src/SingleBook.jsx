import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Atropos from "atropos/react";
import BookList from "./Data/BookList.json";
import ImgShow from "./components/ImgShow";

export default function SingleBook() {
  const { bookname } = useParams();

  let theBook = BookList.filter((book) => book.name == bookname)[0];
  if (theBook.length < 1) {
    return <Navigate to={"/"} />;
  }
  console.log(theBook);
  return (
    <main className="box-border  bg-purple-50  min-h-screen">
      <div className="flex min-h-screen justify-center items-center flex-col">
        <Atropos shadowScale={1} activeOffset={40}>
          <ImgShow name={theBook.name} img={theBook.img} url={theBook.link} />
        </Atropos>
      </div>
    </main>
  );
}
