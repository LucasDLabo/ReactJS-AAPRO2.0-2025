import { useState, useEffect } from 'react'

function Toast({ message, type = "success", onClose, duration = 4000 }){
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);

        const timer = setTimeout(() => {
        setVisible(false);

        setTimeout(onClose, 300); // = `transition duration`
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration]);
    const styles = {
        success: "bg-green-500 text-white dark:bg-green-600 dark:text-gray-200",
        error: "bg-red-600 text-white dark:bg-red-800 dark:text-gray-200",
        info: "bg-orange-400 text-white dark:bg-amber-600 dark:text-gray-200",
        raw: "bg-gray-700 text-white dark:bg-gray-800 dark:text-gray-200",
    }
    const progressBarColor = {
    success: "bg-green-800 dark:bg-green-700",
    error: "bg-red-900 dark:bg-red-500",
    info: "bg-orange-500 dark:bg-amber-500",
    raw: "bg-neutral-800 dark:bg-neutral-700"
    };
    return(
        <div className={`fixed right-0 bottom-6 left-0 z-[60] mx-5 rounded px-2 py-4 text-start shadow-md md:right-6 md:left-auto md:mx-5 md:text-start transition-all duration-300 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} ${styles[type]}`}>
            <div className="flex items-center justify-between font-medium">
                <span>{message}</span>
                <button onClick={onClose} className='flex aspect-square h-full w-6 cursor-pointer items-center justify-center hover:text-gray-600'>
                    <div className="text-xl pb-0.5">&times;</div>
                </button>
                
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full">
                <div
                className={`h-full ${progressBarColor[type]} transition-all`}
                style={{
                    width: visible ? "100%" : "0%",
                    transition: `width ${duration}ms linear`,
                }}
                />
            </div>
        </div>
    );
}

export default Toast