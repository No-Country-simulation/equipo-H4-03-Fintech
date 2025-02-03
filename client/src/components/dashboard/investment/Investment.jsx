import Header from "@ui/investments/Header";
import YourMoney from "@ui/investments/YourMoney";
import AssetListPanel from "../../ui/investments/AssetListPanel";
import ToTopButton from "../../ui/investments/ToTopButton";

export default function Investment() {
  return (
    <main className='w-screen min-h-screen flex flex-col justify-start items-center pr-5  pb-0 bg-background'>
      <Header />
      <div className="w-[600px] min-h-screen flex flex-col justify-start items-start gap-5 bg-background">
        <YourMoney />
        <AssetListPanel />
        <ToTopButton />
      </div>
    </main>
  )
}
