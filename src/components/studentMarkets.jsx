import { useState } from "react";
import { useNavigate,Outlet,useLocation } from "react-router-dom";
import { motion as Motion, AnimatePresence} from "framer-motion";


function StudentMarkets() {
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigate = useNavigate()
  const location = useLocation()
  const isPostAdd = location.pathname.includes('post-add')

  const categories = [
    {
      id: 1,
      name: "Lodges&Property",
      image: "/imgs/cozy-lodge.png",
      hasSubcategories: true,
      subCategories: [
        { id: 1, name: "Lodges", image: "/imgs/cozy-lodge.png" },
        { id: 2, name: "Land-Property", image: "/imgs/land3.jpg" },
        { id: 3, name: "Commercial", image: "/imgs/furniture6.jpg" },
      ],
    },
    { id: 2, name: "Phones&Gadgets", image: "/imgs/laptop.png" },
    { id: 3, name: "Furniture", image: "/imgs/furniture6.jpg" },
    { id: 4, name: "Clothes&Accessories", image: "/imgs/clothes1.jpg" },
    { id: 5, name: "Cosmetics", image: "/imgs/cosmetics2.jpg" },
    { id: 6, name: "Cars&Automobile", image: "/imgs/car3.jpg" },
  ];

  const handleSubcategoryOpen = (category) => {
    setSelectedSubcategories(category.subCategories);
    setShowSubcategories(true);
  };

  const handleCloseModal = () => {
    setShowSubcategories(false);
    setSelectedSubcategories([]);
  };

  return (
    <section className="flex-grow bg-white pl-4 md:pl-9 pr-4 pt-6">
      {!isPostAdd && (
        <>
      <h1 className="text-2xl md:text-4xl font-semibold">Select category</h1>
      <div className="grid grid-cols-1 gap-6 mt-4">
        {categories.map((category) => {
          const content = (
            <div
              key={category.id}
              className="relative flex overflow-hidden w-full h-30 sm:h-50 md:h-40  shadow-lg hover:shadow-md transition-shadow cursor-pointer"
              onClick={()=>{
                setSelectedCategory(category.name);
                if(category.hasSubcategories){
                  handleSubcategoryOpen(category)
                }
                else{
                  navigate("post-add",{
                    state:{category: category.name}
                })
                }
              }}
            >
              <div className="w-1/3 md:w-50  h-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex items-center justify-between flex-1 p-3">
                <p className="text-xl md:pl-7">{category.name|| selectedCategory}</p>

                {category.hasSubcategories && (
                  <img
                    src="/svgs/right-arrow-icon.svg"
                    alt="arrow"
                    width={24}
                    className="w-6 h-6 md:mr-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSubcategoryOpen(category);
                    }}
                  />
                )}
              </div>
            </div>
          );

          return category.hasSubcategories ? (
            content
          ) : (
            
              content
            );
        })}
      </div>

      {/* Subcategory Modal */}
      <AnimatePresence>
        {showSubcategories && (
          <Motion.div
            className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <Motion.div
              className="bg-blue-200 w-11/12 sm:w-4/5 md:w-5/6 lg:w-6/7 p-4 rounded-lg shadow-xl relative"
              initial={{ scale: 0.8, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              
              <ul className="space-y-3">
                {selectedSubcategories.map((sub) => (
                 <li
              key={sub.id}
              className="relative flex overflow-hidden w-full h-20 sm:h-25 shadow-lg hover:shadow-md transition-shadow cursor-pointer"
              onClick={()=>{
                navigate("post-add",{
                  state:{category: sub.name}
              })
              }}
              
            >
              <div className="w-1/3 sm:w-30 h-full overflow-hidden">
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center bg-white justify-between flex-1 p-3">
                <p className="text-xl">{sub.name}</p>
              </div>
            </li>
                ))}
              </ul>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
      </>
      )}
      
      <Outlet/>
    </section>
  );
}

export default StudentMarkets;
