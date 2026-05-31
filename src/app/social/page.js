import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SocialTab from "../components/SocialTab";
import FacebookIcon from "../../../public/facebook.svg";
import GithubIcon from "../../../public/github.svg";
import LinkedinIcon from "../../../public/linkedin.svg";

export default function SocialPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen container mx-auto px-12 py-4 bg-white text-black">
      <h1>Truong Q. Nghia</h1>
      <div className="flex flex-col justify-center items-center">
        <SocialTab
          icon={FacebookIcon}
          url="https://facebook.com/quanghia24"
          name="Facebook"
        />
        <SocialTab
          icon={GithubIcon}
          url="https://github.com/quanghia24"
          name="Github"
        />
        <SocialTab
          icon={LinkedinIcon}
          url="https://linkedin.com/in/quanghia24"
          name="LinkedIn"
        />
      </div>
    </div>
  );
}
