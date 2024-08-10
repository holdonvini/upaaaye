"use client";
import { motion } from "framer-motion";

import { LampContainer } from "@/core/components/Lamp";

export default function Approach() {
  return (
    <section className="relative py-[43px] lg:py-[72px]">
      <div className="flex flex-col gap-5 items-center justify-center px-4">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-white to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Our Approach
          </motion.h1>

          

          <div className="mt-5 lg:mt-44 flex flex-col lg:flex-row flex-wrap items-center justify-between max-w-full w-full gap-4">
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="animate-textGradient bg-gradient-to-br from-white to-slate-500 bg-clip-text text-5xl font-semibold text-transparent">
                We Listen
              </h1>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="animate-textGradient bg-gradient-to-br from-white to-slate-500 bg-clip-text text-5xl font-semibold text-transparent">
                We Analyze
              </h1>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className="animate-textGradient bg-gradient-to-br from-white to-slate-500 bg-clip-text text-5xl font-semibold text-transparent">
                We Act
              </h1>
            </div>
          </div>
          <div className="mt-20">
            No hidden fees. No confusing terms. Just straightforward financial
            guidance
          </div>
        </LampContainer>
        {/* <div className="text-2xl lg:text-7xl font-semibold max-w-[60ch] capitalize">
          Our Approach
        </div> */}
        
      </div>
    </section>
  );
}
