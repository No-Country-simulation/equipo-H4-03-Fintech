import CapitalSuggestionItem from "./CapitalSuggestionItem";

export default function Suggestions() {
  return (
    <div className="w-[600px] flex flex-col items-center my-4">
      <div className="w-[500px] flex flex-col gap-5">
        <span className="font-medium text-subtitle text-black">Sugerencias</span>
        <div className="w-[500px] grid grid-cols-2 justify-around ml-5 gap-y-6">
          <CapitalSuggestionItem TNA={38.00} currency={'pesos'} title={'YPF - AL30'} />
          <CapitalSuggestionItem TNA={38.00} currency={'dolares'} title={'YPF - AL30'} />
        </div>
      </div>
    </div>
  )
}
