import HabitFeed from "@/components/HabitFeed";
import PercentageBar from "@/components/PercentageBar";

const Home = () => {

  return (
    <main className="flex min-h-screen flex-col px-8 bg-darkColor">
      <h2 className="text-white text-3xl font-black w-full pt-8 ">
        Welcome back, Ella {/* name of user */}
      </h2>
      <p className="text-lightGrey font-s pb-4">Every Habit Count: What positive rhythms did you set today?</p>
      <PercentageBar />
      
      <HabitFeed />
    </main>
  );
}

export default Home
