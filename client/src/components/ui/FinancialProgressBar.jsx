export default function FinancialProgressBar({points}) {
  return (
    <div className="w-full h-5 bg-slate-200 rounded-sm">
      <div className="h-5 bg-primary rounded-sm" style={{"width": `${points * 25}%`}}/>
    </div>
  )
}
