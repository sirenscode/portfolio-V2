import Image from "next/image";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main className="h-min-screen h-[100vh] flex flex-col w-full bg-[radial-gradient(90.40%_89.55%_at_90%_0.29%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.00)_100%)] ">
      <NavBar/>
      <div className="w-full h-full mt-[100px] flex flex-col items-center justify-center">
        <div className="flex flex-col gap-[10px]">
          <p className="w-1/2 text-center text-[.9em] text-[rgba(255,255,255,0.7)]" style={{fontFamily:"font light"}}>I AM</p>
          <div className="flex flex-col">
            <div className="w-[100px] h-[1px] bg-[#FFF]"></div>
            <h1 className="text-[8em] tracking-wider drop-shadow-[10]" style={{fontFamily:"Hurme Geometric Sans"}}>SIRENGO</h1>
            <div className="ml-[auto] w-[100px] h-[1px] bg-[#FFF]"></div>
          </div>
          
          <p className="w-full text-right text-[.9em] text-[rgba(255,255,255,0.7)]" style={{fontFamily:"font light"}}>A JUNIOR WEB DEVELOPER</p>
        </div>
        
        
        
      </div>
      <div className="flex flex-row pl-[30px] pb-[20px]">
        <div className="flex flex-col gap-[10px]">
            <a href="#facebook"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#FFF" d="M13 9h4.5l-.5 2h-4v9h-2v-9H7V9h4V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C13.698 2.186 14.345 2 16.128 2c.522 0 .98.05 1.372.15V4h-1.372c-1.324 0-1.727.078-2.139.298a1.63 1.63 0 0 0-.691.692c-.22.411-.298.814-.298 2.138z"/></svg></a>
            <a href="#twitter"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#FFF" d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"/></svg></a>
            <a href="#instagram"><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#FFF" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg></a>
        </div>
        <div className="ml-[auto] rotate-90 flex flex-row items-center justify-center relative gap-[10px]">
          <a href="#scroll" className="text-[.7em]">SCROLL DOWN</a>
          <div className="w-[20px] bg-[#FFF] h-[2px]"></div>
        </div>
      </div>
      

    </main>
  );
}
