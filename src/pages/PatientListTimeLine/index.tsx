import _ from "lodash";
import clsx from "clsx";
import { useRef, useState } from "react";
import fakerData from "@/utils/faker";
import Button from "@/components/Base/Button";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormSelect } from "@/components/Base/Form";
import TinySlider, { TinySliderElement } from "@/components/Base/TinySlider";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Lucide from "@/components/Base/Lucide";
import Tippy from "@/components/Base/Tippy";
import Litepicker from "@/components/Base/Litepicker";
import ReportDonutChart from "@/components/ReportDonutChart";
import ReportLineChart from "@/components/ReportLineChart";
import ReportPieChart from "@/components/ReportPieChart";
import ReportDonutChart1 from "@/components/ReportDonutChart1";
import SimpleLineChart1 from "@/components/SimpleLineChart1";
import LeafletMap from "@/components/LeafletMap";
import { Menu } from "@/components/Base/Headless";
import Table from "@/components/Base/Table";
import { ProfileCard } from "@/components/CustomComponents";

function Main() {
  const [salesReportFilter, setSalesReportFilter] = useState<string>();
  const importantNotesRef = useRef<TinySliderElement>();
  const prevImportantNotes = () => {
    importantNotesRef.current?.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    importantNotesRef.current?.tns.goTo("next");
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 gap-4">
        <ProfileCard></ProfileCard>  
      </div>
      <div className="grid col-span-12 grid-cols-12">
        <div className="col-span-4 mt-2">
          <div className="flex justify-center gap-4 w-full items-center">
            <div className="flex items-center">
              <img src="./tick-square.svg" alt="" />
              <div className="ml-2 text-xs text-gray-700">done</div>
            </div>
            <div className="flex items-center">
              <img src="./more-square2.svg" alt="" />
              <div className="ml-2 text-xs text-gray-700">In progress</div>
            </div>
            <div className="flex items-center">
              <img src="./more-square.svg" alt="" />
              <div className="ml-2 text-xs text-gray-700">Up-coming</div>
            </div>            
          </div>
        </div>
        <div className="col-span-8  md:col-span-8 xl:col-span-8 2xl:col-span-8">
          <div className=" relative before:block before:absolute before:w-px before:h-[85%] before:bg-slate-200 before:dark:bg-darkmode-400 before:ml-5 before:mt-5">
            <div className="relative flex items-center mb-3 intro-x">
              <div className="before:block before:absolute  before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                <div className="flex justify-center items-center bg-white w-10 h-10 overflow-hidden rounded-full ">
                  {/* <img
                    alt="Midone Tailwind HTML Admin Template"
                    src={fakerData[9].photos[0]}
                  /> */}
                  <img className="w-6 h-6" src="/tick-square.svg" alt="" />
                </div>
              </div>
              <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                <div className="flex items-center">
                  <div className="font-medium">
                    {fakerData[9].users[0].name}
                  </div>
                  <div className="ml-auto text-xs text-slate-500">
                    07:00 PM
                  </div>
                </div>
                <div className="mt-1 text-slate-500">
                  Has joined the team
                </div>
              </div>
            </div>

            <div className="relative flex items-center mb-3 intro-x">
              <div className="before:block before:absolute  before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                <div className="flex justify-center items-center bg-white w-10 h-10 overflow-hidden rounded-full ">
                  {/* <img
                    alt="Midone Tailwind HTML Admin Template"
                    src={fakerData[9].photos[0]}
                  /> */}
                  <img className="w-6 h-6" src="/tick-square.svg" alt="" />
                </div>
              </div>
              <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                <div className="flex items-center">
                  <div className="font-medium">
                    {fakerData[9].users[0].name}
                  </div>
                  <div className="ml-auto text-xs text-slate-500">
                    07:00 PM
                  </div>
                </div>
                <div className="mt-1 text-slate-500">
                  Has joined the team
                </div>
              </div>
            </div>

            <div className="relative flex items-center mb-3 intro-x">
              <div className="before:block before:absolute  before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                <div className="flex justify-center items-center bg-white w-10 h-10 overflow-hidden rounded-full ">
                  {/* <img
                    alt="Midone Tailwind HTML Admin Template"
                    src={fakerData[9].photos[0]}
                  /> */}
                  <img className="w-6 h-6" src="/tick-square.svg" alt="" />
                </div>
              </div>
              <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                <div className="flex items-center">
                  <div className="font-medium">
                    {fakerData[9].users[0].name}
                  </div>
                  <div className="ml-auto text-xs text-slate-500">
                    07:00 PM
                  </div>
                </div>
                <div className="mt-1 text-slate-500">
                  Has joined the team
                </div>
              </div>
            </div>
            {/* <div className="relative flex items-center mb-3 intro-x">
              <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    src={fakerData[8].photos[0]}
                  />
                </div>
              </div>
              <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                <div className="flex items-center">
                  <div className="font-medium">
                    {fakerData[8].users[0].name}
                  </div>
                  <div className="ml-auto text-xs text-slate-500">
                    07:00 PM
                  </div>
                </div>
                <div className="text-slate-500">
                  <div className="mt-1">Added 3 new photos</div>
                  <div className="flex mt-2">
                    <Tippy
                      as="div"
                      className="w-8 h-8 mr-1 image-fit zoom-in"
                      content={fakerData[0].products[0].name}
                    >
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="border border-white rounded-md"
                        src={fakerData[8].images[0]}
                      />
                    </Tippy>
                    <Tippy
                      as="div"
                      className="w-8 h-8 mr-1 image-fit zoom-in"
                      content={fakerData[1].products[0].name}
                    >
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="border border-white rounded-md"
                        src={fakerData[8].images[1]}
                      />
                    </Tippy>
                    <Tippy
                      as="div"
                      className="w-8 h-8 mr-1 image-fit zoom-in"
                      content={fakerData[2].products[0].name}
                    >
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="border border-white rounded-md"
                        src={fakerData[8].images[2]}
                      />
                    </Tippy>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4 text-xs text-center intro-x text-slate-500">
              12 November
            </div>
            <div className="relative flex items-center mb-3 intro-x">
              <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    src={fakerData[7].photos[0]}
                  />
                </div>
              </div>
              <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                <div className="flex items-center">
                  <div className="font-medium">
                    {fakerData[7].users[0].name}
                  </div>
                  <div className="ml-auto text-xs text-slate-500">
                    07:00 PM
                  </div>
                </div>
                <div className="mt-1 text-slate-500">
                  Has changed{" "}
                  <a className="text-primary" href="">
                    {fakerData[7].products[0].name}
                  </a>{" "}
                  price and description
                </div>
              </div>
            </div>
            <div className="relative flex items-center mb-3 intro-x">
              <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                <div className="flex-none w-10 h-10 overflow-hidden rounded-full image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    src={fakerData[6].photos[0]}
                  />
                </div>
              </div>
              <div className="flex-1 px-5 py-3 ml-4 box zoom-in">
                <div className="flex items-center">
                  <div className="font-medium">
                    {fakerData[6].users[0].name}
                  </div>
                  <div className="ml-auto text-xs text-slate-500">
                    07:00 PM
                  </div>
                </div>
                <div className="mt-1 text-slate-500">
                  Has changed{" "}
                  <a className="text-primary" href="">
                    {fakerData[6].products[0].name}
                  </a>{" "}
                  description
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
