const organisations = [
  "SXSW",
  "ICT&Health",
  "eHealth Hub",
  "GitLab",
  "Coca-Cola",
  "McKesson",
];

export function LogoStrip() {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
        Trusted by &amp; advised for
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {organisations.map((name) => (
          <span
            key={name}
            className="font-heading font-bold text-muted-foreground/40 text-lg uppercase tracking-wider"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
