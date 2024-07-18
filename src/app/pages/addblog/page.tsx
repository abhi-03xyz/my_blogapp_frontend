import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import "./addblog.css"



export default function Addblog() {
  return (
    <div>
      <Navbar />
      <div className="addblog_in">
        <h1 className="head1">Add Blog</h1>
        <form style={{
          width: "70%",
          minWidth: "250px",
          display: "flex",
          flexDirection: "column",
          margin: "20px",
          // alignContent:"center",
          
        }}>
          <div className="forminput_cont">
            <label> Blog Name</label>
            <input type="text" placeholder="Enter Blog Title" />
          </div>

          <div className="forminput_cont">
            <label> Blog Desciption </label>
            <textarea placeholder="Enter Blog Desciption" />
          </div>

          <div className="forminput_cont">
            <label> Blog Image</label>
            <input type="file" />
          </div>

          <div className="paragraph">

            <div className="forminput_cont">
              <label> paragraph Name</label>
              <input type="text" placeholder="Enter paragraph Title" />
            </div>

            <div className="forminput_cont">
              <label> paragraph Desciption </label>
              <textarea placeholder="Enter paragraph Desciption" />
            </div>

            <div className="forminput_cont">
              <label> paragraph Image</label>
              <input type="file" />
            </div>
            <button type="submit" className="main_button">Add More Paragraphs</button>
          </div>
          <button type="submit" className="main_button">Submit</button>

        </form>
      </div>

    </div>
  )
}

