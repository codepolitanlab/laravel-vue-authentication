<template>
    <div>
        <Navigation />
        <main class="py-4">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Navigation from "./Navigation"

export default {
    components: {
        Navigation
    }
}
</script>
