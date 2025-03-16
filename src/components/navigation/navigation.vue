<script setup>
import { House, Trash2, Store, Archive, LayoutDashboard, User, Settings } from 'lucide-vue-next';

function HomePage() {
  window.location.href = '/home/1';
}

function StorePage() {
  window.location.href = '/store/1';
}

function StoragePage() {
  window.location.href = '/storage/1';
}
</script>

<template>
    <div id="navbar">
        <div id="navbar-container">
            <div id="nav-button" @click="HomePage()">
                <House />
                <p>Home</p>
            </div>
            <div id="nav-button" @click="StorePage()">
                <store />
                <p>store</p>
            </div>
            <div id="nav-button" @click="StoragePage()">
                <Archive />
                <p>Items</p>
            </div>
            <div id="nav-button">
                <LayoutDashboard />
                <p>Report</p>
            </div>
            <div id="nav-button">
                <Trash2 />
                <p>Trash</p>
            </div>
        </div>

        <div id="navbar-container">
            <div id="nav-button">
                <User />
                <p>Profile</p>
            </div>
            <div id="nav-button">
                <Settings />
                <p>Setting</p>
            </div>
        </div>
    </div>
</template>

<style>
#navbar {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

#navbar-container {
    display: flex;
    padding: 28px 14px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border-radius: 20px;
    border: 1px solid var(--gray-200, #E5E7EB);
    background: var(--white, #FFF);
}

#nav-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
}

p {
    font-family: monospace;
    font-size: 14px;
}
</style>