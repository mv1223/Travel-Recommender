// Core App Initialization for TravelAI
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // 1. Render Navigation
    Navbar.render('home');

    // 2. Setup Theme
    const theme = AppState.getTheme();
    document.documentElement.classList.toggle('dark', theme === 'dark');

    // 3. Render Trending Destinations
    renderTrending();

    // 4. Setup Hero Search
    setupHeroSearch();

    // 5. Initialize Icons
    lucide.createIcons();

    // 6. Listen for Notifications
    window.addEventListener('notificationsUpdated', () => {
        Navbar.render('home');
    });
}

function renderTrending() {
    const trendingGrid = document.getElementById('trending-grid');
    if (!trendingGrid) return;

    // Filter top 4 trending from the global DESTINATIONS array (loaded from data/destinations.js)
    const trending = DESTINATIONS.filter(d => d.isTrending).slice(0, 4);
    
    trendingGrid.innerHTML = trending.map(dest => Cards.createDestinationCard(dest)).join('');
    lucide.createIcons();
}

function setupHeroSearch() {
    const searchContainer = document.getElementById('search-container');
    if (!searchContainer) return;

    const locationInput = searchContainer.querySelector('input[placeholder="Where are you going?"]');
    const searchBtn = searchContainer.querySelector('button');

    searchBtn.addEventListener('click', () => {
        const query = locationInput.value.trim();
        if (query) {
            window.location.href = `pages/destination.html?search=${encodeURIComponent(query)}`;
        } else {
            // If empty, just go to destinations
            window.location.href = `pages/destination.html`;
        }
    });

    // Enter key support
    locationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchBtn.click();
    });
}

/**
 * Global Helper for Favorite Toggle (used by Cards)
 */
window.toggleFavorite = (id) => {
    const user = AppState.getUser();
    if (!user) {
        Auth.showModal();
        return;
    }
    
    AppState.toggleFavorite(id);
    
    // Update UI on current page if needed
    if (typeof renderFavorites === 'function') renderFavorites();
    if (typeof renderTrending === 'function') renderTrending();
    if (typeof renderDestinations === 'function') renderDestinations();
};

/**
 * Global Helper for Booking (used by Cards/Details)
 */
window.openBooking = (id, type = 'destination') => {
    const user = AppState.getUser();
    if (!user) {
        Auth.showModal();
        return;
    }

    const item = type === 'destination' 
        ? DESTINATIONS.find(d => d.id === id) 
        : HOTELS.find(h => h.id === id);

    const bookingModalHTML = `
        <div id="booking-modal" class="fixed inset-0 z-[1000] flex items-center justify-center p-6 page-fade-in">
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="this.parentElement.remove()"></div>
            <div class="relative w-full max-w-2xl glass dark:dark-glass p-12 rounded-[40px] shadow-2xl border border-white/30">
                <h2 class="text-4xl font-black mb-4">Book Your <span class="text-primary">Journey</span></h2>
                <p class="text-gray-500 font-bold mb-8 uppercase tracking-widest text-xs">Reservations for ${item.name}</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div class="space-y-4">
                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Travel Dates</label>
                        <input type="date" class="w-full px-6 py-4 rounded-2xl bg-gray-100 dark:bg-white/5 border-none font-bold">
                    </div>
                    <div class="space-y-4">
                        <label class="text-xs font-black text-gray-400 uppercase tracking-widest">Travelers</label>
                        <select class="w-full px-6 py-4 rounded-2xl bg-gray-100 dark:bg-white/5 border-none font-bold">
                            <option>1 Adult</option>
                            <option selected>2 Adults</option>
                            <option>4 Adults</option>
                        </select>
                    </div>
                </div>

                <div class="bg-primary/5 p-6 rounded-3xl mb-10">
                    <div class="flex justify-between items-center mb-2">
                        <span class="font-bold text-gray-500">Base Price</span>
                        <span class="font-black">$${item.price}</span>
                    </div>
                    <div class="flex justify-between items-center mb-4 pb-4 border-b border-primary/10">
                        <span class="font-bold text-gray-500">Service Fee</span>
                        <span class="font-black">$45</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-xl font-black">Total</span>
                        <span class="text-2xl font-black text-primary">$${parseInt(item.price) + 45}</span>
                    </div>
                </div>

                <button onclick="confirmBooking('${item.name}')" class="w-full py-6 bg-primary text-white rounded-[24px] font-black text-xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                    Confirm Reservation
                </button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', bookingModalHTML);
};

window.confirmBooking = (name) => {
    AppState.addBooking({ hotelName: name, status: 'Confirmed' });
    document.getElementById('booking-modal').remove();
    alert(`Success! Your reservation for ${name} has been confirmed. Check your dashboard.`);
};
