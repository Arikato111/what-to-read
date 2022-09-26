export default function ImgShow({ url, img }) {
    return (
        <div className="text-center">
            <a target="_blank" href={url}>
                <img
                    className="transition-all w-52 inline-block border-2 rounded border-purple-400 shadow-sm shadow-purple-600 p-1"
                    src={img}
                    alt="book image"
                />
            </a>
        </div>
    );
}
