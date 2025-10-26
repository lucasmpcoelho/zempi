import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { mockUser, weeklySummary, activityFeed, weeklyData } from "@/data/mockData";
import { Share2, FileText, TrendingDown, TrendingUp } from "lucide-react";

export default function OverviewTab() {
  const todayProtein = weeklyData[weeklyData.length - 1].protein;
  const proteinProgress = (todayProtein / mockUser.proteinGoal) * 100;

  const getProteinStatus = () => {
    if (proteinProgress >= 100) return { emoji: "🟢", color: "var(--health-green)" };
    if (proteinProgress >= 80) return { emoji: "🟡", color: "var(--health-amber)" };
    return { emoji: "🔴", color: "var(--health-red)" };
  };

  const proteinStatus = getProteinStatus();

  return (
    <div className="space-y-6">
      {/* Quick Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Current Weight */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Peso Atual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{mockUser.currentWeight}kg</div>
            <div className="flex items-center gap-1 text-sm mt-1" style={{ color: "var(--health-green)" }}>
              <TrendingDown className="h-4 w-4" />
              <span>↓ 0.7kg esta semana</span>
            </div>
          </CardContent>
        </Card>

        {/* Today's Protein */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Proteína Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              {todayProtein}g <span className="text-base text-gray-500">/ {mockUser.proteinGoal}g</span>
            </div>
            <div className="mt-2">
              <Progress value={proteinProgress} className="h-2" />
            </div>
            <div className="text-sm mt-1" style={{ color: proteinStatus.color }}>
              {proteinStatus.emoji} {Math.round(proteinProgress)}%
            </div>
          </CardContent>
        </Card>

        {/* Current Streak */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Sequência Atual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: "var(--health-amber)" }}>
              🔥 {mockUser.currentStreak.protein} dias
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Meta de proteína • Recorde: {mockUser.currentStreak.proteinRecord}
            </div>
          </CardContent>
        </Card>

        {/* Muscle Score */}
        <Card className="hover:shadow-lg transition-shadow" style={{ borderColor: "var(--health-green)", borderWidth: "2px" }}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-gray-600">Pontuação Músculo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold" style={{ color: "var(--health-green)" }}>
              {mockUser.muscleScore}
            </div>
            <Badge className="mt-2" style={{ backgroundColor: "var(--health-green-light)", color: "var(--health-green)" }}>
              Zona Segura 🟢
            </Badge>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Summary Card */}
      <Card className="bg-gradient-to-br from-white to-[var(--health-teal-light)] shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Resumo Semanal</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Compartilhar
              </Button>
            </div>
          </div>
          <div className="text-sm text-gray-600">📅 Semana de {weeklySummary.week}</div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold" style={{ color: "var(--health-teal)" }}>
              {weeklySummary.score}/100
            </span>
            <span className="text-2xl">{"⭐".repeat(weeklySummary.stars)}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-xl">⚖️</span>
              <div>
                <div className="font-semibold">Peso: {weeklySummary.weightChange}kg</div>
                <div className="text-sm text-gray-600">
                  {weeklySummary.weightChange < 0 ? <TrendingDown className="inline h-4 w-4" /> : <TrendingUp className="inline h-4 w-4" />}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-xl">💪</span>
              <div>
                <div className="font-semibold">
                  Proteína: {weeklySummary.proteinDays}/{weeklySummary.totalDays} dias excelente
                </div>
                <div className="text-sm text-gray-600">{Math.round((weeklySummary.proteinDays / weeklySummary.totalDays) * 100)}% da semana</div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-xl">🍽️</span>
              <div>
                <div className="font-semibold">Refeições: {weeklySummary.mealsLogged} registradas</div>
                <div className="text-sm text-gray-600">Média de {(weeklySummary.mealsLogged / weeklySummary.totalDays).toFixed(1)}/dia</div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-xl">😊</span>
              <div>
                <div className="font-semibold">Bem-estar: {weeklySummary.symptomFreeDays} dias sem sintomas</div>
                <div className="text-sm text-gray-600">{Math.round((weeklySummary.symptomFreeDays / weeklySummary.totalDays) * 100)}% da semana</div>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-xl">💉</span>
              <div>
                <div className="font-semibold">Medicação: {weeklySummary.medicationOnTrack ? "✅ Em dia" : "⚠️ Atrasada"}</div>
                <div className="text-sm text-gray-600">Aderência: {mockUser.medication.adherence}%</div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-lg font-medium" style={{ color: "var(--health-green)" }}>
              "{weeklySummary.message}"
            </p>
          </div>

          <Button className="w-full" style={{ backgroundColor: "var(--health-teal)" }}>
            Ver Detalhes
          </Button>
        </CardContent>
      </Card>

      {/* Recent Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Atividade Recente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activityFeed.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 pb-3 border-b last:border-0">
                <div className="text-2xl">{activity.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold">{activity.title}</div>
                  <div className="text-sm text-gray-600">{activity.description}</div>
                  <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
          <span className="text-2xl">🍽️</span>
          <span>Registrar Refeição</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
          <span className="text-2xl">⚖️</span>
          <span>Registrar Peso</span>
        </Button>
        <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
          <FileText className="h-6 w-6" />
          <span>Relatório para Médico</span>
        </Button>
      </div>
    </div>
  );
}
