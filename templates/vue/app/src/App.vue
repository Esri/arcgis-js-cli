<template>
    <div>
        <Header :app-title="title" />
        <WebMap />
    </div>
</template>

<script lang="ts">
import Header from './components/Header.vue';
import WebMap from './components/WebMap.vue';

import { title } from './config';

export default {
    name: 'App',
    components: { Header, WebMap },
    data: () => ({
        title
    })
};
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}
</style>
