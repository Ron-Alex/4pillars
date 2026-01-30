import { Card, CardContent } from "../../components/ui/card";
import type { StatsData } from "../../types/Stats.types";

const StatScreen = (stats: StatsData) => {
    const pillars = [
        { name: "Mental", value: stats.mental, emoji: "🧠", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50 dark:bg-blue-950", textColor: "text-blue-600 dark:text-blue-400" },
        { name: "Physical", value: stats.physical, emoji: "💪", color: "from-green-500 to-green-600", bgColor: "bg-green-50 dark:bg-green-950", textColor: "text-green-600 dark:text-green-400" },
        { name: "Social", value: stats.social, emoji: "🤝", color: "from-orange-500 to-orange-600", bgColor: "bg-orange-50 dark:bg-orange-950", textColor: "text-orange-600 dark:text-orange-400" },
        { name: "Spiritual", value: stats.spiritual, emoji: "✨", color: "from-purple-500 to-purple-600", bgColor: "bg-purple-50 dark:bg-purple-950", textColor: "text-purple-600 dark:text-purple-400" },
    ];

    const maxValue = Math.max(...Object.values(stats), 10) || 10;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black text-white p-8 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Your Wellness Stats 📊</h1>
                    <p className="text-slate-300 text-lg">Track your progress across the four pillars of wellness</p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {pillars.map((pillar) => (
                        <Card key={pillar.name} className="bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className={`p-6 ${pillar.bgColor} rounded-lg`}>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-4xl">{pillar.emoji}</span>
                                    <span className={`text-sm font-bold px-3 py-1 rounded-full bg-white dark:bg-slate-700 ${pillar.textColor}`}>
                                        {pillar.value}/{Math.round(maxValue)}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{pillar.name}</h3>
                                
                                {/* Progress Bar */}
                                <div className="w-full bg-white dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                                    <div
                                        className={`h-full bg-gradient-to-r ${pillar.color} transition-all duration-500`}
                                        style={{ width: `${(pillar.value / maxValue) * 100}%` }}
                                    ></div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                                    {Math.round((pillar.value / maxValue) * 100)}% of max
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Overall Summary */}
                <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
                    <CardContent className="p-8">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Wellness Overview</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <p className="text-5xl font-bold text-slate-900 dark:text-white mb-2">
                                    {Math.round((Object.values(stats).reduce((a, b) => a + b, 0) / (maxValue * 4)) * 100)}%
                                </p>
                                <p className="text-slate-600 dark:text-slate-400 font-semibold">Overall Wellness</p>
                            </div>
                            <div className="text-center">
                                <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stats.mental}</p>
                                <p className="text-slate-600 dark:text-slate-400 font-semibold">Mental Score</p>
                            </div>
                            <div className="text-center">
                                <p className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">{stats.physical}</p>
                                <p className="text-slate-600 dark:text-slate-400 font-semibold">Physical Score</p>
                            </div>
                            <div className="text-center">
                                <p className="text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">{stats.social}</p>
                                <p className="text-slate-600 dark:text-slate-400 font-semibold">Social Score</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Tips Section */}
                <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 rounded-lg p-8 border border-indigo-200 dark:border-indigo-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">💡 Wellness Tips</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-300">
                        <p>✓ Balance all four pillars for optimal wellness</p>
                        <p>✓ Track your progress daily</p>
                        <p>✓ Focus on your lowest pillar this week</p>
                        <p>✓ Celebrate improvements in any area</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default StatScreen;