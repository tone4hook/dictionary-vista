import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getWikiDefinition, getWordDefinition } from '@/api/requests';
import { ApiResponse } from '@/api/types';
import { ErrorStore, WordDefinitionStore } from '@/stores/types';

export const useWordDefinitionStore = defineStore<
  'wordDefinition',
  WordDefinitionStore
>('wordDefinition', () => {
  const errorStore = ref<ErrorStore | undefined>(undefined);

  const isLoading = ref(false);
  const wordDefinitions = ref<ApiResponse>([]);

  const isWikiLoading = ref(false);
  const wikiDefinition = ref<string | undefined>(undefined);

  async function handleError(error: any) {
    const { useErrorStore } = await import('currency_vista/ErrorStore');
    errorStore.value = useErrorStore();
    const errorMessage =
      error.response?.data?.message || error.message || 'An error occurred';
    console.log('From: @remote | calling @host setError action.');
    errorStore.value?.setError(true, errorMessage);
  }

  async function fetchWordDefinition(word: string) {
    isLoading.value = true;
    try {
      const response = await getWordDefinition(word);
      if (!response || response.length === 0) {
        throw new Error('Failed to fetch word definition');
      }
      wordDefinitions.value = response;
    } catch (error) {
      if ((error as any).response && (error as any).response.status === 404) {
        wordDefinitions.value = [];
      } else {
        handleError(error);
      }
    } finally {
      isLoading.value = false;
    }
  }

  async function fetchWikiDefinition(word: string) {
    isWikiLoading.value = true;
    try {
      const response = await getWikiDefinition(word);
      wikiDefinition.value = response;
    } catch (error) {
      handleError(error);
    } finally {
      isWikiLoading.value = false;
    }
  }

  return {
    isLoading,
    wordDefinitions,
    isWikiLoading,
    wikiDefinition,
    fetchWordDefinition,
    fetchWikiDefinition,
  };
});
