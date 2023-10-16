//shadcn btn
import { FC } from 'react'
import { Button } from '@/components/ui/button-custom'
//icons
import { BsArrowRightShort } from 'react-icons/bs'
interface IButtonWithIconProps {
  handleClick: () => void
}

const ButtonWithIcon: FC<IButtonWithIconProps> = ({ handleClick }) => {
  return (
    <Button
      variant={'withIcon'}
      className="hidden group-hover:flex"
      onClick={handleClick}
    >
      <span className="flex items-center w-full">
        <span className="flex-1">View more</span>
        <span className="bg-[#6B8BFF] rounded-md">
          <BsArrowRightShort className="text-xl" />
        </span>
      </span>
    </Button>
  )
}

export default ButtonWithIcon
