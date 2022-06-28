import {
  extent,
  interpolateRound,
  max,
  ScaleBand,
  scaleBand,
  ScaleLinear,
  scaleLinear,
  ScaleTime,
  scaleTime,
} from "d3";
import { IScaleConfig, TData, TDimensions, TValueName } from "./useChart.types";

export default {
  /**
   * Scale type Band
   * -----------------------------------------------------------------------
   */
  // eslint-disable-next-line
  ["band"](
    { value, domain, range, size }: IScaleConfig,
    dimensions: TDimensions,
    data: TData,
  ): ScaleBand<string> {
    return scaleBand()
      .domain(domain ? domain : data.map((d) => (d as TValueName)[value]))
      .range(range ? [range[0], range[1]] : [0, size || dimensions.width]);
    // .paddingInner(gap || constants.SCALE_GAP);
  },

  /**
   * Scale type Linear
   * -----------------------------------------------------------------------
   */
  // eslint-disable-next-line
  ["linear"](
    { value, domain, range, orientation = "vertical" }: IScaleConfig,
    dimensions: TDimensions,
    data: TData,
  ): ScaleLinear<number, number, never> {
    const maxVal = max(data, (d) => (d as TValueName)[value]);
    let _range;
    if (orientation === "vertical") {
      _range = range ? [range[1], range[0]] : [dimensions.height, 0];
    } else {
      _range = range ? [range[0], range[1]] : [0, dimensions.width];
    }
    return scaleLinear()
      .domain(domain ? [domain[0], domain[1]] : [0, maxVal])
      .nice()
      .range(_range)
      .interpolate(interpolateRound);
  },

  /**
   * getScaleTime
   * -----------------------------------------------------------------------
   */
  // eslint-disable-next-line
  ["time"](
    { domain, range, size, value }: IScaleConfig,
    dimensions: TDimensions,
    data: TData,
  ): ScaleTime<number, number, never> {
    return scaleTime()
      .domain(
        domain
          ? domain
          : (extent(data, (d) => new Date(d[value] as string)) as any),
      )
      .range(range ? [range[0], range[1]] : [0, size || dimensions.width]);
  },
};
