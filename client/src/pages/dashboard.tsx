import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, TrendingDown, Dumbbell, Pill } from "lucide-react";
import OverviewTab from "@/components/dashboard/overview-tab";
import MuscleTab from "@/components/dashboard/muscle-tab";
import ProgressTab from "@/components/dashboard/progress-tab";
import TreatmentTab from "@/components/dashboard/treatment-tab";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--health-teal-light)] via-white to-[var(--health-green-light)]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Zempi</h1>
              <p className="text-sm text-gray-600">Olá, Maria! 👋</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-xs text-gray-500">Pontuação Músculo</div>
                <div className="text-2xl font-bold" style={{ color: "var(--health-green)" }}>
                  78
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tabs Navigation - Mobile First */}
          <TabsList className="grid w-full grid-cols-4 mb-6 bg-white shadow-sm h-auto">
            <TabsTrigger value="overview" className="flex flex-col items-center gap-1 py-3">
              <Activity className="h-5 w-5" />
              <span className="text-xs sm:text-sm">Visão Geral</span>
            </TabsTrigger>
            <TabsTrigger value="muscle" className="flex flex-col items-center gap-1 py-3">
              <Dumbbell className="h-5 w-5" />
              <span className="text-xs sm:text-sm">Músculo</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex flex-col items-center gap-1 py-3">
              <TrendingDown className="h-5 w-5" />
              <span className="text-xs sm:text-sm">Progresso</span>
            </TabsTrigger>
            <TabsTrigger value="treatment" className="flex flex-col items-center gap-1 py-3">
              <Pill className="h-5 w-5" />
              <span className="text-xs sm:text-sm">Tratamento</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <TabsContent value="overview" className="mt-0">
            <OverviewTab />
          </TabsContent>

          <TabsContent value="muscle" className="mt-0">
            <MuscleTab />
          </TabsContent>

          <TabsContent value="progress" className="mt-0">
            <ProgressTab />
          </TabsContent>

          <TabsContent value="treatment" className="mt-0">
            <TreatmentTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
