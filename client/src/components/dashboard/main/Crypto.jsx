import Shortcuts from "@ui/dashboard/CryptoShortcuts";
import DashboardFavorites from "@ui/dashboard/CryptoDashboardFavorites";
import Goals from "@ui/dashboard/CryptoDashboardGoals";
import Suggestions from "@ui/dashboard/CryptoSuggestions";

export default function Crypto () {
  return (
    <div className="w-[600px] flex flex-col justify-start items-start gap-5 bg-background">
      <Shortcuts />
      <DashboardFavorites />
      <Goals />
      <Suggestions />
    </div>
  )
}
