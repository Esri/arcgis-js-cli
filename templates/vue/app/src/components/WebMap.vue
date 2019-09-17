<template>
    <div></div>
</template>

<script lang="ts">
export default {
    name: 'WebMap',
    async mounted() {
        const app = await import('../data/map');
        app.initialize(this.$el);
    }
};
</script>

<style lang="scss" scoped>
div {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}
</style>
