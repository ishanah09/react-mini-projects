import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const url = "https://dummyjson.com/products?limit=100";

  function handleScrollPercentage() {


    let scrollHeight =
      document.body.scrollTop || document.documentElement.scrollTop;


      
    let totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    


    let scrollPercentage = (scrollHeight / totalHeight) * 100;
    scrollPercentage = scrollPercentage.toFixed(0);
    console.log(scrollPercentage);

    setProgress(scrollPercentage);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        let response = await fetch(url);
        let data = await response.json();
        setData(data.products);
        setloading(false);
        console.log(data.products);
      } catch (err) {
        console.log(err);
        setError(err);
        setloading(false);
      }
    }
    fetchData();

    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (error !== null) {
    return (
      <>
        <main className="w-full h-screen flex items-center justify-center p-4">
          <h1 className="text-3xl font-semibold text-red-600">Error !</h1>
        </main>
      </>
    );
  }

  if (loading) {
    return (
      <main className="w-screen h-screen flex items-center justify-center p-4">
        <h1 className="text-3xl  font-semibold">Loading data ! Please wait</h1>
      </main>
    );
  }

  return (
    <>
      <header className=" w-full bg-black fixed top-0">
        <div className="w-full h-[75px] bg-linear-to-br from-green-900 to bg-green-400 flex">
          <h1 className="text-3xl font-semibold text-white m-auto">
            Custom Scroll Indicator
          </h1>
        </div>

        <div
          className={`bg-linear-to-br from-red-900 to-red-300 h-[20px]  `}
          style={{ width: `${progress}%` }}
        ></div>
      </header>

      <main className="w-full flex flex-col items-center p-4 mt-[110px] pb-12">
        <ul className="flex flex-col items-center justify-center gap-6 text-[16px]">
          {data.map((item, index) => (
            <li key={index} className=" p-2 bg-gray-300 border-none">
              {item.title}{" "}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
