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

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-12 gap-4">
        <div className="flex items-center justify-between mt-10 ">
          <div className="w-1/2">
            <ProfileCard></ProfileCard>
          </div>
          <div className="flex justify-end items-center gap-2 text-white text-sm">
            <div className="px-4 py-2 bg-[#3730A1] flex justify-center items-center gap-2 rounded-lg">
              <img src="./filter-add.svg" className="w-6 h-6" />
              Add Filter
            </div>
            <div className="px-4 py-2 bg-[#3730A1] flex justify-center items-center gap-2 rounded-lg">
              <img src="./message-add.svg" className="w-6 h-6" />
              Start New Chat
            </div>
          </div>
        </div>
        <div className="mt-4 mb-8 grid grid-cols-12 gap-4">

          <div className="col-span-4 flex gap-2 flex-col ">
            <div className="flex rounded-[8px] bg-white dark:bg-darkmode-400 px-3 py-2 items-center justify-between  ">
              <div className="bg-purple text-white py-3 px-8 rounded-[8px] text-sm font-medium">Chat History</div>
              <div className=" text-sm font-medium py-2 px-8">Notification History</div>
            </div>

            <div className="flex rounded-[8px] bg-white dark:bg-darkmode-400 px-4 py-[10px] items-center justify-between ">
              <div className="w-full rounded-md border-none bg-[#F1F5F9] flex items-center">
                <img src="./public/search.svg" alt="search icon" className="w-6 h-6 ms-[10px]" />
                <input placeholder="Search for Conversational ID or User..." type="text" className="w-full border-none bg-transparent placeholder:font-light placeholder:text-xs placeholder:test-[#92A7C1] focus:ring-0"/>
              </div>
            </div>

            <p className="text-[#6783A0] text-xs font-normal -mb-1">Today</p>
            <div className="flex flex-col gap-2">

              <div className="flex flex-col rounded-[8px] bg-white dark:bg-darkmode-400 px-4 py-2 items-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <img src="./public/message.svg" className="w-6 h-6 " />
                      <p className="text-[#445A74] text-xs font-normal">Conversation_ID_2154847846</p>
                    </div>
                    <div className="text-[#6783A0] text-[10px] font-normal">
                      06:05AM
                    </div>
                  </div>
                  <div className="text-[#6783A0] font-normal text-[10px] w-full">
                  There are many variations of massages that we can show you im...
                  </div>
  
              </div>

              <div className="flex flex-col rounded-[8px] bg-white dark:bg-darkmode-400 px-4 py-2 items-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <img src="./public/message.svg" className="w-6 h-6 " />
                      <p className="text-[#445A74] text-xs font-normal">Conversation_ID_2154847846</p>
                    </div>
                    <div className="text-[#6783A0] text-[10px] font-normal">
                      06:05AM
                    </div>
                  </div>
                  <div className="text-[#6783A0] font-normal text-[10px] w-full">
                  There are many variations of massages that we can show you im...
                  </div>
  
              </div>

            </div>

            <p className="text-[#6783A0] text-xs font-normal -mb-1">Yesterday</p>
            <div className="flex flex-col gap-2">

              <div className="flex flex-col rounded-[8px] bg-white dark:bg-darkmode-400 px-4 py-2 items-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <img src="./public/message.svg" className="w-6 h-6 " />
                      <p className="text-[#445A74] text-xs font-normal">Conversation_ID_2154847846</p>
                    </div>
                    <div className="text-[#6783A0] text-[10px] font-normal">
                      06:05AM
                    </div>
                  </div>
                  <div className="text-[#6783A0] font-normal text-[10px] w-full">
                  There are many variations of massages that we can show you im...
                  </div>
  
              </div>

              <div className="flex flex-col rounded-[8px] bg-white dark:bg-darkmode-400 px-4 py-2 items-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <img src="./public/message.svg" className="w-6 h-6 " />
                      <p className="text-[#445A74] text-xs font-normal">Conversation_ID_2154847846</p>
                    </div>
                    <div className="text-[#6783A0] text-[10px] font-normal">
                      06:05AM
                    </div>
                  </div>
                  <div className="text-[#6783A0] font-normal text-[10px] w-full">
                  There are many variations of massages that we can show you im...
                  </div>
  
              </div>

              <div className="flex flex-col rounded-[8px] bg-white dark:bg-darkmode-400 px-4 py-2 items-center gap-2">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <img src="./public/message.svg" className="w-6 h-6 " />
                      <p className="text-[#445A74] text-xs font-normal">Conversation_ID_2154847846</p>
                    </div>
                    <div className="text-[#6783A0] text-[10px] font-normal">
                      06:05AM
                    </div>
                  </div>
                  <div className="text-[#6783A0] font-normal text-[10px] w-full">
                  There are many variations of massages that we can show you im...
                  </div>
  
              </div>


            </div>

          </div>

          <div className="flex flex-col justify-between col-span-8 bg-white dark:bg-darkmode-400 rounded-[8px] h-[550px] mb-[37px] ">
            
            <div>
              <div className="flex items-center justify-start gap-2 py-5 px-6">
                <img src="./public/message.svg" className="w-6 h-6 " />
                <p className="text-[#445A74] text-xs font-normal">Conversation_ID_2154847846</p>
              </div>
              <hr/>
            </div>
            
            <div className="">
              {/* chatpart */}

            </div>

            <div>
              <hr/>
              <div className="flex items-center justify-between p-4 pt-[10px]">
                <input placeholder="Type your message..." type="text" 
                className="w-full border-none bg-transparent placeholder:font-light placeholder:text-xs placeholder:test-[#92A7C1] focus:ring-0"/>
                
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#3730A1]">
                  <img src="./public/send.svg" alt="send icon" className="w-5 h-5" />
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Main;
