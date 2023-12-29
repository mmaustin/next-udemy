'use client';

import { Toaster } from "react-hot-toast";

//this is how we use global wrappers, such as redux, in next



const Providers = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}
export default Providers