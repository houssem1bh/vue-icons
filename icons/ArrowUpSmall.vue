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
      rx="8"
      :fill="shapeColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 8C12.2761 8 12.5 8.22386 12.5 8.5V15.5C12.5 15.7761 12.2761 16 12 16C11.7239 16 11.5 15.7761 11.5 15.5V8.5C11.5 8.22386 11.7239 8 12 8Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.6464 8.14645C11.8417 7.95118 12.1583 7.95118 12.3536 8.14645L15.8536 11.6464C16.0488 11.8417 16.0488 12.1583
       15.8536 12.3536C15.6583 12.5488 15.3417 12.5488 15.1464 12.3536L12 9.20711L8.85355 12.3536C8.65829 12.5488 8.34171
        12.5488 8.14645 12.3536C7.95118 12.1583 7.95118 11.8417 8.14645 11.6464L11.6464 8.14645Z"
      :fill="iconColor"
    />
  </svg>
</template>
<script>
export default {
  name: 'ArrowUpSmallIcon',
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
