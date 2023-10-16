'use client'
import { Fragment, useState } from 'react'
//data
import { cars } from '@/constants'
//headlessui
import { Combobox, Transition } from '@headlessui/react'
//icons
import { CheckIcon } from '@heroicons/react/20/solid'
//type
import { SearchDetailsProps } from '@/types'

const SearchDetails = ({
  manufacturer,
  setManufacturer,
}: SearchDetailsProps) => {
  const [query, setQuery] = useState<string>('')
  const filteredCars =
    query === ''
      ? cars
      : cars.filter((car) =>
          car.value
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <Combobox value={manufacturer} onChange={setManufacturer}>
      <div className="relative w-full">
        <div className=" w-full bg-gray-100 py-3 px-14 rounded-full rounded-r-full  md:rounded-r-none">
          <Combobox.Button className="absolute inset-y-0 left-0 flex items-center pl-3">
            <div className="ml-3">{manufacturer.icon}</div>
          </Combobox.Button>
          <Combobox.Button>
            <Combobox.Input
              className="outline-none bg-gray-100"
              displayValue={(item: { value: string }) => item.value}
              onChange={(event) => setQuery(event.target.value)}
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm overflow-y-scroll  scrollbar-thin scrollbar-thumb-[#0048BA] scrollbar-track-gray-100 cursor-pointer z-10">
            {filteredCars.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredCars.map((car) => (
                <Combobox.Option
                  key={car.value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4  ${
                      active ? 'bg-[#2B59FF] text-white' : 'text-gray-900'
                    }`
                  }
                  value={car}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {car.value}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-[#2B59FF]'
                          }`}
                        >
                          <CheckIcon className="w-5 h-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}

export default SearchDetails
