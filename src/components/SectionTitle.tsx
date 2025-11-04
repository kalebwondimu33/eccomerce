export default function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-3">
        <span className="inline-block h-10 w-5 rounded-sm bg-[#db4444]" />
        <span className="text-[#db4444] text-[16px] leading-5 font-semibold">{label}</span>
      </div>
      <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">{title}</h2>
    </div>
  );
}


