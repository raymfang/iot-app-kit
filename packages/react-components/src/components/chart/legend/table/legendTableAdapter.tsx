import React, { useEffect, useRef, useState } from 'react';
import { DataStream } from '@iot-app-kit/core';
import { LineSeriesOption, SeriesOption } from 'echarts';
import { InternalGraphicComponentGroupOption } from '../../trendCursor/types';
import { ChartLegend } from '../../types';
import { ChartLegendTable } from './table';
import { DataStreamInformation, TrendCursor } from './types';
import isEqual from 'lodash.isequal';

const mapDataStreamInformation = (
  datastreams: DataStream[],
  series: SeriesOption[],
  graphic: InternalGraphicComponentGroupOption[],
  visibleContent: ChartLegend['visibleContent']
): DataStreamInformation[] =>
  datastreams.map(({ id, name, unit }) => {
    const foundSeries = series.find((series) => series.id === id);
    const graphicIndex = series.findIndex((series) => series.id === id);
    const trendCursorValues = graphic.reduce<
      DataStreamInformation['trendCursorValues']
    >((valueMap, nextGraphic) => {
      const trendCursorId = nextGraphic.id as string;
      valueMap[trendCursorId] = nextGraphic.yAxisMarkerValue[graphicIndex];
      return valueMap;
    }, {});
    const unitValue = visibleContent?.unit && unit ? ` (${unit})` : '';

    return {
      id,
      name: `${name}${unitValue}`,
      color:
        ((foundSeries as LineSeriesOption)?.lineStyle?.color as string) ?? '',
      trendCursorValues,
    };
  });

const mapTrendCursors = (
  graphic: InternalGraphicComponentGroupOption[]
): TrendCursor[] =>
  graphic.map(({ id, color, timestampInMs }) => {
    return {
      id: id as string,
      color,
      date: timestampInMs,
    };
  });

type ChartLegendTableAdapterOptions = ChartLegend & {
  datastreams: DataStream[];
  series: SeriesOption[];
  graphic: InternalGraphicComponentGroupOption[];
};

export const ChartLegendTableAdapter = ({
  datastreams,
  series,
  graphic,
  visibleContent,
  ...options
}: ChartLegendTableAdapterOptions) => {
  const [datastreamInformation, setDatastreamInformation] = useState<
    DataStreamInformation[]
  >([]);
  const [trendCursors, setTrendCursors] = useState<TrendCursor[]>([]);
  const previousDatastreamInformation = useRef(
    mapDataStreamInformation(datastreams, series, graphic, visibleContent)
  );
  const previousTrendCursors = useRef(mapTrendCursors(graphic));

  useEffect(() => {
    const mappedDataStreamInformation = mapDataStreamInformation(
      datastreams,
      series,
      graphic,
      visibleContent
    );
    if (
      !isEqual(
        previousDatastreamInformation.current,
        mappedDataStreamInformation
      )
    ) {
      setDatastreamInformation(mappedDataStreamInformation);
      previousDatastreamInformation.current = mappedDataStreamInformation;
    }
    const mappedTrendCursors = mapTrendCursors(graphic);
    if (!isEqual(previousTrendCursors.current, mappedTrendCursors)) {
      setTrendCursors(mappedTrendCursors);
      previousTrendCursors.current = mappedTrendCursors;
    }
  }, [datastreams, series, graphic, visibleContent]);

  return (
    <ChartLegendTable
      datastreams={datastreamInformation}
      trendCursors={trendCursors}
      {...options}
    />
  );
};