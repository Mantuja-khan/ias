type Props = {
  name: string;
  src?: string;
  className?: string;
};

export function ProductImage({ name, src, className = "" }: Props) {
  const imageSrc = src || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrXPHgfK5Eeb7mXiY2vuGyRYX9M_CY03pAyQ&s";
  
  return (
    <div className={`relative w-full h-full overflow-hidden bg-steel-900 ${className}`}>
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-full object-contain bg-white transition-all duration-500"
      />
      {/* Subtle overlay for tech look */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in oklab, var(--safety) 10%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in oklab, var(--safety) 10%, transparent) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}
