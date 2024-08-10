"use client";

import {
  useScroll,
  motion,
  useMotionTemplate,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";

// import Icones from "@/core/components/Icons";
import { OfferingsData } from "./_data/offerings-data";

import { useClickAway } from "ahooks";
import { Plus, X } from "lucide-react";

export const Focus = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // Create transforms for the percentage values
  const firstPercent = useSpring(
    useTransform(scrollYProgress, [0.1, 0.5], [100, 0])
  );
  const secondPercent = useSpring(
    useTransform(scrollYProgress, [0.1, 0.5], [0, 100])
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // Transform values
  const blurValue = useTransform(scrollYProgress, [0.1, 0.4], [5, 0]); // Blur decreases as you scroll down
  const translateYValue = useTransform(scrollYProgress, [0, 1], [0, 30]); // Translate increases as you scroll down

  // Use useMotionTemplate to create the filter and transform styles
  const filter = useMotionTemplate`blur(${blurValue}px)`;
  const transform = useMotionTemplate`translateY(${translateYValue}%)`;

  const background = useMotionTemplate`conic-gradient(
    from 90deg at ${firstPercent}% 0%, var(--top), var(--bottom) 180deg) 0% 0% / 50% 100% no-repeat,
    conic-gradient(from 270deg at ${secondPercent}% 0%, var(--bottom) 180deg, var(--top)) 100% 0% / 50% 100% no-repeat`;

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = (id: string) => {
    setSelectedId(id);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }
  };

  const closeModal = () => {
    setSelectedId(null);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "auto"; // Disable scrolling
    }
  };

  useClickAway(closeModal, modalRef);

  return (
    <div className="isolate" ref={ref}>
      <section className="isolate py-[44px] sm:py-[160px] px-0">
        <div className="pl-[var(--page-padding-left)] pr-[var(--page-padding-right)] max-w-[calc(var(--page-max-width)+var(--page-padding-left)+var(--page-padding-right))] w-full mx-auto mb-24">
          <div
            className={`
              grid
              [--grid-columns:12]
              [--grid-gap:12px]
              grid-cols-[repeat(var(--grid-columns),minmax(0, 1fr))]
              gap-[var(--grid-gap)]

              [--grid-areas-default:"a_a_a_a_a_a_a_a_._._._._."_"b_b_b_b_b_._._._._._._._."]
              [--grid-areas-tablet:"a_a_a_a_a_a_a_a"_"b_b_b_b_b_b_b_b"]
              [--grid-areas-mobile:"a_a_a_a"_"b_b_b_b"]

              [grid-template-areas:var(--grid-areas-default)]

              max-[640px]:[--grid-column-gap:16px]
              max-[640px]:[--grid-columns:4]
              max-[640px]:[grid-template-areas:var(--grid-areas-mobile,_var(--grid-areas-default))]

              max-[768px]:[--grid-columns:8]
              max-[768px]:[grid-template-areas:var(--grid-areas-tablet,_var(--grid-areas-default))]
            `}
          >
            <motion.div
              className="[grid-area:a]"
              style={{
                willChange: "filter, opacity, tranform",
                filter,
                opacity: `clamp(0.1, var(${scrollYProgress}), 1)`,
                transform,
              }}
            >
              <div className="mt-[15px]" />
              <h2 className="max-[640px]:text-[40px] max-[640px]:leading-[44px] text-[56px] leading-[1.1] font-[680]">
                What's your focus?
              </h2>
            </motion.div>
          </div>
        </div>

        <div className="pl-[var(--page-padding-left)] pr-[var(--page-padding-right)] max-w-[calc(var(--page-max-width)+var(--page-padding-left)+var(--page-padding-right))] w-full mx-auto mt-6 mb-20">
          <div className="grid grid-cols-1 min-[768px]:grid-cols-3 gap-8">
            {OfferingsData.map((item) => {
              return (
                <motion.div
                  className="relative isolate flex flex-col gap-8 items-center justify-center overflow-hidden px-7 py-8 rounded-[30px] bg-[var(--color-bg-secondary)] shadow transition-all duration-300 border-2 border-transparent hover:border-uppaye text-white"
                  key={item.id}
                  layoutId={item.id}
                >
                  <div className="text-[22px] text-center">{item.title}</div>

                  <button
                    className="relative inline-flex items-center justify-center shrink-0 [border:2px_solid_var(--color-bg-secondary)] bg-[var(--color-bg-primary)] text-[var(--color-text-tertiary)] font-[var(--font-weight-medium)] text-[15px] leading-[40px] h-[40px] gap-[6px] p-[0_16px] rounded-full [transition:0.16s_var(--ease-out-quad)] [transition-property:border,background-color,color,box-shadow,opacity,filter,transform] hover:text-[var(--color-text-primary)] hover:border-[var(--color-bg-tertiary)] hover:bg-[var(--color-bg-tertiary)]"
                    onClick={() => openModal(item.id)}
                  >
                    <Plus className="" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedId && (
        <div className="fixed inset-0 pt-[100px]">
          <motion.div
            ref={modalRef}
            layoutId={selectedId}
            className="max-w-4xl mx-auto rounded-xl bg-[var(--color-bg-primary)] h-full relative z-[var(--layer-dialog)] isolate overflow-y-auto text-white"
            style={{
              transformOrigin: `50% 50% 0px`,
            }}
          >
            <button
              className="inline-flex items-center justify-center shrink-0 [border:2px_solid_var(--color-bg-secondary)] bg-[var(--color-bg-primary)] text-[var(--color-text-tertiary)] font-[var(--font-weight-medium)] text-[15px] leading-[40px] gap-[6px] p-[16px_16px] rounded-full [transition:0.16s_var(--ease-out-quad)] [transition-property:border,background-color,color,box-shadow,opacity,filter,transform] hover:text-[var(--color-text-primary)] hover:border-[var(--color-bg-tertiary)] hover:bg-[var(--color-bg-tertiary)] absolute ml-auto right-[20px] top-[20px] z-[1]"
              onClick={closeModal}
            >
              <X className="w-[18px] h-[18px]" />
            </button>

            {(() => {
              const foundItem = OfferingsData.find(
                (item) => item.id === selectedId
              );

              const Component = foundItem?.content;

              if (!Component) return;

              return <Component />;
            })()}
          </motion.div>
        </div>
      )}
    </div>
  );
};
