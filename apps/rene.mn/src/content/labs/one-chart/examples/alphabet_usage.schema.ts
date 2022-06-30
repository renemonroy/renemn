import { format } from "d3";

export default {
  id: "alphabet-usage",
  title: "Alphabet Usage",
  subtitle: "Relative frequency of letters in the English language.",
  values: {
    letter: {
      scale: "band",
    },
    frequency: {
      scale: "linear",
      domain: [0, 0.13],
    },
  },
  components: [
    {
      type: "background-lines",
      value: "letter",
    },
    {
      type: "bottom-axis",
      value: "letter",
      height: 13,
    },
    {
      type: "left-axis",
      value: "frequency",
      format: (val: number) => format(".0%")(val),
      width: 50,
    },
    {
      type: "vertical-bars",
      value: ["letter", "frequency"],
      borderRadius: 0,
      barWidth: 15,
      legend: "Frequency",
    },
  ],
};
