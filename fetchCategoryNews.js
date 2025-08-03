export async function fetchCategoryNews(category) {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    
    console.log('API Response Status:', res.status); // Add this
    
    const data = await res.json();
    console.log('API Data:', data); // Add this
    
    if (data.status === "error") {
      console.error('API Error:', data.message);
      return [];
    }
    
    return data.articles || [];
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    return [];
  }
}