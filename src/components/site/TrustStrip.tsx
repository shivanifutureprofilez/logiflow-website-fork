export const TrustStrip = () => {
  const partners = ["BlueDart", "Delhivery", "DTDC", "Ekart", "Xpressbees", "Shadowfax", "Ecom Express"];
  return (
    <section className="border-y border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by growing businesses across India
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((p) => (
            <span key={p} className="text-xl font-bold tracking-tight text-foreground/40 transition hover:text-foreground/70">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
