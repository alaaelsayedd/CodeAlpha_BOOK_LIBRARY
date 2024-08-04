import { useState } from "react";
import data from "../data";
import Aside from "./Aside";
import Card from "./Card";
import { motion } from "framer-motion";

function Home() {
  const [bookDetails, setBookDetails] = useState(
    data.personal_library.books[0]
  );
  const [bookData, setData] = useState(data.personal_library.books);
  function handleBookDetails(title) {
    setBookDetails(
      bookData.find((arr) => {
        return arr.title == title;
      })
    );
  }
  function handleSearch(value) {
    if (value != "") {
      setData(
        data.personal_library.books.filter((book) => {
          return book.title.toLowerCase().includes(value.toLowerCase().trim());
        })
      );
    } else {
      setData(data.personal_library.books);
    }
  }
  function handleCategorey(value) {
    if (value != "All") {
      setData(
        data.personal_library.books.filter((book) => {
          return book.category
            .toLowerCase()
            .includes(value.toLowerCase().trim());
        })
      );
    } else {
      setData(data.personal_library.books);
    }
  }

  return (
    <>
      <div className=" flex flex-col container mx-auto py-5 my-3 gap-x-2 gap-y-4 px-2 ">
        <div className="flex  justify-between items-start   w-1/2 sm:w-2/3  lg:w-3/4   ">
          <input
            type="search"
            className="w-1/2 border border-zinc-300 py-1 px-2 focus:outline-none rounded-md "
            placeholder="Search by BookName"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <select
            name=""
            id=""
            className="w-2/5  lg:w-1/4  border border-zinc-300 py-1 px-2 focus:outline-none rounded-md  text-zinc-700  "
            onChange={(e) => {
              handleCategorey(e.target.value);
            }}
          >
            <option selected> All</option>
            <option value="Classic Literature">Classic Literature</option>
            <option value="History">History</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Literary Fiction">Literary Fiction</option>
          </select>
        </div>

        <div>
          <div className="grid lg:grid-cols-4 lg:gap-5   sm:grid-cols-2  gap-2  grid-cols-1   w-1/2 sm:w-2/3  lg:w-3/4">
            {bookData.map((arr, index) => {
              return (
               
                  <Card
                    key={index}
                    imge={arr.image}
                    title={arr.title}
                    author={arr.author}
                    status={arr.status}
                    handleBookDetails={handleBookDetails}
                  />
               
              );
            })}
          </div>
          <div className="border lg:w-1/4 sm:w-1/3 fixed right-0 top-0 bottom-0 w-1/2 flex gap-3 flex-col overflow-y-auto scrollbar-custom">
            <h1 className="text-2xl text-center p-2 font-mono  ">
              {" "}
              Your Personal Library
            </h1>
            <motion.div
                  className="box"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
            <Aside bookDetails={bookDetails} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
