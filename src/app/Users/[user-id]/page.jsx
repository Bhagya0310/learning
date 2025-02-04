import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaBuilding, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

export default async function Page({ params }) {
    const userIdObject = await params;
    const userId = userIdObject['user-id'];

    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = await userRes.json();

    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await postsRes.json();

    const getInitials = (name) => {
        const nameParts = name.split(' ');
        const initials = nameParts.length > 1
            ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
            : name[0];
        return initials.toUpperCase();
    };

    const userInitials = getInitials(userData.name);

    return (
        <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center pt-10">
            
            <div className="bg-white text-black rounded-lg shadow-lg p-8 w-[400px] flex flex-col gap-6">
                
                <div className="flex items-center gap-4">
                    
                    <FaUserCircle className="text-gray-500 text-3xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{userData.name}</h1>
                        <p className="text-gray-600">@{userData.username}</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-gray-500">Contact Information</h2>
                    <p className="flex items-center gap-2">
                        <FaEnvelope className="text-gray-600" />
                        <a href={`mailto:${userData.email}`} className="text-gray-600 underline">
                            {userData.email}
                        </a>
                    </p>
                    <p className="flex items-center gap-2">
                        <FaPhone className="text-gray-600" />
                        {userData.phone}
                    </p>
                    <p className="flex items-center gap-2">
                        <FaGlobe className="text-gray-600" />
                        <a
                            href={`http://${userData.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            {userData.website}
                        </a>
                    </p>
                </div>

               <div>
                    <h2 className="text-sm font-semibold text-gray-500">Location</h2>
                    <p className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-600" />
                        {userData.address.suite}, {userData.address.street}
                    </p>
                    <p>
                        {userData.address.city}, {userData.address.zipcode}
                    </p>
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-gray-500">Company Details</h2>
                    <p className="flex items-center gap-2">
                        <FaBuilding className="text-gray-600" /> {userData.company.name}
                    </p>
                    <p className="text-gray-600">{userData.company.catchPhrase}</p>
                    <p className="text-gray-600">{userData.company.bs}</p>
                </div>

                <div className="mt-6">
                    <h2 className="text-sm font-semibold text-gray-500">Quick Stats</h2>
                    <div className="flex justify-between">
                        <p className="text-sm">
                            <strong>Longitude:</strong> {userData.address.geo.lng}
                        </p>
                        <p className="text-sm">
                            <strong>Latitude:</strong> {userData.address.geo.lat}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-4xl mt-8 px-4">
                <h2 className="text-center font-bold text-lg mb-6">Posts</h2>
                <div className="grid grid-cols-1 gap-6">
                    {posts.map((post) => {
                        const postInitials = getInitials(userData.name); 
                        return (
                            <Link
                                key={post.id}
                                href={`/Users/${userData.id}/${post.id}`}
                                className="block bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
                            >
                                <div className="flex items-start gap-4">
                                    
                                    <div className="flex items-center justify-center w-11 h-9 bg-gray-200 text-white-600 rounded-full text-xl font-bold">
                                        {postInitials}
                                    </div>
                                    
                                    <div>
                                        <h3 className="font-semibold text-gray-800 text-lg">{post.title}</h3>
                                        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                                            {post.body}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
