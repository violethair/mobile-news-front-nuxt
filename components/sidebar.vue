<template>
    <div class="content-two-box-right">
        <aside>
            <div class="b-title-bar-right">
                <label>
                    <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    Select Currency
                </label>
            </div>
            <div class="b-content-char" v-if="coinData">
                <ul v-for="data in coinData">
                    <li>
                        <div class="padd">{{ data.name }}</div>
                    </li>
                    <li>
                        <div class="padd">
                            $ {{data.quotes.USD.price.toFixed(2)}}                   
                        </div>
                    </li>
                    <li>
                        <div class="padd">
                            <span v-if="data.quotes.USD.percent_change_24h < 0" class="down"><i class="fa fa-caret-down" aria-hidden="true"></i> {{data.quotes.USD.percent_change_24h}}%</span>
                            <span v-else class="up"><i class="fa fa-caret-up" aria-hidden="true"></i> {{data.quotes.USD.percent_change_24h}}%</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="b-title-bar-right">
                <label>
                    <i class="fa fa-tint" aria-hidden="true"></i>
                    Hot news
                </label>
            </div>
            <div class="b-content-hotnews" v-if="topNew.length > 0">
                <ul v-for="data,index in topNew">
                    <li>
                        <div class="stt-news">{{ index+1 }}</div>
                    </li>
                    <li>
                        <h4>
                            <a :href="APP_URL + '/post/' + data.link ">{{ data.name }}</a>
                        </h4>
                        <div class="author-time">
                            <span><i class="fa fa-clock-o" aria-hidden="true"></i> {{ data.publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}</span>
                        </div>
                    </li>
                </ul>
            </div>

            <!--    Ads right 2-->
        <div class="text-center" style="padding: 0 0 15px 0;">
            <a href="https://bit.ly/2OCvHx7" target="_blank">
                <img src="/images/ads/v1/Slidebar-right1.gif">
            </a>
        </div>    <!--    Ads right 2-->
        <div class="text-center" style="padding: 0 0 15px 0;">
            <a href="https://bit.ly/2O4PqoH" target="_blank">
                <img src="/images/ads/v1/Slidebar-right2.gif">
            </a>
        </div>
    </aside>
</div>
</template>

<script>
import config from '../config.js'
import iaxios from 'axios'
import Vue from 'vue'
Vue.use(require('vue-moment'));

var axios = iaxios.create({baseURL: config.API_URL});
export default {
    props: ['coinData'],
    data: function () {
        return {
            APP_URL: config.APP_URL,
            topNew: []
        }
    },
    mounted: async function () {
        let res = await axios.get('/getTopNew');
        this.topNew = res.data.data;
    }
}
</script>