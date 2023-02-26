import { FC, useState, useDeferredValue } from 'react'
import { getTrackBackground, Range as ReactRange } from 'react-range'
import { useDebounceFunction } from 'shared/hooks/useDebounce'

import s from './range.module.scss'

interface RangeProps {
  max: number
  min: number
  step: number
  numbers: [number, number]
  variant: 'level' | 'price'
  handleFilters?: (filter: any, value: number[]) => void
}
export const Range: FC<RangeProps> = ({
  max,
  min,
  step,
  numbers,
  variant,
  handleFilters,
}) => {
  const [values, setValues] = useState<number[]>(numbers)
  useDebounceFunction(() => handleFilters?.(variant, values), values, 500)
  
  const handleSetValues = (value: number[]) => {
    setValues(value)
  }
  
  return (
    <div className={s.rangeBlock}>
      <div className={s.wrapper}>
        <ReactRange
          step={step}
          min={min}
          max={max}
          values={values}
          onChange={value => handleSetValues(value)}
          renderTrack={({ props, children }) => (
            <div
              className={s.track}
              {...props}
              style={{
                background: getTrackBackground({
                  values: values,
                  colors: [
                    'rgba(255, 255, 255, 0.1)',
                    '#52ff00',
                    'rgba(255, 255, 255, 0.1)',
                  ],
                  min,
                  max,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              className={s.thumb}
              {...props}
              style={{ ...props.style }}
            ></div>
          )}
        />
      </div>
      {variant === 'price' ? (
        <div className={s.values}>
          <span className={s.value}>{values[0]}</span>
          <span className={s.value}>{values[1]}</span>
        </div>
      ) : (
        <div className={s.values}>
          <span className={s.value}>{values[0]}</span>
          <span className={s.fractionValue}>
            {values[1]} <span className={s.fractionMaxValue}>/ {max}</span>
          </span>
        </div>
      )}
    </div>
  )
}
