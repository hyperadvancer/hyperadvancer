import Image from "next/image";

const logos = [
  { name: "SXSW", src: "/logos/sxsw.svg", width: 87, height: 20, h: "h-5" },
  { name: "In4Care", src: "/logos/in4care.png", width: 120, height: 28, h: "h-7" },
  { name: "GitLab", src: "/logos/gitlab.svg", width: 94, height: 36, h: "h-9" },
  { name: "McKesson", src: "/logos/mckesson.svg", width: 200, height: 36, h: "h-9" },
  { name: "CM", src: "/logos/cm.png", width: 32, height: 32, h: "h-8" },
  { name: "UCB Pharma", src: "/logos/ucb-pharma.png", width: 68, height: 28, h: "h-7" },
  { name: "Microsoft", src: "/logos/microsoft.svg", width: 32, height: 32, h: "h-8" },
  { name: "ICT&Health", src: "/logos/ict-health.svg", width: 143, height: 28, h: "h-7" },
];

export function LogoStrip() {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
        Trusted by &amp; advised for
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {logos.map((item) => (
          <Image
            key={item.name}
            src={item.src}
            alt={item.name}
            width={item.width}
            height={item.height}
            className={`${item.h} w-auto dark:brightness-0 dark:invert opacity-40 hover:opacity-60 transition-opacity`}
          />
        ))}
      </div>
    </div>
  );
}
