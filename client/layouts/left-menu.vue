<template >
    <div class="footer_padding d-none d-md-block" v-resize="onResize">
        <v-navigation-drawer
                v-model="drawer"
                :mini-variant.sync="mini"
                color="lighten-4"
                permanent
        >
            <v-list-item :class="{'head_blc': page=='bar' }" >
                <v-list-item-content >
                    <v-list-item-title  :class="{'active_title': page=='bar','item_left_menu': !mini  }">

                        <div class="bold text-center" v-if="mini">
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" >
                                <path d="M14.209 9.7785H11.4914C10.7476 9.7785 10.1428 10.3833 10.1428 11.1271V13.2113C10.1428 13.955 10.7476 14.5599 11.4914 14.5599H14.209C14.9528 14.5599 15.5576 13.955 15.5576 13.2113V11.1271C15.5576 10.3833 14.9528 9.7785 14.209 9.7785ZM14.5768 13.2113C14.5768 13.4156 14.4093 13.5791 14.209 13.5791H11.4914C11.2871 13.5791 11.1236 13.4115 11.1236 13.2113V11.1271C11.1236 10.9228 11.2912 10.7593 11.4914 10.7593H14.209C14.4133 10.7593 14.5768 10.9268 14.5768 11.1271V13.2113Z"
                                      fill="#464646" />
                                <path d="M20 5.99015C20 5.90433 19.9796 5.8226 19.9346 5.74904L16.9595 0.518145C16.8737 0.366939 16.7103 0.26886 16.5345 0.26886H3.46138C3.28566 0.26886 3.12219 0.362853 3.03637 0.518145L0.0653862 5.74904C0.0245198 5.8226 0 5.90433 0 5.99015C0 7.16302 0.706988 8.16833 1.71639 8.61377V17.2407C1.71639 17.5104 1.93707 17.7311 2.20678 17.7311H4.91622C4.92031 17.7311 4.9244 17.7311 4.92848 17.7311H8.72906C8.73314 17.7311 8.73723 17.7311 8.74132 17.7311H17.7891C18.0588 17.7311 18.2795 17.5104 18.2795 17.2407V8.67507C18.2795 8.65464 18.2795 8.63829 18.2754 8.62195C19.2889 8.1765 20 7.1671 20 5.99015ZM3.74745 1.25374H16.2485L18.5738 5.34446H1.42624L3.74745 1.25374ZM14.2338 6.32117C14.0785 7.20388 13.3061 7.87409 12.3784 7.87409C11.4508 7.87409 10.6784 7.20388 10.5231 6.32117H14.2338ZM9.481 6.32117C9.32571 7.20388 8.55333 7.87409 7.62566 7.87409C6.698 7.87409 5.92562 7.20388 5.76624 6.32117H9.481ZM1.01349 6.32117H4.72824C4.57295 7.20388 3.79649 7.87409 2.86882 7.87409C1.94115 7.87818 1.16878 7.20388 1.01349 6.32117ZM8.23866 16.7503H5.41888V11.4581C5.41888 11.0739 5.72946 10.7593 6.11769 10.7593H7.54393C7.92808 10.7593 8.24275 11.0698 8.24275 11.4581V16.7503H8.23866ZM17.2987 16.7503H9.21945V11.4581C9.21945 10.5345 8.46751 9.77846 7.53984 9.77846H6.11361C5.19003 9.77846 4.434 10.5304 4.434 11.4581V16.7544H2.69718V8.85488C2.75439 8.85897 2.81161 8.85897 2.86882 8.85897C3.85778 8.85897 4.73233 8.35631 5.24724 7.59211C5.76216 8.35631 6.6367 8.85897 7.62566 8.85897C8.61463 8.85897 9.48508 8.35631 10.0041 7.59211C10.519 8.35631 11.3935 8.85897 12.3784 8.85897C13.3674 8.85897 14.2378 8.35631 14.7528 7.59211C15.2677 8.35631 16.1422 8.85897 17.1312 8.85897C17.1884 8.85897 17.2415 8.85488 17.2987 8.85488V16.7503ZM17.1312 7.87818C16.2035 7.87818 15.4311 7.20797 15.2758 6.32526H18.9906C18.8312 7.20388 18.0588 7.87818 17.1312 7.87818Z"
                                      fill="#464646" />
                            </svg >
                        </div >

                        <span class="" v-if="!mini" >Суши-Бары</span >
                    </v-list-item-title >
                </v-list-item-content >
                <v-btn
                        icon
                        @click.stop="mini = !mini"
                >
                    <v-icon >mdi-chevron-left</v-icon >
                </v-btn >
            </v-list-item >
            <v-list
                    dense
                    class=" lighten-4 py-0"
            >
                <template v-for="(item, i) in bars" >
                    <v-list-item
                            :key="i"
                            link
                            :class="{'grey lighten-4': active == item.id }"
                            :to="'/bar/'+item.id"
                    >
                        <v-list-icon v-if="mini" >

                                <div class="d-flex align-center">
                                    <v-avatar :color="checkColor(item.id)" size="28" >
                                        <span class="white--text caption" >{{ item.avatar }}</span >
                                    </v-avatar >
                                </div >

                        </v-list-icon >
                        <v-list-item-content @click="active = item.id" v-if="!mini" >
                            <v-list-item-title class="d-flex align-center" >
                                <div class="cicle" :class="{'cicle_active':active == item.id }" ></div >
                                <div class="" >
                                    <div >
                                        {{ item.Name }}
                                    </div >
                                    <div class="font-weight-bold" >
                                        {{ item.phone }}
                                    </div >
                                </div >

                            </v-list-item-title >
                        </v-list-item-content >
                    </v-list-item >
                </template >
                <v-list-item link class="delimeterUp" to="/bonus" :class="{'head_blc': page=='bonus' }">
                    <v-list-icon v-if="mini" >
                    <div class="d-flex align-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M17.3129 3.51453C15.5805 1.78211 13.2761 0.827423 10.8276 0.827423C8.33393 0.827423 6.00072 1.81091 4.26007 3.59683C4.07078 3.79023 4.07489 4.10297 4.2683 4.29638C4.4617 4.48567 4.77445 4.48156 4.96785 4.28815C6.52333 2.69564 8.60141 1.81914 10.8276 1.81914C15.3418 1.81503 19.0124 5.48562 19.0124 9.99979C19.0124 14.514 15.3418 18.1846 10.8276 18.1846C6.31346 18.1846 2.64287 14.514 2.64287 9.99979V9.89691L3.45764 10.7117C3.55229 10.8063 3.67985 10.8557 3.80742 10.8557C3.93498 10.8557 4.05843 10.8063 4.15719 10.7117C4.3506 10.5183 4.3506 10.2055 4.15719 10.0121L2.50296 8.35378C2.30955 8.16038 1.99681 8.16038 1.80341 8.35378L0.145054 10.0121C-0.0483514 10.2055 -0.0483514 10.5183 0.145054 10.7117C0.33846 10.9051 0.651201 10.9051 0.844607 10.7117L1.65938 9.89691V9.99979C1.65938 12.4482 2.61406 14.7526 4.34648 16.4851C6.07891 18.2175 8.38331 19.1722 10.8317 19.1722C13.2802 19.1722 15.5846 18.2175 17.317 16.4851C19.0494 14.7526 20 12.4482 20 9.99979C20 7.55136 19.0453 5.24695 17.3129 3.51453Z"
                                  fill="#464646" />
                            <path d="M13.453 6.66257L7.38749 12.724C7.19408 12.9174 7.19408 13.2301 7.38749 13.4235C7.48213 13.5182 7.6097 13.5676 7.73726 13.5676C7.86483 13.5676 7.98828 13.5182 8.08704 13.4235L14.1526 7.35801C14.346 7.1646 14.346 6.85186 14.1526 6.65846C13.9592 6.46917 13.6464 6.46917 13.453 6.66257Z"
                                  fill="#464646" />
                            <path d="M11.8648 10.7444C11.1776 11.4316 11.1776 12.555 11.8648 13.2422C12.1981 13.5755 12.6425 13.7607 13.1157 13.7607C13.589 13.7607 14.0334 13.5755 14.3667 13.2422C15.0539 12.555 15.0539 11.4316 14.3667 10.7444C14.0334 10.4111 13.589 10.2259 13.1157 10.2259C12.6425 10.2259 12.2022 10.4111 11.8648 10.7444ZM13.6672 12.5468C13.519 12.6949 13.3256 12.7731 13.1157 12.7731C12.9059 12.7731 12.7125 12.6908 12.5643 12.5468C12.2598 12.2423 12.2598 11.7484 12.5643 11.4439C12.7125 11.2958 12.9059 11.2176 13.1157 11.2176C13.3256 11.2176 13.519 11.2999 13.6672 11.4439C13.9717 11.7484 13.9717 12.2423 13.6672 12.5468Z"
                                  fill="#464646" />
                            <path d="M8.55608 6.22232C8.08285 6.22232 7.63843 6.4075 7.30511 6.74081C6.9718 7.07413 6.78662 7.51855 6.78662 7.99178C6.78662 8.465 6.9718 8.90943 7.30511 9.24274C7.63843 9.57606 8.08285 9.76123 8.55608 9.76123C9.0293 9.76123 9.47372 9.57606 9.80704 9.24274C10.1404 8.90943 10.3255 8.465 10.3255 7.99178C10.3255 7.51855 10.1404 7.07413 9.80704 6.74081C9.46961 6.4075 9.0293 6.22232 8.55608 6.22232ZM9.10749 8.54319C8.95935 8.69133 8.76594 8.76952 8.55608 8.76952C8.34621 8.76952 8.1528 8.68721 8.00466 8.54319C7.85652 8.39505 7.77834 8.20164 7.77834 7.99178C7.77834 7.78191 7.86064 7.58851 8.00466 7.44037C8.1528 7.29222 8.34621 7.21404 8.55608 7.21404C8.76594 7.21404 8.95935 7.29634 9.10749 7.44037C9.25563 7.58851 9.33381 7.78191 9.33381 7.99178C9.33381 8.19753 9.25563 8.39505 9.10749 8.54319Z"
                                  fill="#464646" />
                        </svg >
                    </div >
                    </v-list-icon>
                    <v-list-item-content >
                        <v-list-item-title class="grey--darken--text item_left_menu" >
                            Бонусы
                        </v-list-item-title >
                    </v-list-item-content >
                </v-list-item >
                <v-list-item link class="delimeter" to="/feedback" :class="{'head_blc': page=='feedback' }">
                    <v-list-icon v-if="mini" >
                    <div class="d-flex align-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" >
                                <path d="M3.51562 5.85938H4.6875V7.03125H3.51562V5.85938Z" fill="#464646" />
                                <path d="M5.85938 5.85938H7.03125V7.03125H5.85938V5.85938Z" fill="#464646" />
                                <path d="M8.20312 5.85938H9.375V7.03125H8.20312V5.85938Z" fill="#464646" />
                                <path d="M20 13.5547C20 10.0007 17.1086 7.10938 13.5547 7.10938C13.3197 7.10938 13.085 7.12246 12.8522 7.14773C12.8773 6.91695 12.8906 6.68266 12.8906 6.44531C12.8906 2.89137 9.99926 0 6.44531 0C2.89137 0 0 2.89137 0 6.44531C0 7.90277 0.50543 9.31492 1.43082 10.4639L0.227187 12.8906H6.44531C6.68266 12.8906 6.91695 12.8773 7.14773 12.8522C7.12246 13.085 7.10938 13.3196 7.10938 13.5547C7.10938 17.1086 10.0007 20 13.5547 20H19.7728L18.5692 17.5733C19.4946 16.4243 20 15.0121 20 13.5547ZM2.11656 11.7188L2.83078 10.2788L2.56098 9.98266C1.6652 8.99945 1.17188 7.7432 1.17188 6.44531C1.17188 3.53754 3.53754 1.17188 6.44531 1.17188C9.35309 1.17188 11.7188 3.53754 11.7188 6.44531C11.7188 9.35309 9.35309 11.7188 6.44531 11.7188H2.11656ZM13.5547 18.8281C10.6469 18.8281 8.28125 16.4625 8.28125 13.5547C8.28125 13.2327 8.31082 12.9118 8.36832 12.5976C10.3784 11.968 11.968 10.3784 12.5976 8.36836C12.9118 8.31086 13.2327 8.28125 13.5546 8.28125C16.4624 8.28125 18.8281 10.6469 18.8281 13.5547C18.8281 14.8526 18.3348 16.1088 17.4389 17.092L17.1691 17.3882L17.8834 18.8281H13.5547Z"
                                      fill="#464646" />
                                <path d="M10.625 12.9688H11.7969V14.1406H10.625V12.9688Z" fill="#464646" />
                                <path d="M12.9688 12.9688H14.1406V14.1406H12.9688V12.9688Z" fill="#464646" />
                                <path d="M15.3125 12.9688H16.4844V14.1406H15.3125V12.9688Z" fill="#464646" />
                            </svg >
                    </div >
                    </v-list-icon>
                    <v-list-item-content >
                        <v-list-item-title class="grey--darken--text item_left_menu" >
                            Отзывы
                        </v-list-item-title >
                    </v-list-item-content >
                </v-list-item >
                <v-list-item link class="delimeter" to="/promotion" :class="{'head_blc': page=='promotion' }">
                    <v-list-icon v-if="mini" >
                    <div class="d-flex align-center">

                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" >
                                <path d="M13.8642 12.3086C13.8235 12.1812 13.8685 12.0424 13.9764 11.9633L16.3879 10.1941C16.7719 9.91243 16.9249 9.43782 16.7777 8.98499C16.6306 8.5321 16.2278 8.23805 15.7517 8.23586L12.7608 8.22201C12.627 8.22136 12.5089 8.13566 12.4671 8.00864L11.5296 5.16834C11.3804 4.71616 10.9763 4.42405 10.5002 4.42398C10.024 4.42398 9.61993 4.71616 9.47068 5.16828L9.04814 6.44801C8.98119 6.65074 9.09125 6.86946 9.29405 6.93635C9.49684 7.00343 9.71543 6.89323 9.78245 6.69044L10.205 5.4107C10.2703 5.21268 10.4474 5.19727 10.5002 5.19727C10.5529 5.19727 10.73 5.21268 10.7953 5.4107L11.7328 8.25107C11.879 8.6941 12.2907 8.99318 12.7572 8.99537L15.7481 9.00922C15.9566 9.01019 16.026 9.17387 16.0423 9.224C16.0586 9.27414 16.0986 9.44729 15.9305 9.57063L13.5189 11.3399C13.1428 11.6159 12.9856 12.0998 13.1276 12.5442L14.039 15.3939C14.1026 15.5926 13.9683 15.7092 13.9257 15.7401C13.883 15.7711 13.7308 15.8628 13.5615 15.7409L11.1335 13.9937C10.7547 13.7212 10.2458 13.7212 9.86699 13.9937L7.4386 15.7413C7.26931 15.863 7.11697 15.7714 7.07438 15.7405C7.03172 15.7095 6.89748 15.593 6.96096 15.3944L7.87209 12.5442C8.01418 12.0999 7.85688 11.6159 7.4808 11.3399L5.06936 9.5707C4.90123 9.44736 4.94131 9.27414 4.95761 9.22407C4.97392 9.17393 5.04332 9.01025 5.25179 9.00929L8.24289 8.99543C8.45638 8.9944 8.62869 8.82054 8.62773 8.60698C8.6267 8.39407 8.4538 8.22214 8.24108 8.22214C8.2405 8.22214 8.23986 8.22214 8.23928 8.22214L5.24818 8.23599C4.77202 8.23818 4.36927 8.53223 4.22215 8.98512C4.07503 9.43801 4.22801 9.91262 4.61189 10.1943L7.02334 11.9635C7.13115 12.0427 7.17626 12.1814 7.13553 12.3088L6.22446 15.159C6.07947 15.6125 6.23471 16.0864 6.61994 16.3662C6.81326 16.5066 7.03507 16.5769 7.257 16.5769C7.47732 16.5769 7.69778 16.5076 7.89039 16.369L10.3187 14.6215C10.4273 14.5433 10.5733 14.5433 10.6819 14.6215L13.1098 16.3687C13.4963 16.6468 13.995 16.6458 14.3803 16.3659C14.7655 16.086 14.9207 15.6121 14.7757 15.1585L13.8642 12.3086Z"
                                      fill="#464646" stroke="#464646" stroke-width="0.3" />
                                <path d="M10.5 1C5.26168 1 1 5.26168 1 10.5C1 15.7383 5.26168 19.9999 10.5 19.9999C10.7135 19.9999 10.8866 19.8268 10.8866 19.6133C10.8866 19.3998 10.7135 19.2266 10.5 19.2266C5.68809 19.2267 1.77329 15.3119 1.77329 10.5C1.77329 5.68802 5.68809 1.77329 10.5 1.77329C15.3118 1.77329 19.2266 5.68809 19.2266 10.5C19.2266 13.4952 17.7174 16.247 15.1894 17.8609C15.0094 17.9758 14.9566 18.2149 15.0715 18.3949C15.1864 18.5749 15.4255 18.6277 15.6055 18.5128C18.3571 16.756 19.9999 13.7606 19.9999 10.5C20 5.26168 15.7383 1 10.5 1Z"
                                      fill="#464646" stroke="#464646" stroke-width="0.3" />
                            </svg >

                    </div >
                    </v-list-icon>
                    <v-list-item-content >
                        <v-list-item-title class="grey--darken--text item_left_menu" >
                            Акции
                        </v-list-item-title >
                    </v-list-item-content >
                </v-list-item >
            </v-list >
        </v-navigation-drawer >
    </div >
