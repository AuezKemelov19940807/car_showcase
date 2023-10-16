'use client'
//next router
import { useRouter } from 'next/navigation'
//update search params
import { updateSearchParams } from '@/utils'
//custom btn
import { Button } from './ui/button-custom'
//type
import { IShowMoreProps } from '@/types'
const ShowMore = ({ pageNumber }: IShowMoreProps) => {
  //next router
  const router = useRouter()

  //increase limit
  const onShow = () => {
    const newLimit = (pageNumber + 1) * 10
    const newPageName = updateSearchParams('limit', newLimit.toString())
    router.push(newPageName)
  }

  return <Button onClick={onShow}>Show More</Button>
}

export default ShowMore
