// Mock data for Maria Silva - Realistic health dashboard demo

export const mockUser = {
  name: "Maria Silva",
  age: 38,
  height: 165, // cm
  startWeight: 90, // kg
  currentWeight: 82.5, // kg
  goalWeight: 75, // kg
  proteinGoal: 132, // g/day (1.6g/kg)
  medication: {
    name: "Ozempic",
    dose: "1.0mg",
    frequency: "Semanal",
    dayOfWeek: "Quintas-feiras",
    adherence: 95,
    weeksOnCurrentDose: 6,
  },
  currentStreak: {
    protein: 12,
    proteinRecord: 14,
    logging: 8,
    loggingRecord: 10,
    medication: 6,
    medicationRecord: 6,
  },
  muscleScore: 78,
};

export const weeklyData = [
  { date: "2025-10-14", weight: 83.3, protein: 135, meals: 3, symptoms: 0 },
  { date: "2025-10-15", weight: 83.1, protein: 140, meals: 3, symptoms: 2 }, // Post-dose nausea
  { date: "2025-10-16", weight: 83.0, protein: 128, meals: 2, symptoms: 1 }, // Post-dose nausea
  { date: "2025-10-17", weight: 82.8, protein: 145, meals: 3, symptoms: 0 },
  { date: "2025-10-18", weight: 82.7, protein: 138, meals: 3, symptoms: 0 },
  { date: "2025-10-19", weight: 82.6, protein: 98, meals: 2, symptoms: 0 }, // Missed protein goal
  { date: "2025-10-20", weight: 82.5, protein: 142, meals: 3, symptoms: 0 },
];

export const last30DaysProtein = [
  { date: "2025-09-21", protein: 125 },
  { date: "2025-09-22", protein: 138 },
  { date: "2025-09-23", protein: 142 },
  { date: "2025-09-24", protein: 95 },
  { date: "2025-09-25", protein: 135 },
  { date: "2025-09-26", protein: 128 },
  { date: "2025-09-27", protein: 145 },
  { date: "2025-09-28", protein: 132 },
  { date: "2025-09-29", protein: 138 },
  { date: "2025-09-30", protein: 140 },
  { date: "2025-10-01", protein: 135 },
  { date: "2025-10-02", protein: 128 },
  { date: "2025-10-03", protein: 142 },
  { date: "2025-10-04", protein: 125 },
  { date: "2025-10-05", protein: 138 },
  { date: "2025-10-06", protein: 145 },
  { date: "2025-10-07", protein: 132 },
  { date: "2025-10-08", protein: 140 },
  { date: "2025-10-09", protein: 135 },
  { date: "2025-10-10", protein: 128 },
  { date: "2025-10-11", protein: 142 },
  { date: "2025-10-12", protein: 138 },
  { date: "2025-10-13", protein: 145 },
  ...weeklyData.map((d) => ({ date: d.date, protein: d.protein })),
];

export const weightHistoryData = [
  { date: "2025-08-24", weight: 90.0 },
  { date: "2025-08-31", weight: 89.2 },
  { date: "2025-09-07", weight: 88.5 },
  { date: "2025-09-14", weight: 87.6 },
  { date: "2025-09-21", weight: 86.8 },
  { date: "2025-09-28", weight: 85.9 },
  { date: "2025-10-05", weight: 84.8 },
  { date: "2025-10-12", weight: 83.6 },
  { date: "2025-10-19", weight: 82.8 },
  { date: "2025-10-26", weight: 82.5 },
];

export const bodyCompositionData = [
  { week: "Semana 1", fatMass: 36.0, muscleMass: 54.0 },
  { week: "Semana 2", fatMass: 35.2, muscleMass: 54.0 },
  { week: "Semana 3", fatMass: 34.5, muscleMass: 54.0 },
  { week: "Semana 4", fatMass: 33.6, muscleMass: 53.9 },
  { week: "Semana 5", fatMass: 32.8, muscleMass: 53.8 },
  { week: "Semana 6", fatMass: 31.9, muscleMass: 53.8 },
  { week: "Semana 7", fatMass: 30.8, muscleMass: 53.7 },
  { week: "Semana 8", fatMass: 29.6, muscleMass: 53.6 },
  { week: "Semana 9", fatMass: 28.8, muscleMass: 53.7 },
];

