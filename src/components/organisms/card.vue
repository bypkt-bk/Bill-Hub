<template>
  <a class="card" :href="`/store/${store.id}`">
    <Pencil
      class="edit-icon z-10"
      @click.stop="editStore(store.id, $event)"
      aria-label="Edit store"
    />
    <Stores class="store-icon" />
    <h3>{{ store.name }}</h3>
    <div class="group">
      <Crown class="icon" />
      <span class="badge" v-for="owner in store.owner" :key="owner.id">{{
        getInitials(owner.name)
      }}</span>
    </div>
    <div class="group">
      <Users class="icon" />
      <span class="badge" v-for="admin in store.admin" :key="admin.id">
        {{ getInitials(admin.name) }}
      </span>
    </div>
    <div class="group">
      <Landmark class="icon" />
      <span class="amount">{{ store.revenue }}</span>
    </div>
  </a>
</template>

<script lang="ts" setup>
import {
  Store as Stores,
  Crown,
  Users,
  Landmark,
  Pencil,
} from "lucide-vue-next";
import { type Store } from "@/lib/shared";
import { defineProps } from "vue";

// Define the prop for the store
defineProps<{
  store: Store;
}>();

function getInitials(name: string): string {
  if (!name) return "";
  const nameParts = name.split(" ");
  return nameParts.map((part) => part.charAt(0).toUpperCase()).join("");
}

function editStore(id: number, event: Event) {
  event.preventDefault();
  window.location.href = `/edit/store/${id}`;
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
