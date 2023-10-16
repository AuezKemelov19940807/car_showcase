//next link
import Link from 'next/link'
//next image
import Image from 'next/image'
//data
import { footerLinks } from '@/constants'
const Footer = () => {
  return (
    <footer>
      <div>
        <div className="border-t">
          <div className="flex flex-col lg:flex-row md:px-16 px-6 pt-10 lg:pb-20">
            <div className="flex flex-col lg:flex-auto mb-10">
              {/* logo */}
              <div className="mb-5">
                <Link href="/">
                  <Image src={'/logo.svg'} width={118} height={18} alt="Logo" />
                </Link>
              </div>
              {/* text 1 */}
              <div className="text-gray-700">
                <p>Carhub 2023</p>
                <p>All Rights Reserved &copy;</p>
              </div>
            </div>
            <div>
              {/* footerLinks */}
              <div className="flex gap-x-20 flex-wrap items-end">
                {footerLinks.map((link) => {
                  return (
                    <ul
                      className="flex flex-col gap-y-5 mb-10 lg:mb-0  min-w-[170px]"
                      key={link.title}
                    >
                      {/* link title */}
                      <h3 className="font-bold">{link.title}</h3>
                      {/* links */}
                      {link.links.map((item) => (
                        // link
                        <li className="text-gray-500" key={item.title}>
                          <Link href={item.url}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="flex flex-col md:flex-row justify-between lg:items-center py-10 md:px-16 px-6 ">
            <p className="text-gray-700 mb-2 lg:mb-0">
              &copy;2023 CarHub. All rights reserved
            </p>
            <div className="flex items-start flex-col gap-x-10 text-gray-500">
              <Link href="/">Privacy & Policy</Link>
              <Link href="/">Terms & Condition</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
