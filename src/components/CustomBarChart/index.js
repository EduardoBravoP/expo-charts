import React from 'react';
import { ActivityIndicator } from 'react-native';

import { BarChart } from 'react-native-svg-charts';

function CustomBarChart({ chartData, chartDimensions }) {
  return chartDimensions ? (
    <BarChart
      data={chartData}
      yMin={0}
      yAccessor={({ item }) => item.value}
      spacingInner={0.25}
      style={{
        borderRadius: 8,
        width: chartDimensions.width,
        height: chartDimensions.height,
      }}
      svg={{ fill: 'rgba(175, 220, 139, 0.7)' }}
    />
  ) : (
    <ActivityIndicator size="small" color="#2b2b73" />
  );
}

export default CustomBarChart;
