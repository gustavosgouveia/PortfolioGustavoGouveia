export function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(100,255,218,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(17,34,64,0.9),transparent_50%)]" />
      <div className="animated-grid absolute inset-0 opacity-45" />
      <div className="absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[rgba(100,255,218,0.08)] blur-3xl" />
    </div>
  );
}