import { getHabits } from "@/lib/supabaseClient";
import PercentageBar from "@/components/PercentageBar";
import HabitFeed from "@/components/HabitFeed";
import AddButton from "@/components/addButton";
export const revalidate = 0

const Home = async () => {

  let habits;
  
  try {
    habits = await getHabits()
  } catch (error) {
   console.log(error)
  }

  return (
    <main className="flex min-h-screen flex-col px-8 bg-darkColor">
      <PercentageBar />
      <HabitFeed habits={habits} />
      <AddButton />
    </main>
  );
}

export default Home
