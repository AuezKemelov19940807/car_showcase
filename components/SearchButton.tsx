//icons
import { FaSearch } from 'react-icons/fa'

const SearchButton = ({ otherClasses }: { otherClasses?: string }) => {
  return (
    <button
      type="submit"
      className={`${otherClasses} z-10 -ml-3 w-10 h-10 flex items-center justify-center rounded-full bg-white grow-0 shrink-0`}
    >
      <FaSearch className="text-2xl text-[#A693C6]" />
    </button>
  )
}

export default SearchButton
