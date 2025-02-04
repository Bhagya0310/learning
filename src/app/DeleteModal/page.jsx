'use client'
import React, { useState } from 'react';

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
                    &times;
                </button>
                <h2 className="text-lg font-semibold">Confirm Deletion</h2>
                <p className="mt-2">Are you sure you want to delete this item? This action cannot be undone.</p>
                <div className="mt-4 flex justify-end">
                    <button 
                        onClick={onClose} 
                        className="mr-2 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={onDelete} 
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

const Page = () => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openDeleteModal = () => setIsDeleteModalOpen(true);
    const closeDeleteModal = () => setIsDeleteModalOpen(false);

    const handleDelete = () => {
        // Perform the delete action here (e.g., API call)
        console.log("Item deleted!");
        closeDeleteModal();
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Delete Modal Example</h1>
            <button 
                onClick={openDeleteModal} 
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Open Delete Modal
            </button>
            <DeleteModal 
                isOpen={isDeleteModalOpen} 
                onClose={closeDeleteModal} 
                onDelete={handleDelete} 
            />
        </div>
    );
};

export default Page;
