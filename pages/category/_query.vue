<template>
	<div>
		<imenu :categories="categories"/>
		<iheader :pressReleases="pressReleases"/>
		<section v-if="info">
		    <div class="wrap-content-page">
		        <div class="wrap-parent-catrgory">
				    <ul>
				        <li class="parent">
				            <a href="/" title="Home">
				                Home
				            </a>
				        </li>
				        <li v-if="info.parent" class="ic">
				            <i class="fa fa-angle-right" aria-hidden="true"></i>
				        </li>
			            <li v-if="info.parent" class="parent">
			                <a :href="'/category/' + info.parent.link"
			                   :title="info.parent.name">
			                    {{ info.parent.name }}
			                </a>
			            </li>
			            <li class="ic">
				            <i class="fa fa-angle-right" aria-hidden="true"></i>
				        </li>
			            <li class="parent">
			                <h1>
			                    <a :href="'/category/' + info.link"
			                       :title="info.name">
			                        {{ info.name }}
			                    </a>
			                </h1>
			            </li>
				    </ul>
				</div>
				<div class="wrap-list-data-category">
			        <ul class="data-tab-one">
		                <li v-for="data in info.post">
		                    <div class="content-data">
		                        <div class="w-img-two img-outer">
		                            <a :href="'/post/' + data.link"
		                               :title="data.name">
		                                <img
		                                	style="width: 415px;" 
		                                	class="image"
		                                    :src="IMAGE_URL + data.images"
		                                    :title="data.name"
		                                    :alt="data.name">
		                            </a>
		                        </div>
		                        <div class="info-news" style="padding: 0px;margin-bottom: 10px">
		                            <h3 style="margin: 0px;">
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

				<div id="viewMoreCategory" class="load-more">
				    <i class="fa fa-undo" aria-hidden="true"></i>
				    Load more
				</div>
				<div id="notify" class="d-notify" style="margin-bottom: 0px;"></div>
				<input type="hidden" id="page_load" value="2"/>
				<input type="hidden" id="category_id" value="<?php echo !empty($data_cate['id']) ? $data_cate['id'] : ''; ?>"/>

		    </div>
		</section>
		<ifooter :categories="categories" :setting="setting" />
	</div>
</template>

<script>
import imenu from '@/components/menu'
import iheader from '@/components/header'
import ifooter from '@/components/footer'
import isidebar from '@/components/sidebar'
import config from '@/config.js'
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
            title: this.info.name + " | " + this.setting.title,
            meta: [
                {name: 'description', content: this.setting.meta_des }
            ]
        }
    },
    asyncData : async function ({params}) {
    	let res = await axios.get('/getCategoryInfo/' + params.query); 
        let categoryRes = await axios.get('/getCategory')
        let settingRes = await axios.get('/getSetting')
        let pressReleases = await axios.get('/getPressReleases');
        return {
            API_URL : config.API_URL,
            IMAGE_URL : config.IMAGE_URL,
            info: res.data.data,
            categories: categoryRes.data.data,
            setting: settingRes.data.data,
            pressReleases: pressReleases.data.data
        }
    },
    methods: {
    	loadMore: async function (event) {
    		var _this = this;
    		$(event.target).waitMe();
    		try {
	    		let res = await axios.get('/getMorePostInCategory/' + _this.info.id + '/' + (_this.page + 1));
	    		_this.info.post = _this.info.post.concat(res.data.data);
	    		$(event.target).waitMe('hide');
	    		_this.page++;
	    	} catch (e) {
	    		console.log(e);
	    	}
    	}
    }
}
</script>