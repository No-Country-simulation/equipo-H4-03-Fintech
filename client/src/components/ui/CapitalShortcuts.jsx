import CapitalShortcut from "./CapitalShortcut"

export default function Shortcuts() {

  return (
    <main className="w-full flex items-center justify-around my-5">
      <CapitalShortcut
        icon={"attach-money"}
        label={"Dólar MEP"}
      />
      <CapitalShortcut
        icon={"qr-code"}
        label={"Pagar QR"}
      />
      <CapitalShortcut
        icon={"transfer"}
        label={"Transferir"}
      />
    </main>
  )
}
