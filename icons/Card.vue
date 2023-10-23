<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="1.5"
      width="23"
      height="21"
      rx="1.5"
      :stroke="color"
    />
    <path
      d="M1 17H23V21C23 21.5523 22.5523 22 22 22H2C1.44772 22 1 21.5523 1 21V17Z"
      :fill="color"
    />
  </svg>
</template>
<script>

export default ({
    name: 'CardIcon',
    props: {
    color: {
      type: String,
      required: true
    }
    }
});
</script>


