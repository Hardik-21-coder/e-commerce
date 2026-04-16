"use client";

import { usePathname } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import Navbar from "./Navbar";
//import Footer from "./Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname.includes("/client/login") ||
    pathname.includes("/client/registration");

  return (
    <>
      {!hideLayout && <Navbar />}

      {children}

      {!hideLayout && <Footer />}
    </>
  );
}