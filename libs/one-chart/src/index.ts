import OneChart from "./lib/OneChart";
import { ChartsProvider as chartsProvider } from "./stores/ChartsStore/ChartsStore";
import useChartHook from "./hooks/useChart/useChart";

export const ChartsProvider = chartsProvider;
export const useChart = useChartHook;
export default OneChart;
