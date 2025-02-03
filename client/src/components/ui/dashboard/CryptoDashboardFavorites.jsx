import CryptoFavoriteItem from "./CryptoFavoriteItem"

export default function DashboardFavorites({ title, amount, variation }) {

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[600px] flex flex-col items-start px-10 gap-4">
        <span class="font-medium text-subtitle text-black">Favoritos</span>
        <div className="w-[500px] flex justify-around items-center bg-white rounded-lg mx-auto p-3 shadow-custom2">
          <CryptoFavoriteItem
            title={'Bitcoin'}
            icon={'bitcoin'}
            amount={'$99.581,36'}
            variation={'-1,33 %'}
          />
          <div className="w-[1px] h-24 bg-black -my-3" />
          <CryptoFavoriteItem
            title={'XRP'}
            icon={'xrp'}
            amount={'$3,05'}
            variation={'+14,30 %'}
          />
          <div className="w-[1px] h-24 bg-black -my-3" />
          <CryptoFavoriteItem
            title={'ETH'}
            icon={'eth'}
            amount={'$3.419,91'}
            variation={'+5.85 %'}
          />
          <div className="w-[1px] h-24 bg-black -my-3" />
          <CryptoFavoriteItem
            title={'Bitcoin'}
            icon={'bitcoin'}
            amount={'$99.581,36'}
            variation={'-1,33 %'}
          />
        </div>
      </div>
    </div>
  )
}
