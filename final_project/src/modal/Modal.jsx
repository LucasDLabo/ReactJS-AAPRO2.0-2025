import { useEffect } from 'react';

function Modal ({ isOpen, onClose, children }) {

    if (isOpen === false) return null;

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


    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className='bg-black/60 fixed inset-0' onClick={onClose}></div>

            <div className="bg-white p-6 rounded shadow-lg w-auto min-w-5/12 relative border-2 border-gray-300">
                <button onClick={onClose} className="absolute top-0 right-2 text-gray-500 hover:text-black text-2xl cursor-pointer" title="Close">
                x
                </button>
                {children}
            </div>
        </div>
        );
};

export default Modal;