<template>
  <div
    class="CautionMarkIcon"
    :style="{height: height, 'margin-left': marginLeft}"
  >
    <svg
      width="24"
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2898 2.85996L1.81978 17C1.64514 17.3024 1.55274 17.6453 1.55177
        17.9945C1.55079 18.3437 1.64127 18.6871 1.8142 18.9905C1.98714 19.2939
        2.2365 19.5467 2.53748 19.7238C2.83847 19.9009 3.18058 19.9961 3.52978
        20H20.4698C20.819 19.9961 21.1611 19.9009 21.4621 19.7238C21.7631 19.5467
        22.0124 19.2939 22.1854 18.9905C22.3583 18.6871 22.4488 18.3437 22.4478
        17.9945C22.4468 17.6453 22.3544 17.3024 22.1798 17L13.7098 2.85996C13.5315
        2.56607 13.2805 2.32308 12.981 2.15444C12.6814 1.98581 12.3435 1.89722 11.9998
        1.89722C11.656 1.89722 11.3181 1.98581 11.0186 2.15444C10.7191 2.32308 10.468
        2.56607 10.2898 2.85996Z"
        stroke="#C34652"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <div class="CautionMarkIcon-exclamationMark">
      <div
        :style="{ 'background-color': color }"
        class="CautionMarkIcon-vercialLine"
      />
      <div
        :style="{ 'background-color': color, border: `1px solid ${color}` }"
        class="CautionMarkIcon-point"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'CautionMarkIcon',
  props: {
    color: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    marginLeft: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
.CautionMarkIcon {
  display: flex;
  margin: auto;
}

.CautionMarkIcon-exclamationMark {
  display: flex;
  height: 18px;
  flex-direction: column;
  margin: auto;
  margin-left: -13px;
}

.CautionMarkIcon-vercialLine {
  height: 5px;
  margin-top: 7px;
}

.CautionMarkIcon-point {
  height: 1px;
  margin-top: 2px;
}
</style>
