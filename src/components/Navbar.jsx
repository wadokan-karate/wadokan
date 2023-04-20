import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import '../components/style/navbar.css'
import LogoNavbar from '../assets/WadokanLogoRect.png'

const navigation = [
  { name: 'Wadokan', href: '/', current: true },
  { name: 'Calendario', href: '/calendario', current: false },
  { name: 'Nuestro club', href: '/nuestro-club', current: false },
  { name: 'Blog y recursos', href: '/blog-recursos', current: false },
  { name: 'Licencias', href: '/licencias', current: false },
  { name: 'Contacto', href: '/contacto', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// navbar fixed top-0 left-0 right-0 z-50 transition duration-500 bg-opacity-80

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-wadokanBlue">
      {({ open }) => (
        <>
          <div className=" mx-auto max-w-7xl px-2 sm:px-3 lg:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 justify-around sm:items-stretch" >
                <div className="flex flex-shrink-0 items-center" >              
                  <img
                    className="hidden h-12 w-auto lg:block"
                    src={LogoNavbar}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 align-items: flex-end;">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-wadokanBlue  hover:bg-gray-700 text-grey  hover:text-white' : 'text-grey hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
