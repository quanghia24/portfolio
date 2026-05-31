import Link from "next/link"
import Image from "next/image"

const SocialTab = ({ icon, url, name }) => {
  return (
    <Link
      href={url}
      className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-linear-to-br bg-black-500 bg-slate-800 text-black mt-3"
    >
      <span className="flex flex-row items-center justify-between block bg-[#ffffff] hover:bg-gray-100 rounded-full px-5 py-2 w-[200px]">
        <Image src={icon} alt={name} width={24} height={24} />
        <p className="font-bold">{name}</p>
      </span>
    </Link>
  )
}

export default SocialTab