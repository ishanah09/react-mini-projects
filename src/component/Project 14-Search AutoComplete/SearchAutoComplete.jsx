import { useEffect, useState } from "react";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [showData, setShowData] = useState(false);
  async function fetchdata() {
    const url = "https://dummyjson.com/users?limit=200";
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data.users.map((item) => item.firstName + " " + item.lastName));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="w-full min-h-screen flex  justify-center p-8 sm:py-12 ">
      <div className=" w-full max-w-[350px] flex flex-col gap-8 bg-gray-300 shadow-2xl p-4 rounded-xl ">


        <form className="flex justify-center  ">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="userName" className="text-xl font-medium ">
              Enter userName
            </label>
            <input
              type="text"
              id="userName"
              value={search}
              onChange={(e) => {
                let value = e.target.value;
                if (value.length > 0) {
                  setShowData(true);
                }
                else {
                  setShowData(false)
                }
                setSearch(value);
                setFilteredUsers(users.filter((name) => name.toLowerCase().startsWith(value.toLowerCase())));
              }}
              placeholder="Search UserName..."
              className="border p-2  pl-4 outline-none focus:outline-0 focus:ring-2 focus:ring-green-500 focus:border-0 w-fit "
            />
          </div>
        </form>


        <div className=" ">
          {error ? <div className="text-red-500 text-2xl font-semibold text-center">ERROR...</div> : loading ? <div className="text-red-500 text-2xl font-semibold text-center">Loading... Please Wait</div> : showData ? filteredUsers.length > 0 ? <ul className="list-disc pl-8">
            {filteredUsers?.map((item) => <li className=" text-lg font-medium mb-1">{item}</li>)}
          </ul> : <div className="text-xl text-center font-medium">No UserName Found</div> : null}
        </div>
      </div>
    </div>
  );
}
