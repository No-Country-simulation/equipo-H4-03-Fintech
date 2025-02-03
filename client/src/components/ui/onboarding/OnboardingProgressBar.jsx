import { useSelector } from "react-redux";

export default function OnboardingProgressBar() {

  const { progress } = useSelector(state => state.user)
  return (
    <main className="w-[550px] flex flex-col items-center justify-start gap-2">
      <div className="w-full h-5 bg-secondary rounded-sm">
        <div className="h-5 bg-primary rounded-sm" style={{ "width": `${progress}%` }} />
      </div>
      <span className="text-primary">{progress} Completado.</span>
    </main>
  )
}
