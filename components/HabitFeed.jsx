import { getHabits } from "@/lib/supabaseClient";
import { MdOutlineWaterDrop, MdOutlineEggAlt } from 'react-icons/md';

const HabitFeed = async () => {
  let habits;
  
  try {
    habits = await getHabits()
  } catch (error) {
   console.log(error)
  }

  return (
    <div className="flex flex-wrap gap-4 mt-12">
      {habits.map((habit) => (
        <div
          className={`text-darkColor font-bold h-36 w-36 rounded-2xl ${
            habit.done ? 'bg-accentGreen' : 'bg-accentPurple'
          }`}
          key={habit.id}
        >
          <div className="p-4 flex flex-col justify-between align-baseline">
            <div className="text-5xl">
              <MdOutlineEggAlt />
            </div>
            <div>
              <p className="font-bold">{habit.name}</p>
              <p className="font-medium text-darkColor">{habit.amount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HabitFeed