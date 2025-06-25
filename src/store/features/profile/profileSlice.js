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
  listings: damyListings,
  VerificationInProgress: false,
  VerificationStartedAt:'May 21,2025', 
   verificationSteps: [
    { id: 1, 
      label: 'Email Confirmation', 
      completed: true, 
      success:'Your email address has been successfully verified',
      inProgress:'Your email address will be verified soon, please wait a moment...' ,
      verifiedOn: 'May 21,2025',
    },
    { id: 2, 
      label: 'ID Document Upload', 
      completed: true,
      success:'Your identification documents have been successfully uploaded',
      inProgress:'Your identification documents are still under review please wait a moment...' ,
      uploadedOn: 'May 21,2025',
      documentFront: '/imgs/front-id.png',
      documentBack: '/imgs/back-id.png',
    },
    { id: 3,
      label: 'Review',
      completed: false,
      success:'Congratulations! Your documents have been successfully verified and accepted by our team',
      inProgress:'Our team is reviewing your submitted documents. This typically takes 1-2 business days',
      reviewStartedOn: 'May 21,2025',
      estimatedCompletion: 'May 23,2025'
    }
  ], 
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
