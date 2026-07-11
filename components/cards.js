const Cards = {
    createDestinationCard: (dest) => {
        return `
            <div class="group relative bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 card-hover border border-gray-100" data-aos="fade-up">
                <div class="relative h-72 w-full overflow-hidden">
                    <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <button class="absolute top-5 right-5 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-accent transition-all shadow-lg" onclick="event.preventDefault(); toggleFavorite(${dest.id})">
                        <i data-lucide="heart" class="w-5 h-5"></i>
                    </button>
                    
                    <div class="absolute top-5 left-5 px-4 py-1.5 bg-primary/90 backdrop-blur-md text-white text-[10px] font-black rounded-full uppercase tracking-[0.1em]">
                        ${dest.category}
                    </div>
                </div>
                
                <div class="p-8">
                    <div class="flex justify-between items-start mb-3">
                        <div>
                            <h3 class="text-xl font-extrabold text-dark group-hover:text-primary transition-colors leading-tight">${dest.name}</h3>
                            <p class="text-gray-400 text-sm font-bold mt-1 flex items-center gap-1">
                                <i data-lucide="map-pin" class="w-3 h-3"></i>
                                ${dest.city}, ${dest.country}
                            </p>
                        </div>
                        <div class="flex items-center gap-1 bg-yellow-50 px-2.5 py-1 rounded-xl">
                            <i data-lucide="star" class="w-4 h-4 text-yellow-500 fill-yellow-500"></i>
                            <span class="text-xs font-black text-yellow-700">${dest.rating}</span>
                        </div>
                    </div>
                    
                    <div class="mt-8 flex items-center justify-between border-t border-gray-50 pt-6">
                        <div>
                            <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Starting from</p>
                            <span class="text-2xl font-black text-dark">$${dest.price}</span>
                            <span class="text-gray-400 text-xs font-bold">/ person</span>
                        </div>
                        <a href="pages/destination.html?id=${dest.id}" class="w-12 h-12 bg-dark text-white rounded-2xl flex items-center justify-center hover:bg-primary transition-all shadow-lg shadow-gray-200">
                            <i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
};
