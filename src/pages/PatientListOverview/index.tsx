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
      <div className="col-span-12 2xl:col-span-9 gap-4">
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
                    <div className="w-8 h-4 rounded-lg bg-[#FFF5E7] flex items-center justify-center">
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
                      <p className="font-medium	text-[10px] text-[#06C78D]">
                        37
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
                    <p className="text-[#6783A0] text-xs">Pace of aging</p>
                    <div className="w-[54px] h-4 rounded-lg bg-[#FFF5E7] flex items-center justify-center">
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
                    <div className="w-8 h-4 rounded-lg bg-[#FFF5E7] flex items-center justify-center">
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
                      <p className="font-medium	text-[10px] text-[#06C78D]">
                        37
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
                    <p className="text-[#6783A0] text-xs">Cellular</p>
                    <div className="w-[54px] h-4 rounded-lg bg-[#FFF5E7] flex items-center justify-center">
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
                    <div className="w-8 h-4 rounded-lg bg-[#FFF5E7] flex items-center justify-center">
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
                      <p className="font-medium	text-[10px] text-[#06C78D]">
                        37
                      </p>
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
                    <div className="w-[54px] h-4 rounded-lg bg-[#FFF5E7] flex items-center justify-center">
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
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>

                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Walking</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Walk for at least half an hour every day
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>

                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Meditate</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Meditate 3 times a week
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>

                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Moderate Carbs intake</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Up to 3 portions of carbs a day 
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>

                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Drink Water</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Drink water at least 8 glasses in a day
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>

                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Use Vegetables</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Use vegetables at least 400 gr in a day
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>

                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium	text-xs	">Swimming</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Add 2 cardio sessions a week 
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>

                </div>
              </div>

              <div className="flex flex-col gap-2 mb-12" >
                <p className="font-medium	text-xs	">Swimming</p>
                <p className="text-[#6783A0] text-xs text-justify">
                  Add 2 cardio sessions a week 
                </p>
                <div className="flex gap-1">
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Activity</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1">
                    <p className="text-[10px]">Stress</p>
                    <TrendingDownIcon fontSize="small"/>
                  </div>
                  <div className="px-2 py-1 bg-[#E6F9F4] text-[#06C78D] rounded-lg h-4 flex items-center gap-1 text-nowrap">
                    <p className="text-[10px]">Heart Age</p>
                    <TrendingUpIcon fontSize="small"/>
                  </div>

                </div>
              </div>
            </div>
          </div>
          
          <div className="boxShadow rounded-[18px] col-span-2 row-span-12 px-3 py-[10px]"></div>
          <div className="boxShadow rounded-[18px] col-span-3 row-span-3 px-3 py-[10px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
