<template >
    <v-container fluid class="pl-6 pl-md-2">
        <v-row justify="space-between" class="pt-4">
            <v-col cols="auto" class="py-0 px-3 ">
                <v-row justify='start' >
                    <v-col cols="auto" class="bold py-0">{{feedback.Name}}</v-col>
                    <v-col cols="auto" class="py-0">
                        <v-rating readonly
                                  dense
                                  background-color="#F2F2F2"
                                  color="#F2C94C"
                                  v-model="(feedback.rate).substr(1,1)">

                        </v-rating>
                    </v-col>
                    <v-col cols="auto" class="caption grey--text lighten-1 py-0">
                        <div class="pt-1" v-if="feedback.bar">Суши Бар на {{feedback.bar.Name}}</div>
                    </v-col>
                </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto" class="bold grey--text lighten-1 align-self-center py-0 px-3">
                <div>{{ feedback.date.substr(0,10) }}</div>
            </v-col>

        </v-row>
        <v-row class="px-3 px-md-2">
            <v-col class="body-2 pl-md-1 pl-0">
                {{feedback.ftext}}
            </v-col>
        </v-row>
        <feedback-answer :answer="feedback.answer">

        </feedback-answer>
    </v-container>
</template >

<script >
    import feedbackAnswer from '../../components/feedback/feedback-answer'

    export default {
        name: "feedback-item",
        components:{
            feedbackAnswer
        },
        props:['feedback'],
        data(){
            return {

            }
        },

    }
</script >

<style scoped >
    .body-2{
        line-height: 18px;
    }
</style >