"use client"
import { useState } from 'react';
import ProfileCard from './ProfileCard';

interface ClientSearchFilterProps {
    users: { id: string; name: string; image: string }[];
}

const SearchFilter: React.FC<ClientSearchFilterProps> = ({ users }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <input 
                type="text" 
                placeholder="search users..." 
                className="defaultInput"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search users"
            />
            <div className="flex flex-wrap gap-2 my-4">
                {filteredUsers.map((user: { id: string; name: string, image: string }) => (
                    <ProfileCard key={user.id} name={user.name} image={user.image} />
                ))}
            </div>
        </div>
    );
};

export default SearchFilter;
