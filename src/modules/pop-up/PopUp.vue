<template>
  <div class="pop-up">
    <component :is="$store.state.popUp.name"/>
  </div>
</template>

<script>
import AttentionPopUp from '@pop-up/components/AttentionPopUp'

export default {
  name: 'PopUp',
  components: {
    AttentionPopUp,
  },
}
</script>
