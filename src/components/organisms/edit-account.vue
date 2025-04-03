<template>
  <div class="edit-container">
    <CircleUserRound class="logo-head" />
    <div class="edit-name">
      <p>First name & Last name</p>
      <input placeholder="Your name" />
    </div>
    <div class="edit-texId">
      <p>Tax ID</p>
      <input placeholder="Tax ID" />
    </div>
    <div class="edit-phone">
      <p>Phone number</p>
      <input placeholder="Your phone number" />
    </div>
    <div class="btn">
      <button class="save-btn">save</button>
      <button class="cancel-btn">cancel</button>
    </div>
  </div>
</template>

<script setup>
import { CircleUserRound } from "lucide-vue-next";
</script>

<style scoped>
.logo-head {
  width: 36px;
  height: 36px;
}
.edit-container {
  display: flex;
  width: 440px;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid #3c3c3c;
  background: #242424;
}

.edit-name,
.edit-texId,
.edit-phone {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
}
input {
  display: flex;
  height: 40px;
  width: 100%;
  padding: 10px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid #3c3c3c;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.btn {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
}
.save-btn {
  font-family: "Onest", sans-serif;
  display: flex;
  width: 100%;
  min-width: fit-content;
  height: fit-content;
  padding: 6px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: white;
  color: black;
  cursor: pointer;
}
.cancel-btn {
  font-family: "Onest", sans-serif;
  display: flex;
  flex-shrink: 1 0 0;
  width: 100%;
  min-width: fit-content;
  height: fit-content;
  padding: 6px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid white;
  cursor: pointer;
}
</style>
