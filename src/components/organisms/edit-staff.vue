<template>
  <div class="edit-container">
    <ContactRound class="logo-head" />
    <div class="edit-owner">
      <div class="header-owner">
        <Crown />
        <p>Owner</p>
      </div>
      <select class="owner" placeholder="Owner">
        <option>Banyaphon Kongtham</option>
      </select>
    </div>
    <div class="edit-admin">
      <div class="header-admin">
        <Users />
        <p>Admin</p>
      </div>
      <select class="admin" placeholder="Admin">
        <option>Banyaphon Kongtham</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { Crown, Users, ContactRound } from "lucide-vue-next";
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
.header-owner,
.header-admin {
  display: flex;
  align-items: center;
  gap: 8px;
}
.edit-owner,
.edit-admin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
}
.owner,
.admin {
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
</style>
