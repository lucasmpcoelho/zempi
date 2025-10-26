import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { mockUser, sideEffectCalendar, patternInsights, communityInsights } from "@/data/mockData";
import { Calendar, TrendingUp, Users, AlertCircle, FileText, CheckCircle2 } from "lucide-react";

// Side Effect Calendar Heatmap
function SideEffectCalendar() {
  const getSeverityColor = (severity: number) => {
    if (severity === 0) return "bg-green-100 border-green-200";
    if (severity === 1) return "bg-amber-200 border-amber-300";
    return "bg-red-200 border-red-300";
  };

  const getSeverityLabel = (severity: number) => {
    if (severity === 0) return "Sem sintomas";
    if (severity === 1) return "Sintomas leves";
    return "Sintomas moderados";
  };

  // Get October 2025 calendar grid
  const startDate = new Date("2025-10-01");
  const endDate = new Date("2025-10-26");
  const days: Date[] = [];
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }

  return (
    <div className="space-y-4">
      {/* Legend */}
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-100 border border-green-200" />
          <span>Sem sintomas</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-amber-200 border border-amber-300" />
          <span>Leves</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-200 border border-red-300" />
          <span>Moderados</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
          <div key={day} className="text-center text-xs font-semibold text-gray-500 py-2">
            {day}
          </div>
        ))}

        {/* Padding for start of month */}
        {Array.from({ length: startDate.getDay() }).map((_, i) => (
          <div key={`pad-${i}`} />
        ))}

        {/* Calendar days */}
        {days.map((day) => {
          const dateStr = day.toISOString().split("T")[0];
          const dayData = sideEffectCalendar.find((d) => d.date === dateStr);
          const severity = dayData?.severity ?? 0;

          return (
            <div
              key={dateStr}
              className={`aspect-square rounded border-2 flex items-center justify-center text-sm font-medium cursor-pointer hover:shadow-md transition-all ${getSeverityColor(severity)}`}
              title={`${day.getDate()} de outubro - ${getSeverityLabel(severity)}`}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TreatmentTab() {
  const nextDoseDate = "Qui 24 Out";
  const daysUntilNextDose = 2;

  return (
    <div className="space-y-6">
      {/* Current Medication Card */}
      <Card className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 shadow-lg">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">💊</span>
              <div>
                <CardTitle className="text-2xl">{mockUser.medication.name} {mockUser.medication.dose}</CardTitle>
                <p className="text-sm text-gray-600">
                  {mockUser.medication.frequency}, às {mockUser.medication.dayOfWeek.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 uppercase mb-1">Próxima Dose</div>
              <div className="text-xl font-bold" style={{ color: "var(--health-teal)" }}>
                {nextDoseDate}
              </div>
              <div className="text-sm text-gray-600">em {daysUntilNextDose} dias</div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 uppercase mb-1">Tempo Nesta Dose</div>
              <div className="text-xl font-bold">{mockUser.medication.weeksOnCurrentDose} semanas</div>
              <div className="text-sm text-gray-600">Dose atual: {mockUser.medication.dose}</div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 uppercase mb-1">Aderência</div>
              <div className="text-xl font-bold" style={{ color: "var(--health-green)" }}>
                {mockUser.medication.adherence}%
              </div>
              <Progress value={mockUser.medication.adherence} className="mt-2 h-2" />
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm flex items-center justify-center">
              <Button className="w-full" style={{ backgroundColor: "var(--health-teal)" }}>
                Registrar Dose
              </Button>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            Ver Histórico Completo
          </Button>
        </CardContent>
      </Card>

      {/* Side Effect Calendar */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Calendário de Sintomas - Outubro 2025
          </CardTitle>
          <p className="text-sm text-gray-600">Clique em um dia para ver sintomas registrados</p>
        </CardHeader>
        <CardContent>
          <SideEffectCalendar />
        </CardContent>
      </Card>

      {/* Pattern Insights */}
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Padrões Detectados
          </CardTitle>
          <p className="text-sm text-gray-600">Baseado nos seus registros</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {patternInsights.map((insight, idx) => (
            <div key={idx} className="space-y-3">
              <div className="font-semibold text-lg" style={{ color: "var(--health-teal)" }}>
                {insight.symptom}:
              </div>
              <ul className="space-y-2">
                {insight.patterns.map((pattern, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-blue-500">•</span>
                    <span>{pattern}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-start gap-2">
                  <span className="text-lg">💡</span>
                  <div>
                    <div className="font-semibold text-sm">Dica:</div>
                    <p className="text-sm text-gray-700 mt-1">{insight.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Community Insights */}
      <Card className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Comparação Anônima
          </CardTitle>
          <p className="text-sm text-gray-600">Você vs. usuários similares ({mockUser.medication.name} {mockUser.medication.dose})</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Weight Loss Comparison */}
          <div className="space-y-3">
            <div className="font-semibold">Perda de Peso:</div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span>Você: <strong>{communityInsights.weightLossComparison.user}{communityInsights.weightLossComparison.unit}</strong></span>
                  <span>Média: {communityInsights.weightLossComparison.average}{communityInsights.weightLossComparison.unit}</span>
                </div>
                <Progress value={(communityInsights.weightLossComparison.user / 1.5) * 100} className="h-3" />
              </div>
            </div>
            <div className="text-sm p-3 bg-green-100 rounded-lg flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
              <span>"Ritmo saudável, levemente acima da média ✅"</span>
            </div>
          </div>

          {/* Protein Ranking */}
          <div className="space-y-3">
            <div className="font-semibold">Proteína:</div>
            <div className="p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg border-2 border-yellow-300">
              <div className="text-2xl font-bold" style={{ color: "var(--health-amber)" }}>
                💪 Top {100 - communityInsights.proteinRanking.percentile}% dos usuários
              </div>
              <p className="text-sm text-gray-700 mt-2">"Excelente! Continue assim."</p>
            </div>
          </div>

          {/* Common Side Effects */}
          <div className="space-y-3">
            <div className="font-semibold">Efeitos Colaterais:</div>
            <div className="p-4 bg-blue-100 rounded-lg">
              <div className="text-sm">
                <strong>{communityInsights.commonSideEffect.percentage}%</strong> {communityInsights.commonSideEffect.description}
              </div>
              <p className="text-sm text-gray-700 mt-2">"Você não está sozinha. Isso é normal."</p>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-6 p-3 bg-gray-100 rounded-lg border border-gray-300">
            <div className="flex items-start gap-2 text-xs text-gray-600">
              <span>🔒</span>
              <span>Seus dados são privados e nunca compartilhados. As comparações são baseadas em dados agregados e anônimos.</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dosage Decision Support */}
      <Card className="border-2 border-amber-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" style={{ color: "var(--health-amber)" }} />
            Insight sobre Dosagem
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-700">
            Você está há <strong>{mockUser.medication.weeksOnCurrentDose} semanas</strong> em {mockUser.medication.name} {mockUser.medication.dose}.
          </p>

          <div className="space-y-2">
            <div className="font-semibold">Observações:</div>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Peso estável últimas 3 semanas (plateau detectado)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Efeitos colaterais leves e manejáveis</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Aderência excelente ({mockUser.medication.adherence}%)</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-start gap-2">
              <span className="text-lg">💡</span>
              <p className="text-sm text-gray-700">
                Pode valer discutir aumento de dose com seu médico na próxima consulta.
              </p>
            </div>
          </div>

          <Button className="w-full" variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Gerar Relatório para Médico
          </Button>

          <div className="text-xs text-gray-500 text-center p-2 bg-gray-50 rounded">
            ⚠️ Zempi não substitui orientação médica profissional. Sempre consulte seu médico antes de alterar tratamento.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
