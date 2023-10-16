import { Dispatch, SetStateAction } from "react"

interface CarsProps {
    cars: Car[]
}

interface CarProps {
    value: string,
    label: string,
    icon?: React.ReactNode
}

interface SearchDetailsProps {
    manufacturer: CarProps,
    setManufacturer: (manufacturer) => void
}

interface CarGetAxios {
    city_mpg: number,
    class: string,
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}

interface FilterProps {
   manufacturer?: string
   year?: number
   fuel?: string,
   limit?: number
   model?: string
}


interface ICustomfilterProps {
    title: string
    options: IOptionsPros[]
}


interface IOptionsPros {
    title: string,
    value: string
}

interface IShowMoreProps {
    pageNumber: number
}

interface IModalComponentProps {
    openModal: () => void
    closeModal: () => void
    modalIsOpen: boolean
    car: CarGetAxios
}

interface ICarCatalogueProps {
    allCars: CarGetAxios[]
    isNext: boolean
    pageNumber: number
}

interface ICarCardsProps {
    allCars: CarGetAxios[]
    isNext: boolean
    pageNumber: number
}
  


