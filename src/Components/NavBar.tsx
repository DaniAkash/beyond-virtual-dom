import { Disclosure } from "@headlessui/react";
import { Bars3Icon, LinkIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { base } from "../../astro.config.mjs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const NavBar = ({ activeUrl }: { activeUrl: string }) => {
  const navigation = [
    {
      name: "Slides",
      href: base,
      current: activeUrl === base,
    },
    {
      name: "Box",
      href: base + "/box-animation",
      current: activeUrl === base + "/box-animation",
    },
    {
      name: "Context",
      href: base + "/context",
      current: activeUrl === base + "/context",
    },
    {
      name: "Zustand",
      href: base + "/zustand",
      current: activeUrl === base + "/zustand",
    },
    {
      name: "Signal",
      href: base + "/signal",
      current: activeUrl === base + "/signal",
    },
    {
      name: "Virtual DOM",
      href: base + "/virtual-dom",
      current: activeUrl === base + "/virtual-dom",
    },
    {
      name: "Million",
      href: base + "/million",
      current: activeUrl === base + "/million",
    },
  ];

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center text-white">
                  Learning React Optimizations
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : `text-transparent ${
                                ["Slides", "Home"].includes(item.name)
                                  ? "text-gray-100"
                                  : ""
                              } hover:bg-gray-700 hover:text-white`,
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="https://github.com/daniakash/beyond-virtual-dom"
                  target={"_blank"}
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <LinkIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
