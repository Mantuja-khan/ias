type Item = { name: string; tag?: string };

export function LogoMarquee({
  items,
  speed = "normal",
  reverse = false,
}: {
  items: Item[];
  speed?: "normal" | "slow";
  reverse?: boolean;
}) {
  // Duplicate the list so the translate(-50%) loop is seamless
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden marquee-mask py-2">
      <div
        className={`flex gap-4 w-max ${speed === "slow" ? "animate-marquee-slow" : "animate-marquee"}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {loop.map((it, i) => (
          <div
            key={`${it.name}-${i}`}
            className="shrink-0 bg-white border border-steel-700 hover:border-safety transition-colors px-6 py-4 min-w-[180px] flex flex-col items-center justify-center gap-1 rounded-md shadow-sm"
          >
            <div className="font-display font-black text-base uppercase tracking-tight text-rubber whitespace-nowrap">
              {it.name}
            </div>
            {it.tag && (
              <div className="font-mono text-[10px] uppercase tracking-widest text-safety">
                {it.tag}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
