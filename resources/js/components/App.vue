<template>
    <div>
        <router-link :to="{ name: 'login'}">Login</router-link>
        <router-link :to="{ name: 'register'}">Register</router-link>
        <main class="py-4">
            <router-view></router-view>
        </main>
    </div>
</template>
