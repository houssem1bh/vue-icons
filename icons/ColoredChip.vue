<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="8"
      cy="8"
      r="8"
      :fill="color"
    />
    <circle
      cx="8"
      cy="8"
      r="7.5"
      :stroke="'#14131b'"
      stroke-opacity="0.2"
    />
  </svg>
</template>
<script>
export default {
  name: 'ColoredChipIcon',
  props: {
    color: {
      type: String,
      required: false,
      default: 'none'
    }
  }
};
</script>


