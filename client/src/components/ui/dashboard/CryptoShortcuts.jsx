import CryptoShortcut from "./CryptoShortcut"

export default function Shortcuts() {

  return (
    <main className="w-full flex items-center justify-around my-5">
      <CryptoShortcut
        icon={"coins-dollar"}
        label={"Comprar"}
      />
      <CryptoShortcut
        icon={"coins-swap"}
        label={"Convertir"}
      />
      <CryptoShortcut
        icon={"qr-code"}
        label={"Pagar QR"}
      />
      <CryptoShortcut
        icon={"coin-share"}
        label={"Enviar"}
      />
    </main>
  )
}
