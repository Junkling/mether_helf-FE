<template>
    <div class="form-signin w-100 m-auto">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
                <input type="username" class="form-control" id="floatingInput" placeholder="name@example.com" @keyup.enter="submit()" v-model="state.form.username">
                <label for="floatingInput">username</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" @keyup.enter="submit()" v-model="state.form.password">
                <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                </label>
            </div>
            <button class="btn btn-primary w-100 py-2" @click="submit()">Sign in</button>
    </div>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
import router from '@/scripts/router'

export default {
    setup(){
        const state = reactive({
            form:{
                username: "",
                password: ""
            }
        })
        const submit = () =>{
            axios.post("api/user/login", state.form).then((res)=>{
                console.log(res.data);
                router.push({path: '/'})
                window.alert("로그인 되었습니다.");
            }).catch(()=>{
                window.alert("로그인 정보가 존재하지 않습니다.")
            });
        }
        return {state, submit}
    }
}
</script>

<style scoped>
.form-signin {
    max-width: 330px;
    padding: 1rem;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="username"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
</style>