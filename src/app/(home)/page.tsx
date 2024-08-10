import { Focus } from "./_components/Focus";
import { Hero } from "./_components/Hero";
import { FinancialWorries } from "./_components/FinancialWorries";
import { Ready } from "./_components/Ready";
import Approach from "./_components/Approach";

export default function Home() {
  return (
    <main>
      <Hero />
      <Focus />
      <Approach />
      <FinancialWorries />
      <Ready />
    </main>
  );
}
