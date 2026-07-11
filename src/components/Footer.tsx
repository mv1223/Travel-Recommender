import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-extrabold mb-6">
              Travel<span className="text-blue-500">AI</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm leading-relaxed">
              Your AI-powered travel companion. Discover amazing destinations, plan perfect itineraries, and make every trip unforgettable.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">Company</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li><Link href="/about" className="hover:text-blue-500 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5">Explore</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li><Link href="/destinations" className="hover:text-blue-500 transition-colors">Destinations</Link></li>
              <li><Link href="/planner" className="hover:text-blue-500 transition-colors">AI Planner</Link></li>
              <li><Link href="/community" className="hover:text-blue-500 transition-colors">Community</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5">Support</h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Help Center</Link></li>
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400 text-sm">
          &copy; 2026 TravelAI Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
