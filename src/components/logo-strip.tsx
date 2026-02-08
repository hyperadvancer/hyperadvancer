import Image from "next/image";

const logos = [
  { name: "SXSW", src: "/logos/sxsw.svg", width: 122, height: 28 },
  { name: "In4Care", src: "/logos/in4care.png", width: 120, height: 28 },
  { name: "GitLab", src: "/logos/gitlab.svg", width: 73, height: 28 },
  { name: "McKesson", src: "/logos/mckesson.svg", width: 157, height: 28 },
  { name: "CM", src: "/logos/cm.png", width: 28, height: 28 },
  { name: "UCB Pharma", src: "/logos/ucb-pharma.png", width: 68, height: 28 },
  { name: "Microsoft", src: "/logos/microsoft.svg", width: 28, height: 28 },
  { name: "ICT&Health", src: "/logos/ict-health.svg", width: 143, height: 28 },
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
            className="h-7 w-auto dark:brightness-0 dark:invert opacity-40 hover:opacity-60 transition-opacity"
          />
        ))}
      </div>
    </div>
  );
}
