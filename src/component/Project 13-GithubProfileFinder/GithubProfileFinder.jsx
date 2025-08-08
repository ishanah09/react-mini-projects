import { useEffect, useState } from "react";

export default function GithubProfileFinder() {
  const [userName, setUsername] = useState("");
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    let url = `https://api.github.com/users/${userName}`

    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    setProfile([data])

    setLoading(false);


  }
  function handleSubmit(e) {
    e.preventDefault();
    if (userName.length !== 0) {
      fetchData();
    }
  }


  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8 sm:gap-10 p-8 pt-8 sm:pt-12 ">
      {loading ? <div className="text-xl font-medium text-green-500 text-center ">Loading... Please Wait</div> : <form onSubmit={(e) => handleSubmit(e)} className="flex items-center justify-center gap-4">
        <input
          type="text"
          placeholder="Enter Github username"
          className="border-2 outline-none focus:ring-2 focus:ring-green-400 focus:border-0 rounded-lg pl-4 p-1 text-base min-w-[200px] "
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="bg-black text-white rounded-xl px-4 py-2 cursor-pointer font-medium hover:opacity-90 active:translate-y-2.5"
        >
          Search
        </button>
      </form>}
      {
        profile.length > 0 ? profile[0].message === "Not Found" ? <div className="text-xl font-medium text-red-500 text-center ">Invalid username</div> :
          <div className=" p-6 flex flex-col gap-4 items-center justify-center w-full max-w-[750px] bg-gray-300 shadow-2xl">
            <div className="p-2  rounded-full bg-white">
              <img src={profile[0].avatar_url
              } alt="profile picture of github profile holder" className="w-[150px] rounded-full" />
            </div>

            <div className="flex gap-4 items-center justify-center ">
              <a className="text-xl font-medium underline" href={profile[0].html_url}>{profile[0].
                login
              }
              </a>
              <p className="text-xl font-medium">User Joined on {new Date(profile[0].created_at).toLocaleDateString()
              }</p>
            </div>

            <p className="text-xl font-medium">Public Repos- <span className="text-white ">{profile[0].public_repos
            }</span></p>
            <p className="text-xl font-medium">Followers- <span className="text-white ">{profile[0].followers}</span></p>
            <p className="text-xl font-medium">Following- <span className="text-white ">{profile[0].following}</span></p>
            <div>
            </div>
          </div> : null




      }
    </div>
  );
}
