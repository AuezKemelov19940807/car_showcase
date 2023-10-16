//components
import MainBlock from '@/components/MainBlock'
import CarCatalogue from '@/components/CarCatalogue'
import { FilterProps } from '@/types'
import { getCars } from '@/utils'

interface IHomeProps {
  searchParams: FilterProps
}

export default async function Home({ searchParams }: IHomeProps) {
  const allCars = await getCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  })

  return (
    <main className="overflow-hidden">
      <MainBlock />
      <CarCatalogue
        allCars={allCars}
        pageNumber={(searchParams.limit || 10) / 10}
        isNext={(searchParams.limit || 10) > allCars.length}
      />
    </main>
  )
}
