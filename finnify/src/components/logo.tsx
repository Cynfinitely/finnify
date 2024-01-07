import Image from 'next/image'

export default function Logo (){
    return <Image
    src="/logo_without_bg.png"
    alt="Finnify Logo"
    className="dark:invert"
    width={100}
    height={24}
    priority
  />
}