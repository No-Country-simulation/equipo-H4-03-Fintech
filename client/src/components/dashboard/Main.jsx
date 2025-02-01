import { useSelector } from 'react-redux';
import AcademyLink from '../ui/AcademyLink';
import BalancePanel from '../ui/BalancePanel';
import OnboardingLink from '../ui/OnboardingLink';
import Capital from './Capital';
import Crypto from './Crypto';

export default function Main() {
  const { isCapital } = useSelector(state => state.switcher)

  return (
    <div className="w-[600px] flex flex-col justify-start items-start gap-5 bg-background">
      <OnboardingLink />
      <span className="font-medium text-title text-black">Bienvenido</span>
      <BalancePanel />
      {isCapital ? <Capital /> : <Crypto />}
      <AcademyLink />
    </div>
  )
}
