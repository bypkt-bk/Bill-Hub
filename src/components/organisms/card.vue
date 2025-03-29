<template>
  <a class="card" href="/store/1">
    <Pencil class="edit-icon" @click.stop="editStore" />
    <Store class="store-icon" />
    <h3>Rungcharuen</h3>
    <div class="group">
      <Crown class="icon" />
      <span class="badge">BK</span>
      <span class="badge">PP</span>
    </div>
    <div class="group">
      <Users class="icon" />
      <span class="badge">AA</span>
      <span class="badge">BB</span>
      <span class="badge">CC</span>
      <span class="badge">+10</span>
    </div>
    <div class="group">
      <Landmark class="icon" />
      <span class="amount">100,000,000</span>
    </div>
  </a>
</template>

<script setup>
import { Store, Crown, Users, Landmark, Pencil } from "lucide-vue-next";
function editStore(event) {
  event.preventDefault();
  window.location.href = "/edit/1";
}
</script>

<style scoped>
.card {
  display: inline-flex;
  padding: 20px 34px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid #707070;
  background: #434343;
  position: relative;
  cursor: pointer;
}

h3 {
  color: white;
  font-family: Righteous;
  font-size: 18px;
}

.group {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}
.store-icon {
  width: 36px;
  height: 36px;
}
.edit-icon {
  cursor: pointer;
  width: 16px;
  height: 16px;
  position: absolute;
  right: 15.673px;
  top: 16.611px;
}

.badge {
  display: flex;
  width: 24px;
  height: 24px;
  padding: 5px 4px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #707070;
  background: white;
  color: black;
  font-family: Onest;
  font-size: 12px;
}

.amount {
  color: white;
  text-align: center;
  font-family: Onest;
  font-size: 16px;
}
</style>
