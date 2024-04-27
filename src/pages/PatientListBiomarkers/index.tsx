import _ from "lodash";
import clsx from "clsx";
import { useRef, useState } from "react";
import fakerData from "@/utils/faker";
import Button from "@/components/Base/Button";
import Pagination from "@/components/Base/Pagination";
import { FormInput, FormSelect } from "@/components/Base/Form";
import TinySlider, { TinySliderElement } from "@/components/Base/TinySlider";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Lucide from "@/components/Base/Lucide";
import Tippy from "@/components/Base/Tippy";
import Litepicker from "@/components/Base/Litepicker";
import ReportDonutChart from "@/components/ReportDonutChart";
import ReportLineChart2 from "@/components/ReportLineChart2";
import ReportPieChart from "@/components/ReportPieChart";
import ReportDonutChart1 from "@/components/ReportDonutChart1";
import SimpleLineChart1 from "@/components/SimpleLineChart1";
import LeafletMap from "@/components/LeafletMap";
import { Menu } from "@/components/Base/Headless";
import Table from "@/components/Base/Table";
import { ProfileCard } from "@/components/CustomComponents";
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
  const [cardNumbers,setCardNumbers] = useState([
    {
      name:'Blood Pressure',
      value:'120/80',
      percent:'5% higher',
      icon:"./blood-pressure.svg" ,
      after : "mmhg"
    },
    {
      name:'Blood Glucose',
      value:'97.22',
      percent:'5% lower',
      icon:"./diabetes-test.svg" ,
      after : "mmol/L"
    },
    {
      name:'Body Temperature',
      value:'99.4',
      percent:'5% higher',
      icon:"./temperature.svg" ,
      after : "F"
    },
    {
      name:'Heart Rate',
      value:'72',
      percent:'5% lower',
      icon:"./heart-rate.svg" ,
      after : "bpm"
    },  
    {
      name:'Respiration Rate',
      value:'14',
      percent:'5% lower',
      icon:"./HRV.svg" ,
      after : "bpm"
    },         
  ])
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-12 gap-4">
        <div className="flex items-center justify-between mt-10 ">
          <div className="w-1/2">
            <ProfileCard></ProfileCard>  
          </div>
          <div className="flex justify-end items-center gap-2 text-white text-sm">
            <div className="px-4 py-2 bg-[#3730A1] flex justify-center items-center gap-2 rounded-lg">
              <img src="./filter-add.svg"  className="w-6 h-6"/>
              Add Filter
            </div>
            <div className="px-4 py-2 bg-[#3730A1] flex justify-center items-center gap-2 rounded-lg">
              <img src="./import.svg"  className="w-6 h-6"/>
              Import Biomarkers
            </div>
          </div>
        </div>
        <div className="mt-4 mb-8">
            <div className="grid grid-cols-5 grid-rows-1 gap-4">
              {
                cardNumbers.map(element => {
                  return (
                      <>
                        <div className=" intro-y">
                          <div
                            className={clsx([
                              "relative zoom-in",
                              "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                            ])}
                          >
                            <div className="p-5 box">
                              <div className="flex">
                                <img src={element.icon} className=" w-7 h-7"/>

                                <div className="ml-auto">
                                  <Tippy
                                    as="div"
                                    className="cursor-pointer font-normal text-[10px] py-[3px] flex text-[#6783A0] gap-1 pl-2 pr-1 items-center"
                                    content="2% Higher than last month"
                                  >
                                    <TrendingUpIcon className=" text-success"/>
                                    {element.percent}
                                  </Tippy>
                                </div>
                              </div>
                              <div className="mt-6 text-3xl font-medium leading-8">
                                {element.value}
                                <span className="font-normal text-xs ms-2">
                                  {element.after}
                                </span>
                              </div>
                              <div className="mt-1 font-normal text-sm text-slate-500">
                                {element.name}
                              </div>
                            </div>
                          </div>
                        </div>                      
                      </>                    
                  )
                })
              }
             
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
    </div>
  );
}

export default Main;
