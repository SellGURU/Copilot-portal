import _ from "lodash";
import clsx from 'clsx'
import { useRef, useState } from "react";
import fakerData from "@/utils/faker";
import Button from "@/components/Base/Button";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormSelect } from "@/components/Base/Form";
import TinySlider, { TinySliderElement } from "@/components/Base/TinySlider";
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
import DataTable from "@/components/Table";

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
      <div className="col-span-12">
        <div className="grid grid-cols-12 gap-6">
          {/* BEGIN: General Report */}
          <div className="col-span-12 mt-8">
            <div className="flex items-center h-10 intro-y">
              <h2 className="mr-5 text-lg font-medium truncate">
                General Report
              </h2>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="RefreshCcw" className="w-4 h-4 mr-3" /> Reload
                Data
              </a>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-5">
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-5 box">
                    <div className="flex">
                      <img src="./profile-add.svg" className=" w-7 h-7"/>
                      {/* <Lucide
                        icon="ShoppingCart"
                        className="w-[28px] h-[28px] text-primary"
                      /> */}
                      <div className="ml-auto">
                        <Tippy
                          as="div"
                          className="cursor-pointer font-medium text-sm bg-danger py-[3px] flex rounded-full text-white pl-2 pr-1 items-center"
                          content="2% Lower than last month"
                        >
                          2%
                          <Lucide icon="ChevronDown" className="w-6 h-6 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="mt-6 text-3xl font-medium leading-8">
                      185
                    </div>
                    <div className="mt-1 text-base text-slate-500">
                      New Enrollment
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-5 box">
                    <div className="flex">
                      <img src="./profile-delete.svg" className=" w-7 h-7"/>

                      {/* <Lucide
                        icon="CreditCard"
                        className="w-[28px] h-[28px] text-pending"
                      /> */}
                      <div className="ml-auto">
                        <Tippy
                          as="div"
                          className="cursor-pointer font-medium text-sm bg-success py-[3px] flex rounded-full text-white pl-2 pr-1 items-center"
                          content="2% Higher than last month"
                        >
                          2%
                          <Lucide
                            icon="ChevronUp"
                            className="w-6 h-6 ml-0.5"
                          />
                        </Tippy>
                      </div>
                    </div>
                    <div className="mt-6 text-3xl font-medium leading-8">
                      15
                    </div>
                    <div className="mt-1 text-base text-slate-500">
                      Critical Patients
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-5 box">
                    <div className="flex">
                      <img src="./profile-notif.svg" className=" w-7 h-7"/>

                      {/* <Lucide
                        icon="Monitor"
                        className="w-[28px] h-[28px] text-warning"
                      /> */}
                      <div className="ml-auto">
                        <Tippy
                          as="div"
                          className="cursor-pointer font-medium text-sm bg-danger py-[3px] flex rounded-full text-white pl-2 pr-1 items-center"
                          content="2% Lower than last month"
                        >
                          2%
                          <Lucide icon="ChevronDown" className=" w-6 h-6 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="mt-6 text-3xl font-medium leading-8">
                      20
                    </div>
                    <div className="mt-1 text-base text-slate-500">
                      At risk Patients
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                <div
                  className={clsx([
                    "relative zoom-in",
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className="p-5 box">
                    <div className="flex">
                      <img src="./profile-tick.svg" className=" w-7 h-7"/>

                      {/* <Lucide
                        icon="User"
                        className="w-[28px] h-[28px] text-success"
                      /> */}
                      <div className="ml-auto">
                        <Tippy
                          as="div"
                          className="cursor-pointer font-medium text-sm bg-success py-[3px] flex rounded-full text-white pl-2 pr-1 items-center"
                          content="2% Higher than last month"
                        >
                          2%
                          <Lucide icon="ChevronUp" className=" w-6 h-6 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="mt-6 text-3xl font-medium leading-8">
                      150
                    </div>
                    <div className="mt-1 text-base text-slate-500">
                      Normal Patients
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="col-span-12">
        <div className="pb-10 -mb-10 2xl:border-l">
          <div className="grid grid-cols-12 2xl:pl-6 gap-x-6 2xl:gap-x-0 gap-y-6">

          </div>
        </div>
      </div>

      <div className="col-span-12 bg-white dark:bg-darkmode-400 pt-6 px-4 rounded-[8px]">
        <DataTable applyData={() => [
          {
            id:"1",
            patientName:'Jane Cooper',
            age:'56',
            bloodPressure:'113/62',
            enrollDate:'12-08-2024',
            heartRate:'54',
            lastFollowUp:'12-08-2024',
            memberId:'021548461651',
            respirationRate:'17',
            sex:'Male',
            SPO2:'88',
            status:'Critical',
            temperature:'36.9',
            weight:'56.3'
          },
          {
            id:"2",
            patientName:'Jane Cooper',
            age:'56',
            bloodPressure:'113/62',
            enrollDate:'12-08-2024',
            heartRate:'54',
            lastFollowUp:'12-08-2024',
            memberId:'021548461651',
            respirationRate:'17',
            sex:'Male',
            SPO2:'88',
            status:'Critical',
            temperature:'36.9',
            weight:'56.3'
          }          
        ]}></DataTable>
      </div>
    </div>
  );
}

export default Main;
