<template>
  <div class="navbar">
    <nav class="navigation1">
      <a class="nav-btn" href="/edit/account/1">
        <CircleUserRound />
        <p>Account</p>
      </a>
    </nav>
    <nav class="navigation2">
      <a class="nav-btn" href="/home/1">
        <Home />
        <p>Home</p>
      </a>
      <a class="nav-btn" href="/store/1">
        <Store />
        <p>Store</p>
      </a>
      <a class="nav-btn" href="/item/1">
        <Archive />
        <p>Item</p>
      </a>
      <a class="nav-btn" href="/dashboard/1">
        <ChartPie />
        <p>Dashboard</p>
      </a>
    </nav>
  </div>
</template>

<script setup>
import {
  Home,
  Archive,
  ChartPie,
  CircleUserRound,
  Store,
} from "lucide-vue-next";
</script>

<style>
.navbar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.navigation1 {
  display: flex;
  padding: 14px 14px;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid #3c3c3c;
  background: #242424;
}

.navigation2 {
  display: flex;
  padding: 28px 14px;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  gap: 20px;
  border-radius: 20px;
  border: 1px solid #3c3c3c;
  background: #242424;
}

.nav-btn {
  display: flex;
  width: 62px;
  height: 62px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
}
.nav-btn p {
  font-family: Onest;
  font-size: 12px;
}
</style>
