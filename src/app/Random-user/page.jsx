'use client'
import { User, MailCheck, CalendarRange, Map, Phone, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function RandomUser() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('name');

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => setUser(data.results[0]));
  }, []);

  const fetchNewUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) return <p>Loading...</p>;
  return (
    <div className="w-full h-screen bg-purple-400 flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-500 w-1/2 flex flex-col justify-center items-center">
        <img src={user.picture.large} alt={user.name.first} className="rounded-full border border-gray-500 mb-4" />
        <TabContent user={user} activeTab={activeTab} />
        <TabButtons activeTab={activeTab} setActiveTab={setActiveTab} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={fetchNewUser}>
          New User
        </button>
        <a href="/" className="text-purple-500 hover:text-purple-700 mt-4">
          Back Home
        </a>
      </div>
    </div>
  );
}

function TabContent({ user, activeTab }) {
  const tabs = {
    name: `Hi, My name is ${user.name.title} ${user.name.first} ${user.name.last}`,
    email: `My email address is ${user.email}`,
    dateofbirth: `My date of birth is ${user.dob.date}`,
    phone: `My phone number is ${user.phone}`,
    address: `My address is ${user.location.city}, ${user.location.state}, ${user.location.country}`,
    password: `My password is ${user.login.password}`,
  };

  return (
    <h1 className="text-lg font-bold text-center">
      {tabs[activeTab]}
    </h1>
  );
}

function TabButtons({ activeTab, setActiveTab }) {
  const tabs = ['name', 'email', 'dateofbirth', 'phone', 'address', 'password'];

  return (
    <div className="flex justify-center space-x-4 mt-4">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`px-4 py-2 text-white ${activeTab === tab ? 'bg-green-500' : 'bg-gray-500'}`}
          onMouseEnter={() => setActiveTab(tab)}
        >
          {tab === 'name' && <User />}
          {tab === 'email' && <MailCheck />}
          {tab === 'dateofbirth' && <CalendarRange />}
          {tab === 'phone' && <Phone />}
          {tab === 'address' && <Map />}
          {tab === 'password' && <Lock />}
        </button>
      ))}
    </div>
  );
}