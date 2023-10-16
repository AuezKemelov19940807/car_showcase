import { CarGetAxios } from '@/types'
import CarCard from './CarCard'
import ShowMore from './ShowMore'
import { ICarCardsProps } from '@/types'

const CarCards = async ({ allCars, isNext, pageNumber }: ICarCardsProps) => {
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-10">
        {!isDataEmpty ? (
          allCars?.map((car: CarGetAxios, index: number) => (
            <CarCard key={index} car={car} />
          ))
        ) : (
          <div className="w-full flex items-center justify-center font-semibold text-2xl ">
            <div>
              <p> Opps! No results</p>
            </div>
          </div>
        )}
      </div>
      {/* btn show more */}
      {!isNext && (
        <div className="flex mt-10 w-full items-center justify-center">
          <ShowMore pageNumber={pageNumber} />
        </div>
      )}
    </div>
  )
}

export default CarCards
