import { HorizontalScroll } from "./Horizontal-Scroll";

const DATA: {
  title: string;
  description: string;
}[] = [
  {
    title: "I'm not saving enough",
    description: "Let's look at your cash flow and find opportunities. It's often simpler than you think.",
  },
  {
    title: "I don't understand my investments",
    description: "We'll break down your portfolio in plain language and ensure it aligns with your goals.",
  },
  {
    title: "Taxes are overwhelming",
    description: "We'll simplify your tax situation and find ways to optimize your returns",
  },
  {
    title: "I'm not sure about my insurance coverage",
    description: "We'll review your coverage, explain it clearly, and identify any gaps or opportunities",
  },
  {
    title: "My business finances are messy",
    description: "We'll organize your finances and create a clear plan for growth and profitability.",
  },
  {
    title: "My insurance claim was rejected",
    description: "Skip the mental trauma of following up with your agent or insurer. We make sure genuine claims do get fulfilled",
  },
];

export const FinancialWorries = () => {
  return (
    <section className="relative">
      <HorizontalScroll
        sectionData={{
          heading: "Financial Worries",
          cards: DATA,
        }}
      />
    </section>
  );
};
