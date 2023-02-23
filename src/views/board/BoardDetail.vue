<template>
    <div class="board-detail">
        <!-- 게시글 상세내용 시작 -->
        <div class="board-contents">
            <h3>{{ title }}</h3>
            <div>
                <strong class="w3-large">{{ author }}</strong>
                <br>
                <span>{{ createdAt }}</span>
            </div>
        </div>
        <div class="board-contents">
            <span>{{ contents }}</span>
        </div>
        <!-- 게시글 상세내용 끝 -->
        <!-- 편집 버튼 시작 -->
        <div class="common-buttons">
            <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>&nbsp;
            <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
            <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
        </div>
        <!-- 편집 버튼 끝 -->
    </div>
</template>
  
<script>
export default {

    data() { //변수생성
        return {
            requestBody: this.$route.query,
            idx: this.$route.query.idx,

            title: '',
            author: '',
            contents: '',
            createdAt: ''
        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        // 게시글 한 건 GET 요청
        fnGetView() {
            this.$axios.get('/board/' + this.idx, {   // 주소 설정 되게 마음에 안드네. 주소 공부해야겠다
                params: this.requestBody

            }).then((res) => {
                this.title = res.data.title
                this.author = res.data.author
                this.contents = res.data.contents
                this.createdAt = res.data.createdAt
            }).catch((err) => {
                if (err.message > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해 주세요.')
                }
            })
        }
    }

}
</script>

<style scoped></style>