export const achievements = [
  {
    id: 1,
    icon: "🏆",
    name: "Primeira Semana Completa!",
    description: "7 dias consecutivos registrando refeições",
    unlocked: true,
    unlockedAt: "2025-09-01",
  },
  {
    id: 2,
    icon: "💪",
    name: "Defensor Muscular",
    description: "30 dias atingindo meta de proteína",
    unlocked: true,
    unlockedAt: "2025-09-24",
  },
  {
    id: 3,
    icon: "📉",
    name: "Primeiros 5kg Perdidos!",
    description: "Perdeu seus primeiros 5kg",
    unlocked: true,
    unlockedAt: "2025-10-05",
  },
  {
    id: 4,
    icon: "🔥",
    name: "Sequência Quente",
    description: "14 dias consecutivos de proteína",
    unlocked: true,
    unlockedAt: "2025-10-18",
  },
  {
    id: 5,
    icon: "⭐",
    name: "10% Mais Leve",
    description: "Perdeu 10% do peso inicial",
    unlocked: false,
    progress: 82, // 7.5kg / 9kg = 83%
    target: "Faltam 1.5kg",
  },
  {
    id: 6,
    icon: "🎯",
    name: "Meta Alcançada",
    description: "Alcançou seu peso ideal",
    unlocked: false,
    progress: 50, // 7.5kg / 15kg = 50%
    target: "Faltam 7.5kg",
  },
];

export const sideEffectCalendar = [
  // October 2025
  { date: "2025-10-01", severity: 0 }, // No symptoms
  { date: "2025-10-02", severity: 0 },
  { date: "2025-10-03", severity: 1 }, // Day after dose (Thu 10/2) - mild nausea
  { date: "2025-10-04", severity: 1 },
  { date: "2025-10-05", severity: 0 },
  { date: "2025-10-06", severity: 0 },
  { date: "2025-10-07", severity: 0 },
  { date: "2025-10-08", severity: 0 },
  { date: "2025-10-09", severity: 0 },
  { date: "2025-10-10", severity: 2 }, // Day after dose (Thu 10/9) - moderate nausea
  { date: "2025-10-11", severity: 1 },
  { date: "2025-10-12", severity: 0 },
  { date: "2025-10-13", severity: 0 },
  { date: "2025-10-14", severity: 0 },
  { date: "2025-10-15", severity: 0 },
  { date: "2025-10-16", severity: 0 },
  { date: "2025-10-17", severity: 2 }, // Day after dose (Thu 10/16) - moderate nausea
  { date: "2025-10-18", severity: 1 },
  { date: "2025-10-19", severity: 0 },
  { date: "2025-10-20", severity: 0 },
  { date: "2025-10-21", severity: 0 },
  { date: "2025-10-22", severity: 0 },
  { date: "2025-10-23", severity: 0 },
  { date: "2025-10-24", severity: 0 }, // Next dose Thu 10/24
  { date: "2025-10-25", severity: 0 }, // Today - haven't logged yet
  { date: "2025-10-26", severity: 0 },
];

export const activityFeed = [
  {
    id: 1,
    type: "meal",
    title: "Almoço",
    description: "42g proteína",
    time: "Há 2 horas",
    icon: "🍽️",
  },
  {
    id: 2,
    type: "achievement",
    title: "Conquista desbloqueada!",
    description: "🏆 Primeira Semana Completa!",
    time: "Ontem",
    icon: "🎉",
  },
  {
    id: 3,
    type: "insight",
    title: "Padrão detectado",
    description: "💡 Náusea geralmente 2 dias pós-dose",
    time: "2 dias atrás",
    icon: "🔍",
  },
];

export const milestones = [
  { id: 1, title: "Semana 1 completa", completed: true },
  { id: 2, title: "Primeiro 1kg perdido", completed: true },
  { id: 3, title: "7 dias de proteína consecutivos", completed: true },
  { id: 4, title: "5kg perdidos", completed: true, progress: 100 },
  { id: 5, title: "Meta de peso", completed: false, progress: 50 },
  { id: 6, title: "30 dias perfeitos", completed: false, progress: 46 },
];

export const communityInsights = {
  weightLossComparison: {
    user: 0.8,
    average: 0.7,
    unit: "kg/semana",
  },
  proteinRanking: {
    percentile: 85,
    message: "Top 15% dos usuários",
  },
  commonSideEffect: {
    percentage: 73,
    description: "sentem náusea dias 1-2 pós-dose",
  },
};

export const patternInsights = [
  {
    symptom: "Náusea",
    patterns: [
      "Acontece em 73% das vezes nos dias 1-2 após dose",
      "Correlação forte com refeições gordurosas (65%)",
    ],
    tip: "Evite frituras nos 2 dias pós-aplicação",
  },
  {
    symptom: "Fadiga",
    patterns: [
      "Mais comum quando proteína < 1.4g/kg",
      "Melhora com hidratação adequada",
    ],
    tip: "Mantenha proteína alta e beba 2-3L de água/dia",
  },
];

export const weeklySummary = {
  week: "14-20 Out",
  score: 78,
  stars: 4,
  weightChange: -0.8,
  proteinDays: 6,
  totalDays: 7,
  mealsLogged: 18,
  symptomFreeDays: 5,
  medicationOnTrack: true,
  message: "Boa semana! Continue assim. 🌟",
};
