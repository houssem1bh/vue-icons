<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M21 4.96638L17 4.99166V4.00006C17 2.31435 15.7459 1.02527 14.1059
      1.02527L9.89412 1.02521C8.25412 1.02521 7 2.31428 7 4V4.99159L2.96471
      4.96638C2.38588 4.96638 2 5.36302 2 5.95798C2 6.55294 2.38588 7 2.96471
      7H4V20C4 21.6857 5.36 22.8151 7 22.8151H17C18.64 22.8151 20 21.6857 20
      20V7H21C21.5788 7 21.9647 6.55294 21.9647 5.95798C21.9647 5.36302 21.5788
      4.96638 21 4.96638ZM9 4.00006C9 3.40006 9.4 3.00006 10 3.00006H14C14.6
      3.00006 15 3.40006 15 4.00006V5.00006H9V4.00006ZM18 20C18 20.6 17.6 21
      17 21H7C6.4 21 6 20.6 6 20V7H18V20ZM11 11V17C11 17.6 10.6 18 10 18C9.4
      18 9 17.6 9 17V11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11ZM15 11V17C15
      17.6 14.6 18 14 18C13.4 18 13 17.6 13 17V11C13 10.4 13.4 10 14 10C14.6
      10 15 10.4 15 11Z"
      :fill="color"
    />
  </svg>
</template>
<script>

export default ({
    name: 'SendToTrashIcon',
    props: {
    color: {
      type: String,
      required: true
    }
    }
});
</script>


