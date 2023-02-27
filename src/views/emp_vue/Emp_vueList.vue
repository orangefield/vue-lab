<template>
    <h1>emp_vue 테이블의 리스트 페이지</h1>
    <h5>목적 : 테이블을 새로 생성하지 않으면서 바로 데이터를 받아올 수 있는가?</h5>
    <h5>결과 : 받아왔다</h5>
    <hr />
    <div class="container">
        <table class="table table-bordered border-primary">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Emp_no</th>
                    <th>Emp_name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, emp_no) in list" :key="emp_no">
                    <td>{{incrementIndex(emp_no)}}</td>
                    <td>{{ row.emp_no }}</td>
                    <td>{{ row.emp_name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

    data() {
        return {
            responseBody: {},
            list: {}
        }
    },
    mounted() {
        this.fnGetEmpvueList()
    },
    methods: {
        // 게시판 출력용 인덱스 생성(진짜가 아니다)
        incrementIndex(index) {
            return index + 1;
        },
        // Emp_vue 리스트 가져오기
        fnGetEmpvueList() {
            this.requestBody = {}
            this.$axios.get("/emp-vue/list", {
                params: this.requestBody,
                headers: {}
            }).then((res) => {
                this.list = res.data
            }).catch((err) => {
                if (err.message > -1) {
                    alert('안나옴')
                }
            })
        }
    }
}
</script>

<style scoped></style>