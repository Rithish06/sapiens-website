import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";

export default function ImagePopup() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, []);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black/60 pt-[90px] flex justify-center">
            <div className="relative w-fit bg-transparent">

                <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center  cursor-pointer z-10"
                >
                    ✕
                </button>

                <img
                    src={assets.popUpImg}
                    alt="Popup"
                    className="max-w-[90vw] max-h-[80vh] rounded-xl  object-contain"
                />
            </div>
        </div>

    );
}
