const OfferingWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`
        relative
        [--radix-scroll-area-corner-width:0px]
        [--radix-scroll-area-corner-height:0px]
        [--Scrollable-shadow-size:8vh]
        [--scrollable-gap:28px_5px_5px_5px]

        pl-[var(--page-padding-left)]
        pr-[var(--page-padding-right)]
        h-full
        w-full
        [--scrollbar-size:16px]
    `}
    >
      <div
        data-radix-scroll-area-viewport
        className="overflow-x-hidden overflow-y-scroll"
        style={{
          scrollPaddingBlock: `var(--Scrollable-shadow-size)`,
          paddingBlock: `var(--Scrollable-shadow-size)`,
          WebkitMaskImage: `linear-gradient(to bottom,var(--mask-invisible) 0,var(--mask-ease) calc(var(--Scrollable-shadow-size) / 2),var(--mask-visible) var(--Scrollable-shadow-size),var(--mask-visible) calc(100% - var(--Scrollable-shadow-size)),var(--mask-ease) calc(100% - calc(var(--Scrollable-shadow-size) / 2)),var(--mask-invisible) 100%)`,
          maskImage: `linear-gradient(to bottom,var(--mask-invisible) 0,var(--mask-ease) calc(var(--Scrollable-shadow-size) / 2),var(--mask-visible) var(--Scrollable-shadow-size),var(--mask-visible) calc(100% - var(--Scrollable-shadow-size)),var(--mask-ease) calc(100% - calc(var(--Scrollable-shadow-size) / 2)),var(--mask-invisible) 100%)`,
          width: "100%",
          height: "100%",
          overscrollBehavior: "contain",
          scrollBehavior: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export { OfferingWrapper };
