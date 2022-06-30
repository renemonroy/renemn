import { format, max } from "d3";
import data from "./us_ad_spending.data.json";

const colors = ["primary300", "secondary300", "supportive300", "ui300"];

export default {
  id: "us-ad-spending",
  title: "US Media Ad Spending",
  subtitle: "US total ad spending by media (2016-2022).",
  values: {
    year: {
      scale: "band",
    },
    spending: {
      scale: "linear",
      domain: [0, max(data, (d) => d.spending)],
    },
  },
  xAxisGap: 0,
  components: [
    {
      type: "background-lines",
      value: "year",
    },
    {
      type: "bottom-axis",
      value: "year",
      height: 13,
    },
    {
      type: "left-axis",
      value: "spending",
      format: (val: number) => `$${format(".2s")(val)}K`,
      width: 50,
    },
    ...data
      .reduce((acc, { media }) => {
        if (!acc.includes(media)) acc.push(media);
        return acc;
      }, [])
      .map((media, i) => [
        {
          type: "line",
          value: ["year", "spending"],
          filter: (item) => item.media === media,
          position: "center",
          enabledColor: colors[i],
        },
        {
          type: "dots",
          value: ["year", "spending"],
          legend: media,
          dotWidth: 6,
          filter: (item) => item.media === media,
          position: "center",
          enabledColor: colors[i],
        },
      ])
      .flat(),
  ],
};
