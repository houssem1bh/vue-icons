<template>
  <svg
    width="10"
    :height="height"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="5"
      cy="5"
      r="4"
      stroke="black"
      stroke-opacity="0.4"
      stroke-width="2"
    />
  </svg>
</template>
<script>
export default {
  name: 'ChipIcon',
  props: {
    height: {
      type: String,
      required: true
    }
  }
};
</script>

