export default function ImgShow({ url, img, name }) {
    return (
        <div className="text-center">
            <a target="_blank" href={url}>
                <img
                    className="hover:scale-105 hover:opacity-75 shadow-md hover:shadow-none shadow-slate-400 transition-all w-52 inline-block border-2 rounded border-purple-400 p-1"
                    src={img}
                    title={name ?? ""}
                    alt="book image"
                />
            </a>
        </div>
    );
}
