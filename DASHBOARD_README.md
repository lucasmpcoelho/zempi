# Zempi Health Dashboard 💪🇧🇷

## Overview

The Zempi Health Dashboard is a beautiful, mobile-first web application designed for Brazilian users taking GLP-1 medications (Ozempic, Wegovy, Mounjaro). It helps users protect their muscle mass while losing weight and build lasting healthy habits.

## Product Context

### The Problem
People taking GLP-1 medications lose 25-40% muscle mass (not just fat), leading to:
- Sagging skin and "Ozempic face"
- Weakness and fatigue
- 67% regain weight after stopping medication

### The Solution
Zempi combines:
- Daily muscle risk scoring
- Proactive coaching
- Pattern insights from user data
- Supportive community benchmarking
- Beautiful data visualizations

### Target User: Maria
- Age: 35-45, professional woman in São Paulo
- Taking Ozempic for 2-3 months
- Fears losing muscle mass
- Wants data-driven control
- Lives in WhatsApp (primary interface)
- Time-constrained but health-conscious

## Four Core Value Propositions

### 1. PROTECT YOUR MUSCLE 💪
Daily Muscle Preservation Score (0-100) shows real-time risk of losing muscle mass based on:
- Protein intake (goal: 1.6g/kg body weight)
- Weight loss rate (healthy: 0.5-1kg/week)

### 2. BUILD LASTING HABITS 🔥
Gamification creates behavioral patterns that persist after medication:
- Streaks (protein, logging, medication)
- Badges and achievements
- Weekly reflections and celebrations

### 3. UNDERSTAND YOUR PATTERNS 📊
Data-driven insights including:
- Side effect correlation with dosage timing
- Anonymous benchmarking vs. other users
- Dosage insights
- PDF reports for doctor visits

### 4. FEEL SUPPORTED 👥
Community and support features:
- Anonymous community insights ("73% of users feel nausea days 1-2 post-dose")
- Warm Brazilian tone (conversational Portuguese)
- No social comparison pressure

## Dashboard Structure

Access at: `/dashboard`

### Navigation (4 Main Tabs)

#### 📊 Tab 1: Visão Geral (Overview)
**Purpose:** Quick daily check-in and hero metrics

**Features:**
- **Quick Stats Cards:**
  - Current weight with weekly change
  - Today's protein progress (with progress bar)
  - Current streak (fire emoji + days)
  - Muscle score with color-coded zone badge

- **Weekly Summary Card (shareable):**
  - Overall score (0-100) with star rating
  - Weight change
  - Protein goal achievement (X/7 days)
  - Meals logged
  - Symptom-free days
  - Medication adherence
  - Encouraging message

- **Recent Activity Feed:**
  - Meal logs
  - Achievement unlocks
  - Pattern insights detected

- **Quick Actions:**
  - Register meal
  - Register weight
  - Generate doctor report

#### 💪 Tab 2: Músculo (Muscle) - HERO TAB
**Purpose:** Core differentiator - muscle preservation tracking

**Features:**
- **Circular Muscle Score Gauge (Hero Element):**
  - Large 0-100 score display
  - Color-coded zones:
    - Green (70-100): Zona Segura
    - Amber (50-69): Atenção
    - Red (0-49): Risco Alto
  - Animated SVG circle

- **Score Breakdown:**
  - Protein factor: g/kg with 7-day performance
  - Weight loss rate factor with healthy zone indicator
  - Actionable tips

- **Protein Timeline Chart (30 days):**
  - Bar chart with daily protein intake
  - Color-coded bars (green/amber/red)
  - Reference line at user's goal
  - Hoverable for meal details

- **Body Composition Trend:**
  - Line chart showing fat mass vs. muscle mass
  - 9-week trend
  - Shaded "healthy zone"

- **Educational Card:**
  - Why protein is crucial during GLP-1 treatment
  - Benefits of 1.6g/kg target
  - Scientific backing

#### 📈 Tab 3: Progresso (Progress)
**Purpose:** Celebrate wins and track long-term progress

**Features:**
- **Weight Loss Chart (90 days):**
  - Area chart with actual weight points
  - 7-day moving average
  - Healthy loss zone shading
  - Goal weight projection
  - Milestones marked

- **Statistics:**
  - Total weight lost
  - Duration (weeks)
  - Average weekly loss
  - Overall progress percentage

- **Active Streaks (3 cards):**
  - Protein streak 🔥
  - Logging streak 📝
  - Medication streak 💉
  - Each shows current/record with progress bar

- **Achievement Badges (Grid):**
  - 🏆 Primeira Semana Completa (Week 1)
  - 💪 Defensor Muscular (30 days protein)
  - 📉 Primeiros 5kg Perdidos
  - 🔥 Sequência Quente (14-day streak)
  - ⭐ 10% Mais Leve (in progress)
  - 🎯 Meta Alcançada (locked)

- **Progress Milestones (Timeline):**
  - Vertical timeline of completed/pending milestones
  - Progress bars for incomplete milestones

- **General Statistics Summary:**
  - Total lost, average weekly, protein hit rate, adherence

#### 💊 Tab 4: Tratamento (Treatment)
**Purpose:** Medication tracking and side effect management

**Features:**
- **Current Medication Card:**
  - Medication name + dose
  - Frequency and schedule
  - Next dose countdown
  - Time on current dose
  - Adherence percentage
  - Register dose button

- **Side Effect Calendar (Heatmap):**
  - Monthly calendar view
  - Color-coded severity:
    - Green: No symptoms
    - Amber: Mild symptoms
    - Red: Moderate symptoms
  - Click to see logged symptoms
  - Visual pattern highlighting

