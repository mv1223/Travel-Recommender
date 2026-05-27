// Global State
let searchResults = [];
let currentUser = null;
let userCoords = null;
let reviews = JSON.parse(localStorage.getItem('pmy_reviews')) || [];

// Initialization
document.addEventListener("DOMContentLoaded", () => {
    // Check for existing session
    const session = localStorage.getItem('pmy_session');
    if (session) {
        currentUser = JSON.parse(session);
        showMainApp();
    }

    // Form Submissions
    const searchForm = document.getElementById('official-search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearchSubmit);
    }

    renderReviews();
});

// --- AUTH LOGIC ---

function toggleAuthForms() {
    document.getElementById('auth-flip-inner').classList.toggle('do-flip');
}

function calculateAge() {
    const dobInput = document.getElementById('signup-dob');
    const ageInput = document.getElementById('signup-age');
    const dobValue = dobInput.value;

    if (!dobValue) {
        ageInput.value = '';
        return;
    }

    // Ensure we have a complete date (YYYY-MM-DD)
    // Most browsers won't return a value from type="date" until it's valid,
    // but we add a check for the year to be realistic (4 digits and > 1000)
    const dateParts = dobValue.split('-');
    if (dateParts.length < 3 || dateParts[0].length < 4 || parseInt(dateParts[0]) < 1900) {
        ageInput.value = '...';
        return;
    }

    const dob = new Date(dobValue);
    const today = new Date();
    
    if (dob > today) {
        ageInput.value = 'Invalid Date';
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    ageInput.value = age >= 0 ? age : 0;
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const dob = document.getElementById('signup-dob').value;
    const age = document.getElementById('signup-age').value;
    const gender = document.getElementById('signup-gender').value;
    const phone = document.getElementById('signup-phone').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (age === 'Invalid Date' || parseInt(age) < 0) {
        alert('Please provide a valid Date of Birth.');
        return;
    }

    const userData = { name, dob, age, gender, phone, email, password };
    
    // Store in users list
    let users = JSON.parse(localStorage.getItem('pmy_users')) || [];
    if (users.some(u => u.email === email)) {
        alert('Email already registered!');
        return;
    }
    users.push(userData);
    localStorage.setItem('pmy_users', JSON.stringify(users));
    
    // Auto-login
    currentUser = userData;
    localStorage.setItem('pmy_session', JSON.stringify(currentUser));
    alert('Account created successfully!');
    showMainApp();
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('pmy_users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = user;
        localStorage.setItem('pmy_session', JSON.stringify(currentUser));
        showMainApp();
    } else {
        alert('Invalid email or password!');
    }
}

function logout() {
    localStorage.removeItem('pmy_session');
    currentUser = null;
    location.reload();
}

function showMainApp() {
    document.getElementById('auth-section').classList.add('hidden');
    document.getElementById('app-header').classList.remove('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    
    updateProfileUI();
    enableLiveLocation();
    renderInitialDestinations();
}

// --- UI LOGIC ---

function showSection(sectionId) {
    // Hide all sections first
    const sections = ['hero', 'search-container', 'destinations', 'profile-section', 'reviews', 'services', 'about'];
    // In this simplified version, we just toggle profile
    const profile = document.getElementById('profile-section');
    if (sectionId === 'profile-section') {
        profile.classList.remove('hidden');
        document.getElementById('hero').classList.add('hidden');
        document.querySelector('.search-container').classList.add('hidden');
        document.getElementById('destinations').classList.add('hidden');
        profile.scrollIntoView({ behavior: 'smooth' });
    } else {
        profile.classList.add('hidden');
        document.getElementById('hero').classList.remove('hidden');
        document.querySelector('.search-container').classList.remove('hidden');
        document.getElementById('destinations').classList.remove('hidden');
    }
}

function updateProfileUI() {
    if (!currentUser) return;
    const container = document.getElementById('profile-details');
    container.innerHTML = `
        <div>
            <small style="color: var(--text-light); font-weight: 600; text-transform: uppercase;">Full Name</small>
            <p style="font-size: 1.2rem; font-weight: 700;">${currentUser.name}</p>
        </div>
        <div>
            <small style="color: var(--text-light); font-weight: 600; text-transform: uppercase;">Email Address</small>
            <p style="font-size: 1.2rem; font-weight: 700;">${currentUser.email}</p>
        </div>
        <div>
            <small style="color: var(--text-light); font-weight: 600; text-transform: uppercase;">Date of Birth</small>
            <p style="font-size: 1.2rem; font-weight: 700;">${currentUser.dob} (${currentUser.age} yrs)</p>
        </div>
        <div>
            <small style="color: var(--text-light); font-weight: 600; text-transform: uppercase;">Phone</small>
            <p style="font-size: 1.2rem; font-weight: 700;">${currentUser.phone}</p>
        </div>
        <div>
            <small style="color: var(--text-light); font-weight: 600; text-transform: uppercase;">Gender</small>
            <p style="font-size: 1.2rem; font-weight: 700;">${currentUser.gender}</p>
        </div>
    `;
}

// --- LOCATION LOGIC ---

function enableLiveLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            userCoords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            document.getElementById('current-coords').innerText = `Lat: ${userCoords.lat.toFixed(4)}, Lng: ${userCoords.lng.toFixed(4)}`;
            findNearestHub();
        }, (error) => {
            document.getElementById('current-coords').innerText = "Location access denied. Distance features disabled.";
        });
    }
}

