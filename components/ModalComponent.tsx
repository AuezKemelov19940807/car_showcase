import { FC } from 'react'
import Image from 'next/image'
// modal
import Modal from 'react-modal'
//type
import { IModalComponentProps } from '@/types'
//icons
import { GrClose } from 'react-icons/gr'
import { generateCarImageUrl } from '@/utils'

const bg = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '50',
  },
}

const ModalComponent: FC<IModalComponentProps> = ({
  openModal,
  closeModal,
  modalIsOpen,
  car,
}) => {
  return (
    <div>
      {/* btn open modal */}
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={bg}
        className={`fixed top-2/4 left-1/2 right-auto bottom-auto -mr-[50%] -translate-x-2/4 -translate-y-1/2 bg-white lg:w-[500px] lg:max-h-[798px] w-full h-full  lg:rounded-3xl p-5 overflow-y-auto scroll-x-4  scrollbar-thin scrollbar-thumb-[#0048BA] scrollbar-track-gray-100 cursor-pointer scrollbar-rounded-[30px]`}
      >
        <div className="overflow-auto">
          {/* close modal */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 w-10 h-10 rounded-full bg-[#F5F8FF] flex items-center justify-center z-10"
          >
            <GrClose className="text-xl absolute" />
          </button>
          <div className="mb-5">
            <div className="">
              <div className="relative h-40  mb-3">
                {/* image car big */}
                <Image
                  src={generateCarImageUrl(car)}
                  fill
                  priority
                  className="object-contain"
                  alt=""
                />
                <div className="absolute top-0 left-0 -z-10 bg-pattern-bg w-full h-full bg-repeat-round" />
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-[#F5F8FF] p-2 rounded-md  relative h-24 w-full">
                  {/* image car small 1 */}
                  <Image
                    src={generateCarImageUrl(car, '29')}
                    fill
                    priority
                    className="object-contain"
                    alt=""
                  />
                </div>
                <div className="bg-[#F5F8FF] p-2 rounded-md relative h-24 w-full">
                  {/* image car small 2 */}
                  <Image
                    src={generateCarImageUrl(car, '33')}
                    fill
                    priority
                    className="object-contain"
                    alt=""
                  />
                </div>
                <div className="bg-[#F5F8FF] p-2 rounded-md relative h-24 w-full">
                  {/* image car small 3 */}
                  <Image
                    src={generateCarImageUrl(car, '13')}
                    fill
                    priority
                    alt=""
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* title */}
            <h2 className="capitalize font-semibold text-2xl mb-5">
              {car.make} {car.model} {car.drive}
            </h2>
            {/* key and value */}
            <div className="flex flex-col gap-y-2.5">
              {Object.entries(car).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <div className="capitalize text-gray-500 ">
                    {key.replace('_', ' ')}
                  </div>
                  <div className="font-semibold capitalize"> {value} </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalComponent
