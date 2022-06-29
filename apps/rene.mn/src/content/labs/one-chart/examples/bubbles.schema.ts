import { format } from "d3";

export default {
  id: "bubbles",
  title: "Life Expectancy",
  subtitle: "Relationship between GDP (PPP) and population in countries.",
  values: {
    lifeExp: {
      scale: "linear",
      domain: [30, 90],
    },
    gdpPerCap: {
      scale: "linear",
      domain: [0, 50000],
      orientation: "horizontal",
    },
    pop: {
      scale: "linear",
      domain: [200000, 1310000000],
      range: [2, 40],
      orientation: "horizontal",
    },
  },
  components: [
    {
      type: "bottom-axis",
      value: "gdpPerCap",
      format: (val: number) => `$${format(".2s")(val)}`,
      height: 13,
    },
    {
      type: "left-axis",
      value: "lifeExp",
      format: (val: number) => `${val} years`,
      width: 50,
    },
    {
      type: "right-axis",
      value: "lifeExp",
      format: () => ``,
      width: 30,
    },
    {
      type: "bubbles",
      value: ["gdpPerCap", "lifeExp", "pop"],
      legend: "Population",
    },
  ],
};
