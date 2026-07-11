import pandas as pd
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import os

class RecommendationService:
    def __init__(self, data_path="backend/data/destinations.json"):
        self.data_path = data_path
        self.df = None
        self.tfidf_matrix = None
        self.vectorizer = TfidfVectorizer(stop_words='english')
        self.load_data()

    def load_data(self):
        if os.path.exists(self.data_path):
            with open(self.data_path, 'r') as f:
                data = json.load(f)
                self.df = pd.DataFrame(data)
                
                # Create a combined features column for recommendation
                self.df['combined_features'] = self.df.apply(
                    lambda x: f"{x['category']} {x['city']} {x['country']} {x['budget_level']} {x['weather_type']} {x['travel_type']} {' '.join(x['tags'])}", 
                    axis=1
                )
                
                # Fit and transform the TF-IDF vectorizer
                self.tfidf_matrix = self.vectorizer.fit_transform(self.df['combined_features'])
        else:
            print(f"Data path {self.data_path} does not exist.")

    def get_recommendations(self, user_preferences, top_n=10):
        """
        user_preferences: dict with keys like 'category', 'budget_level', 'weather_type', 'travel_type'
        """
        if self.df is None:
            return []

        # Create a search string from user preferences
        search_query = " ".join([str(v) for v in user_preferences.values()])
        
        # Transform the search query
        query_vec = self.vectorizer.transform([search_query])
        
        # Calculate cosine similarity
        cosine_sim = cosine_similarity(query_vec, self.tfidf_matrix)
        
        # Get top N indices
        sim_scores = list(enumerate(cosine_sim[0]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        top_indices = [i[0] for i in sim_scores[:top_n]]
        
        # Return top N destinations as dicts
        recommendations = self.df.iloc[top_indices].to_dict('records')
        
        # Add explanation for recommendation
        for rec in recommendations:
            reasons = []
            if rec['category'] == user_preferences.get('category'):
                reasons.append(f"Matches your interest in {rec['category']}")
            if rec['budget_level'] == user_preferences.get('budget_level'):
                reasons.append(f"Fits your {rec['budget_level']} budget")
            if rec['weather_type'] == user_preferences.get('weather_type'):
                reasons.append(f"Matches your weather preference for {rec['weather_type']}")
            
            rec['explanation'] = " | ".join(reasons) if reasons else "Based on your overall profile"
            
        return recommendations

recommendation_service = RecommendationService()
