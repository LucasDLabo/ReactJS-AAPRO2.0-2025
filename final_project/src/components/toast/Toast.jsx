import { useState } from 'react'

function Toast({ message, type = "success", onClose }){
    const styles = {
        success: "bg-green-500 text-white dark:bg-green-600 dark:text-gray-200",
        error: "bg-red-600 text-white dark:bg-red-800 dark:text-gray-200",
        info: "bg-orange-400 text-white dark:bg-amber-600 dark:text-gray-200"
    }
    return(
        <div className={`fixed right-6 bottom-6 z-50 rounded px-2 py-4 shadow-md ${styles[type]}`}>
            <div className="flex items-center justify-between font-medium">
                <span>{message}</span>
                <button onClick={onClose} className='flex aspect-square h-full w-6 cursor-pointer items-center justify-center hover:text-gray-600'>
                    <div className="text-xl pb-0.5">&times;</div>
                </button>
                
            </div>
        </div>
    );
}

export default Toast