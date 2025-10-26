import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockUser, last30DaysProtein, bodyCompositionData } from "@/data/mockData";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from "recharts";
import { CheckCircle2, AlertCircle } from "lucide-react";

// Circular Muscle Score Gauge Component
function MuscleScoreGauge({ score }: { score: number }) {
  const getScoreColor = (score: number) => {
    if (score >= 70) return "var(--health-green)";
    if (score >= 50) return "var(--health-amber)";
    return "var(--health-red)";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 70) return { text: "Zona Segura", emoji: "🟢" };
    if (score >= 50) return { text: "Atenção", emoji: "🟡" };
    return { text: "Risco Alto", emoji: "🔴" };
  };

  const color = getScoreColor(score);
  const label = getScoreLabel(score);
  const circumference = 2 * Math.PI * 120;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative w-64 h-64">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="#e5e7eb"
            strokeWidth="16"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke={color}
            strokeWidth="16"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-6xl font-bold" style={{ color }}>
            {score}
          </div>
          <div className="text-gray-500 text-lg">/100</div>
        </div>
      </div>

      {/* Label Below Gauge */}
      <div className="mt-4 text-center">
        <Badge className="text-lg px-4 py-2" style={{ backgroundColor: color, color: "white" }}>
          {label.emoji} {label.text}
        </Badge>
      </div>
    </div>
  );
}

export default function MuscleTab() {
  // Calculate protein stats
  const proteinGoal = mockUser.proteinGoal;
  const last7Days = last30DaysProtein.slice(-7);
  const daysAboveGoal = last7Days.filter((d) => d.protein >= proteinGoal).length;
  const avgProtein = Math.round(last7Days.reduce((acc, d) => acc + d.protein, 0) / last7Days.length);
  const proteinPerKg = (avgProtein / mockUser.currentWeight).toFixed(1);

  // Prepare chart data with color coding
  const proteinChartData = last30DaysProtein.map((d) => ({
    ...d,
    fill: d.protein >= proteinGoal ? "var(--health-green)" : d.protein >= proteinGoal * 0.8 ? "var(--health-amber)" : "var(--health-red)",
  }));

  return (
    <div className="space-y-6">
      {/* Hero: Muscle Preservation Score Gauge */}
      <Card className="bg-gradient-to-br from-white to-[var(--health-green-light)] shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Pontuação de Preservação Muscular</CardTitle>
          <p className="text-sm text-gray-600">Seu score indica o quão bem você está protegendo sua massa muscular</p>
        </CardHeader>
        <CardContent>
          <MuscleScoreGauge score={mockUser.muscleScore} />
        </CardContent>
      </Card>

      {/* Score Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Fatores que Influenciam Seu Score</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Protein Factor */}
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 mt-1" style={{ color: "var(--health-green)" }} />
              <div className="flex-1">
                <div className="font-semibold text-lg">✅ Proteína: {proteinPerKg}g/kg (excelente)</div>
                <div className="text-sm text-gray-600 mt-1">Meta: ≥1.6g/kg</div>
                <div className="text-sm text-gray-600">
                  Últimos 7 dias: <span className="font-semibold" style={{ color: "var(--health-green)" }}>{daysAboveGoal}/7 dias acima da meta</span>
                </div>
              </div>
            </div>
          </div>

          {/* Weight Loss Rate Factor */}
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 mt-1" style={{ color: "var(--health-green)" }} />
              <div className="flex-1">
                <div className="font-semibold text-lg">✅ Perda de Peso: 0.7kg/semana (saudável)</div>
                <div className="text-sm text-gray-600 mt-1">Zona ideal: 0.5-1.0kg/semana</div>
                <div className="text-sm text-gray-600">Muito rápido pode indicar perda muscular</div>
              </div>
            </div>
          </div>

          {/* Tip */}
          <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[var(--health-green-light)] to-[var(--health-teal-light)]">
            <div className="flex items-start gap-2">
              <span className="text-xl">💡</span>
              <div>
                <div className="font-semibold" style={{ color: "var(--health-green)" }}>Dica</div>
                <p className="text-sm text-gray-700 mt-1">Continue assim! Seus músculos estão bem protegidos. Manter a proteína alta e a perda de peso gradual é a chave para preservar massa magra.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Protein Timeline Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Proteína (30 dias)</CardTitle>
          <p className="text-sm text-gray-600">Barras verdes = meta atingida | Amarelas = 80-99% | Vermelhas = &lt;80%</p>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={proteinChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return `${date.getDate()}/${date.getMonth() + 1}`;
                  }}
                  tick={{ fontSize: 12 }}
                />
                <YAxis tick={{ fontSize: 12 }} label={{ value: "Proteína (g)", angle: -90, position: "insideLeft" }} />
                <Tooltip
                  formatter={(value: number) => [`${value}g`, "Proteína"]}
                  labelFormatter={(label) => {
                    const date = new Date(label);
                    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                  }}
                />
                <ReferenceLine y={proteinGoal} stroke="var(--health-green)" strokeDasharray="5 5" label={{ value: `Meta: ${proteinGoal}g`, position: "right" }} />
                <Bar dataKey="protein" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Body Composition Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Tendência de Composição Corporal</CardTitle>
          <p className="text-sm text-gray-600">Estimativa de perda de gordura vs. perda muscular</p>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bodyCompositionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="week" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} label={{ value: "Massa (kg)", angle: -90, position: "insideLeft" }} />
                <Tooltip formatter={(value: number) => `${value.toFixed(1)}kg`} />
                <Legend />
                <Line type="monotone" dataKey="fatMass" stroke="var(--health-red)" strokeWidth={3} name="Massa Gorda" dot={{ r: 4 }} />
                <Line type="monotone" dataKey="muscleMass" stroke="var(--health-green)" strokeWidth={3} name="Massa Muscular" dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 p-4 bg-[var(--health-green-light)] rounded-lg">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 mt-0.5" style={{ color: "var(--health-green)" }} />
              <div className="text-sm">
                <span className="font-semibold">Excelente!</span> Você está perdendo principalmente gordura enquanto mantém sua massa muscular estável. Continue com sua rotina de proteína!
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Educational Card */}
      <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            Por que proteína é crucial?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-gray-700 leading-relaxed">
            Pesquisas mostram que <strong>1.6g/kg de proteína</strong> durante uso de GLP-1:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>Preserva 90% da massa muscular durante a perda de peso</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>Previne flacidez e o "Ozempic face"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>Mantém metabolismo ativo para queimar mais calorias</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">•</span>
              <span>Facilita manutenção do peso após o tratamento</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
