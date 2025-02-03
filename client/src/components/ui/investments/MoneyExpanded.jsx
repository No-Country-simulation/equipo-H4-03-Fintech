import CurrencySwitch from "./CurrencySwitch";
import SettlementSwitch from "./SettlementSwitch";

export default function MoneyExpanded({ handler }) {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex items-center justify-between my-2 px-5">
        <div className="w-[145px] h-[70px] flex flex-col gap-2">
          <span className="font-medium text-base text-center text-black">
            Moneda
          </span>
          <CurrencySwitch />
        </div>
        <div className="w-[145px] h-[70px] flex flex-col gap-2">
          <span className="font-medium text-base text-center text-black">
            Plazo de liquidación
          </span>
          <SettlementSwitch />
        </div>
      </div>
      <div className="w-full h-0.5 bg-muted  my-2" />
      <div className="w-full flex justify-between items-center px-4 py-2">
        <span className="font-normal text-base text-black">Saldo disponible según plazo: </span>
        <span className="font-medium text-base text-black">AR$ 100,00</span>
      </div>
      <button
        onClick={() => handler(false)}
        className="h-[42px] flex justify-center items-center gap-2.5 px-4"
      >
        <span className="font-medium text-base text-primary">Ocultar</span>
        <img
          src="/assets/arrow-up.svg" alt="arrow up"
          className="size-6"
        />
      </button>
    </div>
  )
}
