import { useLoaderData } from "react-router-dom";
import { getBook } from "../books";
import ImageSlider from "../components/ImageSlider";
import { Navbar } from "../components/Navbar";

export async function loader({ params }) {
  console.log({ params });
  const book = await getBook(params.bookId);
  if (!book) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { book };
}

const containerStyles = {
  width: "500px",
  height: "auto",
  margin: "0 auto",
};

export default function Book() {
  const { book } = useLoaderData();
  let pictures = book.images;
  let videos = book.media;

  return (
    <>
      <div className="">
        <div className="">
          <h2 className="flex absolute py-1 inset-x-0 top-0 justify-center">
            {book.bookTitle} by {book.artist}
          </h2>
          <Navbar />
        </div>
        <div className="bg-neutral-100 ">
          <div style={containerStyles} >
            <ImageSlider pictures={pictures} videos={videos} />
          </div>
        </div>
        <div >
          <div className="m-4 grid grid-cols-1 sm:grid-cols-12 gap-4 text-xs ">
            <div className="sm:col-span-8 py-1">
              <p >{book.attribution}</p>
             
              <p className="py-2">{book.notes}</p>
              <br />
              <p><b>{book.bio}</b></p>
            </div>
            <div className="sm:col-span-4 text-xs px-4 ">
              <div className="grid grid-cols-6 sm:col-span-2 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Logo{" "}</h3>
                <img src={book.logo} alt={book.artist} className="w-10" />
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Artist </h3>
                <h3 className="sm:col-span-3">{book.artist}</h3>
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1">
                <div className="sm:col-span-2 ">
                  <h3 >Format</h3>
                </div>
                <div className="sm:col-span-3 ">
                  <h3 >{book.size}</h3>
                  <h3 >{book.pages} pages</h3>
                </div>
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Binding</h3>
                <h3 className="sm:col-span-3">{book.binding}</h3>
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Edition</h3>
                <h3 className="sm:col-span-3">{book.edition} Edition, {book.editionAmount} copies</h3>
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1">
                <h3 className="sm:col-span-2 ">Price</h3>
                <h3 className="sm:col-span-3">{book.price}</h3>
              </div>
              <hr />
              <div className="grid grid-cols-6 items-baseline py-1 gap-1">
                <h3 className="sm:col-span-2 ">Artist's Website</h3>
                <h3 className="sm:col-span-3"><a href="https://isabellecornaro.com/"><b>isabellecornaro.com</b></a></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
