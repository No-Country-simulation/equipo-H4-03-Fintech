import BackArrow from "./BackArrow";
import CloseToHome from "./CloseToHome";

export default function OnboardingNavbar({ close }) {
  return (
    <nav className="w-[600px] h-20 relative">
      <BackArrow />
      {close && <CloseToHome />}
    </nav>
  )
}
