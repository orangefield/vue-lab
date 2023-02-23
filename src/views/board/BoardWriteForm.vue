<template>
    <div class="board-detail">
        <!-- 게시글 작성 시작 -->
        <div class="board-contents">
            <input type="text" v-model="title" class="w3-input w3-border" placeholder="제목을 입력해주세요.">
            <input type="text" v-model="author" class="w3-input w3-border" placeholder="작성자를 입력해주세요."
                v-if="idx === undefined">
        </div>
        <div class="board-contents">
            <textarea id="" cols="30" rows="10" v-model="contents" class="w3-input w3-border" style="resize: none;">
                        </textarea>
        </div>
        <!-- 게시글 작성 끝 -->
        <!-- 버튼 시작 -->
        <div class="common-buttons">
            <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
            <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
        </div>
        <!-- 버튼 끝 -->
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
        // 게시글 한 건 GET요청
        fnGetView() {
            if (this.idx !== undefined) {
                this.$axios.get('/board/' + this.idx, {
                    params: this.requestBody
                }).then((res) => {
                    this.title = res.data.title
                    this.author = res.data.author
                    this.contents = res.data.contents
                    this.createdAt = res.data.createdAt
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        // 게시글 목록 화면으로 돌아가기
        fnList() {
            delete this.requestBody.idx
            this.$router.push({
                path: './list',
                query: this.requestBody
            })
        },
        // 게시글 한 건 상세조회 화면
        fnView(idx) {
            this.requestBody.idx = idx
            this.$router.push({
                path: './detail',
                query: this.requestBody
            })
        },
        // 게시글 저장하기
        fnSave() {
            let apiUrl = '/board'
            this.form = {
                "idx": this.idx,
                "title": this.title,
                "contents": this.contents,
                "author": this.author
            }
            if (this.idx === undefined) {
                //INSERT
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        this.fnView(res.data.idx)
                    }).catch((err) => {
                        if (err.message > -1) {
                            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해 주세요.')
                        }
                    })
            }
        }
    }
}
</script>
<style scoped></style>