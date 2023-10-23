<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      v-if="isShaped"
      width="24"
      height="24"
      rx="4"
      :fill="shapeColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5 8C9.567 8 8 9.567 8 11.5C8 13.433 9.567 15 11.5 15C13.433 15 15 13.433 15 11.5C15 9.567 13.433 8 11.5 8ZM7
       11.5C7 9.01472 9.01472 7 11.5 7C13.9853 7 16 9.01472 16 11.5C16 13.9853 13.9853 16 11.5 16C9.01472 16 7 13.9853 7 11.5Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.9714 13.9714C14.1667 13.7762 14.4833 13.7762 14.6786 13.9714L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583
       16.8536 16.8536C16.6583 17.0488 16.3417 17.0488 16.1464 16.8536L13.9714 14.6786C13.7762 14.4833 13.7762 14.1667 13.9714 13.9714Z"
      :fill="iconColor"
    />
  </svg>
</template>

<script>
export default {
  name: 'SearchSmallIcon',
  props: {
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
