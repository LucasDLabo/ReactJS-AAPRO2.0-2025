import { useEffect } from 'react';

function Modal ({ isOpen, onClose, children }) {

    useEffect(() => { function handleEscape (e) {
        if (e.key === 'Escape') {
            onClose();
        }
        };

        if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (isOpen === false) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className='fixed inset-0 bg-black/60' onClick={onClose}></div>

            <div className="relative w-auto min-w-5/12 rounded border-2 border-gray-300 bg-white p-6 shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
                <button onClick={onClose} className="absolute top-0 right-2 text-gray-500 hover:text-black text-2xl cursor-pointer dark:hover:text-white" title="Close">
                x
                </button>
                {children}
            </div>
        </div>
        );
};

export default Modal;