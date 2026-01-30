import { useNavigate } from "react-router";
import { useContext } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { AuthContext } from "../../contexts/AuthContext";

const ProfilePage = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    const handleLogout = () => {
        auth.setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Your Profile 👤</h1>
                    <p className="text-indigo-100 text-lg">Manage your account settings and preferences</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
                {/* Profile Card */}
                <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg mb-8">
                    <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex items-center justify-center text-5xl shadow-lg">
                                    👤
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome User</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-4">user@example.com</p>
                                <p className="text-slate-500 dark:text-slate-500 text-sm mb-4">Member since January 2026</p>
                                <div className="flex flex-wrap gap-3">
                                    <Button className="bg-indigo-600 hover:bg-indigo-700">Edit Profile</Button>
                                    <Button variant="outline">Change Password</Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Account Settings Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Notifications */}
                    <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">🔔 Notifications</h3>
                            <div className="space-y-3">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
                                    <span className="text-slate-700 dark:text-slate-300">Daily reminders</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
                                    <span className="text-slate-700 dark:text-slate-300">Weekly digest</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded" />
                                    <span className="text-slate-700 dark:text-slate-300">Achievement notifications</span>
                                </label>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Preferences */}
                    <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">⚙️ Preferences</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Theme</label>
                                    <select className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white">
                                        <option>Light</option>
                                        <option>Dark</option>
                                        <option>System</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Language</label>
                                    <select className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white">
                                        <option>English</option>
                                        <option>Spanish</option>
                                        <option>French</option>
                                    </select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Stats Overview */}
                <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg mb-8">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">📈 Account Statistics</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4 text-center">
                                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">47</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Days Active</p>
                            </div>
                            <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4 text-center">
                                <p className="text-3xl font-bold text-green-600 dark:text-green-400">156</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Entries</p>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-950 rounded-lg p-4 text-center">
                                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">8.2</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Avg Score</p>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-950 rounded-lg p-4 text-center">
                                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">🔥</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">12 Streak</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Danger Zone */}
                <Card className="bg-red-50 dark:bg-red-950 border-2 border-red-200 dark:border-red-800 shadow-lg">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-red-900 dark:text-red-200 mb-4">⚠️ Danger Zone</h3>
                        <p className="text-red-800 dark:text-red-300 mb-6">Once you log out, you'll need to log back in to access your account.</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <Button 
                                onClick={handleLogout}
                                className="bg-red-600 hover:bg-red-700 text-white"
                            >
                                Logout
                            </Button>
                            <Button variant="outline">Delete Account</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;