function findNearestHub() {
    // Placeholder logic for nearest transportation hub
    // In a real app, this would query a database of station coordinates
    document.getElementById('nearest-info').innerText = "Nearest Hub: Visakhapatnam International Airport (approx. 12km)";
}

// --- REVIEW LOGIC ---

function handleReviewSubmit(e) {
    e.preventDefault();
    if (!currentUser) return alert('Please sign in to leave a review.');

    const rating = document.getElementById('review-rating').value;
    const text = document.getElementById('review-text').value;

    const newReview = {
        name: currentUser.name,
        rating: rating,
        text: text,
        date: new Date().toLocaleDateString()
    };

    reviews.unshift(newReview);
    localStorage.setItem('pmy_reviews', JSON.stringify(reviews));
    
    document.getElementById('review-text').value = '';
    renderReviews();
    alert('Thank you for your feedback!');
}

function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;
    
    if (reviews.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-light);">No reviews yet. Be the first to share your experience!</p>`;
        return;
    }

    container.innerHTML = reviews.map(r => `
        <div class="dest-card" style="padding: 1.5rem; border-top: 4px solid var(--primary);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h4 style="margin: 0;">${r.name}</h4>
                <span style="color: #fabb05; font-weight: 700;">${"⭐".repeat(r.rating)}</span>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-light); font-style: italic;">"${r.text}"</p>
            <div style="margin-top: 1rem; text-align: right; font-size: 0.75rem; color: var(--text-dim);">${r.date}</div>
        </div>
    `).join('');
}

// --- SEARCH & DESTINATION LOGIC (Improved) ---

function renderInitialDestinations() {
    const popular = places
        .sort((a, b) => b['Google review rating'] - a['Google review rating'])
        .slice(0, 8);
    renderGrid(popular, 3);
}

