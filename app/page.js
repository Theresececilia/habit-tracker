import { getHabits } from "@/lib/supabaseClient";

const Home = async () => {
  let habits;
  
  try {
    habits = await getHabits()
  } catch (error) {
   console.log(error)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-darkColor">
      {habits.map((habit) => (
        <div key={habit.id}>{habit.name}</div>
      ))}
    </main>
  );
}

export default Home
