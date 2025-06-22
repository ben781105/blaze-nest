import { createSlice } from "@reduxjs/toolkit";

 const damyListings=[
   {
    id:1,
    name:'12 by 12 bed stand',
    image:'/imgs/kc-lodge.png',
    status:'brand new',
    price: '₦120000000',
    posted:'1hr ago'
   },
     {
    id:2,
    name:'Iphone 16',
    image:'/imgs/laptop.png',
    status:'brand new',
    price: '₦120000000',
    posted:'3hr ago'
   },
     {
    id:3,
    name:'Nice furniture',
    image:'/imgs/furniture2.jpg',
    status:'brand new',
    price: '₦120000000',
    posted: '5hr ago'
   },
     {
    id:4,
    name:'Laptop',
    image:'/imgs/gadgets.png',
    status:'brand new',
    price: '₦120000000',
    posted: '10hr ago'
   }


]

const initialState = {
  role: "student", 
  name: "Emma Smith",
  location: "Ifite Awka, Anambra State",
  isPublic: false,
  isVerified:false,
  bio:'A well known enterpreneur i sell all kinds of wear, brand new devices and london used. located at no.6 lodge hostel Akwa',
  profileImage: "/imgs/sarah.png",
  listings: damyListings

  
};

const profileSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPublicProfile(state) {
      state.isPublic = !state.isPublic;
    },
    setUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setPublicProfile, setUser } = profileSlice.actions;
export default profileSlice.reducer;
