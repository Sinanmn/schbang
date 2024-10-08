import React from "react";
import img1 from "../assets/caseStudy/img1.png";
import img2 from "../assets/caseStudy/img2.jpg";

const CaseStudy = () => {
  return (
    <div className="flex flex-col px-4 lg:px-[100px] font-[sora]">
      <div className="w-full flex flex-col gap-3  justify-start mt-16">
        <p className="text-[19px] text-gray-700">Casestudy</p>
        <h1 className="font-bold text-6xl">
          Bringing together cricket fans with a fan-stack-tic film for a playing
          cards brand.
        </h1>
      </div>
      <div className="mt-20 mb-20 min-h-screen">
        <img className="h-full w-full rounded-tl-3xl rounded-tr-3xl " src={img1} />
      </div>

      <div className="flex justify-between mb-20">
      <div className=" w-[30%] flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-4xl">Services</h1>
          <ul className="list-none space-y-4 text-lg">
            <li className="cursor-pointer">Film & Video</li>
            <li className="cursor-pointer">Research, Data & Analytics Solutions</li>
            <li className="cursor-pointer">Media Solutions</li>
            <li className="cursor-pointer">Tech Solutions</li>
            <li className="cursor-pointer">Brand Solutions</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
        <h1  className="font-bold text-4xl">Industry</h1>
        <ul className="list-none space-y-4 text-lg">
          <li  className="cursor-pointer">Other Industries</li>
          <li  className="cursor-pointer">Gaming</li>
        </ul>
        </div>
        </div>

        <div className=" w-[70%]">

          <p className="text-lg leading-snug">Parksons Cartamundi aimed to launch their new card game by merging the passion of cricket fans with the excitement of card playing. As the merchandise sponsor of the Mumbai Indians, they wanted to capture Mumbai's vibrant culture and the competitive spirit of both games.</p> <br />
          <p className="text-lg leading-snug">We created the ad film "Asli Fan Khelta Hai!" to celebrate the joy of playing and the spirit of Mumbai Indians supporters. The film follows a dedicated fan navigating Mumbai, encountering fellow enthusiasts like taxi drivers, fishermen, dabbawalas, and gully cricket players. Each scene showcases how their shared love for cricket and cards unites them, highlighting Mumbai's diverse and energetic fan culture.</p><br />
          <p className="text-lg leading-snug">The campaign successfully launched Parksons Cartamundi's card game, resonating deeply with audiences. "Asli Fan Khelta Hai!" celebrated Mumbai’s passionate fan culture, showing how playing cards can unite people across boundaries. This strengthened the brand's connection with the Mumbai Indians fan base, creating a memorable and impactful brand experience.</p><br />
        </div>
      </div>

      <div className="mb-20 video-container w-full h-[715px]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-10 mb-20 min-h-screen">
        <img className=" rounded-bl-3xl rounded-br-3xl h-full w-full" src={img2} />
      </div>
    </div>
  );
};

export default CaseStudy;
