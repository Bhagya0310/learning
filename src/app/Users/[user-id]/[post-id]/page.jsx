import { FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaBuilding, FaUserCircle } from 'react-icons/fa';
export default async function PostDetails({ params }) {
    const { 'post-id': postId } = params;
  
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const postData = await postResponse.json();
  
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
    const userData = await userResponse.json();
  
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const commentsData = await commentsResponse.json();
  
    return (
      <div className="max-w-4xl mx-auto p-6">
       
        <div className="w-full min-h-screen bg-white-100 flex flex-col items-center pt-10">
          
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
        </div>
  
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10 flex gap-4 items-start">
          <div className="w-15 h-10 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-gray-700">
            {userData.name.charAt(0).toUpperCase()}{userData.name.split(' ').slice(-1)[0].charAt(0).toUpperCase()}
          </div>
          <div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800"> {postData.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed"> {postData.body}</p>
          </div>
        </div>
       <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white text-lg font-bold">💬</div>
            <h2 className="text-2xl font-bold text-gray-800">Comments</h2>
          </div>
          <div className="space-y-6">
            {commentsData.map((comment) => (
              <div
                key={comment.id}
                className="bg-white-100 p-4 rounded-md shadow-sm border border-white-200 flex gap-4 items-start relative"
              >
                <span className="absolute top-2 right-2 text-gray-500 text-sm font-semibold">#{comment.id}</span>
                <div className="w-12 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-700">
                  {comment.name.charAt(0).toUpperCase()}{comment.name.split(' ').slice(-1)[0].charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{comment.name}</h3>
                  <p className="text-sm text-gray-600">📧 {comment.email}</p>
                  <p className="text-gray-700 leading-relaxed mt-2 mb-4">{comment.body}</p>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
                      Reply
                    </button>
                    <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
                      Like
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  