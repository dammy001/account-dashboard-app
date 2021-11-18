import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';

export type ProgressBarType = {
  progressColor?: string;
  progress: string | number;
  height?: number;
  bgColor?: string;
  showProgress?: boolean;
  [key: string]: any;
};

export const ProgressBar: ForwardRefExoticComponent<
  Pick<ProgressBarType, keyof ProgressBarType> & RefAttributes<unknown>
> = forwardRef(
  (
    {
      progress,
      progressColor,
      bgColor,
      height,
      showProgress,
      ...rest
    }: ProgressBarType,
    ref: ForwardedRef<any>
  ) => {
    const containerStyle: CSSProperties = {
      height: height ?? '7.23px',
      width: '100%',
      backgroundColor: bgColor ?? '#ECEFF5',
      borderRadius: '7.5px',
    };

    const ChildStyle: CSSProperties = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: progressColor ?? '#FFB1B1',
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out',
    };

    const progressLabel: CSSProperties = {
      color: 'black',
      padding: 10,
      fontWeight: 500,
      fontSize: '13px',
    };

    return (
      <div style={containerStyle} {...rest} ref={ref}>
        <div style={ChildStyle}>
          <span
            style={progressLabel}
            role="progressbar"
            // aria-valuenow={`${progress}`}
            // aria-valuemin={0}
            // aria-valuemax={100}
          >
            {showProgress && `${progress}%`}
          </span>
        </div>
      </div>
    );
  }
);
