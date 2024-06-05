import { Link, useLoaderData } from "react-router-dom";
import { getBooks, getInSituImages } from "../books.js";
import Info from "../components/Info.jsx";
import logo2 from "/assets/logos/Fiery_Color_010_ok copy 2.png";
import logo3 from "/assets/logos/Fiery_Color_011 copy 2.png";
import logo4 from "/assets/logos/Fiery_Color_012 copy 2.png";
import logo5 from "/assets/logos/Fiery_Color_013 copy 2.png";
import logo6 from "/assets/logos/Fiery_Color_014 copy 2.png";
import logo7 from "/assets/logos/Fiery_Color_015 copy 2.png";
import logo8 from "/assets/logos/Fiery_Color_016 copy 2.png";
import logo9 from "/assets/logos/Fiery_Color_017 copy 2.png";
import logo10 from "/assets/logos/Fiery_Color_018 copy 2.png";
import logo11 from "/assets/logos/Fiery_Color_019 copy 2.png";
import logo12 from "/assets/logos/Fiery_Color_020 copy 2.png";
import logo13 from "/assets/logos/Fiery_Color_021 copy 2.png";
import dodecahedron from "/assets/IMG_7556 copy.jpeg";

export async function loader() {
  const books = await getBooks();
  const inSituImages = await getInSituImages();

  return { books, inSituImages };
}

export default function Root() {
  const { books, inSituImages } = useLoaderData();

  return (
    <>
      <div className="pt-3 pb-2 px-2.5">
        {books.map((book) => (
          <Link to={`books/${book.id}`} key={book.id} className="">
            <div className="flex pb-[0.5px] items-baseline">
              <img src={book.logo} className="w-10"></img>
              <h1 className="px-0.5 text-xs">{book.year}</h1>
            </div>
          </Link>
        ))}
        <div className="flex pb-[0.5px] items-baseline ">
          <img src={logo2} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo3} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo4} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo5} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo6} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo7} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo8} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo9} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo10} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo11} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo12} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
        <div className="flex items-baseline ">
          <img src={logo13} alt="" className="w-10" />
          <h1 className="px-0.5 text-xs">tbd</h1>
        </div>
      </div>
      <hr />
      <div className="px-2 py-2">
        <h1 className=" font-bold">e.bs</h1>
        <p className="text-xs pb-2">
          editionsbierisusanne-ebs is an artists&apos; book publisher with
          headquarters in Bern/CH and a second office in Bevagna/IT. ebs
          artists&apos; publications are produced in collaboration with artists and
          institutions according to their own rules.
        </p>
        <div className="grid sm:grid-cols-1  lg:grid-cols-1 justify-center gap-2 w-1/2 m-auto ">
          {inSituImages.map((inSituImage) => (
            <div key={inSituImage} className="">
              <img src={inSituImage}></img>
            </div>
          ))}
        </div>
      </div>
      <div className="px-3">
        <Info />
      </div>
      <div className="flex justify-center">
        <img src={dodecahedron} alt="" className="w-64 pb-5" />
      </div>
    </>
  );
}
