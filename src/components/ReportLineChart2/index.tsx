import Chart from "@/components/Base/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { getColor } from "@/utils/colors";
import { selectColorScheme } from "@/stores/colorSchemeSlice";
import { selectDarkMode } from "@/stores/darkModeSlice";
import { useAppSelector } from "@/stores/hooks";
import { useMemo } from "react";

interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
  width: number;
  height: number;
}

function Main(props: MainProps) {
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const data: ChartData = useMemo(() => {
    return {
      labels: [
        "4w",
        "3w",
        "2w",
        "1w",
        "Now",
        "Future",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [100, 20, 200, 300, 260, 380, 300, 380, 480, 490, 500],
          borderWidth: 1,
          borderColor: colorScheme ? getColor("primary", 0.8) : "",

          backgroundColor: "transparent",
          pointBorderColor: "transparent",
          // tension: 0.4,
        },
        // {
        //   label: "# of Votes",
        //   data: [0, 300, 400, 560, 320, 600, 720, 850, 690, 805, 1200, 1010],
        //   borderWidth: 2,
        //   borderDash: [2, 2],
        //   borderColor: darkMode
        //     ? getColor("slate.400", 0.6)
        //     : getColor("slate.400"),
        //   backgroundColor: "transparent",
        //   pointBorderColor: "transparent",
        //   tension: 0.4,
        // },
      ],
    };
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 8,
            },
            color: getColor("slate.500", 0.8),
            maxRotation:0,
            minRotation:0,
          },
          grid: {
            display: false,
          },
          border: {
            display: true,
          },
        },
        y: {
          ticks: {
            font: {
              size: 8,
            },
            color: getColor("slate.500", 0.8),
            callback: function (value) {
              return value;
            },
          },
          grid: {
            color: darkMode
              ? getColor("slate.500", 0.3)
              : getColor("slate.300"),
          },
          border: {
            dash: [4,4],
            display: true,
          },
        },
      },
    };
  }, [colorScheme, darkMode]);

  return (
    <Chart
      type="line"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
};

export default Main;
