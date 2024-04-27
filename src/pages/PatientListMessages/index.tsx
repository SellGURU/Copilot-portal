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
              <img src="./filter-add.svg"  className="w-6 h-6"/>
              Add Filter
            </div>
            <div className="px-4 py-2 bg-[#3730A1] flex justify-center items-center gap-2 rounded-lg">
              <img src="./message-add.svg"  className="w-6 h-6"/>
              Start New Chat
            </div>
          </div>
        </div>
        <div className="mt-4 mb-8">

          </div>

        <div className="col-span-12 bg-white dark:bg-darkmode-400 pt-6 px-4 rounded-[8px]">

        </div>


      </div>
    </div>
  );
}

export default Main;
