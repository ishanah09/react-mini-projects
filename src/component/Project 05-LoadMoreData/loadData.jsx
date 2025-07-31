import { useEffect, useState } from "react";

export default function LoadData() {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(count);

  function handleClick() {
    setCount(count + 1);
  }
  useEffect(() => {
    async function fetchdata() {
      try {
        setLoading(true);
        let response = await fetch(
          ` https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        let data = await response.json();

        setImages([...images, ...data.products]);
        setLoading(false);

        console.log(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchdata();
  }, [count]);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <span className="text-2xl font-semibold text-green-400">
          Loading Data! Please Wait
        </span>
      </div>
    );
  }

  if (error !== null) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <span className="text-2xl font-semibold text-red-500">{error}</span>
      </div>
    );
  }
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap gap-[1%] gap-y-4">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              className="border-2 flex flex-col items-center justify-center w-[24%] p-2 gap-2"
            >
              <img
                src={item.thumbnail}
                alt=""
                className="w-[200px] h-[200px]"
              />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>

      <button
        disabled={count === 4}
        onClick={() => handleClick()}
        className="bg-gray-400 py-2 px-4 cursor-pointer rounded-2xl text-white "
      >
        Load More Data
      </button>
      {count === 4 && <span>Limits Reached</span>}
    </div>
  );
}
