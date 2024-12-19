<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { getHistoryPeriods } from '@/shared/api';

    const historyPeriods = ref([
        {
            year: '',
            description: ''
        },
        {
            year: '',
            description: ''
        },
        {
            year: '',
            description: ''
        },
        {
            year: '',
            description: ''
        }
    ]);

    onMounted(async () => {
        historyPeriods.value = await getHistoryPeriods();
    })
</script>

<template>
    <div class="chronology-item">
        <div class="title">
            <h2>ДИВЕЕВСКИЙ РАЙОН</h2>
            <h2>в 50х-80х годах</h2>
        </div>
        <div class="date date-1">
            <span>{{ historyPeriods[0].year }}</span>
            <p>{{ historyPeriods[0].description }}</p>
        </div>
        <div class="date date-2">
            <span>{{ historyPeriods[1].year }}</span>
            <p>{{ historyPeriods[1].description }}</p>
        </div>
        <div class="date date-3">
            <span>{{ historyPeriods[2].year }}</span>
            <p>{{ historyPeriods[2].description }}</p>
        </div>
        <div class="date date-4">
            <span>{{ historyPeriods[3].year }}</span>
            <p>{{ historyPeriods[3].description }}</p>
        </div>
    </div>
</template>

<style>
    .chronology-item{
        background: url('/chronology-bg.png') center center / cover no-repeat;
        width: 100%;
        height: 1301rem;
        padding: 273rem 0;
        position: relative;

        .title{
            background-color: var(--black);
            padding: 25rem 30rem 15rem 100rem;
            width: 652rem;
            height: 147rem;
            clip-path: polygon(0 0,100% 0,100% 0, calc(100% - 60rem) 100%,0 100%,0 5rem);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        h2{
            font-family: var(--font-durik);
            font-size: 48rem;
            text-transform: uppercase;
            line-height: 52.8rem;
            color: var(--white);
        }
        h2:nth-child(1){
            margin-left: 45rem;
        }
        
        .date{
            position: absolute;
            span{
                display: block;
                font-family: var(--font-durik);
                font-size: 128rem;
                line-height: 140.8rem;
                color: var(--orange); 
            }
            p{
                font-size: 18rem;
                line-height: 21.78rem;
                width: 551rem;
            }
        }

        .date-1{
            left: 100rem;
            top: 520rem;
        }

        .date-2{
            left: 684rem;
            top: 280rem;
        }

        .date-3{
            left: 1269rem;
            top: 280rem;
        }

        .date-4{
            left: 830rem;
            top: 750rem;
            p{
                width: 991rem;
            }
        }
    }
</style>