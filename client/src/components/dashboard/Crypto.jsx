import Shortcuts from "../ui/CryptoShortcuts";
import DashboardFavorites from "../ui/CryptoDashboardFavorites";
import Goals from "../ui/CryptoDashboardGoals";
import Suggestions from "../ui/CryptoSuggestions";

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
