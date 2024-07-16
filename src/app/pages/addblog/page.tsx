import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";

export default function addBlog() {
  return (
    <main >
     <Navbar/>
      <h1>This is a add-blog page</h1>
    </main>
  );
}
