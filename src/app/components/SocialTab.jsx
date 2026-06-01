import Link from "next/link"
import Image from "next/image"

const SocialTab = ({ icon, url, name }) => {
  return (
    <div className="border-4 w-80 bg-black rounded-full">
      <Link
        href={url}
        className="flex flex-row bg-[#ffffff] hover:bg-green-200 rounded-full px-8 py-4 w-full"
      >
          <Image className="w-1/6" src={icon} alt={name} width={12} height={12} />
          <p className="w-4/5 items-center flex justify-center font-bold">{name}</p>
      </Link>
    </div>
  )
}

export default SocialTab