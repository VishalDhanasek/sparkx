import Link from 'next/link'
import Image from 'next/image'
import Logomain1 from '@/public/logowhite.png'



export default function LogoWhite() {
  return (
    
    <Link href="/" className="block" aria-label="Cruip">
      <Image
      src={Logomain1}
      width={140}
      height={75}
      alt="Innovation Geeks - Unlocking Your Digital Potential"
        />
    </Link>
  )
}
