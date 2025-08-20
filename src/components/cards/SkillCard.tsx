import type { IconType } from "react-icons";

export interface SkillCardProps {
  icon: IconType;
  name: string;
  type: string;
  description: string;
  frontBg?: string;
}

export function SkillCard(props: SkillCardProps) {
  return (
    <div className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 [perspective:1000px] group cursor-pointer">
      <div
        className="
          relative 
          h-full w-full 
          rounded-xl shadow-xl 
          transition-all duration-500
          [transform-style:preserve-3d] 
          md:group-hover:[transform:rotateY(180deg)]
        " // The flip effect is now active only on md screens and up
      >
        {/* Front Face */}
        <div
          className={`
            absolute inset-0 
            flex flex-col items-center justify-center 
            h-full w-full 
            rounded-xl shadow-xl shadow-black/40 
            [backface-visibility:hidden]
            p-4 text-center gap-2
            ${props.frontBg ?? "bg-white"} 
          `}
        >
          {/* Icon is always visible */}
          <props.icon className="text-7xl sm:text-8xl md:text-9xl text-white" />

          {/* Name and Type are visible ONLY on small screens (mobile) */}
          <div className="md:hidden">
            <h3 className="text-lg font-bold font-sans-serif text-white drop-shadow-md">
              {props.name}
            </h3>
            <h4 className="text-sm italic text-white/90 font-sans-serif">
              {props.type}
            </h4>
          </div>
        </div>

        {/* Back Face (this will only be visible on md screens and up due to the hover change) */}
        <div
          className={`
            absolute inset-0 
            h-full w-full 
            rounded-xl 
            ${props.frontBg ? props.frontBg : "bg-black"} 
            p-4 sm:p-5 md:p-6
            flex flex-col items-center justify-center
            text-center 
            text-white 
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          `}
        >
          <h3 className="text-base sm:text-lg md:text-xl font-bold font-sans-serif">
            {props.name}
          </h3>
          <h4 className="text-xs italic mb-2 font-sans-serif">{props.type}</h4>
          <p className="text-xs sm:text-sm font-monospace">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
