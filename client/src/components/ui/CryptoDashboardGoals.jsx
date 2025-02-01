import GoalComponent from "./GoalComponent";

export default function Goals() {
  return (
    <div className="w-[600px] flex flex-col items-center my-4">
      <div className="w-[500px] flex flex-col gap-5">
        <span className="font-medium text-subtitle text-black">Objetivos</span>
        <GoalComponent 
          icon={'umbrella-beach-outline'} 
          title={'Vacaciones'} 
          amountGoal={10250}  
          amountAvailable={6150}
        />
        <GoalComponent 
          icon={'car-filled'} 
          title={'Auto'} 
          amountGoal={12500}  
          amountAvailable={3750}
        />
      </div>
    </div>
  )  
}