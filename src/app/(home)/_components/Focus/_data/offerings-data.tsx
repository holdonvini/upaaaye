import { FocusCard } from "./Focus-Card";

const growingWealthOfferings = [
  "We help your money work harder, without the confusion.",
];
const planningRetirementOfferings = [
  "We help your money work harder, without the confusion.",
];
const managingTaxesOfferings = [
  "We help your money work harder, without the confusion.",
];
const protectingAssetsOfferings = [
  "We help your money work harder, without the confusion.",
];
const resolvingInsuranceClaimsOfferings = [
  "We help your money work harder, without the confusion.",
];
const runningABusinessOfferings = [
  "We help your money work harder, without the confusion.",
];

export const OfferingsData = [
  {
    id: "Growing Wealth",
    title: "Growing Wealth",
    content: () => (
      <FocusCard title="Growing Wealth" offerings={growingWealthOfferings} />
    ),
  },
  {
    id: "Planning Retirement",
    title: "Planning Retirement",
    content: () => (
      <FocusCard
        title="Planning Retirement"
        offerings={planningRetirementOfferings}
      />
    ),
  },
  {
    id: "Managing Taxes",
    title: "Managing Taxes",
    content: () => (
      <FocusCard title="Managing Taxes" offerings={managingTaxesOfferings} />
    ),
  },
  {
    id: "Protecting Assets",
    title: "Protecting Assets",
    content: () => (
      <FocusCard
        title="Protecting Assets"
        offerings={protectingAssetsOfferings}
      />
    ),
  },
  {
    id: "Running a Business",
    title: "Running a Business",
    content: () => (
      <FocusCard
        title="Running a Business"
        offerings={runningABusinessOfferings}
      />
    ),
  },
  {
    id: "Resolving Insurance Claims",
    title: "Resolving Insurance Claims ",
    content: () => (
      <FocusCard
        title="Resolving Insurance Claims"
        offerings={resolvingInsuranceClaimsOfferings}
      />
    ),
  },
];
