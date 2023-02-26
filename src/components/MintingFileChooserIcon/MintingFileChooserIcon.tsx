import { FC } from 'react'
import s from './mintingFileChooserIcon.module.scss'

interface MintingFileChooserIconProps {
  currencyTypeShadowColor: string
  currencyTypeColor: string
}

export const MintingFileChooserIcon: FC<MintingFileChooserIconProps> = ({
  currencyTypeColor,
  currencyTypeShadowColor,
}) => {
  return (
    <svg
      width='172'
      height='172'
      viewBox='0 0 172 172'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      data-ember-extension='1'
      className={s.icon}
    >
      <g opacity='0.1' filter='url(#filter0_d_740_8855)'>
        <circle cx='86' cy='84' r='78.75' stroke='white' stroke-width='2.5' />
      </g>
      <g opacity='0.1' filter='url(#filter1_d_740_8855)'>
        <circle cx='86' cy='84' r='78.75' stroke='white' stroke-width='2.5' />
      </g>
      <g className={s.colorBorder} filter='url(#filter2_d_740_8855)'>
        <path
          d='M70.3745 81.6255C69.0631 81.6255 68 82.6886 68 84C68 85.3114 69.0631 86.3745 70.3745 86.3745H83.6255V99.6255C83.6255 100.937 84.6886 102 86 102C87.3114 102 88.3745 100.937 88.3745 99.6255V86.3745H101.626C102.937 86.3745 104 85.3114 104 84C104 82.6886 102.937 81.6255 101.626 81.6255H88.3745V68.3745C88.3745 67.0631 87.3114 66 86 66C84.6886 66 83.6255 67.0631 83.6255 68.3745V81.6255H70.3745Z'
          fill={currencyTypeColor}
        />
      </g>
      <circle
        opacity='0.5'
        cx='86'
        cy='84'
        r='72'
        stroke='url(#paint0_radial_740_8855)'
        stroke-width='3'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-dasharray='0.01 7.5'
      />
      <circle
        cx='86'
        cy='84'
        r='55.0228'
        stroke='url(#paint1_radial_740_8855)'
        stroke-width='19.9544'
        stroke-dasharray='3.8 4.5'
      />
      <defs>
        <filter
          id='filter0_d_740_8855'
          x='0'
          y='0'
          width='172'
          height='172'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='2' />
          <feGaussianBlur stdDeviation='3' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_740_8855'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_740_8855'
            result='shape'
          />
        </filter>
        <filter
          id='filter1_d_740_8855'
          x='0'
          y='0'
          width='172'
          height='172'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='2' />
          <feGaussianBlur stdDeviation='3' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_740_8855'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_740_8855'
            result='shape'
          />
        </filter>
        <filter
          id='filter2_d_740_8855'
          x='52'
          y='50'
          width='68'
          height='68'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='8' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix type='matrix' values={currencyTypeShadowColor} />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_740_8855'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_740_8855'
            result='shape'
          />
        </filter>
        <radialGradient
          id='paint0_radial_740_8855'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(50.6792 40.5283) rotate(47.7639) scale(139.449)'
        >
          <stop stop-color={currencyTypeColor} stop-opacity='0.8' />
          <stop offset='1' stop-color={currencyTypeColor} stop-opacity='0.2' />
        </radialGradient>
        <radialGradient
          id='paint1_radial_740_8855'
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          gradientTransform='translate(54.1132 44.7547) rotate(47.7639) scale(125.891)'
        >
          <stop stop-color={currencyTypeColor} />
          <stop offset='1' stop-color={currencyTypeColor} stop-opacity='0.2' />
        </radialGradient>
      </defs>
    </svg>
  )
}
