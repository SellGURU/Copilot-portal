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
import ReportLineChart from "@/components/ReportLineChart";
import ReportPieChart from "@/components/ReportPieChart";
import ReportDonutChart1 from "@/components/ReportDonutChart1";
import SimpleLineChart1 from "@/components/SimpleLineChart1";
import LeafletMap from "@/components/LeafletMap";
import { Menu } from "@/components/Base/Headless";
import Table from "@/components/Base/Table";

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
      <div className="col-span-12 2xl:col-span-12 gap-4">
        <div className="w-full h-[72px] boxShadow rounded-lg mt-10 px-4 py-2 flex items-center justify-start gap-6">
          <img src="./arrow-left.svg" className="w-6 h-6" />
          <div className="flex gap-4">
            <img src="./userPic.svg" className="w-14 h-14 rounded-full" />
            <div className="flex flex-col items-start gap-2 justify-center">
              <p className="text-sm	font-medium	">Robert Fox</p>
              <p className="text-sm	text-[#7B93AF]">48 Years | Male | P1245</p>
            </div>
          </div>
          <div className="border-e border-[#E9EDF5] h-full"> </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-xs	font-medium	">Robert Fox</p>
            <p className="text-xs	text-[#7B93AF]">1. High Blood Pressure</p>
            <p className="text-xs	text-[#7B93AF]">2. Asthma</p>
          </div>
        </div>
        <div className="grid grid-cols-5 grid-rows-12 h-[800px] gap-x-3 gap-y-4 my-4">
          {/* Risks cad */}
          <div className="boxShadow rounded-[18px] row-span-9 overflow-hidden">
            <p className="text-sm	font-medium	mx-4 my-3">Risks</p>

            <div className="border-b border-[#E2E8F0] w-full"></div>

            <div className="flex flex-col gap-4 h-full overflow-y-auto scrollbar-hidden">
              <div className="flex flex-col m-3 gap-2">
                <p className="font-medium	text-xs	">Diabetes</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Risk of diabetes in the next 5 years is 73% by current trend{" "}
                </p>
                <img src="./Group1.svg" />
                <div>
                  <p className="text-[#57728E] text-xs	">Indicator</p>
                  <img src="./Group2.svg" />
                </div>
              </div>

              <div className="flex flex-col m-3 gap-2 mb-10">
                <p className="font-medium	text-xs	">Heart Disease</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  The risk is above the average in the patient’s age group.
                </p>
                <img src="./Group1.svg" />
                <div>
                  <p className="text-[#57728E] text-xs	">Indicator</p>
                  <img src="./Group2.svg" />
                </div>
              </div>
            </div>
          </div>
          {/* Biomarkers cad */}
          <div className="boxShadow rounded-[18px] row-span-9 overflow-hidden">
            <p className="text-sm	font-medium	mx-4 my-3">Biomarkers</p>

            <div className="border-b border-[#E2E8F0] w-full"></div>

            <div className="flex flex-col gap-4 h-full overflow-y-auto scrollbar-hidden">
              <div className="flex flex-col m-3 gap-3">
                <p className="font-medium	text-xs	">Bio Ages</p>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#6783A0] text-xs">Heart Age</p>
                    <div className="w-8 h-4 rounded-lg bg-[#FFF2ED] flex items-center justify-center">
                      <p className="font-medium	text-[10px] text-[#FA824C]">
                        50
                      </p>
                    </div>
                  </div>
                  <img src="./Group3.svg" className="mt-1" />
                  <div className="flex items-center justify-between w-full text-[8px] text-[#7B93AF]">
                    <p>Low</p>
                    <p>High</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#6783A0] text-xs">Epigenetic Age</p>
                    <div className="w-8 h-4 rounded-lg bg-lightWarning flex items-center justify-center">
                      <p className="font-medium	text-[10px] text-[#FFB85A]">
                        42
                      </p>
                    </div>
                  </div>
                  <img src="./Group3.svg" className="mt-1" />
                  <div className="flex items-center justify-between w-full text-[8px] text-[#7B93AF]">
                    <p>Low</p>
                    <p>High</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#6783A0] text-xs">Phenotypic Age</p>
                    <div className="w-8 h-4 rounded-lg bg-[#E6F9F4] flex items-center justify-center">
                      <p className="font-medium	text-[10px] text-green">37</p>
                    </div>
                  </div>
                  <img src="./Group3.svg" className="mt-1" />
                  <div className="flex items-center justify-between w-full text-[8px] text-[#7B93AF]">
                    <p>Low</p>
                    <p>High</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#6783A0] text-xs">Pace of aging</p>
                    <div className="w-[54px] h-4 rounded-lg bg-lightWarning flex items-center justify-center">
                      <p className="font-medium	text-[10px] text-[#FFB85A]">
                        110%
                      </p>
                    </div>
                  </div>
                  <img src="./Group3.svg" className="mt-1" />
                  <div className="flex items-center justify-between w-full text-[8px] text-[#7B93AF]">
                    <p>Low</p>
                    <p>High</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col m-3 gap-3">
                <p className="font-medium	text-xs	">Lifestyle Scores</p>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#6783A0] text-xs">Sleep</p>
                    <div className="w-8 h-4 rounded-lg bg-[#FFF2ED] flex items-center justify-center">
                      <p className="font-medium	text-[10px] text-[#FA824C]">
                        50
                      </p>
                    </div>
                  </div>
                  <img src="./Group3.svg" className="mt-1" />
                  <div className="flex items-center justify-between w-full text-[8px] text-[#7B93AF]">
                    <p>Low</p>
                    <p>High</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#6783A0] text-xs">Nutrition</p>
                    <div className="w-8 h-4 rounded-lg bg-lightWarning flex items-center justify-center">
                      <p className="font-medium	text-[10px] text-[#FFB85A]">
                        42
                      </p>
                    </div>
                  </div>
                  <img src="./Group3.svg" className="mt-1" />
                  <div className="flex items-center justify-between w-full text-[8px] text-[#7B93AF]">
                    <p>Low</p>
                    <p>High</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#6783A0] text-xs">Activity</p>
                    <div className="w-8 h-4 rounded-lg bg-[#E6F9F4] flex items-center justify-center">
                      <p className="font-medium	text-[10px] text-green">37</p>
                    </div>
                  </div>
                  <img src="./Group3.svg" className="mt-1" />
                  <div className="flex items-center justify-between w-full text-[8px] text-[#7B93AF]">
                    <p>Low</p>
                    <p>High</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#6783A0] text-xs">Cellular</p>
                    <div className="w-[54px] h-4 rounded-lg bg-lightWarning flex items-center justify-center">
                      <p className="font-medium	text-[10px] text-[#FFB85A]">
                        110%
                      </p>
                    </div>
                  </div>
                  <img src="./Group3.svg" className="mt-1" />
                  <div className="flex items-center justify-between w-full text-[8px] text-[#7B93AF]">
                    <p>Low</p>
                    <p>High</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#6783A0] text-xs">Sleep</p>
                    <div className="w-8 h-4 rounded-lg bg-[#FFF2ED] flex items-center justify-center">
                      <p className="font-medium	text-[10px] text-[#FA824C]">
                        50
                      </p>
                    </div>
                  </div>
                  <img src="./Group3.svg" className="mt-1" />
                  <div className="flex items-center justify-between w-full text-[8px] text-[#7B93AF]">
                    <p>Low</p>
                    <p>High</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#6783A0] text-xs">Nutrition</p>
                    <div className="w-8 h-4 rounded-lg bg-lightWarning flex items-center justify-center">
                      <p className="font-medium	text-[10px] text-[#FFB85A]">
                        42
                      </p>
                    </div>
                  </div>
                  <img src="./Group3.svg" className="mt-1" />
                  <div className="flex items-center justify-between w-full text-[8px] text-[#7B93AF]">
                    <p>Low</p>
                    <p>High</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#6783A0] text-xs">Activity</p>
                    <div className="w-8 h-4 rounded-lg bg-[#E6F9F4] flex items-center justify-center">
                      <p className="font-medium	text-[10px] text-green">37</p>
                    </div>
                  </div>
                  <img src="./Group3.svg" className="mt-1" />
                  <div className="flex items-center justify-between w-full text-[8px] text-[#7B93AF]">
                    <p>Low</p>
                    <p>High</p>
                  </div>
                </div>

                <div className="mb-10">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[#6783A0] text-xs">Cellular</p>
                    <div className="w-[54px] h-4 rounded-lg bg-lightWarning flex items-center justify-center">
                      <p className="font-medium	text-[10px] text-[#FFB85A]">
                        110%
                      </p>
                    </div>
                  </div>
                  <img src="./Group3.svg" className="mt-1" />
                  <div className="flex items-center justify-between w-full text-[8px] text-[#7B93AF]">
                    <p>Low</p>
                    <p>High</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Interventions cad */}
          <div className="boxShadow rounded-[18px] row-span-9 overflow-hidden">
            <p className="text-sm	font-medium	mx-4 my-3">Interventions</p>

            <div className="border-b border-[#E2E8F0] w-full"></div>

            <div className="flex flex-col gap-4 m-3 h-full overflow-y-auto scrollbar-hidden">
              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Swimming</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Add 2 cardio sessions a week
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Walking</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Walk for at least half an hour every day
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Meditate</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Meditate 3 times a week
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Moderate Carbs intake</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Up to 3 portions of carbs a day
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Drink Water</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Drink water at least 8 glasses in a day
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Use Vegetables</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Use vegetables at least 400 gr in a day
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Swimming</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Add 2 cardio sessions a week
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-12">
                <p className="font-medium	text-xs	">Swimming</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Add 2 cardio sessions a week
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small" />
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-green rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Impact cad */}
          <div className="boxShadow rounded-[18px] col-span-2 row-span-12 overflow-hidden">
            <div className="flex items-center justify-between">
              <p className="text-sm	font-medium	mx-4 my-3">Summary Impact</p>
              <div className="grid grid-cols-2 grid-rows-2 gap-x-4 me-4 mt-[10px] mb-1">
                <div className="flex items-center justify-start text-[10px] font-normal gap-1">
                  <span className="w-2 h-2 bg-danger rounded-full"></span>
                  Priorities
                </div>
                <div className="flex items-center justify-start text-[10px] font-normal gap-1">
                  <span className="w-2 h-2 bg-warning rounded-full"></span>
                  High
                </div>
                <div className="flex items-center justify-start text-[10px] font-normal gap-1">
                  <span className="w-2 h-2 bg-purple rounded-full"></span>
                  Medium
                </div>
                <div className="flex items-center justify-start text-[10px] font-normal gap-1">
                  <span className="w-2 h-2 bg-green rounded-full"></span>
                  Low
                </div>
              </div>
            </div>

            <div className="border-b border-[#E2E8F0] w-full"></div>

            <div className="flex flex-col gap-4 mx-1 my-[6px] overflow-y-auto scrollbar-hidden bg-dot h-[730px] relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src="body.svg" className="w-[174px] h-[406px]" />
              </div>
              <div className="grid grid-cols-3 grid-rows-5 items-center justify-items-center mx-auto w-[411px] h-[681px]">
                <div className="col-span-3 rounded-full w-[106px] h-[106px] bg-lightWarning mx-auto flex flex-col items-center justify-center">
                  <img src="./blood-pressure.svg" className="w-5 h-5" />
                  <p className="text-purple text-[10px] font-medium">
                    Blood Pressure
                  </p>
                  <p className="font-medium text-xs text-[#253343]">
                    120/75{" "}
                    <span className="text-[8px] font-light text-[#6783A0]">
                      mg/dl
                    </span>
                  </p>
                </div>

                <div className="col-span-1 rounded-full w-[106px] h-[106px] bg-lightWarning -mt-8 flex flex-col items-center justify-center">
                  <img src="./HRV.svg" className="w-5 h-5" />
                  <p className="text-purple text-[10px] font-medium">
                  HRV
                  </p>
                  <p className="font-medium text-xs text-[#253343]">
                    45{" "}
                    <span className="text-[8px] font-light text-[#6783A0]">
                      ms
                    </span>
                  </p>
                </div>
                <div className="col-span-1 w-[144px] h-[106px] -mt-8"></div>
                <div className="col-span-1 rounded-full w-[106px] h-[106px] bg-lightWarning -mt-8 flex flex-col items-center justify-center">
                  <img src="./temperature.svg" className="w-5 h-5" />
                  <p className="text-purple text-[10px] font-medium">
                  Temperature
                  </p>
                  <p className="font-medium text-xs text-[#253343]">
                    36.5{" "}
                    <span className="text-[8px] font-light text-[#6783A0]">
                    c
                    </span>
                  </p>
                </div>

                <div className="col-span-1 mb-[66px] mt-[55px] me-[43px] rounded-full w-[106px] h-[106px] bg-lightWarning flex flex-col items-center justify-center">
                  <img src="./SPO2.svg" className="w-5 h-5" />
                  <p className="text-purple text-[10px] font-medium">
                  SPO2
                  </p>
                  <p className="font-medium text-xs text-[#253343]">
                    90{" "}
                    <span className="text-[8px] font-light text-[#6783A0]">
                      %
                    </span>
                  </p>
                </div>
                <div className="col-span-1 mb-[66px] mt-[55px] w-[144px] h-[106px]"></div>
                <div className="col-span-1 mb-[66px] mt-[55px] ms-[43px] rounded-full w-[106px] h-[106px] bg-lightWarning flex flex-col items-center justify-center">
                  <img src="./heart-rate.svg" className="w-5 h-5" />
                  <p className="text-purple text-[10px] font-medium">
                  Heart Rate
                  </p>
                  <p className="font-medium text-xs text-[#253343]">
                    81{" "}
                    <span className="text-[8px] font-light text-[#6783A0]">
                    BPM
                    </span>
                  </p>
                </div>

                <div className="col-span-1 rounded-full w-[106px] h-[106px] bg-lightWarning flex flex-col items-center justify-center">
                  <img src="./Calm.svg" className="w-5 h-5" />
                  <p className="text-purple text-[10px] font-medium">
                  Calm
                  </p>
                  <p className="font-medium text-xs text-transparent">
                    .
                  </p>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1 rounded-full w-[106px] h-[106px] bg-lightWarning flex flex-col items-center justify-center">
                  <img src="./Sleep.svg" className="w-5 h-5" />
                  <p className="text-purple text-[10px] font-medium">
                  Sleep
                  </p>
                  <p className="font-medium text-xs text-[#253343]">
                    6{" "}
                    <span className="text-[8px] font-light text-[#6783A0]">
                      h
                    </span>
                    54
                    <span className="text-[8px] font-light text-[#6783A0]">
                      m
                    </span>
                  </p>
                </div>

                <div className="col-span-3 rounded-full w-[106px] h-[106px] bg-lightWarning mx-auto mt-10 flex flex-col items-center justify-center">
                  {" "}
                  <img src="./Weight.svg" className="w-5 h-5" />
                  <p className="text-purple text-[10px] font-medium">
                  Weight
                  </p>
                  <p className="font-medium text-xs text-[#253343]">
                    85{" "}
                    <span className="text-[8px] font-light text-[#6783A0]">
                      kg
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recently Alerts cad */}
          <div className="boxShadow rounded-lg col-span-3 row-span-3 px-4 py-3 overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm	font-medium gap-2 flex items-center">
                Recently Alerts
                <div className="text-purple bg-[#F4F5FF] px-[6px] rounded-[2px]">
                  8
                </div>
              </div>
              <div className="text-[#0EB1D2] font-normal">view all</div>
            </div>

            <div className="flex flex-col gap-3 h-full overflow-y-auto scrollbar-hidden">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <img className="w-6 h-6" src="./danger.svg" />
                  <p className="text-xs	">
                    Robert Fox’s{" "}
                    <span className="text-danger">Systolic BP</span> is{" "}
                    <span className="text-danger">116</span>. (Alert set at
                    greater than 100)
                  </p>
                </div>
                <p className="text-[10px] font-light text-[#57728E]">
                  5:50 PM, Tue, 19 oct...
                </p>
              </div>
              <div className="border-gradient w-full"></div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <img className="w-6 h-6" src="./danger.svg" />
                  <p className="text-xs	">
                    Robert Fox’s <span className="text-danger">SPO2</span> is{" "}
                    <span className="text-danger">97</span>. (Alert set at
                    greater than 94)
                  </p>
                </div>
                <p className="text-[10px] font-light text-[#57728E]">
                  5:50 PM, Tue, 19 oct...
                </p>
              </div>
              <div className="border-gradient w-full"></div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <img className="w-6 h-6" src="./danger.svg" />
                  <p className="text-xs	">
                    Robert Fox’s{" "}
                    <span className="text-danger">Systolic BP</span> is{" "}
                    <span className="text-danger">116</span>. (Alert set at
                    greater than 100)
                  </p>
                </div>
                <p className="text-[10px] font-light text-[#57728E]">
                  5:50 PM, Tue, 19 oct...
                </p>
              </div>
              <div className="border-gradient w-full"></div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <img className="w-6 h-6" src="./danger.svg" />
                  <p className="text-xs	">
                    Robert Fox’s <span className="text-danger">SPO2</span> is{" "}
                    <span className="text-danger">97</span>. (Alert set at
                    greater than 94)
                  </p>
                </div>
                <p className="text-[10px] font-light text-[#57728E]">
                  5:50 PM, Tue, 19 oct...
                </p>
              </div>
              <div className="border-gradient w-full"></div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2 items-center">
                  <img className="w-6 h-6" src="./danger.svg" />
                  <p className="text-xs	">
                    Robert Fox’s{" "}
                    <span className="text-danger">Systolic BP</span> is{" "}
                    <span className="text-danger">116</span>. (Alert set at
                    greater than 100)
                  </p>
                </div>
                <p className="text-[10px] font-light text-[#57728E]">
                  5:50 PM, Tue, 19 oct...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
