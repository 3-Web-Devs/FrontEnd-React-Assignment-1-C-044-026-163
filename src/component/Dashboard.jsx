import { FileText, Clock, Users, Upload, FileUp, BarChart3, Settings, LogOut } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="bg-[#F7F3EE] min-h-screen text-[#3C2F2F]">
      {/* Header */}
      <header className="bg-[#c5a690] text-white p-6 flex justify-between items-center shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="w-6 h-6 text-white/90" />
          Dashboard
        </h1>
        <button className="bg-[#A88734] px-5 py-2 rounded-lg font-medium hover:bg-[#8B5E3C] transition">
          Convert New
        </button>
      </header>

      {/* Scrollable Main Content */}
      <main className="max-w-7xl mx-auto py-10 px-6 space-y-16">
        {/* Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-start justify-center hover:shadow-md transition">
            <FileText className="w-8 h-8 text-[#A88734] mb-3" />
            <h3 className="text-lg font-semibold">Total Conversions</h3>
            <p className="text-3xl font-bold mt-1">1,243</p>
            <p className="text-sm text-gray-500 mt-1">All-time conversions</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-start justify-center hover:shadow-md transition">
            <Clock className="w-8 h-8 text-[#A88734] mb-3" />
            <h3 className="text-lg font-semibold">Avg. Conversion Time</h3>
            <p className="text-3xl font-bold mt-1">2.1s</p>
            <p className="text-sm text-gray-500 mt-1">Average (last 7 days)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-start justify-center hover:shadow-md transition">
            <Users className="w-8 h-8 text-[#A88734] mb-3" />
            <h3 className="text-lg font-semibold">Active Users</h3>
            <p className="text-3xl font-bold mt-1">482</p>
            <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-6 text-[#6F4E37] flex items-center gap-2">
            <BarChart3 className="w-6 h-6" /> Recent Activity
          </h2>
          <ul className="space-y-4">
            <li className="flex justify-between border-b pb-2">
              <span className="font-medium">report.docx → PDF</span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span className="font-medium">slides.pptx → PDF</span>
              <span className="text-sm text-gray-500">1 day ago</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">notes.txt → DOCX</span>
              <span className="text-sm text-gray-500">3 days ago</span>
            </li>
          </ul>
        </section>

        {/* Quick Actions Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-6 text-[#6F4E37] flex items-center gap-2">
            <Upload className="w-6 h-6" /> Quick Actions
          </h2>
          <div className="flex flex-wrap gap-6">
            <button className="bg-[#A88734] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#8B5E3C] transition flex items-center gap-2">
              <FileUp className="w-5 h-5" /> Convert File
            </button>
            <button className="bg-[#6F4E37] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#5C3E2E] transition flex items-center gap-2">
              <Upload className="w-5 h-5" /> Upload New
            </button>
            <button className="bg-[#382110] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#2A1810] transition flex items-center gap-2">
              <Settings className="w-5 h-5" /> Export Report
            </button>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-2">Storage Usage</h3>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-[#A88734] h-3 rounded-full w-[36%]"></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">1.8 GB of 5 GB used</p>
          </div>
        </section>

        {/* Settings Preview Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition mb-10">
          <h2 className="text-2xl font-bold mb-6 text-[#6F4E37] flex items-center gap-2">
            <Settings className="w-6 h-6" /> Settings Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Profile Settings</h3>
              <p className="text-sm text-gray-600">
                Update your name, email, and password securely.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Conversion Preferences</h3>
              <p className="text-sm text-gray-600">
                Set your default output type and file storage behavior.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-600 py-6 border-t">
           Doc-Type-Converter — Fast • Secure • Reliable
        </footer>
      </main>
    </div>
  );
}
