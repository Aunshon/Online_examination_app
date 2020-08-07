<template>
        <div>
              <nav class="white">
                <div class="nav-wrapper">
                        <p style="cursor : pointer" data-target="slide-out" class="sidenav-trigger vue_color-text"><i class="material-icons">menu</i></p>
                        <router-link to="/" class="brand-logo center"><img class="logo" src="../asset/logo.png"></router-link>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li v-if="authenticated"><a class="vue_color-text" href="#" @click="logout"><i class="material-icons right">power_settings_new</i>Logout</a></li>
                            <li v-if="!authenticated"><router-link class="vue_color-text" to="/App/Login"><i class="material-icons left">login</i>Login</router-link></li>
                            
                        </ul>
                </div>
            </nav>

            <ul id="slide-out" class="sidenav">
                <li><div class="user-view">
                <div class="background">
                    <!-- <img src="http://s2.favim.com/orig/32/beautiful-beauty-color-fantastic-green-Favim.com-250463.jpg"> -->
                    <img class="back" src="../asset/back.jpg">
                </div>
                <a href="#user"><img class="circle" src="../asset/logo.png"></a>
                <a v-if="authenticated" href="#name"><span class="white-text name">{{getUser.name}}</span></a>
                <a v-if="authenticated" href="#email"><span class="white-text email">{{getUser.email}}</span></a>

                <a v-if="!authenticated" href="#name"><span class="transparent-text name">Your Name</span></a>
                <a v-if="!authenticated" href="#email"><span class="transparent-text email">Your Email</span></a>

                </div></li>
                <li v-if="authenticated" @click="closeMyNav"><a href="#!"><i class="material-icons">dashboard</i>Dahsboard</a></li>
                <li v-if="authenticated" @click="closeMyNav"><a href="#!"><i class="material-icons">account_circle</i>Profile</a></li>
                <li @click="closeMyNav"><div class="divider"></div></li>
                <li @click="closeMyNav"><a class="subheader">Others</a></li>
                <li @click="closeMyNav"><router-link class="waves-effect waves-vue_color" to="/"><i class="material-icons left">home</i>Home</router-link></li>
                <li v-if="!authenticated" @click="closeMyNav"><router-link class="waves-effect waves-vue_color" to="/App/Login"><i class="material-icons left">login</i>Login</router-link></li>
                <li v-if="authenticated" @click="closeMyNav"><router-link class="waves-effect waves-vue_color" to="/App/example"><i class="material-icons left">report_problem</i>examplecomponent</router-link></li>
                <li v-if="authenticated" @click="logout" class=" hide-on-large-only"><a class="vue_color-text" href="#"><i class="material-icons">power_settings_new</i>Logout</a></li>
            </ul>
            <!-- <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a> -->
        
        </div>
</template>
<script>
// import M from 'materialize-css';
// import "materialize-css/dist/js/materialize.min.js";
import { mapActions } from 'vuex';
 import { mapGetters } from "vuex";
export default {
    name: 'Nav',
    methods : {
        ...mapActions({
        LoginAction: 'auth/LoginAction' // map `this.add()` to `this.$store.dispatch('increment')`
        }),
        logout(e){
            e.preventDefault();
            axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/logout').then(response=>{
                if (response.status == 204) {
                    localStorage.removeItem('loginStatus');
                    this.LoginAction(null);
                    this.closeMyNav();
                    this.$router.push({name : 'LoginComponent'});
                }
            });
            });
        },
        toastMe(e){
            e.preventDefault();
            M.toast({html: 'I am a toast!', classes: 'rounded vue_color'});
        },
        closeMyNav(){
            let elems = document.querySelector('.sidenav');
            var instance = M.Sidenav.getInstance(elems);
            instance.close();
        },
    },
    mounted() {
        let elems = document.querySelector('.sidenav');
        let instances = M.Sidenav.init(elems);
    },
    computed:{
    ...mapGetters({
        authenticated: 'auth/authenticated', // map `this.add()` to `this.$store.dispatch('increment')`
        getUser : 'auth/user',
        }),
    },
}
</script>

<style>
    .logo{
        height: 64px;
    }
    .back{
        filter: brightness(60%);
    }
</style>