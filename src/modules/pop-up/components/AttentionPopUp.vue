<template>
  <div class="pop-up-content">
    <h1>Внимание</h1>

    <p
      v-for="(paragraph, index) of $store.state.popUp.attentionParagraphs"
      :key="index"
    >{{ paragraph }}</p>

    <button @click="$store.commit('popUp/close')">Понятно</button>
  </div>
</template>

<script>
export default {
  name: 'AttentionPopUp',
}
</script>
