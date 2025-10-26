import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { mockUser, weightHistoryData, achievements, milestones } from "@/data/mockData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Area, AreaChart } from "recharts";
import { Trophy, Lock, CheckCircle2, Circle } from "lucide-react";

export default function ProgressTab() {
  const totalWeightLoss = mockUser.startWeight - mockUser.currentWeight;
  const targetWeightLoss = mockUser.startWeight - mockUser.goalWeight;
  const progressPercentage = (totalWeightLoss / targetWeightLoss) * 100;
  const averageWeeklyLoss = totalWeightLoss / 9; // 9 weeks

  // Prepare weight chart data with healthy zone
  const weightChartData = weightHistoryData.map((d, idx) => {
    const weeklyLoss = idx > 0 ? weightHistoryData[idx - 1].weight - d.weight : 0;
    return {
      ...d,
      healthyMin: d.weight - 0.5,
      healthyMax: d.weight + 0.5,
    };
  });

  return (
    <div className="space-y-6">
      {/* Weight Loss Progress Chart */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Evolução de Peso (90 dias)</CardTitle>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div>Início: <span className="font-bold">{mockUser.startWeight}kg</span></div>
            <div>Atual: <span className="font-bold" style={{ color: "var(--health-teal)" }}>{mockUser.currentWeight}kg</span></div>
            <div>Meta: <span className="font-bold" style={{ color: "var(--health-green)" }}>{mockUser.goalWeight}kg</span></div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weightChartData}>
                <defs>
                  <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--health-teal)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--health-teal)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return `${date.getDate()}/${date.getMonth() + 1}`;
                  }}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  domain={[mockUser.goalWeight - 2, mockUser.startWeight + 2]}
                  tick={{ fontSize: 12 }}
                  label={{ value: "Peso (kg)", angle: -90, position: "insideLeft" }}
                />
                <Tooltip
                  formatter={(value: number) => [`${value.toFixed(1)}kg`, "Peso"]}
                  labelFormatter={(label) => {
                    const date = new Date(label);
                    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                  }}
                />
                <ReferenceLine y={mockUser.goalWeight} stroke="var(--health-green)" strokeDasharray="5 5" label={{ value: `Meta: ${mockUser.goalWeight}kg`, position: "right" }} />
                <ReferenceLine y={mockUser.startWeight} stroke="#cbd5e1" strokeDasharray="5 5" label={{ value: `Início: ${mockUser.startWeight}kg`, position: "right" }} />
                <Area type="monotone" dataKey="weight" stroke="var(--health-teal)" strokeWidth={3} fill="url(#weightGradient)" dot={{ r: 5, fill: "var(--health-teal)" }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Below Chart */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 p-4 bg-gray-50 rounded-lg">
            <div>
              <div className="text-xs text-gray-500 uppercase">Total Perdido</div>
              <div className="text-2xl font-bold" style={{ color: "var(--health-teal)" }}>
                {totalWeightLoss.toFixed(1)}kg
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase">Duração</div>
              <div className="text-2xl font-bold">9 semanas</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase">Média Semanal</div>
              <div className="text-2xl font-bold" style={{ color: "var(--health-green)" }}>
                {averageWeeklyLoss.toFixed(1)}kg
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase">Progresso</div>
              <div className="text-2xl font-bold" style={{ color: "var(--health-teal)" }}>
                {Math.round(progressPercentage)}%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Streaks & Current Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="text-2xl">🔥</span>
              Proteína
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold" style={{ color: "var(--health-amber)" }}>
              {mockUser.currentStreak.protein} dias
            </div>
            <div className="text-sm text-gray-600 mt-1">Recorde: {mockUser.currentStreak.proteinRecord} dias</div>
            <Progress value={(mockUser.currentStreak.protein / mockUser.currentStreak.proteinRecord) * 100} className="mt-3 h-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="text-2xl">📝</span>
              Registro
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold" style={{ color: "var(--health-teal)" }}>
              {mockUser.currentStreak.logging} dias
            </div>
            <div className="text-sm text-gray-600 mt-1">Recorde: {mockUser.currentStreak.loggingRecord} dias</div>
            <Progress value={(mockUser.currentStreak.logging / mockUser.currentStreak.loggingRecord) * 100} className="mt-3 h-2" />
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="text-2xl">💉</span>
              Medicação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold" style={{ color: "var(--health-green)" }}>
              {mockUser.currentStreak.medication} semanas
            </div>
            <div className="text-sm text-gray-600 mt-1">Recorde: {mockUser.currentStreak.medicationRecord} semanas</div>
            <Progress value={(mockUser.currentStreak.medication / mockUser.currentStreak.medicationRecord) * 100} className="mt-3 h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Achievements - Badges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy style={{ color: "var(--health-amber)" }} />
            Conquistas Desbloqueadas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border-2 transition-all ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 hover:shadow-lg"
                    : "bg-gray-50 border-gray-200 opacity-60"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`text-4xl ${achievement.unlocked ? "" : "grayscale"}`}>
                    {achievement.unlocked ? achievement.icon : <Lock className="h-10 w-10 text-gray-400" />}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-sm">{achievement.name}</div>
                    <div className="text-xs text-gray-600 mt-1">{achievement.description}</div>
                    {achievement.unlocked && achievement.unlockedAt && (
                      <Badge className="mt-2 text-xs" style={{ backgroundColor: "var(--health-green)" }}>
                        Desbloqueado
                      </Badge>
                    )}
                    {!achievement.unlocked && achievement.progress !== undefined && (
                      <div className="mt-2">
                        <Progress value={achievement.progress} className="h-1.5" />
                        <div className="text-xs text-gray-500 mt-1">{achievement.progress}% • {achievement.target}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Milestones */}
      <Card>
        <CardHeader>
          <CardTitle>Marcos do Progresso</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone, idx) => (
              <div key={milestone.id} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  {milestone.completed ? (
                    <CheckCircle2 className="h-6 w-6" style={{ color: "var(--health-green)" }} />
                  ) : (
                    <Circle className="h-6 w-6 text-gray-300" />
                  )}
                  {idx < milestones.length - 1 && <div className={`w-0.5 h-12 ${milestone.completed ? "bg-green-300" : "bg-gray-200"}`} />}
                </div>
                <div className="flex-1 pb-8">
                  <div className={`font-semibold ${milestone.completed ? "text-gray-900" : "text-gray-500"}`}>{milestone.title}</div>
                  {!milestone.completed && milestone.progress !== undefined && (
                    <div className="mt-2">
                      <Progress value={milestone.progress} className="h-2" />
                      <div className="text-xs text-gray-500 mt-1">{milestone.progress}% completo</div>
                    </div>
                  )}
                  {milestone.completed && <Badge className="mt-2" style={{ backgroundColor: "var(--health-green)" }}>✓ Completo</Badge>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Statistics Summary */}
      <Card className="bg-gradient-to-br from-[var(--health-teal-light)] to-white">
        <CardHeader>
          <CardTitle>Estatísticas Gerais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-xs text-gray-500 uppercase mb-1">Total Perdido</div>
              <div className="text-3xl font-bold" style={{ color: "var(--health-teal)" }}>
                {totalWeightLoss.toFixed(1)}kg
              </div>
              <div className="text-xs text-gray-600">em 9 semanas</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase mb-1">Média Semanal</div>
              <div className="text-3xl font-bold" style={{ color: "var(--health-green)" }}>
                {averageWeeklyLoss.toFixed(1)}kg
              </div>
              <div className="text-xs text-gray-600">/semana</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase mb-1">Proteína</div>
              <div className="text-3xl font-bold" style={{ color: "var(--health-amber)" }}>
                78%
              </div>
              <div className="text-xs text-gray-600">dos dias</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase mb-1">Aderência</div>
              <div className="text-3xl font-bold" style={{ color: "var(--health-green)" }}>
                {mockUser.medication.adherence}%
              </div>
              <div className="text-xs text-gray-600">medicação</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
