<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e: MouseEvent) {
            e.preventDefault();

            const href = this.getAttribute('href');
            if (href) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
</script>

<template>
    <div class="top-item">
        <a href="#" class="logo"><img src="@/app/assets/images/logo.png" alt=""></a>
        <span class="years">1950-1980ГГ</span>
        <img src="@/app/assets/images/map.png" alt="map" class="map">
        <img src="@/app/assets/images/museum.png" alt="museum" class="museum">
        <nav>
            <ul>
                <li><a href="#chronology">Хронология</a></li>
                <li><a href="#archive">Архивные кадры</a></li>
                <li><a href="#collection">Коллекция</a></li>
                <li><a href="#epoch">Быт эпохи</a></li>
                <li><a href="#person">Персоналии</a></li>
            </ul>
        </nav>
        <div class="title-wrapper">
            <h2>нельзя допустить Перерыва в связи</h2>
            <h2>времен и поколений, это предаст</h2>
            <h2>забвению дела предков</h2>
        </div>
        <p class="description">История государства, складывалась и складывается из больших и малых дел своих граждан. Посему каждый из нас своими повседневными делами, заботами, выполнением гражданского долга создает историю своего рода, семьи, селения, историю Родины.</p>
    </div>
</template>

<style scoped>
    .top-item{
        height: 1000rem;
        position: relative;
        .logo{
            position: absolute; 
            top: 0;
            left: 100rem;

            img{
                width: 198rem;
            }
        }
        .years{
            position: absolute;
            top: 162rem;
            left: 847.65rem;
            font-size: 124rem;
            line-height: 29.05rem;
            opacity: 0.2;
            font-family: var(--font-durik);
        }
        nav{
            position: absolute;
            top: 32rem;
            right: 100rem;
            ul{
                width: 904rem;
                display: flex;
                justify-content: space-between;
                li{
                    a{
                        font-size: 24rem;
                        line-height: 29.05rem;
                    }
                }
            }
        }
        .map{
            position: absolute;
            top: 40rem;
            left: 80rem;
            width: 823.29rem;
        }
        .museum{
            position: absolute;
            top: 169.51rem;
            right: 107.84rem;
            width: 1265.27rem;
        }
        .title-wrapper{
            position: absolute;
            top: 675rem;
            left: 538rem;
            h2{
                font-family: var(--font-durik);
                font-size: 64rem;
                line-height: 70.4rem;
                text-transform: uppercase;
            }
            h2:nth-child(2){
                margin-left: 196rem;
            }
            h2:nth-child(3){
                margin-left: 146rem;
            }
        }
        .description{
            position: absolute;
            top: 932rem;
            right: 100rem;
            width: 844rem;
            font-size: 24rem;
            line-height: 29.05rem;
        }   
    }
</style>