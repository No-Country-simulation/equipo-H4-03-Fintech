import CryptoSuggestionItem from "./CryptoSuggestionItem";

export default function Suggestions() {
  return (
    <div className="w-[600px] flex flex-col items-center my-4">
      <div className="w-[500px] flex flex-col gap-5">
        <span className="font-medium text-subtitle text-black">Sugerencias</span>
        <div className="w-[500px] grid grid-cols-2 justify-around ml-5 gap-y-6">
          <CryptoSuggestionItem
            title={'BTC/FDUSD'}
            icon={'bitcoin'}
            amount={'$99.581,36'}
            variation={'+3.08%'}
          />
          <CryptoSuggestionItem
            title={'XRP/USDT'}
            icon={'xrp'}
            amount={'$3,05'}
            variation={'+14.30%'}
          />
          <CryptoSuggestionItem
            title={'BTC/FDUSD'}
            icon={'bitcoin'}
            amount={'$99.581,36'}
            variation={'+3.08%'}
          />
          <CryptoSuggestionItem
            title={'BTC/FDUSD'}
            icon={'bitcoin'}
            amount={'$99.581,36'}
            variation={'+3.08%'}
          />
        </div>
      </div>
    </div>
  )
}
