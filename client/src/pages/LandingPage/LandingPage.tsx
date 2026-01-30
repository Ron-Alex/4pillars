import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const pillars = [
        {
            title: "Mental Health",
            emoji: "🧠",
            description: "Nurture your mind with mindfulness and mental wellness practices.",
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Physical Wellness",
            emoji: "💪",
            description: "Build strength and vitality through exercise and healthy habits.",
            color: "from-green-500 to-green-600"
        },
        {
            title: "Spiritual Growth",
            emoji: "✨",
            description: "Connect with purpose and meaning in your daily life.",
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Social Connection",
            emoji: "🤝",
            description: "Strengthen relationships and foster meaningful connections.",
            color: "from-orange-500 to-orange-600"
        }
    ];

    const features = [
        { icon: "📊", title: "Track Progress", description: "Monitor your wellness across all four pillars" },
        { icon: "📝", title: "Daily Reflections", description: "Share your thoughts and track your journey" },
        { icon: "📈", title: "Visualize Growth", description: "See your improvement over time" },
        { icon: "🎯", title: "Stay Motivated", description: "Reach your wellness goals with purpose" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
            {/* Navigation Bar */}
            <nav className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        FourPillars
                    </h1>
                    <div className="flex gap-4">
                        <Button variant="outline" onClick={() => navigate('/login')}>Login</Button>
                        <Button className="bg-indigo-600 hover:bg-indigo-700" onClick={() => navigate('/signup')}>Sign Up</Button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
                <div className="max-w-6xl mx-auto px-4 md:px-6 py-24 md:py-32">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Build a Balanced Life
                            </h2>
                            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                                Transform your wellness journey by nurturing your mind, body, spirit, and relationships. Track your progress across four essential pillars of well-being.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button 
                                    className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-6"
                                    onClick={() => navigate('/signup')}
                                >
                                    Get Started Free
                                </Button>
                                <Button 
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                                <div className="grid grid-cols-2 gap-4">
                                    {pillars.map((pillar) => (
                                        <div key={pillar.title} className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
                                            <div className="text-4xl mb-2">{pillar.emoji}</div>
                                            <p className="font-semibold">{pillar.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Four Pillars Section */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        The Four Pillars of Wellness
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A holistic approach to well-being that addresses every aspect of your life
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {pillars.map((pillar) => (
                        <Card key={pillar.title} className="bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                            <CardContent className={`p-8 bg-gradient-to-br ${pillar.color} rounded-lg text-white text-center`}>
                                <div className="text-6xl mb-4">{pillar.emoji}</div>
                                <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                                <p className="text-white/90">{pillar.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white dark:bg-slate-800">
                <div className="max-w-6xl mx-auto px-4 md:px-6 py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Why Choose FourPillars?
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Everything you need to build and maintain a balanced life
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => (
                            <Card key={feature.title} className="bg-slate-50 dark:bg-slate-700 border-0 shadow-md hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="text-5xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-24">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    <div>
                        <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">10k+</p>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">Active Users</p>
                    </div>
                    <div>
                        <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">500k+</p>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">Reflections Shared</p>
                    </div>
                    <div>
                        <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">4.8★</p>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">User Rating</p>
                    </div>
                    <div>
                        <p className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">100%</p>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">Free Forever</p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto px-4 md:px-6 py-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Transform Your Life?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of people already building balanced, fulfilling lives through mindful wellness tracking.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-6"
                            onClick={() => navigate('/signup')}
                        >
                            Start Free Today
                        </Button>
                        <Button 
                            className="bg-indigo-500 hover:bg-indigo-700 text-lg px-8 py-6"
                            onClick={() => navigate('/login')}
                        >
                            Already a Member? Login
                        </Button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-slate-900 dark:bg-black text-slate-400 py-8">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-white font-bold mb-4">FourPillars</h3>
                            <p className="text-sm">Build a balanced life across mind, body, spirit, and relationships.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Product</h4>
                            <ul className="text-sm space-y-2">
                                <li><a href="#" className="hover:text-white">Features</a></li>
                                <li><a href="#" className="hover:text-white">Pricing</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Company</h4>
                            <ul className="text-sm space-y-2">
                                <li><a href="#" className="hover:text-white">About</a></li>
                                <li><a href="#" className="hover:text-white">Contact</a></li>
                                <li><a href="#" className="hover:text-white">Careers</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Legal</h4>
                            <ul className="text-sm space-y-2">
                                <li><a href="#" className="hover:text-white">Privacy</a></li>
                                <li><a href="#" className="hover:text-white">Terms</a></li>
                                <li><a href="#" className="hover:text-white">Security</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-sm">
                        <p>&copy; 2026 FourPillars. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}  

export default LandingPage;