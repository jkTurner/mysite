import ProfileCard from './components/ProfileCard';
import SearchFilter from './components/SearchFilter';

const getUser = async () => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, { cache: 'no-store' });

        if (res.ok) {
            const data = await res.json();
            return data;
        }
    } catch (error) {
        console.log(error);
    }

    return null;
};

const SearchFilterPage = async () => {
    const data = await getUser();
    const users = data ? data.data : [];

    return (
        <div>
            <h1 className="mb-4">Search Filter Page</h1>
            <div className="flex flex-wrap gap-2 my-4">
            {/* {users.map((user: { id: string; name: string, image: string }) => (
                <ProfileCard key={user.id} name={user.name} image={user.image} />
            ))} */}

            <SearchFilter users={users} />

            </div>
        </div>
    );
};

export default SearchFilterPage;
