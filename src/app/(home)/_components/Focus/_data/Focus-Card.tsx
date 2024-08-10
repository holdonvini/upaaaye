import { Variants, motion } from "framer-motion";
import { OfferingWrapper } from "./Offering-Wrapper";

interface FocusCardProps {
  title: string;
  offerings: string[];
}

export const FocusCard = ({ title, offerings }: FocusCardProps) => {
  const variant: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const parentVariant: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delay: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <OfferingWrapper>
      <div className="min-w-full relative">
        <div className="max-w-[560px] mx-auto">
          <h2 className="max-[640px]:text-[40px] max-[640px]:leading-[44px] text-[56px] leading-[1.1] font-[538]">
            {title}
          </h2>

          <motion.div
            className="mt-10 flex flex-col gap-5"
            variants={parentVariant}
            initial="hidden"
            animate="visible"
          >
            {offerings.map((off) => {
              return (
                <motion.div
                  className="flex flex-row items-center gap-4 text-xl"
                  variants={variant}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                    />
                  </svg>
                  <motion.span>{off}</motion.span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </OfferingWrapper>
  );
};
