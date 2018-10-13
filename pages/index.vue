<template>
	<div>
		<imenu :categories="categories"/>
		<iheader :pressReleases="pressReleases"/>
		<section>
		    <div class="wrap-content">
		        <div class="wrap-tab">
			        <ul class="nav nav-tabs" id="myTab" role="tablist">
			            <li class="nav-item">
			                <a class="nav-link active" data-toggle="tab" href="#movieIDcfcd208495d565ef66e7dff9f98764da" role="tab"
			                   aria-controls="movieIDcfcd208495d565ef66e7dff9f98764da" aria-expanded="true">All News</a>
			            </li>
			            <li class="nav-item">
			                <a class="nav-link" data-toggle="tab" href="#movieIDc4ca4238a0b923820dcc509a6f75849b" role="tab"
			                   aria-controls="movieIDc4ca4238a0b923820dcc509a6f75849b" aria-expanded="false">
			                    Analysis
			                </a>
			            </li>
			            <li class="nav-item">
			                <a class="nav-link" data-toggle="tab" href="#movieIDc81e728d9d4c2f636f067f89cc14862c" role="tab"
			                   aria-controls="movieIDc81e728d9d4c2f636f067f89cc14862c" aria-expanded="false">
			                    <span class="market_one">Market</span>
			                    <span class="market_two" style="display: none;">Market</span>
			                </a>
			            </li>
			        </ul>
			        <div class="height-tab"></div>
			        <div class="tab-content">
			            <div class="tab-pane active" id="movieIDcfcd208495d565ef66e7dff9f98764da" role="tabpanel"
			                 aria-expanded="true">
			                <div class="wrap-list-data-one">
			                    <ul id="ajax_load_allnews">
		                            <li v-for="data,index in all">
		                            	<a v-if="adsPossition.indexOf(index) != -1" href="https://bit.ly/2Kku4Bu" target="_blank">
	                                        <img src="/images/ads/Banner4-mobile.gif" title="" alt=""/>
	                                    </a>
		                                <div v-else class="content-data">
		                                    <div class="w-img-two img-outer">
		                                        <a :href="'/post/' + data.link"
		                                           :title="data.name">
		                                            <img style="width: 415px;height: 275px" class="image"
		                                                 :src="IMAGE_URL + data.images"
		                                                 :title="data.name" :alt="data.name">
		                                        </a>
		                                    </div>
		                                    <div class="info-news">
		                                        <h3>
		                                            <a :href="'/post/' + data.link"
		                                               :title="data.name">
		                                                {{data.name}}
		                                            </a>
		                                        </h3>
		                                        <div class="author-time">
	                                                <span class="category">
	                                                    <a :href="'/category/' + data.category.link"
	                                                       :title="data.category.name">
	                                                        {{ data.category.name }}
	                                                    </a>
	                                                </span>
		                                            <span>- <i class="fa fa-clock-o"
		                                                       aria-hidden="true"></i> {{ data.publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}</span>
		                                        </div>
		                                    </div>
		                                </div>
		                            </li>
			                    </ul>

			                    <div id="loadmore-home" class="load-more-home" @click="loadMore">
			                        <i class="fa fa-undo" aria-hidden="true"></i>
			                        Load more
			                    </div>
								<h2 style="margin-top: 20px;"><b>VIDEOS</b></h2>
								<div class="home-video">
									<div class="wrap-video">
										<div class="one-video" v-for="data in video">
											<iframe width="315" height="200" :src="'https://www.youtube.com/embed/' + getYoutubeId(data.src_video)">
											</iframe>
											<h2 class="video-title">{{ data.name }}</h2>
										</div>
										<div style="clear: both"></div>
									</div>
								</div>
			                </div>
			            </div>
			            <div class="tab-pane" id="movieIDc4ca4238a0b923820dcc509a6f75849b" role="tabpanel"
			                 aria-expanded="false">
			                <div class="wrap-list-data-two">
		                        <ul class="data-tab-one" >
	                                <li v-for="data in analysis">
	                                    <div class="content-data">
	                                        <div class="w-img-two img-outer">
	                                            <a :href="'/post/' + data.link"
	                                               :title="data.name">
	                                                <img style="width: 415px;height: 275px" class="image"
	                                                     :src="IMAGE_URL + data.images"
	                                                     :title="data.name"
	                                                     :alt="data.name">
	                                            </a>
	                                        </div>
	                                        <div class="info-news">
	                                            <h3>
	                                                <a :href="'/post/' + data.link"
	                                                   :title="data.name">
	                                                    {{ data.name }}
	                                                </a>
	                                            </h3>
	                                            <div class="author-time">
	                                                <span>
	                                                    <i class="fa fa-clock-o" aria-hidden="true"></i>
	                                                    {{ data.publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}
	                                                </span>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </li>
		                        </ul>
			                </div>
			            </div>
			            <div class="tab-pane" id="movieIDc81e728d9d4c2f636f067f89cc14862c" role="tabpanel" aria-expanded="false">
			                <div class="position-relative">
			                    <div class="wrap-content-charmap">
			                        <div class="wrap-form" style="display: table; margin: 0 auto; padding: 15px 0 0 0;">
			                            <!-- <form class="">
			                                <div class="wrap-search-two">
			                                    <div class="b-select">
			                                        <select name="" class="form-control" id="change_money">
			                                            <option value="usd">USD</option>
			                                            <option value="btc">BTC</option>
			                                        </select>
			                                    </div>
			                                    <div class="b-input-key">
			                                        <input type="text" class="form-control" id="ipKeySearch"
			                                               placeholder="Keywords"
			                                               required/>
			                                    </div>
			                                    <div class="clear-main"></div>
			                                    <button type="button" id="search_coinmap">
			                                        <i class="fa fa-search" aria-hidden="true"></i>
			                                    </button>
			                                </div>
			                            </form> -->
			                            <div id="notify_charmap_search" class="d-notify"
			                                 style="margin-bottom: 0px; padding-top: 0;"></div>
			                        </div>
			                    </div>
			                    <div style="height: 52px;"></div>
			                </div>

			                <div class="map-btc">
			                    <div class="wrap-list-data-three" id="ajax_load_charmap">
		                            <ul v-for="data in coinData">
		                                <li>
		                                    <img :src="'https://s2.coinmarketcap.com/static/img/coins/32x32/'+data.id+'.png'" title="" alt=""/>
		                                    <label>{{ data.name }}</label>
		                                </li>
		                                <li>
		                                    <p class="price-now">
		                                    <span class="price-usd">
		                                        {{ data.quotes.USD.price }}
		                                    </span>
		                                    </p>
		                                    <p>
		                                        <span class="down" v-if="data.quotes.USD.percent_change_24h < 0">
		                                            <i class="fa fa-caret-down" aria-hidden="true"></i>
		                                            {{ data.quotes.USD.percent_change_24h }}%
		                                        </span>
		                                        <span class="up" v-else>
		                                            <i class="fa fa-caret-up" aria-hidden="true"></i>
		                                            {{ data.quotes.USD.percent_change_24h }}%
		                                        </span>
		                                    </p>
		                                </li>
		                            </ul>
			                    </div>
			                    <div id="notify_charmap" class="d-notify" style="margin-bottom: 0px;"></div>
			                    <input type="hidden" id="page_load_charmap" value="2"/>
			                </div>
			            </div>
			        </div>
			    </div>
		    </div>
		</section>
		<ifooter :setting="setting"/>
	</div>
</template>

<script>
import imenu from '@/components/menu'
import iheader from '@/components/header'
import ifooter from '@/components/footer'
import isidebar from '@/components/sidebar'
import config from '../config.js'
import iaxios from 'axios'

var axios = iaxios.create({baseURL: config.API_URL});

export default {
	components : {
		imenu,
		iheader,
		ifooter,
		isidebar
	},
	head : function () {
		return {
			title: this.setting.title,
			meta: [
				{name: 'description', content: this.setting.meta_des }
			]
		}
	},
   	asyncData : async function () {
		let res = await axios.get('/getHomeData')
		let categoryRes = await axios.get('/getCategory')
		let coinDataRes = await axios.get('https://api.coinmarketcap.com/v2/ticker/?limit=20')
		let settingRes = await axios.get('/getSetting')
		let videoRes = await axios.get('/getVideo');
	    return {
    		API_URL : config.API_URL,
    		IMAGE_URL : config.IMAGE_URL,
        	adsPossition: [2,8],
        	page: 0,
	    	lastest : res.data.lastest,
	    	pressReleases: res.data.pressReleases,
	    	analysis: res.data.analysis,
	    	all: res.data.all,
	    	categories: categoryRes.data.data,
	    	coinData: coinDataRes.data.data,
	    	setting: settingRes.data.data,
	    	video: videoRes.data.data
	    }
	},
    methods: {
    	loadMore: async function (event) {
    		var _this = this;
    		$(event.target).waitMe();
    		try {
	    		let res = await axios.get('/getMorePost/' + (_this.page + 1));
	    		_this.all = _this.all.concat(res.data.data);
	    		$(event.target).waitMe('hide');
	    		_this.page++;
	    	} catch (e) {
	    		console.log(e);
	    	}
    	},
    	getYoutubeId : function (url) {
    		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
		    var match = url.match(regExp);
		    return (match&&match[7].length==11)? match[7] : false;
    	}
    }
}
</script>