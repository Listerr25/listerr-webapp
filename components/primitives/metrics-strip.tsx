export function MetricsStrip({
  metrics,
}: {
  metrics: Array<{ value: string; label: string }>
}) {
  return (
    <div className="grid gap-4 rounded-xl border border-border bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <p className="text-4xl font-extrabold text-fg md:text-5xl">
            {metric.value}
          </p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-fg-muted">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  )
}
