import SocialTab from "../components/SocialTab";
import FacebookIcon from "../../../public/facebook.svg";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import goodntImage from "../../../public/images/goodnt.jpg";
import Image from "next/image";

export default function SocialPage() {
  return (
    <>
      <div className=" border-4 border-black flex sm:hidden flex-col items-center min-h-screen bg-[#FFF2D4] text-black pt-8 relative overflow-hidden">
        <div className="flex flex-col items-center w-full max-w-md">
          <div className="relative group">

            <Image
              src="/images/face.png"
              alt="hero image"
        className="rounded-full border-4 border-black mt-12"
              width={150}
              height={150}
            />
          </div>

          <h1 className="text-3xl font-extrabold mt-8 mb-2 tracking-tight text-transparent bg-clip-text bg-linear-to-r from-slate-900 to-slate-600">Truong Q. Nghia</h1>
          <p className="text-slate-500 font-medium mb-10">nghiatruong1.dev@gmail.com</p>

          <div className="flex flex-col items-center w-full gap-5">
            <SocialTab
              icon={FacebookIcon}
              url="https://facebook.com/quanghia24"
              name="Facebook"
            />
            <SocialTab
              icon={LinkedinIcon}
              url="https://linkedin.com/in/quanghia24"
              name="LinkedIn"
            />
            <SocialTab
              icon={GithubIcon}
              url="https://github.com/quanghia24"
              name="Github"
            />
          </div>
        </div>

        <Image src={goodntImage} alt="goodnt" className="w-full h-auto mt-16 "/>
      </div>

      <div className="hidden sm:flex flex-col items-center justify-center min-h-screen bg-[#FFF2D5] text-slate-900 p-8 text-center relative overflow-hidden">
        {/* Subtle background glow for desktop view */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-md p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50">
          <svg className="w-20 h-20 mx-auto mb-6 text-blue-500 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <h2 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">Mobile Only Experience</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            This social links page is designed exclusively for mobile screens. Please open this URL on your phone to view it.
          </p>
        </div>
      </div>
    </>
  );
}
