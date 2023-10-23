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
      d="M17 17C16.4477 17 16 17.4477 16 18V32C16 32.5523 16.4477 33 17 33H31C31.5523 33 32 32.5523 32 32V18C32 17.4477 31.5523
       17 31 17H17ZM14 18C14 16.3431 15.3431 15 17 15H31C32.6569 15 34 16.3431 34 18V32C34 33.6569 32.6569 35 31 35H17C15.3431 35
        14 33.6569 14 32V18Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M28 13C28.5523 13 29 13.4477 29 14V18C29 18.5523 28.5523 19 28 19C27.4477 19 27 18.5523 27 18V14C27 13.4477 27.4477 13 28 13Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 13C20.5523 13 21 13.4477 21 14V18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 22C14 21.4477 14.4477 21 15 21H33C33.5523 21 34 21.4477 34 22C34 22.5523 33.5523 23 33 23H15C14.4477 23 14 22.5523 14 22Z"
      :fill="iconColor"
    />
  </svg>
</template>

<script>
export default {
  name: 'CalendarLargeComponent',
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
