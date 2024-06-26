import { useState, Fragment } from "react";
import Lucide from "@/components/Base/Lucide";
import logoUrl from "@/assets/images/logo.svg";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/Base/Breadcrumb";
import { FormInput } from "@/components/Base/Form";
import { Menu, Popover } from "@/components/Base/Headless";
import fakerData from "@/utils/faker";
import _ from "lodash";
import clsx from "clsx";
import { Transition } from "@headlessui/react";

function Main() {
  const [searchDropdown, setSearchDropdown] = useState(false);
  const showSearchDropdown = () => {
    setSearchDropdown(true);
  };
  const hideSearchDropdown = () => {
    setSearchDropdown(false);
  };

  return (
    <>
      {/* BEGIN: Top Bar */}
      <div className="top-bar-boxed relative z-[51] -mx-5 mb-12 mt-12 h-[70px] border-b border-white/[0.08] px-3 sm:-mx-8 sm:px-8 md:-mt-5 md:pt-0 w-full">
        <div className="flex w-full justify-between items-center h-full">
          <Link to="/" className="hidden -intro-x md:flex">
            <img
              alt="logo"
              className="w-[120px] h-[46px]"
              src={"./logo.png"}
            />
            <div className=" ms-8 border-e border-[#4E49A9]"></div>
          </Link>
          <div className="flex items-center h-full">
            {/* BEGIN: Logo */}
            {/* END: Logo */}
            {/* BEGIN: Breadcrumb */}
            {/* <Breadcrumb
              light
              className="h-full md:ml-10 md:pl-10 md:border-l border-white/[0.08] mr-auto -intro-x"
            >
              <Breadcrumb.Link to="/">Application</Breadcrumb.Link>
              <Breadcrumb.Link to="/" active={true}>
                Dashboard
              </Breadcrumb.Link>
            </Breadcrumb> */}
            {/* END: Breadcrumb */}
            {/* BEGIN: Search */}
            <div className="relative mr-6 intro-x sm:mr-6">
              <div className="hidden search sm:block">
                <Lucide
                  icon="Search"
                  className="absolute inset-y-0 left-4 w-5 h-5 my-auto text-slate-600 dark:text-slate-500 opacity-80"
                />
                <FormInput
                  type="text"
                  className="border-transparent w-[374px] shadow-none rounded-2xl text-xs ps-12 placeholder:opacity-80 bg-white h-[40px] pr-8 transition-[width] duration-300 ease-in-out focus:border-transparent focus:w-72 dark:bg-darkmode-400/70"
                  placeholder="Search for Repots, Interventions, Biomarkers..."
                  onFocus={showSearchDropdown}
                  onBlur={hideSearchDropdown}
                />

              </div>
              <a className="relative text-white/70 sm:hidden" href="">
                <Lucide icon="Search" className="w-5 h-5 dark:text-slate-500" />
              </a>
              <Transition
                as={Fragment}
                show={searchDropdown}
                enter="transition-all ease-linear duration-150"
                enterFrom="mt-5 invisible opacity-0 translate-y-1"
                enterTo="mt-[3px] visible opacity-100 translate-y-0"
                leave="transition-all ease-linear duration-150"
                leaveFrom="mt-[3px] visible opacity-100 translate-y-0"
                leaveTo="mt-5 invisible opacity-0 translate-y-1"
              >
                <div className="absolute right-0 z-10 mt-[3px]">
                  <div className="w-[450px] p-5 box">
                    <div className="mb-2 font-medium">Pages</div>
                    <div className="mb-5">
                      <a href="" className="flex items-center">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-success/20 dark:bg-success/10 text-success">
                          <Lucide icon="Inbox" className="w-4 h-4" />
                        </div>
                        <div className="ml-3">Mail Settings</div>
                      </a>
                      <a href="" className="flex items-center mt-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pending/10 text-pending">
                          <Lucide icon="Users" className="w-4 h-4" />
                        </div>
                        <div className="ml-3">Users & Permissions</div>
                      </a>
                      <a href="" className="flex items-center mt-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 text-primary/80">
                          <Lucide icon="CreditCard" className="w-4 h-4" />
                        </div>
                        <div className="ml-3">Transactions Report</div>
                      </a>
                    </div>
                    <div className="mb-2 font-medium">Users</div>
                    <div className="mb-5">
                      {_.take(fakerData, 4).map((faker, fakerKey) => (
                        <a
                          key={fakerKey}
                          href=""
                          className="flex items-center mt-2"
                        >
                          <div className="w-8 h-8 image-fit">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-full"
                              src={faker.photos[0]}
                            />
                          </div>
                          <div className="ml-3">{faker.users[0].name}</div>
                          <div className="w-48 ml-auto text-xs text-right truncate text-slate-500">
                            {faker.users[0].email}
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="mb-2 font-medium">Products</div>
                    {_.take(fakerData, 4).map((faker, fakerKey) => (
                      <a
                        key={fakerKey}
                        href=""
                        className="flex items-center mt-2"
                      >
                        <div className="w-8 h-8 image-fit">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={faker.images[0]}
                          />
                        </div>
                        <div className="ml-3">{faker.products[0].name}</div>
                        <div className="w-48 ml-auto text-xs text-right truncate text-slate-500">
                          {faker.products[0].category}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Transition>
            </div>
            {/* END: Search */}
            {/* BEGIN: Notifications */}
            <Popover className="mr-2 intro-x sm:mr-2 rounded-full bg-white w-10 h-10 flex items-center justify-center">
                <Lucide icon="Bell" className="w-6 h-6 text-[#6432C9] dark:text-slate-500" />
              <Popover.Panel className="w-[280px] sm:w-[350px] p-5 mt-2">
                <div className="mb-5 font-medium">Notifications</div>
                {_.take(fakerData, 5).map((faker, fakerKey) => (
                  <div
                    key={fakerKey}
                    className={clsx([
                      "cursor-pointer relative flex items-center",
                      { "mt-5": fakerKey },
                    ])}
                  >
                    <div className="relative flex-none w-12 h-12 mr-1 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={faker.photos[0]}
                      />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-success dark:border-darkmode-600"></div>
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center">
                        <a href="" className="mr-5 font-medium truncate">
                          {faker.users[0].name}
                        </a>
                        <div className="ml-auto text-xs text-slate-400 whitespace-nowrap">
                          {faker.times[0]}
                        </div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        {faker.news[0].shortContent}
                      </div>
                    </div>
                  </div>
                ))}
              </Popover.Panel>
            </Popover>
            <Popover className="mr-2 intro-x sm:mr-2 rounded-full bg-white w-10 h-10 flex items-center justify-center">
                <img src="./dotNotif.svg"  className=" w-8 h-8 "/>
            </Popover>
            {/* END: Notifications */}
            {/* BEGIN: Account Menu */}
            <div className="text-white">
              <p className="text-sm	font-medium	">Clinic Longevity 1</p>
              <p className="text-xs	">Clinic-Longevity-1@gmail.com</p>
            </div>
            {/* <Menu>
              <Menu.Button className="block w-8 h-8 overflow-hidden scale-110 rounded-full shadow-lg image-fit zoom-in intro-x">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  src={fakerData[9].photos[0]}
                />
              </Menu.Button>
              <Menu.Items className="w-56 mt-px relative bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white">
                <Menu.Header className="font-normal">
                  <div className="font-medium">{fakerData[0].users[0].name}</div>
                  <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                    {fakerData[0].jobs[0]}
                  </div>
                </Menu.Header>
                <Menu.Divider className="bg-white/[0.08]" />
                <Menu.Item className="hover:bg-white/5">
                  <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
                </Menu.Item>
                <Menu.Item className="hover:bg-white/5">
                  <Lucide icon="FilePenLine" className="w-4 h-4 mr-2" /> Add
                  Account
                </Menu.Item>
                <Menu.Item className="hover:bg-white/5">
                  <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Reset Password
                </Menu.Item>
                <Menu.Item className="hover:bg-white/5">
                  <Lucide icon="HelpCircle" className="w-4 h-4 mr-2" /> Help
                </Menu.Item>
                <Menu.Divider className="bg-white/[0.08]" />
                <Menu.Item className="hover:bg-white/5">
                  <Lucide icon="ToggleRight" className="w-4 h-4 mr-2" /> Logout
                </Menu.Item>
              </Menu.Items>
            </Menu> */}
            {/* END: Account Menu */}
          </div>
        </div>
      </div>
      {/* END: Top Bar */}
    </>
  );
}

export default Main;
