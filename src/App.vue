<template>
    <div id="app">
        <NavigationBar ></NavigationBar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import NavigationBar from '@/components/NavigationBar.vue';
    import Footer from '@/components/Footer.vue';

    export default {
        name: 'App',
        components: {
            NavigationBar,
            Footer,
            // todotips
        }
    };
</script>

<style>
* {
  box-sizing: border-box;
}
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
html, body {
    height: 100%;
}
#app {
    position: relative;
    min-height: 100%;
    padding-bottom: 100px;
}

/* @media (max-width: 480px) {
   .courses_category {
     font-size: 10px;
   }
} */
</style>
