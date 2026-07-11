const Navbar = {
    render: (activePage = 'home') => {
        const isSubPage = window.location.pathname.includes('/pages/');
        const pathPrefix = isSubPage ? '../' : '';
        const user = AppState.getUser();
        const notes = AppState.getNotifications();
        const unreadCount = notes.filter(n => !n.read).length;
        
        const navHTML = `
            <div class="container mx-auto">
                <div class="glass dark:dark-glass rounded-full px-8 py-4 flex items-center justify-between shadow-sm border border-white/30 dark:border-white/10">
                    <a href="${pathPrefix}index.html" class="text-2xl font-extrabold tracking-tighter flex items-center gap-2">
                        <span class="text-primary">TRAVEL</span><span class="text-accent">AI</span>
                    </a>

                    <div class="hidden lg:flex items-center space-x-8 font-semibold text-[15px]">
                        <a href="${pathPrefix}index.html" class="${activePage === 'home' ? 'text-primary' : 'text-dark dark:text-white'} hover:text-primary transition-colors">Home</a>
                        <a href="${pathPrefix}pages/destination.html" class="${activePage === 'destinations' ? 'text-primary' : 'text-dark dark:text-white'} hover:text-primary transition-colors">Destinations</a>
                        <a href="${pathPrefix}pages/hotels.html" class="${activePage === 'hotels' ? 'text-primary' : 'text-dark dark:text-white'} hover:text-primary transition-colors">Hotels</a>
                        <a href="${pathPrefix}pages/planner.html" class="${activePage === 'planner' ? 'text-primary' : 'text-dark dark:text-white'} hover:text-primary transition-colors">AI Planner</a>
                        <a href="${pathPrefix}pages/dashboard.html" class="${activePage === 'dashboard' ? 'text-primary' : 'text-dark dark:text-white'} hover:text-primary transition-colors">Dashboard</a>
                    </div>

                    <div class="flex items-center space-x-4">
                        <button onclick="AppState.toggleTheme()" class="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors text-dark dark:text-white">
                            <i data-lucide="moon" class="w-5 h-5 dark:hidden"></i>
                            <i data-lucide="sun" class="w-5 h-5 hidden dark:block"></i>
                        </button>
                        
                        <div class="relative">
                            <button onclick="Navbar.toggleNotifications()" class="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors text-dark dark:text-white relative">
                                <i data-lucide="bell" class="w-5 h-5"></i>
                                ${unreadCount > 0 ? `<span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-accent rounded-full border-2 border-white dark:border-dark"></span>` : ''}
                            </button>
                            <div id="notifications-dropdown" class="hidden absolute right-0 mt-4 w-80 glass dark:dark-glass rounded-3xl shadow-2xl border border-white/30 p-4 z-[200]">
                                <h4 class="font-black text-sm mb-4 uppercase tracking-widest px-2">Notifications</h4>
                                <div class="space-y-2 max-h-64 overflow-y-auto no-scrollbar">
                                    ${notes.length ? notes.map(n => `
                                        <div class="p-3 hover:bg-white/50 dark:hover:bg-white/5 rounded-2xl transition-all">
                                            <p class="font-black text-xs text-dark dark:text-white">${n.title}</p>
                                            <p class="text-[11px] text-gray-500 font-bold">${n.message}</p>
                                        </div>
                                    `).join('') : '<p class="text-center py-4 text-xs text-gray-400 font-bold">No new notifications</p>'}
                                </div>
                            </div>
                        </div>

                        ${user ? `
                            <div class="relative group">
                                <button class="flex items-center gap-3 bg-dark dark:bg-white text-white dark:text-dark pl-2 pr-5 py-2 rounded-full hover:scale-105 transition-transform">
                                    <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-white">${user.name.charAt(0)}</div>
                                    <span class="text-sm font-bold">${user.name.split(' ')[0]}</span>
                                </button>
                                <div class="hidden group-hover:block absolute right-0 mt-2 w-48 glass dark:dark-glass rounded-2xl shadow-xl p-2 z-[200]">
                                    <a href="${pathPrefix}pages/profile.html" class="block px-4 py-2 hover:bg-primary hover:text-white rounded-xl text-sm font-bold transition-all">Profile</a>
                                    <a href="${pathPrefix}pages/favorites.html" class="block px-4 py-2 hover:bg-primary hover:text-white rounded-xl text-sm font-bold transition-all">Favorites</a>
                                    <a href="${pathPrefix}pages/admin.html" class="block px-4 py-2 hover:bg-primary hover:text-white rounded-xl text-sm font-bold transition-all text-accent">Admin Panel</a>
                                    <hr class="my-2 border-white/20">
                                    <button onclick="AppState.logout()" class="w-full text-left px-4 py-2 hover:bg-accent hover:text-white rounded-xl text-sm font-bold transition-all">Logout</button>
                                </div>
                            </div>
                        ` : `
                            <button onclick="Auth.showModal()" class="bg-primary text-white px-6 py-2.5 rounded-full font-black text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                                Sign In
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;
        
        const navElement = document.getElementById('navbar');
        if (navElement) {
            navElement.innerHTML = navHTML;
            lucide.createIcons();
        }
    },

    toggleNotifications: () => {
        const dropdown = document.getElementById('notifications-dropdown');
        dropdown.classList.toggle('hidden');
    }
};

// Global Auth UI logic
const Auth = {
    showModal: () => {
        const modalHTML = `
            <div id="auth-modal" class="fixed inset-0 z-[1000] flex items-center justify-center p-6 page-fade-in">
                <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="Auth.hideModal()"></div>
                <div class="relative w-full max-w-md glass dark:dark-glass p-10 rounded-[40px] shadow-2xl border border-white/30">
                    <div id="auth-login" class="space-y-8">
                        <div class="text-center">
                            <h2 class="text-3xl font-black mb-2">Welcome <span class="text-primary">Back</span></h2>
                            <p class="text-gray-400 font-bold text-sm">Sign in to your premium travel brain.</p>
                        </div>
                        <div class="space-y-4">
                            <input type="email" id="login-email" placeholder="Email Address" class="w-full px-6 py-4 rounded-2xl bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary font-bold">
                            <input type="password" id="login-pass" placeholder="Password" class="w-full px-6 py-4 rounded-2xl bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary font-bold">
                        </div>
                        <button onclick="Auth.handleLogin()" class="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                            Sign In
                        </button>
                        <p class="text-center text-sm font-bold text-gray-400">
                            Don't have an account? <button onclick="Auth.toggleView()" class="text-primary">Register</button>
                        </p>
                    </div>

                    <div id="auth-register" class="hidden space-y-8">
                        <div class="text-center">
                            <h2 class="text-3xl font-black mb-2">Join <span class="text-primary">TravelAI</span></h2>
                            <p class="text-gray-400 font-bold text-sm">Start your luxury AI journey today.</p>
                        </div>
                        <div class="space-y-4">
                            <input type="text" id="reg-name" placeholder="Full Name" class="w-full px-6 py-4 rounded-2xl bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary font-bold">
                            <input type="email" id="reg-email" placeholder="Email Address" class="w-full px-6 py-4 rounded-2xl bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary font-bold">
                            <input type="password" id="reg-pass" placeholder="Password" class="w-full px-6 py-4 rounded-2xl bg-gray-100 dark:bg-white/5 border-none focus:ring-2 focus:ring-primary font-bold">
                        </div>
                        <button onclick="Auth.handleRegister()" class="w-full py-5 bg-primary text-white rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                            Create Account
                        </button>
                        <p class="text-center text-sm font-bold text-gray-400">
                            Already have an account? <button onclick="Auth.toggleView()" class="text-primary">Sign In</button>
                        </p>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    },
    hideModal: () => document.getElementById('auth-modal')?.remove(),
    toggleView: () => {
        document.getElementById('auth-login').classList.toggle('hidden');
        document.getElementById('auth-register').classList.toggle('hidden');
    },
    handleLogin: () => {
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-pass').value;
        if (email && pass) {
            AppState.setUser({ name: email.split('@')[0], email, id: Date.now() });
            AppState.addNotification("Welcome Back!", `Successfully signed in as ${email}`);
            Auth.hideModal();
            Navbar.render();
            // Refresh current page logic if needed
            if (typeof renderDashboard === 'function') renderDashboard();
        } else alert("Please fill in all fields.");
    },
    handleRegister: () => {
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const pass = document.getElementById('reg-pass').value;
        if (name && email && pass) {
            AppState.setUser({ name, email, id: Date.now() });
            AppState.addNotification("Welcome to TravelAI", "Your premium account is ready.");
            Auth.hideModal();
            Navbar.render();
        } else alert("Please fill in all fields.");
    }
};
