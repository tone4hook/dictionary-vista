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
    <div
      v-if="
        wordDefinitionStore.wordDefinitions &&
        wordDefinitionStore.wordDefinitions.length
      "
    >
      <div
        class="card text-white bg-dark mt-3"
        v-for="(wordDefinition, index) in wordDefinitionStore.wordDefinitions"
        :key="index"
      >
        <div class="card-header">Definition</div>
        <div class="card-body">
          <h4 class="card-title">{{ wordDefinition.word }}</h4>
          <p class="card-text">{{ wordDefinition.phonetic }}</p>
          <p class="card-text">{{ wordDefinition.origin }}</p>
          <div
            v-if="
              wordDefinition.phonetics &&
              wordDefinition.phonetics.length > 0 &&
              wordDefinition.phonetics[0].audio
            "
          >
            <audio controls :key="wordDefinition.phonetics[0].audio">
              <source
                :src="wordDefinition.phonetics[0].audio"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div v-for="(meaning, index) in wordDefinition.meanings" :key="index">
            <p class="card-text my-2 text-primary font-monospace">
              {{ meaning.partOfSpeech }}
            </p>
            <div
              v-for="(definition, index) in meaning.definitions"
              :key="index"
            >
              <p class="card-text fs-5">{{ definition.definition }}</p>
              <p class="card-text text-info fst-italic mt-1 mb-3">
                {{ definition.example }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="showNoDefinitions">
      <p class="fs-4">No definitions found</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed, defineProps } from 'vue';
import { debounce } from 'lodash';
import { useWordDefinitionStore } from '@/stores';
import Loading from '@/components/Loading.vue';

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
    if (newVal !== oldVal) {
      fetchDefinition();
    }
  },
  { immediate: true },
);
</script>
