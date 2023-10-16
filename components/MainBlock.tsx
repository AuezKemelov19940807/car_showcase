// <-- page
//chadcn btn
import { Button } from './ui/button-custom'
//image next
import Image from 'next/image'

const MainBlock = () => {
  return (
    <div className="pt-20 mb-20 xl:mb-36 xl:pt-36 ">
      {/* container */}
      <div className="container px-6 xl:px-16">
        {/* block 1 & block 2 */}
        <div className="flex flex-col items-center xl:flex-row xl:gap-x-24">
          {/* block 1 */}
          <div className="xl:basis-2/5 w-full">
            {/* title */}
            <h1 className="2xl:text-[72px] xl:text-[64px] lg:text-[54px] md:text-[45px] text-[30px] font-bold xl:mb-5 mb-2">
              Find, book, rent a car—quick and super easy!
            </h1>
            {/* subtitle */}
            <p className="xl:text-3xl lg:text-2xl font-light xl:mb-10 mb-5 xl:leading-[45px]">
              Streamline your car rental experience with our effortless booking
              process.
            </p>
            {/* btn */}
            <div className="mb-5 flex justify-center md:justify-start">
              <Button>Explore cars</Button>
            </div>
          </div>
          {/* block 2 */}
          <div className="relative xl:basis-3/5 w-full pt-[50%]  xl:h-[490px]">
            {/* image */}
            <div>
              <Image
                src="/hero.png"
                fill
                style={{
                  objectFit: 'contain',
                }}
                alt=""
              />
            </div>
            {/* bg image */}
            <div className="hidden xl:flex absolute -top-[45%] -right-[85%] bg-hero-bg bg-repeat-round -z-10  xl:w-[1300px] h-screen overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBlock
