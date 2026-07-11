/**
 * Core App State Management for TravelAI
 * Handles all localStorage interactions and shared logic.
 */

const AppState = {
    // Initial Keys
    KEYS: {
        USER: 'travelai_user',
        FAVORITES: 'travelai_favorites',
        TRIPS: 'travelai_trips',
        BOOKINGS: 'travelai_bookings',
        THEME: 'travelai_theme',
        NOTIFICATIONS: 'travelai_notifications'
    },

    // --- User / Auth ---
    getUser: () => JSON.parse(localStorage.getItem(AppState.KEYS.USER)) || null,
    setUser: (userData) => localStorage.setItem(AppState.KEYS.USER, JSON.stringify(userData)),
    logout: () => {
        localStorage.removeItem(AppState.KEYS.USER);
        window.location.href = window.location.pathname.includes('/pages/') ? '../index.html' : 'index.html';
    },

    // --- Favorites ---
    getFavorites: () => JSON.parse(localStorage.getItem(AppState.KEYS.FAVORITES)) || [],
    toggleFavorite: (id) => {
        let favs = AppState.getFavorites();
        if (favs.includes(id)) {
            favs = favs.filter(favId => favId !== id);
        } else {
            favs.push(id);
            AppState.addNotification("Added to Favorites", "Destination has been saved.");
        }
        localStorage.setItem(AppState.KEYS.FAVORITES, JSON.stringify(favs));
        return favs;
    },

    // --- Trips / Planner ---
    getTrips: () => JSON.parse(localStorage.getItem(AppState.KEYS.TRIPS)) || [],
    saveTrip: (trip) => {
        const trips = AppState.getTrips();
        trips.push({ ...trip, id: Date.now() });
        localStorage.setItem(AppState.KEYS.TRIPS, JSON.stringify(trips));
        AppState.addNotification("Trip Saved", `Your itinerary for ${trip.title} is ready.`);
    },
    deleteTrip: (id) => {
        const trips = AppState.getTrips().filter(t => t.id !== id);
        localStorage.setItem(AppState.KEYS.TRIPS, JSON.stringify(trips));
    },

    // --- Bookings ---
    getBookings: () => JSON.parse(localStorage.getItem(AppState.KEYS.BOOKINGS)) || [],
    addBooking: (booking) => {
        const bookings = AppState.getBookings();
        bookings.push({ ...booking, id: Date.now(), date: new Date().toLocaleDateString() });
        localStorage.setItem(AppState.KEYS.BOOKINGS, JSON.stringify(bookings));
        AppState.addNotification("Booking Confirmed", `Reservation at ${booking.hotelName} confirmed.`);
    },

    // --- Notifications ---
    getNotifications: () => JSON.parse(localStorage.getItem(AppState.KEYS.NOTIFICATIONS)) || [],
    addNotification: (title, message) => {
        const notes = AppState.getNotifications();
        notes.unshift({ title, message, id: Date.now(), read: false, time: 'Just now' });
        localStorage.setItem(AppState.KEYS.NOTIFICATIONS, JSON.stringify(notes.slice(0, 10)));
        // Custom event for real-time UI updates
        window.dispatchEvent(new Event('notificationsUpdated'));
    },

    // --- Theme ---
    getTheme: () => localStorage.getItem(AppState.KEYS.THEME) || 'light',
    toggleTheme: () => {
        const current = AppState.getTheme();
        const next = current === 'light' ? 'dark' : 'light';
        localStorage.setItem(AppState.KEYS.THEME, next);
        document.documentElement.classList.toggle('dark', next === 'dark');
        return next;
    },

    // --- Analytics for Dashboard ---
    getAnalytics: () => {
        const favs = AppState.getFavorites();
        const trips = AppState.getTrips();
        const bookings = AppState.getBookings();
        
        return {
            totalFavs: favs.length,
            totalTrips: trips.length,
            totalBookings: bookings.length,
            recentActivity: [...trips, ...bookings].sort((a,b) => b.id - a.id).slice(0, 5)
        };
    }
};

// Auto-apply theme on load
if (AppState.getTheme() === 'dark') document.documentElement.classList.add('dark');
