const B = import.meta.env.BASE_URL; // base path (e.g. "/time-tracking-dashboard/")

// Hours per activity, by timeframe. current vs previous (period before).
export const activities = [
  { title: "Travail", key: "work", color: "#ff8b64", icon: B + "images/icon-work.svg",
    timeframes: { daily: { current: 5, previous: 7 }, weekly: { current: 32, previous: 36 }, monthly: { current: 103, previous: 128 } } },
  { title: "Loisirs", key: "play", color: "#56c2e6", icon: B + "images/icon-play.svg",
    timeframes: { daily: { current: 1, previous: 2 }, weekly: { current: 10, previous: 8 }, monthly: { current: 23, previous: 29 } } },
  { title: "Études", key: "study", color: "#ff5c7c", icon: B + "images/icon-study.svg",
    timeframes: { daily: { current: 0, previous: 1 }, weekly: { current: 4, previous: 7 }, monthly: { current: 13, previous: 19 } } },
  { title: "Sport", key: "exercise", color: "#4acf81", icon: B + "images/icon-exercise.svg",
    timeframes: { daily: { current: 1, previous: 1 }, weekly: { current: 4, previous: 5 }, monthly: { current: 11, previous: 18 } } },
  { title: "Social", key: "social", color: "#7335d2", icon: B + "images/icon-social.svg",
    timeframes: { daily: { current: 1, previous: 3 }, weekly: { current: 5, previous: 10 }, monthly: { current: 21, previous: 23 } } },
  { title: "Bien-être", key: "self", color: "#f1c75b", icon: B + "images/icon-self-care.svg",
    timeframes: { daily: { current: 0, previous: 1 }, weekly: { current: 2, previous: 2 }, monthly: { current: 7, previous: 11 } } },
];

export const periods = [
  { key: "daily", label: "Jour", prev: "Hier" },
  { key: "weekly", label: "Semaine", prev: "Semaine dernière" },
  { key: "monthly", label: "Mois", prev: "Mois dernier" },
];
