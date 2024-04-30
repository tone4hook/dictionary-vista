import axios from 'axios';
import { ApiResponse, MediaWikiAPIResponse } from '@/api/types';

export async function getWordDefinition(
  word: string,
): Promise<ApiResponse | undefined> {
  try {
    const response = await axios.get<ApiResponse>(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getWikiDefinition(word: string): Promise<string> {
  try {
    const response = await axios.get<MediaWikiAPIResponse>(
      'https://en.wikipedia.org/w/api.php',
      {
        params: {
          action: 'query',
          prop: 'extracts',
          exintro: true,
          explaintext: true,
          titles: word,
          format: 'json',
          origin: '*',
        },
      },
    );

    const pages = response.data.query.pages;
    let extract: string | undefined;
    for (let pageId in pages) {
      extract = pages[pageId].extract;
    }

    if (extract === undefined) {
      throw new Error(`No Wikipedia page found for word "${word}"`);
    }

    return extract;
  } catch (error) {
    throw error;
  }
}
