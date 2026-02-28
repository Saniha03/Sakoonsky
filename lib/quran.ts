// lib/quran.ts
import axios from 'axios';

interface QuranMatch {
  number: number;
  text: string;
  edition: { name: string; englishName: string };
  surah: { number: number; englishName: string; name: string };
  numberInSurah: number;
}

export async function searchQuran(keyword: string): Promise<QuranMatch[]> {
  if (!keyword.trim()) return [];

  try {
    // Using AlQuran.cloud search endpoint
    // Searches in English translations by default (e.g., Asad)
    // You can change to specific edition like 'en.asad' or add Arabic support later
    const response = await axios.get(
      `http://api.alquran.cloud/v1/search/${encodeURIComponent(keyword)}/all/en.asad`
    );

    const data = response.data.data;
    if (data && data.matches) {
      return data.matches as QuranMatch[];
    }
    return [];
  } catch (error) {
    console.error('Quran search error:', error);
    return [];
  }
}