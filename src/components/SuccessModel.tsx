import React from 'react';
import { useRouter } from 'next/navigation';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
    vCart?: boolean;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, message, vCart }) => {
    const router = useRouter();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-yellow-500 p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-900 hover:text-gray-800 text-xl"
                >
                    &times;
                </button>
                <div className="flex items-center border border-green-200 text-black p-4 rounded-md mb-4">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg font-semibold">{message}</span>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900"
                    >
                        Close
                    </button>
                    {vCart && <button
                        onClick={() => router.push('/cart')}
                        className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800"
                    >
                        View Cart
                    </button>}
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;