<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${height} ${width}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      v-if="isShaped"
      :width="width"
      :height="height"
      rx="8"
      :fill="shapeColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 16C24.5523 16 25 16.4477 25 17V31C25 31.5523 24.5523 32 24 32C23.4477 32 23 31.5523 23 31V17C23 16.4477 23.4477 16 24 16Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.2929 16.2929C23.6834 15.9024 24.3166 15.9024 24.7071 16.2929L31.7071 23.2929C32.0976 23.6834 32.0976 24.3166 31.7071
       24.7071C31.3166 25.0976 30.6834 25.0976 30.2929 24.7071L24 18.4142L17.7071 24.7071C17.3166 25.0976 16.6834 25.0976 16.2929
        24.7071C15.9024 24.3166 15.9024 23.6834 16.2929 23.2929L23.2929 16.2929Z"
      :fill="iconColor"
    />
  </svg>
</template>
<script>
export default {
  name: 'ArrowUpLargeIcon',
  props: {
    height: {
      type: String,
      required: false,
      default: '48'
    },
    width: {
      type: String,
      required: false,
      default: '48'
    },
    isShaped: {
      type: Boolean,
      required: false,
      default: false
    },
    iconColor: {
      type: String,
      required: false,
      default: ''
    },
    shapeColor: {
      type: String,
      required: false,
      default: ''
    }
  }
};
</script>
