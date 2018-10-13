<template>
	<div>
		<imenu :categories="categories"/>
		<iheader :pressReleases="pressReleases"/>
		<section v-if="info">
		    <div class="wrap-content">
		    	<div class="wrap-parent-catrgory">
				    <ul>
				        <li class="parent">
				            <a href="/" title="Home">
				                Home
				            </a>
				        </li>
				        <li class="ic">
				            <i class="fa fa-angle-right" aria-hidden="true"></i>
				        </li>
			            <li class="parent">
			                <a :href="'/category/' + info.category.link"
			                   :title="info.category.name">
			                    {{ info.category.name }}
			                </a>
			            </li>
			            <li class="ic">
				            <i class="fa fa-angle-right" aria-hidden="true"></i>
				        </li>
			            <li class="parent">
			                <h1>
			                    <a :href="'/post/' + info.link"
			                       :title="info.name">
			                        {{ info.name }}
			                    </a>
			                </h1>
			            </li>
				    </ul>
				</div>
				<div class="wrap-detail-post">
				    <h1 class="title-detail font-bold">{{info.name}}</h1>
				    <div class="bd-auttime">
				        <div class="author-time">
				            <span><i class="fa fa-clock-o" aria-hidden="true"></i> {{ info.publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}</span>
				        </div>
				    </div>

				    <div class="detail-thumb">
				        <img style="width: 415px;height: 275px" class="image" :src="IMAGE_URL + info.images" :title="info.name" :alt="info.name">
				    </div>

				    <div class="content-post" v-html="info.content">
				        <div class="clear-main"></div>
				    </div>

			        <div class="wrap-tags">
			            <ul>
		                    <li v-for="data in info.tag.split(',')">
		                        <a :href="'/tags/' + data"
		                           :title="data">
		                           {{ data }}
		                        </a>
		                    </li>
			            </ul>
			        </div>
				</div>

				<div class="wrap-related">
				    <div class="main-width">
				        <div class="title-related">Related News</div>
				        <div class="wrap-list-data-relate">
				            <ul>
			                    <li v-for="data in info.relate">
			                        <div class="content-relate">
			                            <h3>
			                                <a :href="'/post/' + data.link"
			                                   :title="data.name">
			                                    {{ data.name }}
			                                </a>
			                            </h3>
			                            <div class="w-img-two img-outer">
			                                <a :href="'/post/' + data.link"
			                                   :title="data.name">
			                                    <img style="width: 370px;" class="image"
			                                         :src="IMAGE_URL + data.images"
			                                         :title="data.name" :alt="data.name">
			                                </a>
			                            </div>
			                            <div class="info-data">
			                                <div class="shortdes">
			                                    {{data.shortdes}}
			                                </div>
			                                <div class="author-time">
			                                        <span><i class="fa fa-clock-o"
			                                                 aria-hidden="true"></i> {{ data.publish_at | moment("dddd, DD-MM-YYYY HH:mm") }}</span>
			                                </div>
			                            </div>
			                        </div>
			                    </li>
				            </ul>
				        </div>
				    </div>
				</div>
		    </div>
		</section>
		<ifooter :setting="setting" />
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
            title: this.info.name,
            meta: [
                {name: 'description', content: this.setting.meta_des }
            ]
        }
    },
    asyncData : async function ({params}) {
    	let res = await axios.get('/getPostInfo/' + params.query); 
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
    }
}
</script>