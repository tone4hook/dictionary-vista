<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card text-white bg-dark mt-3">
          <div class="card-header">Dictionary</div>
          <div class="card-body">
            <input
              type="text"
              class="form-control"
              id="word"
              placeholder="Start typing a word..."
              v-model="word"
            />
          </div>
        </div>
      </div>
      <div class="col-12">
        <word-definitions :word="word" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import WordDefinitions from '@/components/WordDefinitions.vue';

const word = ref('');
</script>
