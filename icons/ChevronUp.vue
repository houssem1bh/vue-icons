<template>
  <div>
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :style="iconStyle"
    >
      <path
        d="M13 7L7 1L1 7"
        :stroke="stroke"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>
<script>
export default {
  name: 'ChevronUpIcon',
  props: {
    stroke: {
      type: String,
      default: 'black'
    },
    iconStyle: {
      type: String,
      required: false,
      default: ''
    }
  }
};
</script>


