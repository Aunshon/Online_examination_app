<template>
    <div>
        <!-- Login form -->

                <div class="row">
                    <h3 class="center">Sign In</h3>
                    <form action="#" @submit.prevent="handleLogin">
                        <div class="row">
                            <div class="input-field col s12 l6 offset-l3 m8 offset-m2">
                            <input v-model="formData.email" id="email" name="email" type="email" class="validate">
                            <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 l6 offset-l3 m8 offset-m2">
                            <input v-model="formData.password" name="password" id="password" type="password" class="validate">
                            <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 l6 offset-l3 m8 offset-m2 center">
                            <button class="btn btn-large vue_color waves-green waves-effect rounded-circle" type="submit">Sign In<i class="material-icons right">send</i></button>
                            </div>
                        </div>
                    </form>
                </div>
                
        <div class="row mt-4" v-if="secrets.length">
            <div class="col-6 offset-3">
                <h3>My secrets</h3>
                <button class="btn btn-secondary" @click="getSecrets">getSecrets</button>
                <div class="secret" v-for="(secret,index) in secrets" :key="index">
                    <em v-text="secret.created_at"></em><br>
                    <strong v-text="secret.secret"></strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        name : 'LoginComponent',
        data(){
            return{
                secrets:[],
                formData:{
                    email:'',
                    password:''
                }
            }
        },
        methods : {
            ...mapActions({
            LoginAction: 'auth/LoginAction', // map `this.add()` to `this.$store.dispatch('increment')`
            setLoginNull : 'auth/setLoginNull',
            }),
            handleLogin(){
                // Send axios req to the login route
                axios.get('/sanctum/csrf-cookie').then(response => {
                    // Login...
                    axios.post('/login',this.formData).then(response=>{
                        if (response.status == 204) {
                            this.setLogedInUser();
                        }
                    });
                });
            },
            setLogedInUser(){
                axios.get('/api/user').then(response=>{
                // this.data.user = response.data;
                let lres = this.LoginAction(response.data);
                lres.then(()=>{
                    localStorage.setItem('loginStatus',true);
                    this.$router.push({name:'examplecomponent'});
                }).catch(()=>{M.toast({html: "Failed to locate you", classes: 'rounded red'})});
            }).catch(response => {
                // M.toast({html: response.message, classes: 'rounded red'});
                this.setLoginNull();
            });
            },
            getSecrets(){
                axios.get('/api/secrets').then(response=>{
                    this.secrets = response.data;
                    console.log(response.data);
                });
            },
        }
    }
</script>
<style>
 .form-row{
     margin-bottom: 8px;
 }
 /* .btn{ */
     /* border-radius: 100px; */
 /* } */
</style>