</template >

<script >
    const axios = require('axios').default;
    export default {
        name: "left-menu",
        props: ['active','page'],
        mounted() {
            axios.get(`http://185.22.61.189:1337/bars/`)
                .then((res) => {
                    this.bars = res.data
                })

            console.log(window.innerWidth)
                if (window.innerWidth < 1200) this.mini = true
                else this.mini = false

        },
        data() {
            return {
                mini: false,
                drawer: true,
                bars: [],
                mini:false,
                windowSize: {
                    x: 0,
                    y: 0,
                },
            }
        },
        methods:{
            checkColor(id){
                if (id == this.active) return '#CE8714'
                else return "#E0E0E0"
            },
            onResize () {
                this.windowSize = { x: window.innerWidth, y: window.innerHeight }
            },

        },

    }
</script >

<style scoped >

    .cicle {
        width: 8px;
        height: 8px;
        border: 3px solid #E0E0E0;
        box-sizing: border-box;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        margin: 0 20px;
    }

    .cicle_active {
        border: 3px solid #CE8714;
    }

    .head_blc {
        border-left: 5px solid #CE8714;
        padding-left: 11px;
    }

    .active_title {
        color: #CE8714;
        font-family: TT_Norms_bold;
    }

    .item_left_menu {
        padding-left: 20px;
        padding: 5px 0 7px 20px;

    }

    .delimeterUp {
        border-bottom: 1px solid #F2F2F2;
        border-top: 1px solid #F2F2F2;
    }

    .delimeter {
        border-bottom: 1px solid #F2F2F2;
    }

</style >