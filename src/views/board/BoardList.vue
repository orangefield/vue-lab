<template>
    <div class="board-list">
        <div class="common-buttons">
            <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">등록</button>
        </div>
        <!-- 테이블 시작 -->
        <table class="w3-table-all">
            <!-- 테이블 헤드 시작 -->
            <thead>
                <tr>
                    <th>No</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>등록일시</th>
                </tr>
            </thead>
            <!-- 테이블 헤드 끝 -->
            <!-- 테이블 바디 시작 -->
            <tbody>
                <tr v-for="(row, idx) in list" :key="idx">
                    <td>{{ row.idx }}</td>
                    <td><a v-on:click="fnView(`${row.idx}`)">{{ row.title }}</a></td>
                    <td>{{ row.author }}</td>
                    <td>{{ row.createdAt }}</td>
                </tr>
            </tbody>
            <!-- 테이블 바디 끝 -->
        </table>
        <!-- 테이블 끝 -->
        <!--
        <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.total_list_cnt > 0">
            <span class="pg">
                <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-border">&lt;&lt;</a>
                <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page - 1}`)"
                    class="prev w3-button w3-border">&lt;</a>
                <template v-for=" (n, index) in paginavigation()">
                    <template v-if="paging.page == n">
                        <strong class="w3-button w3-border w3-green" :key="index">{{ n }}</strong>
                    </template>
                    <template v-else>
                        <a class="w3-button w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
                    </template>
                </template>
                <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
                    @click="fnPage(`${paging.end_page + 1}`)" class="next w3-button w3-border">&gt;</a>
                <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)"
                    class="last w3-button w3-border">&gt;&gt;</a>
            </span>
        </div>
        -->
    </div>
</template>


<script>
export default {

    data() { //변수생성
        return {
            requestBody: {}, //리스트 페이지 데이터전송
            list: {}, //리스트 데이터
            // no: '', //게시판 숫자처리
            /*
            paging: {
                block: 0,
                end_page: 0,
                next_block: 0,
                page: 0,
                page_size: 0,
                prev_block: 0,
                start_index: 0,
                start_page: 0,
                total_block_cnt: 0,
                total_list_cnt: 0,
                total_page_cnt: 0,
            }, //페이징 데이터
            page: this.$route.query.page ? this.$route.query.page : 1,
            size: this.$route.query.size ? this.$route.query.size : 10,
            keyword: this.$route.query.keyword,
            paginavigation: function () { //페이징 처리 for문 커스텀
                let pageNumber = [] //;
                let start_page = this.paging.start_page;
                let end_page = this.paging.end_page;
                for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
                return pageNumber;
            }*/
        }
    },

    mounted() {
        this.fnGetList()
    },
    methods: {
        fnGetList() {
            this.requestBody = {}
            this.$axios.get("/board/list", {
                params: this.requestBody,
                headers: {}
            }).then((res) => {
                this.list = res.data  // res;response
            }).catch((err) => {
                if (err.message > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해 주세요.')
                }
            })
        },
        fnView(idx) {
            this.requestBody.idx = idx
            this.$router.push({
                path: './detail',               // path : 주소에 포함
                query: this.requestBody         // query : 쿼리스트링 부분; /detail?idx
            })
            // console.log(this.$router);
        }
    }
}
</script>


<style scoped></style>
