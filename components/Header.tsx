//next image
import Image from 'next/image'
//shadcn btn
import { Button } from './ui/button-custom'

const Header = () => {
  return (
    <header className="absolute w-full">
      <div className="container px-6 xl:px-16">
        {/* logo & button */}
        <nav className="flex items-center py-4">
          {/* logo */}
          <div className="flex-1">
            <Image src="/logo.svg" width={118} height={18} alt="logo" />
          </div>
          {/* button */}
          <Button variant={'white'}>Sign in</Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
