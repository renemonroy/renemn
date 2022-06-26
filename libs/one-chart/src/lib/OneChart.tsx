import React from "react";
import Card from "../components/Card/Card";
import Legends from "../components/Legends/Legends";
import ChartPlaceholder from "../components/ChartPlaceholder/ChartPlaceholder";
import { IChartProps } from "./OneChart.types";
import { SChart, SChartContainer } from "./OneChart.styles";
import useChart from "../hooks/useChart/useChart";

/**
 * OneChart
 * -----------------------------------------------------------------------
 */
function OneChart({ data, schema, isLoading, inCard = true }: IChartProps) {
  const [{ theme, legends, svgRef, wrapperRef }] = useChart(data, schema);
  return inCard ? (
    <Card isLoading={isLoading}>
      <Card.Header title={schema.title} subtitle={schema.subtitle}>
        {legends && <Legends legendsData={legends} />}
      </Card.Header>
      <Card.Content ref={wrapperRef}>
        <SChart ref={svgRef} id={`${schema.id}-svg`} theme={theme} />
      </Card.Content>
      <Card.Placeholder>
        {(phDimensions: DOMRect) => (
          <ChartPlaceholder
            dimensions={phDimensions}
            hasBars={true}
            hasLegends={true}
            hasTitle={true}
            hasSubtitle={true}
          />
        )}
      </Card.Placeholder>
    </Card>
  ) : (
    <SChartContainer ref={wrapperRef}>
      <SChart ref={svgRef} id={`${schema.id}-svg`} theme={theme} />
    </SChartContainer>
  );
}

export default OneChart;
