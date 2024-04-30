<template>
  <div>
    <div
      v-if="wordDefinitionStore.isLoading"
      class="card text-white bg-dark mt-3"
      style="min-height: 350px"
    >
      <div class="card-header">Definition</div>
      <div class="card-body">
        <Loading :isLoading="wordDefinitionStore.isLoading" />
      </div>
    </div>
    <dictionary-card
      :show-no-definitions="showNoDefinitions"
      :word-definitions="wordDefinitionStore.wordDefinitions"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed, defineProps } from 'vue';
import { debounce } from 'lodash';
import { useWordDefinitionStore } from '@/stores';
import Loading from '@/components/Loading.vue';
import DictionaryCard from '@/components/DictionaryCard.vue';

interface Props {
  word: string;
}

const props = defineProps<Props>();

const wordDefinitionStore = useWordDefinitionStore();

const isSearchCompleted = ref(false);

const showNoDefinitions = computed(() => {
  return Boolean(
    isSearchCompleted.value &&
      props.word &&
      props.word.trim() !== '' &&
      !wordDefinitionStore.isLoading &&
      wordDefinitionStore.wordDefinitions.length === 0,
  );
});

const fetchDefinition = debounce(async () => {
  if (props.word) {
    isSearchCompleted.value = false;
    await wordDefinitionStore.fetchWordDefinition(props.word);
    isSearchCompleted.value = true;
  }
}, 500);

onMounted(fetchDefinition);

watch(
  () => props.word,
  (newVal, oldVal) => {
    console.log('word', newVal, oldVal);
    if (newVal !== oldVal) {
      fetchDefinition();
    }
  },
  { immediate: true },
);
</script>
