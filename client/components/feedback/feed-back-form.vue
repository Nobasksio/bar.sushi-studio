<template >
    <v-container class="answer_area ml-md-8 mt-5 px-8">
        <v-form v-model="valid" >
        <v-row justify="start" class="mt-n4">
            <v-col cols="auto">
                <div class="bold pt-4 h2" >
                    Оставить отзыв
                </div >
            </v-col >
            <v-col cols="auto">
                <v-select
                        :items="bars"
                        item-text="Name"
                        item-value="id"
                        label="Суши-Бар"
                        v-model="feedback.bar"
                ></v-select >
            </v-col >
        </v-row >
        <v-row>
            <v-col cols="12">
                <v-text-field
                        label="Имя"
                        class='mt-n5'
                        background-color="#fff"
                        v-model="feedback.Name"
                        :rules="[rules.required]"
                        outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                        label="Телефон / почта"
                        background-color="#fff"
                        class='mt-n8'
                        v-model="feedback.contact"
                        :rules="[v => !!v || 'Оставьте контакт чтобы мы могли с вами связаться']"
                        outlined
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-textarea
                        outlined

                        background-color="#fff"
                        class='mt-n8'
                        name="input-7-4"
                        label="Сообщение"
                        v-model="feedback.ftext"
                ></v-textarea>
            </v-col>
            <v-col cols="12">
                <v-rating
                          dense
                          class='mt-n8'
                          empty-icon="mdi-star"
                          background-color="#E0E0E0"
                          color="#F2C94C"
                          x-large
                          :rules="[v => !!v || 'Оставьте пожалуйста нам оценку']"
                          v-model="feedback.rate">
                </v-rating>
            </v-col>

        </v-row>
            <v-alert dismissible type="success" class="ml-2" v-if="sent">
                Спасибо. Ваш отзыв успешно сохранен.
            </v-alert>
            <v-alert dismissible type="error" v-if="error">
                При сохранении отзыва возникла проблема. Попробуйте немного позже.
            </v-alert>
        <v-btn class="ma-2 white--text bold px-10"
               @click="save_feed"
               :loading="loading"
               :disabled="loading || !valid_all"
               tile color="#CE8714" >
             Отправить
        </v-btn>


        </v-form>
    </v-container >
</template >

<script >
    const axios = require('axios').default;
    export default {
        name: "feed-back-form",
        props:['bars'],
        data(){
            return{
                feedback:{
                    Name:null,
                    ftext:null,
                    rate:null,
                    contact:null,
                    bar:null,
                    date: new Date(),
                    answer:'',
                    active:false
                },
                valid:false,
                rate:5,
                sent:false,
                error: false,
                loading: false,
                rules: {
                    required: value => !!value || 'Поле не может быть пустым',
                    min: v => v.length >= 3 || 'В названии не может быть меньше 3 символов',
                },
            }
        },
        methods:{
            save_feed(){
                this.feedback.rate = "_"+this.feedback.rate
                this.loading = true
                axios.post(`http://185.22.61.189:1337/feedbacks/`,
                    this.feedback
                    )
                .then((res) => {
                    console.log()
                    this.feedback.rate = this.feedback.rate.substr(1,1)

                    this.sent = true
                    this.loading = false
                })
                    .catch((error) => {

                        this.loading = false
                        this.error = true
                    });

            }
        },
        computed:{
            valid_all(){
                if(this.valid && this.feedback.rate != null) return true

                return false
            }
        }

    }
</script >

<style scoped >
    * {
        text-transform: none !important;
    }
    .answer_area{
        background: #fcf9f0;
        border-radius: 13px;
    }
    .h2{
        font-size: 20px;
        font-family: TT_Norms_bold;
    }
</style >