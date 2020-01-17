<template>
    <div id="home_page">
        <NavigationBar ></NavigationBar>
        <Content ></Content>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavigationBar from '@/components/NavigationBar.vue';
    import Content from '@/components/Content.vue';
    // import BaseToTop from '@/components/BaseToTop.vue';
    // import todotips from '@/components/BaseTodoTips.vue';

    export default {
        name: 'Home',
        components: {
            NavigationBar,
            Content,
            // BaseToTop,
            // todotips
        }
    };
</script>
