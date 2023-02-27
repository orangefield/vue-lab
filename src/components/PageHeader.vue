<template>
    <header>
        <nav class="navbar bg-dark d-flex justify-content-between header_title" data-bs-theme="dark">
            <div class="d-flex">
                <li><router-link to="/">HOME</router-link></li>
                <li><router-link to="/board/list">게시판</router-link></li>
                <li><router-link to="/emp-vue/list">Emp_vue</router-link></li>        
            </div>
            <li><router-link to="/mypage">MYPAGE</router-link></li>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
li {
    padding: 5px 10px 5px 10px;
    list-style: none;
}

.header_title {
    font-weight: bold;
}
</style>