async function handleSearchSubmit(e) {
    e.preventDefault();
    
    const budget = parseInt(document.getElementById('budget').value);
    const type = document.getElementById('trip-type').value;
    const duration = parseInt(document.getElementById('duration').value);

    searchResults = places.filter(place => {
        const typeMatch = place.Significance === type;
        const estCost = (place['Entrance Fee in INR'] || 500) + (place['Google review rating'] * 2000);
        const totalEst = estCost * duration;
        const budgetMatch = totalEst <= budget * 1.5;
        return typeMatch && budgetMatch;
    }).sort((a, b) => b['Google review rating'] - a['Google review rating']).slice(0, 12);

    const grid = document.getElementById('dest-grid');
    const clearBtn = document.getElementById('clear-search');
    if (clearBtn) clearBtn.style.display = 'block';

    if (searchResults.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem;">
                <i class="fa-solid fa-circle-info" style="font-size: 3rem; color: var(--primary); margin-bottom: 1.5rem;"></i>
                <h3>No matching destinations.</h3>
                <p>Try broadening your criteria.</p>
            </div>
        `;
    } else {
        renderGrid(searchResults, duration);
    }
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
}

function clearSearch() {
    document.getElementById('official-search-form').reset();
    document.getElementById('clear-search').style.display = 'none';
    renderInitialDestinations();
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
}

function renderGrid(data, duration) {
    const grid = document.getElementById('dest-grid');
    grid.innerHTML = data.map(place => {
        const estCost = (place['Entrance Fee in INR'] || 500) + (place['Google review rating'] * 2000);
        const totalEst = Math.round(estCost * duration);
        
        // Dynamic image with better reliability prompts
        const imagePrompt = `${place.Name} ${place.City} heritage landmarks scenic travel`;
        const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(imagePrompt)}?width=400&height=300&nologo=true&seed=${place[""]}`;
        
        return `
            <div class="dest-card" onclick="openDetails(${place[""]}, ${totalEst})">
                <img src="${imageUrl}" 
                     class="dest-img" 
                     alt="${place.Name}"
                     onerror="this.src='https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=400&h=300&auto=format&fit=crop'">
                <div class="dest-content">
                    <div class="dest-name">${place.Name}</div>
                    <div class="dest-location">
                        <i class="fa-solid fa-location-dot"></i> ${place.City}, ${place.State}
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                        <div class="dest-price">₹${totalEst.toLocaleString()}</div>
                        <div style="font-size: 0.9rem; font-weight: 600; color: #fabb05;">
                            <i class="fa-solid fa-star"></i> ${place['Google review rating']}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function openDetails(id, totalEst) {
    const place = places.find(p => p[""] === id);
    if (!place) return;

    const modal = document.getElementById('dest-modal');
    const body = document.getElementById('modal-body');
    
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(place.Name + " landscape wide cinematic")}?width=800&height=400&nologo=true&seed=${place[""]}`;

    body.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 2rem;">
            <img src="${imageUrl}" 
                 style="width: 100%; height: 300px; object-fit: cover; border-radius: 4px;"
                 onerror="this.src='https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&h=400&auto=format&fit=crop'">
            <div>
                <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">${place.Name}</h2>
                <p style="color: var(--text-light); font-weight: 500; margin-bottom: 1.5rem;">${place.City}, ${place.State} | ${place.Zone} India</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="background: var(--secondary); padding: 1rem; border-radius: 4px;">
                        <small style="color: var(--text-light); font-weight: 600;">RECOMMENDED DURATION</small>
                        <p style="font-weight: 700;">${place['time needed to visit in hrs']} Hours (Visit)</p>
                    </div>
                    <div style="background: var(--secondary); padding: 1rem; border-radius: 4px;">
                        <small style="color: var(--text-light); font-weight: 600;">BEST TIME TO VISIT</small>
                        <p style="font-weight: 700;">${place['Best Time to visit'] || 'Oct - Mar'}</p>
                    </div>
                    <div style="background: var(--secondary); padding: 1rem; border-radius: 4px;">
                        <small style="color: var(--text-light); font-weight: 600;">ESTIMATED TOTAL COST</small>
                        <p style="font-weight: 700; color: var(--primary);">₹${totalEst.toLocaleString()}</p>
                    </div>
                </div>

                <h3 style="margin-bottom: 1rem;">Official Itinerary Suggestion</h3>
                <ul style="list-style: none; margin-bottom: 2rem;">
                    <li style="margin-bottom: 1rem; padding-left: 1.5rem; border-left: 3px solid var(--primary);">
                        <strong>Day 1:</strong> Arrival at ${place.City}. Local orientation and check-in.
                    </li>
                    <li style="margin-bottom: 1rem; padding-left: 1.5rem; border-left: 3px solid var(--primary);">
                        <strong>Day 2:</strong> Full day exploration of ${place.Name} and surrounding landmarks.
                    </li>
                    <li style="margin-bottom: 1rem; padding-left: 1.5rem; border-left: 3px solid var(--primary);">
                        <strong>Day 3:</strong> Morning leisure, artisanal shopping, and departure.
                    </li>
                </ul>
                
                <div style="display: flex; gap: 1rem; border-top: 1px solid var(--border); padding-top: 2rem;">
                    <button class="btn-search" style="flex: 1;" onclick="alert('Booking services coming soon!')">Book This Trip</button>
                    <button class="btn-login" style="border: 1px solid var(--primary); padding: 1rem 2rem;" onclick="closeModal()">Close</button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('dest-modal').classList.remove('active');
}

// Global modal closer
window.onclick = function(event) {
    const destModal = document.getElementById('dest-modal');
    const loginModal = document.getElementById('login-modal');
    if (event.target == destModal) {
        closeModal();
    }
    if (event.target == loginModal) {
        closeLoginModal();
    }
}

// --- ANIMATION LOGIC ---

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once revealed to only animate once
                // observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

// Ensure initScrollReveal is called on load
document.addEventListener("DOMContentLoaded", () => {
    initScrollReveal();
});

// --- 3D TILT EFFECT LOGIC ---
function initTiltEffect() {
    const cards = document.querySelectorAll('.dest-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;

            // Apply subtle rotation based on mouse position
            card.style.transform = `perspective(1000px) rotateX(${deltaY * -5}deg) rotateY(${deltaX * 5}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
}

// Re-init tilt effect after grid render
const originalRenderGrid = renderGrid;
renderGrid = function(data, duration) {
    originalRenderGrid(data, duration);
    // Use a slight timeout to ensure DOM is updated
    setTimeout(initTiltEffect, 50);
};

// Also init on first load if any static cards exist
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(initTiltEffect, 500); // Allow initial render to complete
});
