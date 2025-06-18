import { useEffect, useState } from "react"
function StudentBookmarks(){
   const [bookmarked,setBookmarked] = useState([])

useEffect(() => {
  const stored = localStorage.getItem("studentBookmarks");
  if (stored) {
    setBookmarked(JSON.parse(stored));
  }
  else {
    setBookmarked([]);
  }
}, []);
    return(
      <section className="pl-4 pr-4 mt-9 overflow-x-hidden flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Recent Bookmarks</h1>
        {bookmarked.map((bookmark)=>
         <div className="flex gap-4 md:gap-8  bg-white  rounded-lg">
          <div className="w-[50%] md:w-[40%] h-60 md:h-70 overflow-hidden rounded-lg">
            <img 
            className="w-full h-full object-cover"
            src={bookmark.image} alt={bookmark.title} /></div>
          <div className="flex flex-col justify-start pt-6 w-[50%]">
            <p>{bookmark.category}</p>
            <p>{bookmark.title}</p>
            <p>{bookmark.price}</p>
            <button className="bg-blue-500 w-50 text-white py-2 px-4 rounded hover:bg-blue-600 mt-10 self-center">
              Contact Vendor
            </button>
          </div>
         </div>
        )}
      </section>
    )
    
}
export default StudentBookmarks