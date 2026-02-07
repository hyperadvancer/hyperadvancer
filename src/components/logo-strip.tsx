import Image from "next/image";

const logos = [
  { name: "SXSW", logo: "/logos/sxsw.svg", width: 140, height: 32 },
  { name: "In4Care", logo: "/logos/in4care.png", width: 120, height: 28 },
  { name: "GitLab", logo: "/logos/gitlab.svg", width: 83, height: 32 },
  { name: "McKesson", logo: "/logos/mckesson.svg", width: 179, height: 28 },
  { name: "CM", logo: "/logos/cm.png", width: 36, height: 36, blend: true },
  { name: "UCB Pharma", logo: "/logos/ucb-pharma.png", width: 36, height: 36, blend: true },
  { name: "Microsoft", logo: "/logos/microsoft.svg", width: 28, height: 28 },
  { name: "ICT&Health", logo: "/logos/ict-health.svg", width: 102, height: 28 },
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
            src={item.logo}
            alt={item.name}
            width={item.width}
            height={item.height}
            className={`opacity-40 hover:opacity-60 transition-opacity ${
              item.blend
                ? "[mix-blend-mode:screen]"
                : "brightness-0 invert"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
