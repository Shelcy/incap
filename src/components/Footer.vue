<template>
    <footer>
        <div class=" footer row p-0 m-0">
            <div class="col-md-4 offset-md-2 offset-sm-0 align-self-center">
                <img class="imagenLogo" src="../assets/img/incapp.png" alt="" srcset="">
                <div>
                    <a class="m-2" v-for="(red, index) in redes" :key="index" v-bind:href="red.link" target="__blank"><i
                            v-bind:class="red.imagen"></i></a>

                </div>
            </div>
            <div class="col-md-4 my-3">
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fincapredoficial%2F&tabs=timeline&width=200&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="200" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> </div>

        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        components: {},
        data() {
            return {
                redes: [{
                        nombre: "Instagram",
                        link: "https://www.instagram.com/incapoficial/",
                        imagen: "fab fa-instagram-square",
                    },
                    {
                        nombre: "Facebook",
                        link: "https://www.facebook.com/incapredoficial",
                        imagen: "fab fa-facebook-square",
                    },
                    {
                        nombre: "Twitter",
                        link: "https://twitter.com/incap_oficial?lang=es",
                        imagen: "fab fa-twitter-square",
                    },
                    {
                        nombre: "Youtube",
                        link: "https://www.youtube.com/channel/UCwhslJOGMkRAI17RM7n7Ing",
                        imagen: "fab fa-youtube-square",
                    }
                ],
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: rgb(110, 233, 255);
        font-size: 4rem;

    }

    .footer {
        /* background-image: url("../assets/img/pentagono_gris.jpg"); */
        opacity: 1;

    }

    footer {
        background-color: rgba(0, 0, 0, 0.904)
            /* opacity: 0.2; */

    }

    .imagenLogo {
        width: 50%;
        height: auto;
    }
</style>