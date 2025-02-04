'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            }
            setLoading(false);
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!users) {
        return 'Failed to fetch users';
    }

    return (
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-5">
            {users.map((user) => (
                <Link
                    className="bg-white shadow-lg p-6 border rounded-lg hover:shadow-2xl transition flex flex-col justify-between"
                    href={`/Users/${user.id}`}
                    key={user.id}
                >
                    <div className="flex flex-col gap-4">
                       
                        <div>
                            <h2 className="text-xl font-bold">{user.name}</h2>
                            <p className="text-gray-600">@{user.username}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Contact Information</h3>
                            <p className="flex items-center gap-2">
                                <FaEnvelope className="text-gray-600" /> 
                                <a href={`mailto:${user.email}`} className="text-blue-600">{user.email}</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <FaPhone className="text-gray-600" /> {user.phone}
                            </p>
                            <p className="flex items-center gap-2">
                                <FaGlobe className="text-gray-600" />
                                <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">{user.website}</a>
                            </p>
                        </div>

                      <div>
                            <h3 className="text-sm font-semibold text-gray-500">Location</h3>
                            <p className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-gray-600" /> {user.address.suite}, {user.address.street}
                            </p>
                            <p>{user.address.city}, {user.address.zipcode}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-500">Company Details</h3>
                            <p className="flex items-center gap-2">
                                <FaBuilding className="text-gray-600" /> {user.company.name}
                            </p>
                            <p className="text-gray-600">{user.company.catchPhrase}</p>
                            <p className="text-gray-600">{user.company.bs}</p>
                        </div>
                    </div>

                   <div className="mt-2">
                    <h2 className="text-sm font-semibold text-gray-500">Quick Stats</h2>
                    <div className="flex justify-between">
                        <p className="text-sm">
                            <strong>Latitude:</strong> {user.address.geo.lat}
                        </p>
                        <p className="text-sm">
                            <strong>Longitude:</strong> {user.address.geo.lng}
                        </p>
                    </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Users;
