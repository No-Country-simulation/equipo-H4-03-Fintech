import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CapitalShortcut from "./CapitalShortcut"
import CryptoShortcut from "./CryptoShortcut"

export default function Shortcuts() {

  const { isCapital } = useSelector(state => state.switcher)

  return (
    <main className="w-full flex items-center justify-around my-5">
      <CapitalShortcut
        hide={!isCapital}
        icon={"attach-money"}
        label={"Dólar MEP"}
      />
      <CapitalShortcut
        hide={!isCapital}
        icon={"qr-code"}
        label={"Pagar QR"}
      />
      <CapitalShortcut
        hide={!isCapital}
        icon={"transfer"}
        label={"Transferir"}
      />
      <CryptoShortcut
        hide={isCapital}
        icon={"coins-dollar"}
        label={"Comprar"}
      />
      <CryptoShortcut
        hide={isCapital}
        icon={"coins-swap"}
        label={"Convertir"}
      />
      <CryptoShortcut
        hide={isCapital}
        icon={"qr-code"}
        label={"Pagar QR"}
      />
      <CryptoShortcut
        hide={isCapital}
        icon={"coin-share"}
        label={"Enviar"}
      />
    </main>
  )
}
