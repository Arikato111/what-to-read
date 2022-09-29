export default function BigButton({ onclick, title }) {
    return (
        <button
            className="p-2 bg-green-400 hover:bg-green-500 shadow-slate-400 shadow-md rounded text-white text-4xl active:scale-95 active:shadow-none active:translate-y-1 transition-all"
            onClick={onclick}
            title="คลิกเพื่อสุ่ม"
        >
            {title}
        </button>
    );
}
