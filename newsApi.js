export async function fetchCategoryNews(category) {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=12&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }
    
    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    return [];
  }
}

// Optional: Add more API-related functions here
export async function fetchTopHeadlines() {
  // Can add other news fetching functions
}