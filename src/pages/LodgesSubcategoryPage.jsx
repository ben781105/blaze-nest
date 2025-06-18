import { useParams } from "react-router-dom";
import { SavedIcon } from "../components/icons";
function SubCategoryPage() {
  const params  = useParams();
  const subcategory = params.subcategory || "lodges";
  const subListings =[
    {
    id: 1,
    subcategory: "lodges",
    title: "Cozy Lodge in the City Center",
    location:"located at miracle junction",
    price: "₦50,000.00",
    image: "/imgs/jacey-lodge.png",
    vendorImage: "/imgs/sarah.png"
    },
    {
    id: 2,
    subcategory: "lodges",
    title: "Luxury Lodge with Pool",
    location:"located at miracle junction",
    price: "₦120,000.00",
    image: "/imgs/kc-lodge.png",
    vendorImage: "/imgs/teni.png"
    },
    {
    id: 3,
    subcategory: "land-property",
    title: "Prime Land for Sale",
    location:"located at miracle junction",
    price: "₦1,500,000.00",
    image: "/imgs/land3.jpg",
    vendorImage: "/imgs/sam.png"
    },
    {
    id: 4,
    subcategory: "commercial",
    title: "Commercial Space in Downtown",
    location:"located at miracle junction",
    price: "₦300,000.00/month",
    image: "/imgs/cozy-lodge.png",
    vendorImage: "/imgs/petri.png"
    },
    {
    id: 5,
    subcategory: "lodges",
    title: "Commercial Space in Downtown",
    location:"located at miracle junction",
    price: "₦300,000.00/month",
    image: "/imgs/commercial1.jpg",
    vendorImage: "/imgs/petri.png"
    },
    {
    id: 6,
      subcategory: "lodges",
      title: "Commercial Space in Downtown",
      location:"located at miracle junction",
      price: "₦300,000.00/month",
      image: "/imgs/commercial2.jpg",
      vendorImage: "/imgs/petri.png"
    },
    {
    id: 7,
    subcategory: "lodges",
    title: "Commercial Space in Downtown",
    location:"located at miracle junction",
    price: "₦300,000.00/month",
    image: "/imgs/commercial3.jpg",
    vendorImage: "/imgs/petri.png"
    },
    {
    id: 8,
    subcategory: "lodges",
    title: "Commercial Space in Downtown",
    location:"located at miracle junction",
    price: "₦300,000.00/month",
    image: "/imgs/hand-holding-keys.png",
    vendorImage: "/imgs/petri.png"
    },
    {
    id: 9,
    subcategory: "lodges",
    title: "Commercial Space in Downtown",
    location:"located at miracle junction",
    price: "₦300,000.00/month",
    image: "/imgs/commercial2.jpg",
    vendorImage: "/imgs/petri.png"
    },
    {
    id: 10,
    subcategory: "commercial",
    title: "Commercial Space in Downtown",
    location:"located at miracle junction",
    price: "₦300,000.00/month",
    image: "/imgs/com.jpg",
    vendorImage: "/imgs/petri.png"
    },
    {
    id: 11,
    subcategory: "commercial",
    title: "Commercial Space in Downtown",
    location:"located at miracle junction",
    price: "₦300,000.00/month",
    image: "/imgs/commercial2.jpg",
    vendorImage: "/imgs/petri.png"
  },
  {
    id: 12,
    subcategory: "commercial",
    title: "Commercial Space in Downtown",
    location:"located at miracle junction",
    price: "₦300,000.00/month",
    image: "/imgs/commercial1.jpg",
    vendorImage: "/imgs/petri.png"
    },
    {
    id: 13,
    subcategory: "commercial",
    title: "Commercial Space in Downtown",
    location:"located at miracle junction",
    price: "₦300,000.00/month",
    image: "/imgs/keys.jpg",
    vendorImage: "/imgs/petri.png"
    },
    {
    id: 14,
    subcategory: "land-property",
    title: "Commercial Space in Downtown",
    location:"located at miracle junction",
    price: "₦300,000.00/month",
    image: "/imgs/land2.jpg",
    vendorImage: "/imgs/petri.png"
    },
    {
    id: 15,
    subcategory: "land-property",
    title: "Commercial Space in Downtown",
    location:"located at miracle junction",
    price: "₦300,000.00/month",
    image: "/imgs/land4.jpg",
    vendorImage: "/imgs/petri.png"
    },
    {
    id: 16,
    subcategory: "land-property",
    title: "Commercial Space in Downtown",
    location:"located at miracle junction",
    price: "₦300,000.00/month",
    image: "/imgs/land5.jpg",
    vendorImage: "/imgs/petri.png"
    },

  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      
      { subListings
        .filter(listing => listing.subcategory === subcategory)
        .map(listing => (
        <div
              key={listing.id}
              className="bg-white border border-gray-300 relative shadow-md hover:shadow-lg transition"
            >
              <div className="h-50 w-full">
                <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover  mb-2"
              />
              </div>

              <h2 className="mt-4 ml-4 mr-4 text-sm">{listing.title}</h2>
              <p className=" ml-4 mr-4 text-sm">{listing.location}</p>
              <p className="ml-4 mr-4">{listing.price}</p>

              <div className="flex w-full p-4 items-center gap-3">
                <button className="mt-2 w-full cursor-pointer bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Message Agent Obi
                </button>
                
                  <img
                  className="object-cover w-13 h-13 rounded-full"
                  src={listing.vendorImage} 
                  alt="vendor" />
                
              </div>
              
              <span className="absolute top-54 right-5 border p-2 rounded-full">
                 <SavedIcon className="h-7 w-7"/>
              </span>
            </div>
        ))}
    </div>
  );
}

export default SubCategoryPage;
