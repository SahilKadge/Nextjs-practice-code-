"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [
    {name: "Register", href: "/signin"},
    {name:"Login", href:"/login"},
    {name: "Forgot Password", href: "/forgotpassword"},
];



export default function AuthLayout({
    children,
}:{
    children: React.ReactNode;
}){
    const [input, setInput] = useState("");
    const pathname = usePathname();
 
    return(
        <>
        <p>
        this will remount as template is use but if layout is used this will not remount 
        try to type in black box and then switch to login and register and forgot password 
        you will see that it will disapear the text but in layout it will not 
        </p>
        <div>  
            <input className="bg-black text-white" value={input} onChange={(e) => {setInput(e.target.value)}}/>
        </div>
        {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
                <Link href = {link.href} key={link.name}
                className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                    {link.name}
                </Link>
            )
        })}
    
        {children}
        </>
    )
}