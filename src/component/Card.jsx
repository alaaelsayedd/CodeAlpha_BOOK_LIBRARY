import { useRef } from "react";
import { motion } from "framer-motion";

function Card({ imge, title, author, status,handleBookDetails }) {
    const cardRef = useRef(null);
    function handleCardMouseOver(){
      cardRef.current.classList.replace("opacity-100","opacity-0")
    }
    function handleCardMouseOut()
    {
        cardRef.current.classList.replace("opacity-0","opacity-100")
    }

  return (
    <>
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
      <div className="shadow-md border h-96 shadow-gray-400 rounded-sm relative  cursor-pointer hover:transform hover:scale-105 transition duration-700" onMouseOver={handleCardMouseOver}  onMouseOut={handleCardMouseOut} onClick={()=>{
        handleBookDetails(title)
      }}>
       <div className={`absolute top-0 right-0 p-2 ${status=="unread" ? "bg-red-700":"bg-green-600"} h-10 w-20 text-center  bg-opacity-75 text-white text-sm font-mono font-semibold rounded-sm transition-opacity duration-700 opacity-100`} ref={cardRef}>{status}</div>

        <div className="imge  h-2/3">
          <img src={imge} alt={title} className="h-full w-full object-cover" />
        </div>
        <div className="content text-center p-3 h-1/3 ">
          <h2 className="font-mono text-xl">{title}</h2>
          <p className="text-zinc-800 text-sm font-medium">{author}</p>
        </div>
      </div>
      </motion.div>
    </>
  );
}

export default Card;
