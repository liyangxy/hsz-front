<template>
    <div id="home_page">
        <!-- <NavigationBar ></NavigationBar> -->
        <Content ></Content>
        <!-- <router-view></router-view>
        <Footer></Footer> -->
    </div>
</template>

<script>
    // import NavigationBar from '@/components/NavigationBar.vue';
    import Content from '@/components/Content.vue';
    // import Footer from '@/components/Footer.vue';
    // import todotips from '@/components/BaseTodoTips.vue';

    export default {
        name: 'Home',
        components: {
            // NavigationBar,
            Content,
            // Footer,
            // todotips
        }
    };
</script>
