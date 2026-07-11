const RecommendationEngine = {
    // Scoring logic for AI-like recommendations
    scoreDestination: (dest, preferences) => {
        let score = 0;
        const weights = {
            budget: 40,
            category: 30,
            weather: 20,
            rating: 10
        };

        // Budget match
        if (preferences.budget && dest.budget === preferences.budget) {
            score += weights.budget;
        }

        // Category/Interest match
        if (preferences.category && dest.category === preferences.category) {
            score += weights.category;
        }

        // Weather match
        if (preferences.weather && dest.weather === preferences.weather) {
            score += weights.weather;
        }

        // Rating influence (normalized)
        score += (dest.rating / 5) * weights.rating;

        return score;
    },

    getRecommendations: (preferences, limit = 10) => {
        return DESTINATIONS
            .map(dest => ({
                ...dest,
                matchScore: RecommendationEngine.scoreDestination(dest, preferences)
            }))
            .sort((a, b) => b.matchScore - a.matchScore)
            .slice(0, limit);
    },

    getExplanation: (dest, preferences) => {
        const reasons = [];
        if (dest.budget === preferences.budget) reasons.push(`${dest.budget} friendly`);
        if (dest.category === preferences.category) reasons.push(`${dest.category} destination`);
        if (dest.weather === preferences.weather) reasons.push(`${dest.weather} seasonal weather`);
        if (dest.rating >= 4.8) reasons.push(`Top rated by travelers`);

        return `Recommended because: ${reasons.join(', ')}.`;
    }
};
