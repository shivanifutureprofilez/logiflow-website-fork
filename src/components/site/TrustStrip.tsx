export const TrustStrip = () => {
  const partners = ["BlueDart", "Delhivery", "DTDC", "Ekart", "Xpressbees", "Shadowfax", "Ecom Express"];
  return (
    <section className="border-b border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Powering deliveries with India's most trusted partners
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {partners.map((p) => (
            <span key={p} className="text-lg font-bold tracking-tight text-foreground/35 transition hover:text-navy">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
