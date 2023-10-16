'use client'
import { Fragment, useState } from 'react'
//headless
import { Listbox, Transition } from '@headlessui/react'
//icons
import { ChevronUpDownIcon } from '@heroicons/react/20/solid'
//type
import { ICustomfilterProps } from '@/types'
//router navigation
import { useRouter } from 'next/navigation'
//update search params
import { updateSearchParams } from '@/utils'
const Customfilter = ({ title, options }: ICustomfilterProps) => {
  // router navigation
  const router = useRouter()
  //state
  const [selected, setSelected] = useState(options[0])

  //add router params
  const handleUpdate = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(
      title.toLowerCase(),
      e.value.toLowerCase()
    )
    router.push(newPathName.toString())
  }

  return (
    <div className="w-[130px] z-10">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e)
          handleUpdate(e)
        }}
      >
        <div className="relative">
          {/* open select */}
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.title}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-blue-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          {/* animation */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className=" absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm overflow-y-auto  scrollbar-thin scrollbar-thumb-[#0048BA] scrollbar-track-gray-100 cursor-pointer ">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-400 text-white' : 'text-gray-900'
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.title}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default Customfilter
