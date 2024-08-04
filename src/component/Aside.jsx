function Aside({ bookDetails }) {
  return (
    <>
      <div className="flex flex-col gap-y-2 px-4 font-serif text-zinc-800">
        <div className="img">
          <img src={bookDetails.image} alt={bookDetails.title} />
        </div>
        <div className="content flex flex-col gap-y-2 ">
          <h2 className="text-2xl  ">{bookDetails.title}</h2>

          <p>
            <span className="font-semibold"> Author:</span>
            {bookDetails.author}
          </p>
          <p>
            <span className="font-semibold">Year:</span>
            {bookDetails.year}
          </p>
          <p>
            <span className="font-semibold">Status: </span>
            {bookDetails.status}
          </p>
          <p>
            <span className="font-semibold">Category: </span>
            {bookDetails.category}
          </p>
          <p>
            <span className="font-semibold">Genre: </span>
            {bookDetails.genre}
          </p>
          <div>
            <h3 className=" font-medium text-lg mt-4 mb-1">Borrow History</h3>

            {bookDetails.borrow_history.length > 0 ? (
              bookDetails.borrow_history.map((person,index) => {
                return (
                  <div className="p-3 my-3  text-sm   border shadow-sm  flex flex-col gap-y-2  rounded-sm" key={index}>
                    <p>
                      <span className="font-semibold">borrower: </span>
                      {person.borrower}
                    </p>
                    <p>
                      <span className="font-semibold">borrow_date: </span>
                      {person.borrow_date}
                    </p>
                    <p>
                      <span className="font-semibold">return_date: </span>
                      {person.return_date}
                    </p>
                  </div>
                );
              })
            ) : (
              <div className="text-lg font-extralight"> No One </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Aside;
