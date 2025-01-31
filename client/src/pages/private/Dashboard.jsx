import { useSelector } from 'react-redux'
import Sidebar from '../../components/dashboard/sidebar.jsx/Sidebar'
import DashboardHeader from '../../components/ui/DashboardHeader';
import Capital from '../../components/dashboard/Capital';
import Crypto from '../../components/dashboard/Crypto';
import OnboardingLink from '../../components/ui/OnboardingLink';
import BalancePanel from '../../components/ui/BalancePanel';
import AcademyLink from '../../components/ui/AcademyLink';

export default function Dashboard() {

  const { isCapital } = useSelector(state => state.switcher)

  return (
    <div className='w-screen min-h-screen flex flex-col justify-start items-center p-10 bg-background'>
      <div className="w-[600px] flex flex-col justify-start items-start gap-5 bg-background">

        <DashboardHeader />
        <Sidebar />
        <OnboardingLink />
        <span className="font-medium text-title text-black">Bienvenido</span>
        <BalancePanel />
        {isCapital ? <Capital /> : <Crypto />}
        <AcademyLink />
      </div>
    </div> 
  )
}
