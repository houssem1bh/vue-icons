<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="5"
      width="11"
      height="6"
      rx="3"
      :fill="color"
    />
    <rect
      x="14"
      y="5"
      width="10"
      height="6"
      rx="3"
      :fill="color"
    />
    <rect
      y="13"
      width="11"
      height="6"
      rx="3"
      :fill="color"
    />
    <rect
      x="14"
      y="13"
      width="10"
      height="6"
      rx="3"
      :fill="color"
    />
  </svg>
</template>
<script>

export default ({
    name: 'FieldsIcon',
    props: {
    color: {
      type: String,
      required: true
    }
    }
});
</script>


