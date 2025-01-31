import DashboardFavorites from "../ui/CapitalDashboardFavorites";
import Goals from "../ui/CapitalDashboardGoals";
import Shortcuts from "../ui/CapitalShortcuts";
import Suggestions from "../ui/CapitalSuggestions";

export default function Capital () {
  return (
    <div className="w-[600px] flex flex-col justify-start items-center gap-5 bg-background">
      <Shortcuts />
      <DashboardFavorites />
      <Goals />
      <Suggestions />
    </div>
  )
}
