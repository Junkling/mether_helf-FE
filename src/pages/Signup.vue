<template>    
    <body>
        <div class="form-sign-up w-100 m-auto">
		<h2>회원 가입</h2>
		<p>생성할 계정 정보를 입력해주세요</p>
		<hr>
        <div class="form-group">
            <input type="username" class="form-control" id="floatingInput" placeholder="로그인 ID *" @keyup.enter="submit()" v-model="state.form.username">
        </div>
		<div class="form-group">
            <input type="password" class="form-control" id="floatingPassword" placeholder="비밀번호 *" @keyup.enter="submit()" v-model="state.form.password">
        </div>
		<div class="form-group">
            <input type="password" class="form-control" id="floatingConfirmPassword" name="confirm_password" placeholder="비밀번호 확인 *" @keyup.enter="submit()" v-model="state.form.confirmPassword">
        </div>        
        <div class="form-group">
            <input type="nickname" class="form-control" id="floatingInput" placeholder="닉네임 *" @keyup.enter="submit()" v-model="state.form.nickname">
        </div>
        <div class="form-group">
            <input type="email" class="form-control" id="floatingInput" placeholder="이메일 *" @keyup.enter="submit()" v-model="state.form.email">
        </div>
        <div class="form-group">
            <input type="job" class="form-control" id="floatingInput" placeholder="직종 *" @keyup.enter="submit()" v-model="state.form.job">
        </div>
        <div class="form-group">
            <input type="company" class="form-control" id="floatingInput" placeholder="소속 *" @keyup.enter="submit()" v-model="state.form.company">
        </div>

		<div class="form-group">
            <button class="btn btn-primary w-100 py-2" @click="submit()">회원 가입</button>
        </div>
	<div class="hint-text">Already have an account? <a href="#">Login here</a></div>
</div>

</body>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';
import router from '@/scripts/router';

export default {
    name : "Signup",
    setup(){
        const state = reactive({
            form:{
                username: "",
                password: "",
                confirmPassword:"",
                role:"",
                nickname:"",
                email:"",
                job:"",
                company:"",
            }
        })
        const submit = () =>{
            if(state.form.confirmPassword!=state.form.password){    
                router.push({path: '/signup'})
                window.alert("비밀번호 확인이 틀렸습니다..");
                return
            }

            axios.post("/api/users/signup", state.form).then(()=>{
                router.push({path: '/'})
                window.alert("회원 가입되었습니다.");
            }).catch(error=>{
                console.log(error)
                let cardList = new Array();
                cardList = error.response.data;
                window.alert(cardList);
            });
        }

        return {state, submit}
    }
}
</script>

<style scoped>
.form-sign-up {
    max-width: 330px;
    padding: 1rem;
}

.form-sign-up .form-floating:focus-within {
    z-index: 2;
}

.form-sign-up input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-sign-up input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.form-sign-up input[type="confirmPassword"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>