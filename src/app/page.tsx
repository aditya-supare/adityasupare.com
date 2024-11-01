import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Grid from "~/components/Grid";
import Landing from "~/components/Landing";
import { FloatingNav } from "~/components/ui/FloatingNav";

export default function HomePage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />}
        ]} />
        <Landing />
        <Grid/>
      </div>
    </main>
  );
}
