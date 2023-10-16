// <-- page
//components
import Search from './Search'
import CarCards from './CarCards'
//type
import { ICarCatalogueProps } from '@/types'

const CarCatalogue = ({ allCars, isNext, pageNumber }: ICarCatalogueProps) => {
  return (
    <div className="mb-10">
      <div className="container px-6 xl:px-16">
        <div className="mb-10">
          {/* title */}
          <h2 className="text-3xl font-semibold mb-5">Car Catalogue</h2>
          {/* subtitle */}
          <p>Explore out cars you might like</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-10 ">
          {/* search */}
          <div className="w-full">
            <Search />
          </div>
        </div>
        <CarCards allCars={allCars} isNext={isNext} pageNumber={pageNumber} />
      </div>
    </div>
  )
}

export default CarCatalogue
