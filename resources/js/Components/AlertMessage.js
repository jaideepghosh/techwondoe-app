import React, { useEffect, useState } from "react";

const IconSuccess = () => (
    <svg
        className="ml-4 mr-2 flex-shrink-0 w-4 h-4 text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
    >
        <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
    </svg>
);

const AlertMessage = () => {
    const [visible, setVisible] = useState(true);
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get("message");

    useEffect(() => {
        if (!!message) setVisible(true);
    }, [message]);

    return (
        <div>
            {message && visible && (
                <div className="mb-8 flex items-center justify-between bg-green-500 rounded max-w-3xl m-4">
                    <div className="flex items-center">
                        <IconSuccess />
                        <div className="py-4 text-white text-sm font-medium">
                            {message}
                        </div>
                    </div>
                    <button
                        onClick={() => setVisible(false)}
                        type="button"
                        className="focus:outline-none group mr-2 p-2"
                    >
                        <svg
                            className="block  w-2 h-2 fill-current text-green-700 group-hover:text-green-800"
                            xmlns="http://www.w3.org/2000/svg"
                            width="235.908"
                            height="235.908"
                            viewBox="278.046 126.846 235.908 235.908"
                        >
                            <path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default AlertMessage;
