<template>
	<header>
	    <div class="fixed-menu-mobile">
	        <div class="wrap-header position-relative">
	            <a href="/" title="Iholding">
	                <img class="logo" src="/images/logo.png" title="Iholding" alt="Iholding"/>
	            </a>

	            <div class="b-header-news-top">
	                <div class="view-data-news">
	                    <div class="hid-close" style="display: none;">
	                        <i class="fa fa-times" aria-hidden="true"></i>
	                    </div>
	                    <div class="view-news">
	                        <i class="fa fa-bell" aria-hidden="true"></i>
	                    </div>

	                    <div class="wrap-head-newstop">
	                        <div class="b-head-newstop font-bold">
	                            Press Releases
	                        </div>
	                        <ul>
                                <li v-for="data in pressReleases">
                                    <div class="img-newstop">
                                        <a :href="'/post/' + data.link"
                                           :title="data.name" class="font-bold">
                                            <img style="width: 195px;height: 142px" :src="config.IMAGE_URL + data.images"
                                                 :title="data.name" :alt="data.name">
                                        </a>
                                    </div>
                                    <a :href="'/post/' + data.link"
                                       :title="data.name">
                                       {{data.name}}
                                    </a>
                                    <div class="author-time">
                                            <span class="category">
                                            <a :href="'/post/' + data.link"
                                               title="Press Releases">
                                                Sponsored
                                            </a>
                                        </span>
                                        <span>
                                            <i class="fa fa-clock-o"
                                               aria-hidden="true"></i> {{data.publish_at}}</span>
                                    </div>
                                </li>
	                        </ul>
	                    </div>
	                </div>
	            </div>

	            <i class="fa fa-bars menu-mobile-show" aria-hidden="true"></i>
	        </div>
	    </div>
	    <div class="height-fixed-menu"></div>
	</header>
</template>

<script>
import config from '../config.js'
import iaxios from 'axios'

var axios = iaxios.create({baseURL: config.API_URL});

export default {
	props: ['pressReleases'],
	data: function () {
		return {
			config : config
		}
	},
    mounted : function () {
    	
    }
}
</script>