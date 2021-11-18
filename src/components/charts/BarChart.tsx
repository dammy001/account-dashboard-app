import { memo, NamedExoticComponent } from 'react';

export type BarChartType = {
  data: Record<string, any>[];
};

export const BarChart: NamedExoticComponent<BarChartType> = memo<BarChartType>(
  ({ data }: BarChartType) => {
    return (
      <div className="container">
        <div className="main-container">
          {data.map(({ value, color }, i: number) => {
            return (
              <div className="bar-chart-container" key={i}>
                <div className="number" style={{ color: color }} />
                <div
                  className="chart bg-[#9DC8FF] bg-opacity-20 hover:bg-[#157AFF]"
                  style={{
                    height: `${value === 0 ? value : value / 6}px`,
                    mixBlendMode: 'normal',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
