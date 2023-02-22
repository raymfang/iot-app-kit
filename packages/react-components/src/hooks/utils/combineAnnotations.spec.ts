import { TimeSeriesData } from '@iot-app-kit/core';
import { combineAnnotations } from './combineAnnotations';

const TIME_SERIES_DATA_WITH_ALARMS = {
  annotations: {
    y: [
      {
        color: '#d13212',
        comparisonOperator: 'GT',
        dataStreamIds: ['alarm-asset-id---input-property-id'],
        description: 'inputProperty > 30',
        icon: 'active',
        severity: 1,
        showValue: true,
        value: 30,
      },
      {
        color: '#d13212',
        comparisonOperator: 'EQ',
        dataStreamIds: ['alarm-asset-id---alarm-state-property-id'],
        description: 'inputProperty > 30',
        icon: 'active',
        severity: 1,
        value: 'Active',
      },
      {
        color: '#f89256',
        comparisonOperator: 'EQ',
        dataStreamIds: ['alarm-asset-id---alarm-state-property-id'],
        description: 'inputProperty > 30',
        icon: 'latched',
        severity: 2,
        value: 'Latched',
      },
      {
        color: '#3184c2',
        comparisonOperator: 'EQ',
        dataStreamIds: ['alarm-asset-id---alarm-state-property-id'],
        description: 'inputProperty > 30',
        icon: 'acknowledged',
        severity: 3,
        value: 'Acknowledged',
      },
      {
        color: '#1d8102',
        comparisonOperator: 'EQ',
        dataStreamIds: ['alarm-asset-id---alarm-state-property-id'],
        description: 'inputProperty > 30',
        icon: 'normal',
        severity: 4,
        value: 'Normal',
      },
      {
        color: '#879596',
        comparisonOperator: 'EQ',
        dataStreamIds: ['alarm-asset-id---alarm-state-property-id'],
        description: 'inputProperty > 30',
        icon: 'snoozed',
        severity: 5,
        value: 'SnoozeDisabled',
      },
      {
        color: '#687078',
        comparisonOperator: 'EQ',
        dataStreamIds: ['alarm-asset-id---alarm-state-property-id'],
        description: 'inputProperty > 30',
        icon: 'disabled',
        severity: 6,
        value: 'Disabled',
      },
    ],
  },
  dataStreams: [
    {
      id: 'alarm-asset-id---alarm-state-property-id',
      streamType: 'ALARM',
      name: 'AWS/ALARM_STATE',
      resolution: 0,
      refId: undefined,
      isRefreshing: false,
      isLoading: false,
      error: undefined,
      dataType: 'NUMBER',
      aggregates: {},
      data: [
        {
          x: 1000000,
          y: 'Active',
        },
        {
          x: 2000000,
          y: 'Normal',
        },
      ],
    },
  ],
  viewport: {
    duration: '5m',
  },
} as TimeSeriesData;

it('correctly combines annotations', () => {
  const yAnnotation = {
    color: 'blue',
    value: 100,
  };

  const combinedAnnotations = combineAnnotations(
    {
      colorDataAcrossThresholds: true,
      show: true,
      thresholdOptions: true,
      y: [yAnnotation],
    },
    {
      y: TIME_SERIES_DATA_WITH_ALARMS.annotations.y,
    }
  );

  expect(combinedAnnotations).toEqual({
    colorDataAcrossThresholds: true,
    show: true,
    thresholdOptions: true,
    y: [yAnnotation, ...TIME_SERIES_DATA_WITH_ALARMS.annotations.y],
  });
});
