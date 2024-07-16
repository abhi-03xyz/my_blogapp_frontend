"use client"//required

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

export default function signup() {
  return (
    <div >
     <Navbar/>
        <div className="signup">
            <div className="left">

            </div>
            <div className="right">
                <form >
                    <div className="forminput_cont">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Your Name" />
                    </div>
                    <div className="forminput_cont">
                        <label>Email</label>
                        <input type="email" placeholder="Enter Your Email"/>
                    </div>
                    <div className="forminput_cont">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <div className="forminput_cont">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="main_btn">Register</button>
                    <p>Already have an account? <Link href={"/Authentication/signin"}>login</Link></p>
                </form>
            </div>
        </div>
    </div>
  );
}
