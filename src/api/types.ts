export interface Phonetic {
  text: string;
  audio?: string;
}

export interface Definition {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

export interface WordDefinition {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
}

export type ApiResponse = WordDefinition[];

/** Media Wiki API */
export interface Normalized {
  from: string;
  to: string;
}

export interface Page {
  pageid: number;
  ns: number;
  title: string;
  extract: string;
}

export interface Pages {
  [key: string]: Page;
}

export interface Query {
  normalized: Normalized[];
  pages: Pages;
}

export interface Data {
  batchcomplete: string;
  query: Query;
}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export type MediaWikiAPIResponse = Data;
