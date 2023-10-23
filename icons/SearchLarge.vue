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
      d="M23 16C19.134 16 16 19.134 16 23C16 26.866 19.134 30 23 30C26.866 30 30 26.866 30 23C30 19.134 26.866 16 23 16ZM14
       23C14 18.0294 18.0294 14 23 14C27.9706 14 32 18.0294 32 23C32 27.9706 27.9706 32 23 32C18.0294 32 14 27.9706 14 23Z"
      fill="#5D587B"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27.9429 27.9429C28.3334 27.5524 28.9666 27.5524 29.3571 27.9429L33.7071 32.2929C34.0976 32.6834 34.0976 33.3166
       33.7071 33.7071C33.3166 34.0976 32.6834 34.0976 32.2929 33.7071L27.9429 29.3571C27.5524 28.9666 27.5524 28.3334
       27.9429 27.9429Z"
      fill="#5D587B"
    />
  </svg>
</template>

<script>
export default {
  name: 'SearchLargeIcon',
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
