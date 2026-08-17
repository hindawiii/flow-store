export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex size-10 items-center justify-center rounded-full border-2 border-primary">
        <span className="absolute size-2 rounded-full bg-primary" />
        <span className="absolute size-6 rounded-full border border-primary/40" />
      </div>
      {!compact && (
        <div className="leading-none">
          <span className="block text-xl font-black text-foreground">سوق بايت</span>
          <span className="font-latin block text-[0.65rem] text-muted-foreground">SOUQBYTE</span>
        </div>
      )}
    </div>
  );
}
