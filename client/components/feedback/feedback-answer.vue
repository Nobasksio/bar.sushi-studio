<template >
    <v-container fluid class="answer py-0 " v-if="answer.length > 0">
        <div class="my-blue bold">
            Менеджер Sushi-Studio
        </div>
        <div class="body-2 pt-2">
            {{answer}}

        </div>
    </v-container>
</template >

<script >
    export default {
        name: "feedback-answer",
        props:['answer']
    }
</script >

<style scoped >
    .answer{
        border-left: 3px solid #2D9CDB;
    }
    .my-blue{
        color:#2D9CDB
    }
    .body-2{
        line-height: 18px;
    }
</style >