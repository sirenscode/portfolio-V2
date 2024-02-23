import Image from "next/image";

const NavBar: React.FC = () =>{
    return(
        <div className="w-full fixed p-[30px] flex flex-row items-center">
            <div className="">
                <a href="#"><Image src="/images/Logo.png" alt="logo" width={100} height={100}/></a>
            </div>
            <div className="ml-[auto] text-[.7em] flex flex-row gap-[20px] font-light tracking-widest text-[rgba(255, 255,255,0.7)]" style={{fontFamily:"font light"}}>
                <a href="#projects" className="navlink" id="navlink">PROJECTS</a>
                <a href="#contact" className="navlink" id="navlink">CONTACT</a>
            </div>
            
        </div>
    )
}

export default NavBar;