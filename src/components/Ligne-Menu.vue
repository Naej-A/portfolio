<template>
  <div>
    <a href="{{link}}">
      <p class="text-secondary text-sm hover:decoration-action hover:underline">
        <slot>default value</slot>
      </p>
    </a>
  </div>
</template>

<script>
export default {
  name: "Ligne-Menu",
  props: {
    link: {
      default:"/"
    }
  }
}
</script>

<style scoped>

</style>