- **Pattern Insights:**
  - AI-detected patterns:
    - "Náusea happens 73% of times on days 1-2 post-dose"
    - "Fatigue correlates with protein < 1.4g/kg"
  - Actionable tips for each pattern

- **Community Insights (Anonymous):**
  - Weight loss comparison:
    - User vs. average for same medication/dose
    - Progress bars
    - Encouraging feedback
  - Protein ranking: "Top 15% of users"
  - Common side effects: "73% experience nausea days 1-2"
  - Privacy note

- **Dosage Decision Support:**
  - Observations (plateau detected, adherence, side effects)
  - Suggestion to discuss with doctor
  - Generate PDF report button
  - Medical disclaimer

## Design System

### Color Palette

**Health-specific colors (CSS variables):**
```css
--health-teal: hsl(180 70% 45%)         /* Primary brand color */
--health-teal-light: hsl(180 70% 95%)   /* Backgrounds */
--health-green: hsl(142 70% 45%)        /* Success/safe zone */
--health-green-light: hsl(142 70% 95%)  /* Success backgrounds */
--health-amber: hsl(38 92% 50%)         /* Warning/caution */
--health-amber-light: hsl(38 92% 95%)   /* Warning backgrounds */
--health-red: hsl(0 70% 60%)            /* Danger/risk */
--health-red-light: hsl(0 70% 95%)      /* Danger backgrounds */
```

### Typography
- Font: Inter (system-ui fallback)
- Large numbers for key metrics (3xl, 4xl, 6xl)
- Clear hierarchy with semantic sizing
- Friendly but professional tone

### Icons & Emojis
Used tastefully throughout:
- 💪 Muscle/protein
- 🔥 Streaks
- ⭐ Achievements
- 🎯 Goals
- 📊 Charts
- 💉 Medication
- 😊 Wellbeing
- 🟢🟡🔴 Status indicators

### Tone (Portuguese Brazil)
- Warm and encouraging: "Parabéns! Continue assim! 🌟"
- Conversational "você" (informal you)
- No clinical coldness
- Supportive: "Você não está sozinha"
- Data empowerment without overwhelm

## Technical Stack

### Frontend
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Routing:** Wouter
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Charts:** Recharts
- **Animations:** Framer Motion
- **Icons:** Lucide React

### Data
- Mock data for demo (see `/client/src/data/mockData.ts`)
- Profile: Maria Silva (38, 165cm, 82.5kg current, 75kg goal)
- 9 weeks of realistic health data
- Medication: Ozempic 1.0mg weekly

## Mobile-First Design

✅ **Optimized for mobile:**
- Tab navigation: 4-column grid on mobile, icons + text
- Cards stack vertically
- Charts responsive with ResponsiveContainer
- Touch-friendly tap targets
- Safe area insets for notched devices
- Sticky header with key metric

✅ **Desktop enhancements:**
- Multi-column card grids (2-4 columns)
- Wider charts for better data visualization
- Spacious layout

## Key Features

### Muscle Score Gauge (Hero)
- Custom SVG circular gauge
- Animated stroke with 1s ease-out transition
- Color transitions based on score
- Large centered number
- Status badge below

### Interactive Charts
All charts use Recharts with:
- Tooltips on hover/tap
- Reference lines for goals
- Color-coded data points
- Responsive sizing
- Clean grid styling

### Gamification
- **Streaks:** Daily tracking with fire emoji
- **Badges:** 6 achievements with unlock states
- **Progress Bars:** Visual feedback everywhere
- **Celebrations:** Encouraging messages and stars

### Community Insights
- Anonymous benchmarking
- No user-to-user comparison (supportive, not competitive)
- Aggregate statistics
- Privacy-first approach

## File Structure

```
/client/src/
├── pages/
│   └── dashboard.tsx                    # Main dashboard page with tab navigation
├── components/
│   └── dashboard/
│       ├── overview-tab.tsx             # Tab 1: Visão Geral
│       ├── muscle-tab.tsx               # Tab 2: Músculo (HERO)
│       ├── progress-tab.tsx             # Tab 3: Progresso
│       └── treatment-tab.tsx            # Tab 4: Tratamento
├── data/
│   └── mockData.ts                      # Demo data for Maria Silva
└── index.css                            # Health color variables
```

## Usage

### Development
```bash
npm install
npm run dev
```

Access dashboard at: `http://localhost:3000/dashboard`

### Navigation
- Dashboard link added to main navigation (desktop + mobile)
- Direct route: `/dashboard`

## Success Metrics

**Dashboard achieves success when:**
1. ✅ User sees muscle score in <5 seconds
2. ✅ Feels encouraging and supportive
3. ✅ Data-rich without overwhelming
4. ✅ Works beautifully on mobile (80% Brazilian users)
5. ✅ Visualizes all 4 value propositions clearly
6. ✅ Portuguese feels natural (not translated English)
7. ✅ Builds trust (disclaimers, privacy notes, professional polish)

## Future Enhancements

**Potential additions:**
- Real-time data sync with WhatsApp bot
- PDF report generation
- Shareable weekly summaries (social media)
- Food photo scanner integration
- Doctor portal access
- Notifications for dose reminders
- More achievement badges
- Customizable goals
- Multi-language support (Spanish, English)

## Medical Disclaimers

⚠️ Included throughout:
- "Zempi não substitui orientação médica profissional"
- "Sempre consulte seu médico antes de alterar tratamento"
- Positioned prominently but unobtrusively

## Privacy & Data

🔒 Notes included:
- "Seus dados são privados e nunca compartilhados"
- Community insights use aggregate, anonymous data
- No user-to-user comparison or social pressure

---

**Built with ❤️ for Brazilian women taking control of their GLP-1 journey**

For questions or feedback, see the main project README.
