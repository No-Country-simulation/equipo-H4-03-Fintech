import { useDispatch, useSelector } from 'react-redux';
import { openMenu } from '../../redux/slices/sidebarSlices';
import CriptoCapitalSwitch from './CriptoCapitalSwitch';

export default function DashboardHeader() {
  const dispatch = useDispatch()
  const { isCapital } = useSelector(state => state.switcher)

  return (
    <header className="w-[600px] flex items-center justify-between">
      <button
        onClick={() => dispatch(openMenu('menu'))}
      >
        <svg width="44" height="44" viewBox="0 0 180 181" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M90 144.832C71.25 144.832 54.675 135.232 45 120.832C45.225 105.832 75 97.582 90 97.582C105 97.582 134.775 105.832 135 120.832C130.043 128.216 123.345 134.267 115.498 138.453C107.65 142.638 98.8938 144.829 90 144.832ZM90 38.332C95.9674 38.332 101.69 40.7026 105.91 44.9221C110.129 49.1417 112.5 54.8647 112.5 60.832C112.5 66.7994 110.129 72.5224 105.91 76.7419C101.69 80.9615 95.9674 83.332 90 83.332C84.0326 83.332 78.3097 80.9615 74.0901 76.7419C69.8705 72.5224 67.5 66.7994 67.5 60.832C67.5 54.8647 69.8705 49.1417 74.0901 44.9221C78.3097 40.7026 84.0326 38.332 90 38.332ZM90 15.832C80.1509 15.832 70.3982 17.772 61.2987 21.5411C52.1993 25.3102 43.9314 30.8346 36.967 37.799C22.9018 51.8643 15 70.9408 15 90.832C15 110.723 22.9018 129.8 36.967 143.865C43.9314 150.829 52.1993 156.354 61.2987 160.123C70.3982 163.892 80.1509 165.832 90 165.832C109.891 165.832 128.968 157.93 143.033 143.865C157.098 129.8 165 110.723 165 90.832C165 49.357 131.25 15.832 90 15.832Z"
            fill={isCapital ? "#004AAC" : "#ffa600"}
          />
        </svg>
      </button>

      <CriptoCapitalSwitch />
      {/* 
      <img
        src="/assets/bell.svg"
        alt="default user"
        className='size-11'
      /> 
      */}
      <button
        onClick={() => dispatch(openMenu('menu'))}
      >
        <svg width="44" height="44" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_204_1313)">
            <path d="M22.3929 19.1088V20.1802H3.10718V19.1088L5.25004 16.966V10.5374C5.25004 7.21596 7.42503 4.29096 10.6072 3.3481V3.03739C10.6072 2.46907 10.8329 1.92402 11.2348 1.52216C11.6367 1.1203 12.1817 0.894531 12.75 0.894531C13.3184 0.894531 13.8634 1.1203 14.2653 1.52216C14.6671 1.92402 14.8929 2.46907 14.8929 3.03739V3.3481C18.075 4.29096 20.25 7.21596 20.25 10.5374V16.966L22.3929 19.1088ZM14.8929 21.2517C14.8929 21.82 14.6671 22.365 14.2653 22.7669C13.8634 23.1688 13.3184 23.3945 12.75 23.3945C12.1817 23.3945 11.6367 23.1688 11.2348 22.7669C10.8329 22.365 10.6072 21.82 10.6072 21.2517" fill={isCapital ? "#004AAC" : "#ffa600"} />
          </g>
          <defs>
            <clipPath id="clip0_204_1313">
              <rect width="24" height="24" fill="white" transform="translate(0.75 0.144531)" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </header>
  )
}
