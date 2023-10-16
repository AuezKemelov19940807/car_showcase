//<-- CarCatalogue
'use client'
import { useState } from 'react'
//icons
import { IoCarSportSharp } from 'react-icons/io5'
//components
import SearchDetails from './SearchDetails'
import SearchButton from './SearchButton'
//data
import { cars } from '@/constants'
//navigation
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Customfilter from './Customfilter'

import { fuels, yearsOfProduction } from '@/constants'

const Search = () => {
  //manufacturer state
  const [manufacturer, setManufacturer] = useState(cars[5])
  //model state
  const [model, setModel] = useState<string>('')

  //next router
  const router = useRouter()
  //next searchParams
  const searchParams = useSearchParams()!
  //next pathname
  const pathname = usePathname()
  //search click
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (manufacturer.value.trim() === '' && model.trim() === '') {
      return alert('Please provide some input')
    }

    updateSearchParams(model, manufacturer)
  }
  //update search params
  const updateSearchParams = (
    model: string,
    manufacturer: { value: string }
  ) => {
    const params = new URLSearchParams(searchParams)
    if (model) {
      params.set('model', model)
    } else {
      params.delete('model')
    }

    if (manufacturer) {
      params.set('manufacturer', manufacturer.value)
    }

    router.push(`${pathname}?${params.toString().toLowerCase()}`)
  }

  return (
    <form className="w-full" onSubmit={handleSearch}>
      <div className="flex w-full flex-col lg:flex-row lg:items-center gap-y-5 lg:gap-y-0">
        <div className="flex  w-full flex-col md:items-center md:flex-row gap-y-2">
          <div className="flex w-full max-w-[370px] items-center">
            <SearchDetails
              manufacturer={manufacturer}
              setManufacturer={setManufacturer}
            />
            {/* btn */}
            <SearchButton otherClasses="md:hidden" />
          </div>
          <div className="flex items-center max-w-[370px]">
            <div className="flex w-full items-center  bg-gray-100 py-3 rounded-full md:rounded-l-none md:rounded-r-full">
              <IoCarSportSharp className="text-2xl w-5 h-5 flex shrink-0  grow-0 text-gray-500 ml-6" />
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="E46..."
                className="ml-3 outline-none bg-gray-100"
              />
            </div>
            <SearchButton otherClasses="md:hidden" />
          </div>
          <SearchButton otherClasses="hidden md:flex" />
        </div>
        {/* Custom filters */}
        <div className="flex gap-x-2">
          <Customfilter title="Fuel" options={fuels} />
          <Customfilter title="Year" options={yearsOfProduction} />
        </div>
      </div>
    </form>
  )
}

export default Search
