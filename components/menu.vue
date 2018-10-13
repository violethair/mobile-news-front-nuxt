<template>
    <header>
        <i class="fa fa-chevron-left menu-close" aria-hidden="true"></i>
        <menu>
            <div class="wrap-menu">
                <div class="menu-mobile position-relative">
                    <i class="fa fa-caret-up po-fix-icmenu" aria-hidden="true"></i>
                    <div class="title-menu-mobile">
                        Menu
                    </div>
                    <div class="pos-menu-scroll">
                        <div style="padding: 0 0 220px 0;">
                            <div v-if="categories" v-for="data in categories">
                                <div class="menu-parent">
                                    <a :href="'/category/' + data.link"
                                       :title="data.name">
                                        {{data.name}}
                                    </a>
                                </div>
                                <ul class="child-one" v-if="data.child">
                                    <li class="view-menu" v-for="data1 in data.child">
                                        <a :href="'/category/' + data1.link"
                                           :title="data1.name">
                                            {{data1.name}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="menu-parent" style="border-bottom: 0;">
                                <a href="/contact"
                                   title="Contact">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </menu>
    </header>
</template>

<script>
export default {
    props: ['categories'],
    mounted : function () {
        
    }
}
</script>