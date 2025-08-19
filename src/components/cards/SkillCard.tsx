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
    <div className="h-64 w-64 [perspective:1000px] group cursor-pointer">
      <div
        className="
          relative 
          h-full w-full 
          rounded-xl shadow-xl 
          transition-all duration-500
          [transform-style:preserve-3d] 
          group-hover:[transform:rotateY(180deg)]
        "
      >
        {/* Front */}
        <div
          className={`
            absolute inset-0 
            flex items-center justify-center 
            h-full w-full 
            rounded-xl shadow-xl shadow-black/40 
            [backface-visibility:hidden]
            ${props.frontBg ?? "bg-white"} 
          `}
        >
          <props.icon className="text-9xl text-white" />
        </div>

        {/* Back */}
        <div
          className={`
            absolute inset-0 
            h-full w-full 
            rounded-xl 
            ${props.frontBg ? props.frontBg : "bg-black"} 
            px-6 py-4
            flex flex-col items-center justify-center
            text-center 
            text-white 
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          `}
        >
          <h3 className="text-xl font-bold font-sans-serif">{props.name}</h3>
          <h4 className="text-sm italic mb-2 font-sans-serif">{props.type}</h4>
          <p className="text-sm font-monospace">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
