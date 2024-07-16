"use client"//required

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import HomeSlider from "@/components/HomeSlider/homeslider";
import AutoHomeSlider from "@/components/HomeSlider/AutoHomeSlider";
import CategoriesSlider from "@/components/Categories/CategoriesSlider";
import BlogSlider from "@/components/blogcards/BlogSlider";
export default function Home() {
  return (
    <main >
     <Navbar/>
   {/*   <HomeSlider /> */}
     <AutoHomeSlider />
     <CategoriesSlider />
     <BlogSlider />
      <h1>This is a blog app</h1>
      <h1>--FOOTER--</h1>
    </main>
  );
}
