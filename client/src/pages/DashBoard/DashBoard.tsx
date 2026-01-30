import Editor from "../../components/Editor/Editor";
import { Card, CardContent } from "../../components/ui/card";
import styles from "./DashBoard.module.css";

interface DashBoardProps {
    handleSubmit: (note: string) => void;
}

const DashBoard: React.FC<DashBoardProps> = ({handleSubmit}) => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

    return (
        <div id="dashboard_page" className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">{greeting}, User! 👋</h1>
                    <p className="text-blue-100 text-lg">Reflect on your day across the four pillars of wellness</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
                {/* Stats Overview Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <Card className="bg-white dark:bg-slate-800 border-0 shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl mb-2">🧠</div>
                            <h3 className="font-semibold text-sm text-slate-600 dark:text-slate-300">Mental</h3>
                            <p className="text-2xl font-bold text-blue-600 mt-2">--</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-slate-800 border-0 shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl mb-2">💪</div>
                            <h3 className="font-semibold text-sm text-slate-600 dark:text-slate-300">Physical</h3>
                            <p className="text-2xl font-bold text-green-600 mt-2">--</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-slate-800 border-0 shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl mb-2">✨</div>
                            <h3 className="font-semibold text-sm text-slate-600 dark:text-slate-300">Spiritual</h3>
                            <p className="text-2xl font-bold text-purple-600 mt-2">--</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-slate-800 border-0 shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6 text-center">
                            <div className="text-3xl mb-2">🤝</div>
                            <h3 className="font-semibold text-sm text-slate-600 dark:text-slate-300">Social</h3>
                            <p className="text-2xl font-bold text-orange-600 mt-2">--</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Editor Card */}
                <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
                    <CardContent className="p-8">
                        <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">How has your day been?</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">Share your thoughts and reflections across the four pillars</p>
                        <Editor onSubmitNote={handleSubmit}/>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default DashBoard;