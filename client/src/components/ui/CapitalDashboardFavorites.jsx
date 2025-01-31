import CapitalFavoriteItem from "./CapitalFavoriteItem"

export default function DashboardFavorites({ title, amount, variation }) {

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[600px] flex flex-col items-start px-10 gap-4">
        <span class="font-medium text-subtitle text-black">Favoritos</span>
        <div className="w-[500px] flex justify-around items-center bg-white rounded-lg mx-auto p-3 shadow-custom2">
          <CapitalFavoriteItem
            title={'AL30'}
            amount={'1234.5'}
            variation={'-1,33 %'}
          />
          <div className="w-[1px] h-24 bg-black -my-3" />
          <CapitalFavoriteItem
            title={'AL30'}
            amount={'1234.5'}
            variation={'+0,02 %'}
          />
          <div className="w-[1px] h-24 bg-black -my-3" />
          <CapitalFavoriteItem
            title={'APPLE'}
            amount={'1234.5'}
            variation={'+11,23 %'}
          />
          <div className="w-[1px] h-24 bg-black -my-3" />
          <CapitalFavoriteItem
            title={'AL30'}
            amount={'1234.5'}
            variation={'-1,33 %'}
          />
        </div>
      </div>
    </div>
  )
}
