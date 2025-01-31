import { Link } from "react-router-dom";

export default function CryptoShortcut({ to, label, icon }) {
  return (
    <Link to={to} className="flex flex-col items-center gap-2">
      <article className={`size-14 rounded-full flex items-center justify-center bg-crypto`}>
        <img src={`/assets/${icon}.svg`} alt="money symbol" />
      </article>
      <span className="font-medium text-base text-center text-[#797979]">{label}</span>
    </Link>
  )
}
