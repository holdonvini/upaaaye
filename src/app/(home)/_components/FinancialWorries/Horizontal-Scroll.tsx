"use client";

import { PinContainer } from "@/core/components/T3-Pin/three-3d-pin";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const HorizontalScroll = ({
  sectionData,
}: {
  sectionData: {
    heading: string;
    cards: {
      title: string;
      description: string;
    }[];
  };
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-[var(--color-bg-primary)] py-[43px] lg:py-[72px]"
    >
      <div className="flex flex-col gap-5 items-center justify-center px-4">
        <div className="text-2xl lg:text-7xl font-semibold max-w-[60ch] capitalize">
          {sectionData?.heading}
        </div>
      </div>
      <div className="sticky top-[72px] lg:top-[92px] flex h-[100vh] items-center overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 z-[-1] p-2 bg-gradient-to-r from-[#e9d5ff] via-[#d8b4fe] to-[#c084fc] w-[300px] h-[300px] rounded-full blur-[100px]"></div>
      
        <motion.div style={{ x }} className="flex gap-4">
        Book a Upaaye
          {sectionData?.cards?.map((card, kindex) => {
            return (
              <div
                className="h-[40rem] w-full flex items-center justify-center "
                key={kindex}
              >
                  
                <PinContainer title={card.title} href="">
                  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                      {card.title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        {card.description}
                      </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  </div>
                </PinContainer>
              </div>
            );
          })}
       
        </motion.div>
      </div>
    </section>
  );
};
