import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <h1 className="title">Profile</h1>
            <ul className="links">
                <Link href={"#"}><li>Home</li></Link>
               <Link href={"../about"}><li>about</li></Link> 
                <Link href={"../contact"}><li>contact</li></Link>
                <Link href={"../job"}><li>job</li></Link>
            </ul>
        </div>
    )
}