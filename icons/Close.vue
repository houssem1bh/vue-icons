<template>
  <svg
    :width="iconWidth"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      :stroke="stroke"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6L18 18"
      :stroke="stroke"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
  export default {
    name: 'CloseIcon',
    props: {
      stroke: {
        type: String,
        default: 'black'
      },
      iconWidth: {
        type: String,
        default: '24'
      }
    }
  };
</script>
