import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { activities, periods } from "./data.js";

function AnimatedHours({ value }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v)}h`);
  useEffect(() => {
    const controls = animate(mv, value, { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] });
    return controls.stop;
  }, [value, mv]);
  return <motion.span>{rounded}</motion.span>;
}

export default function App() {
  const [period, setPeriod] = useState("weekly");
  const meta = periods.find((p) => p.key === period);

  return (
    <div className="flex min-h-screen items-center justify-center p-5 sm:p-8">
      <div className="grid w-full max-w-5xl gap-5 lg:grid-cols-4">
        {/* Profile + period switch */}
        <div className="flex flex-col overflow-hidden rounded-3xl bg-card">
          <div className="flex flex-1 flex-col gap-8 rounded-3xl bg-accent p-6 sm:gap-12 sm:p-7">
            <img src="/images/image-jeremy.png" alt="" className="h-16 w-16 rounded-full border-[3px] border-white" />
            <div>
              <p className="text-sm text-soft">Tableau de bord</p>
              <h1 className="mt-1 text-3xl font-light leading-tight sm:text-4xl">Jérémy Robson</h1>
            </div>
          </div>
          <div className="flex justify-between gap-2 p-6 sm:flex-col sm:gap-3 sm:p-7">
            {periods.map((p) => (
              <button
                key={p.key}
                onClick={() => setPeriod(p.key)}
                className={`text-left text-base transition-colors sm:text-lg ${
                  period === p.key ? "text-white" : "text-soft hover:text-white"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Activity cards */}
        {activities.map((a, i) => {
          const tf = a.timeframes[period];
          return (
            <motion.div
              key={a.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative pt-10"
            >
              <div className="absolute inset-x-0 top-0 h-20 overflow-hidden rounded-3xl" style={{ background: a.color }}>
                <img src={a.icon} alt="" className="absolute -top-1 right-4 w-12 opacity-90" />
              </div>
              <button className="group relative w-full rounded-3xl bg-card p-6 text-left transition-colors hover:bg-card-hover">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-medium">{a.title}</h2>
                  <img src="/images/icon-ellipsis.svg" alt="" className="opacity-70" />
                </div>
                <p className="mt-4 text-4xl font-light sm:text-5xl">
                  <AnimatedHours value={tf.current} />
                </p>
                <p className="mt-2 text-sm text-soft">
                  {meta.prev} — {tf.previous}h
                </p>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
