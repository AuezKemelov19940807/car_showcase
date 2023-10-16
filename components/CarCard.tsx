'use client'
import { useState, FC } from 'react'
//next image
import Image from 'next/image'
//react icons
import { GiSteeringWheel } from 'react-icons/gi'
import { MdLocalGasStation } from 'react-icons/md'
import { GiGearStickPattern } from 'react-icons/gi'
//btn
import ButtonWithIcon from './ui/button-with-icon'
// type
import { CarGetAxios } from '@/types'
//components
import ModalComponent from './ModalComponent'
//get image cars
import { generateCarImageUrl } from '@/utils'
//modal
import Modal from 'react-modal'
//calc rent
import { calculateCarRent } from '@/utils'

Modal.setAppElement('body')
interface ICarCardProps {
  car: CarGetAxios
}

const CarCard: FC<ICarCardProps> = ({ car }) => {
  //modal state
  const [modalIsOpen, setIsOpen] = useState(false)
  //calc rent car
  const calc = calculateCarRent(car.city_mpg, car.year)
  //open modal
  function openModal() {
    setIsOpen(true)
  }
  //close modal
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <div className="bg-[#F5F8FF] group inline-flex rounded-3xl w-full h-full">
        <div className="inline-flex flex-col p-5 rounded-3xl  group-hover:bg-white group-hover:shadow-md w-full h-full">
          {/* title */}
          <h2
            onClick={openModal}
            className="font-semibold flex-1 text-xl capitalize cursor-pointer"
          >
            {car.make} {car.model}
          </h2>
          {/* sub title */}
          <div className="flex mt-6">
            <span className="flex items-start text-[13px]">$</span>
            <span className="text-2xl font-bold">{calc}</span>
            <span className="flex items-end text-[13px]">/day</span>
          </div>
          <div
            onClick={openModal}
            className="relative w-full h-40 my-3 cursor-pointer   object-contain"
          >
            {/* Car Image */}
            <Image
              src={generateCarImageUrl(car)}
              fill
              priority
              alt="car"
              className="object-contain"
            />
          </div>

          <div className="mt-2">
            <div className="flex justify-between group-hover:hidden">
              {/* transmission */}
              <div className="flex flex-col items-center justify-center gap-y-2">
                <GiSteeringWheel className="text-[#5D5FC0] w-5 h-5" />
                <span className="text-gray-500 text-sm">
                  {car.transmission === 'a' ? 'Avtomatic' : 'Manual'}
                </span>
              </div>
              {/* drive */}
              <div className="flex flex-col items-center justify-center gap-y-2">
                <GiGearStickPattern className="w-5 h-5 text-orange-400" />
                <span className="text-gray-500 text-sm uppercase">
                  {car.drive}
                </span>
              </div>
              {/* city mpg */}
              <div className="flex flex-col items-center justify-center gap-y-2">
                <MdLocalGasStation className="h-6 w-5 text-[#47AE58]" />
                <span className="text-gray-500 text-sm">
                  {car.city_mpg} MPG
                </span>
              </div>
            </div>
            {/* open modal */}
            <ButtonWithIcon handleClick={openModal} />
          </div>
        </div>
      </div>
      {/* modal Component */}
      {modalIsOpen && (
        <ModalComponent
          openModal={openModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          car={car}
        />
      )}
    </div>
  )
}

export default CarCard
