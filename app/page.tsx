import Header from "@/components/header";
import PeriodicTable from "@/components/periodic";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans text-black dark:bg-white">
        <PeriodicTable />
      </div>
    </>
  );
}
