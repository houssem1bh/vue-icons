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
      d="M8.5 8.5C8.22386 8.5 8 8.72386 8 9V16C8 16.2761 8.22386 16.5 8.5
       16.5H15.5C15.7761 16.5 16 16.2761 16 16V9C16 8.72386 15.7761 8.5 15.5
        8.5H8.5ZM7 9C7 8.17157 7.67157 7.5 8.5 7.5H15.5C16.3284 7.5 17 8.17157
         17 9V16C17 16.8284 16.3284 17.5 15.5 17.5H8.5C7.67157 17.5 7 16.8284 7
          16V9Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14 6.5C14.2761 6.5 14.5 6.72386 14.5 7V9C14.5 9.27614 14.2761 9.5 14 9.5C13.7239 9.5 13.5 9.27614 13.5 9V7C13.5 6.72386 13.7239 6.5 14 6.5Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 6.5C10.2761 6.5 10.5 6.72386 10.5 7V9C10.5 9.27614 10.2761 9.5 10 9.5C9.72386 9.5 9.5 9.27614 9.5 9V7C9.5 6.72386 9.72386 6.5 10 6.5Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 11C7 10.7239 7.22386 10.5 7.5 10.5H16.5C16.7761 10.5 17 10.7239 17 11C17 11.2761 16.7761 11.5 16.5 11.5H7.5C7.22386 11.5 7 11.2761 7 11Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.5 13C9.5 12.7239 9.72386 12.5 10 12.5H10.005C10.2811 12.5 10.505 12.7239 10.505 13C10.505
       13.2761 10.2811 13.5 10.005 13.5H10C9.72386 13.5 9.5 13.2761 9.5 13Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5 13C11.5 12.7239 11.7239 12.5 12 12.5H12.005C12.2811 12.5 12.505 12.7239 12.505 13C12.505
       13.2761 12.2811 13.5 12.005 13.5H12C11.7239 13.5 11.5 13.2761 11.5 13Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.5 13C13.5 12.7239 13.7239 12.5 14 12.5H14.005C14.2811 12.5 14.505 12.7239 14.505 13C14.505
       13.2761 14.2811 13.5 14.005 13.5H14C13.7239 13.5 13.5 13.2761 13.5 13Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.5 15C9.5 14.7239 9.72386 14.5 10 14.5H10.005C10.2811 14.5 10.505 14.7239 10.505 15C10.505
       15.2761 10.2811 15.5 10.005 15.5H10C9.72386 15.5 9.5 15.2761 9.5 15Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.5 15C11.5 14.7239 11.7239 14.5 12 14.5H12.005C12.2811 14.5 12.505 14.7239 12.505 15C12.505
       15.2761 12.2811 15.5 12.005 15.5H12C11.7239 15.5 11.5 15.2761 11.5 15Z"
      :fill="iconColor"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.5 15C13.5 14.7239 13.7239 14.5 14 14.5H14.005C14.2811 14.5 14.505 14.7239 14.505 15C14.505
       15.2761 14.2811 15.5 14.005 15.5H14C13.7239 15.5 13.5 15.2761 13.5 15Z"
      :fill="iconColor"
    />
  </svg>
</template>

<script>
export default {
  name: 'CalendarMediumComponent',
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
