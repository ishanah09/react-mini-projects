import { useEffect, useState } from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaCircle,
} from "react-icons/fa";

export default function ImageSlider() {
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [slider, setSlider] = useState(0);
  let url = "https://picsum.photos/v2/list";
  let page = "1";
  let limit = "10";

  useEffect(() => {
    async function fetchdata() {
      try {
        setloading(true);
        let response = await fetch(`${url}?page=${page}&limit=${limit}`);
        let data = await response.json();

        setImages(data);
        setloading(false);
      
      } catch (err) {
        setError(err.message);
        setloading(false);
      }
    }
    fetchdata();
  }, []);

  function handleLeftClick() {
    if (slider > 0) {
      setSlider(slider - 1);
    } else {
      setSlider(images.length - 1);
    }
  }

  function handleRightClick() {
    if (slider < images.length - 1) {
      setSlider(slider + 1);
    } else {
      setSlider(0);
    }
  }

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
    <div className="w-screen h-screen flex items-center justify-center">
      <section className="w-[600px]  bg-red-50 rounded-xl relative">
        <FaArrowAltCircleLeft
          onClick={() => handleLeftClick()}
          className="absolute left-8 size-10 top-[50%] translate-y-[-50%] cursor-pointer text-white "
        />
        <FaArrowAltCircleRight
          onClick={() => handleRightClick()}
          className="absolute right-8 size-10 top-[50%] translate-y-[-50%] cursor-pointer text-white "
        />

        {
          <div className="absolute bottom-8  left-[50%] translate-x-[-50%] flex gap-2">
            {images.map((item, index) => {
              return (
                <FaCircle
                  key={index}
                  onClick={() => setSlider(index)}
                  className={`size-4  text-gray-400 cursor-pointer ${
                    slider == index && "text-white"
                  }`}
                />
              );
            })}
          </div>
        }

        {images.map((item, index) => {
          return (
            <img
              key={index}
              src={item.download_url}
              alt="imges"
              className={`rounded-xl ${slider !== index && "hidden"}`}
            />
          );
        })}
      </section>
    </div>
  );
}
