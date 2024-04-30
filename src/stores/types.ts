import { Ref } from 'vue';
import { ApiResponse } from '@/api/types';

/**
 * Error store types
 * */
export interface IError {
  hasError: boolean;
  message: string;
}

export interface ErrorStoreState {
  error: Ref<IError>;
}

export interface ErrorStoreActions {
  setError: (hasError: boolean, message: string) => void;
  clearError: () => void;
}

export type ErrorStore = ErrorStoreState & ErrorStoreActions;

/**
 * WordDefinition store types
 * */
export interface WordDefinitionStoreState {
  isLoading: Ref<boolean>;
  wordDefinitions: Ref<ApiResponse>;
  isWikiLoading: Ref<boolean>;
  wikiDefinition: Ref<string | undefined>;
}

export interface WordDefinitionStoreActions {
  fetchWordDefinition: (word: string) => Promise<void>;
  fetchWikiDefinition: (word: string) => Promise<void>;
}

export type WordDefinitionStore = WordDefinitionStoreState &
  WordDefinitionStoreActions;
