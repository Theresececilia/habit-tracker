import { MdOutlineWaterDrop, MdOutlineEggAlt } from 'react-icons/md';


const HabitFeed = ({ habits }) => {

  return (
    <div className="flex flex-wrap gap-4 mt-12">
      {habits.map((habit, index) => {
        let cardClassName = 'text-darkColor font-bold h-36 w-36 rounded-2xl';
        
        if (habit.done) {
          cardClassName += index % 2 === 0 ? ' bg-accentPurple' : ' bg-accentGreen';
        } else {
          cardClassName += ' text-lightGrey border-2 border-lightGrey';
        }

        return (
          <div className={cardClassName} key={habit.id}>
            <div className="p-4 flex flex-col justify-between align-baseline">
              <div className="text-5xl">
                {habit.done ? <MdOutlineWaterDrop /> : <MdOutlineEggAlt />}
              </div>
              <div>
                <p className="font-bold">{habit.name}</p>
                <p className="font-medium">{habit.amount}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HabitFeed;
