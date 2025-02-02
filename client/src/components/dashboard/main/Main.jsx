import { useSelector } from 'react-redux';
import AcademyLink from '@ui/dashboard/AcademyLink';
import BalancePanel from '@ui/dashboard/BalancePanel';
import OnboardingLink from '@ui/OnboardingLink';
import Capital from './Capital';
import Crypto from './Crypto';
import DashboardHeader from '@ui/dashboard/DashboardHeader';

export default function Main() {
  const { isCapital } = useSelector(state => state.switcher)

  return (
    <main  className='w-screen min-h-screen flex flex-col justify-start items-center pr-5 pt-5 pb-0 bg-background'>
      <DashboardHeader />
      <div className="w-[600px] flex flex-col justify-start items-start gap-5 bg-background">
        <OnboardingLink />
        <span className="font-medium text-title text-black">Bienvenido</span>
        <BalancePanel />
        {isCapital ? <Capital /> : <Crypto />}
        <AcademyLink />
      </div>
    </main>
  )
}
