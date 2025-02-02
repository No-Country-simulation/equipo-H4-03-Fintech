import DashboardFavorites from "@ui/dashboard/CapitalDashboardFavorites";
import Goals from "@ui/dashboard/CapitalDashboardGoals";
import Shortcuts from "@ui/dashboard/CapitalShortcuts";
import Suggestions from "@ui/dashboard/CapitalSuggestions";

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
