export default function GoalComponent({ icon, title, amountGoal, amountAvailable }) {

  const percentage = amountAvailable * 100 / amountGoal
  const wide = 250 * percentage / 100
  const widepx = `${wide}px`


  return (
    <div className="w-full flex items-center justify-center bg-white rounded-xl shadow-md p-4 gap-7">
      <img src={`/assets/${icon}.svg`} alt={icon} />
      <div className="w-3/4 flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="font-medium text-base text-black">{title}</span>
          <span className="font-normal text-base text-black">${amountGoal}</span>
        </div>
        <div className="flex justify-between">
          <div className="w-[250px] h-2.5 bg-[#96c2db] rounded-3xl">
            <div className={`w-[${widepx}] h-2.5 bg-[#ffa400] rounded-3xl`} />
          </div>
          <span className="font-medium text-base text-[#ffa400]">{percentage}%</span>
        </div>
      </div>
    </div>
  )
}
