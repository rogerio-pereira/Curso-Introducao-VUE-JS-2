<template>
    <div class="slider">
        <h3>{{titulo}}</h3>
        
        <!--Left Controll-->
        <span v-on:mouseover='scrollEsquerda' v-on:mouseout='clearScroll' class="handle handlePrev active">
            <i class="fa fa-caret-left" aria-hidden="true"></i>
        </span>

        <!--Content-->
        <div ref="scroller" class="row">
            <div class="row__inner">
                <filme 
                    v-for='filme in filmes'
                    v-bind:titulo='filme.titulo' 
                    v-bind:key='filme.id'
                    v-bind:imagem='filme.imagem'
                ></filme>
            </div>
        </div>

        <!--Right Controll-->
        <span v-on:mouseover='scrollDireita' v-on:mouseout='clearScroll' class="handle handleNext active">
            <i class="fa fa-caret-right" aria-hidden="true"></i>
        </span>
    </div>    
</template>

<script>

import Filme from "./Filme.vue";

export default {
    name: 'categoria',
    props:['titulo', 'filmes'],
    methods:{
        scrollDireita(){
            //Usando linq function para o this pegar o escopo da pagina inteira e nao da função
            this.intervalo = setInterval(() => { this.$refs.scroller.scrollLeft += 1 }  , 5);
        },
        scrollEsquerda(){
            const self = this;
            //Criado uma variavel self, que pega o escopo da pagina, e na função anonima
            //function() o self usa a pagina inteira, se usasse this, seria apenas dentro do
            //escopo da função
            this.intervalo = setInterval(function(){ self.$refs.scroller.scrollLeft -= 1 }  , 5);
        },
        clearScroll(){
            clearInterval(this.intervalo);
        }
    },
    components:
    {
        Filme
    }
}
</script>

<style lang='scss'> 
</style>