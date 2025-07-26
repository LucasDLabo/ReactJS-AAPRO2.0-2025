import { useEffect, useState } from 'react';

function Modal({ isOpen, onClose, children }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timeout = setTimeout(() => {
                setIsVisible(false);
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    useEffect(() => {
        function handleEscape(e) {
            if (e.key === 'Escape') {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-50 flex md:w-auto right-10 left-10 items-center justify-center transition-opacity duration-300 
            ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            
            <div className="fixed inset-0 bg-black/60 -z-50" onClick={onClose}></div>

            <div
                className={`relative w-auto min-w-5/12 transform rounded border-2 border-gray-300 bg-white p-6 shadow-lg duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300
                ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
                <button onClick={onClose} className="absolute top-0 right-2 aspect-square w-10 cursor-pointer text-2xl text-gray-500 hover:text-black dark:hover:text-white">
                x
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
