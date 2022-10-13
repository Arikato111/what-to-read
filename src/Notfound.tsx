import { FC } from "react";
import { Link } from "react-router-dom";

const Notfound: FC = () => {
  return (
    <main className="box-border flex flex-col min-h-screen bg-purple-50 justify-center items-center">
      <h1 className="text-center text-4xl">Not Found Page</h1>
      <h2>
        <Link className="underline" to={"/"}>
          Back to Homepage
        </Link>
      </h2>
    </main>
  );
}

export default Notfound
