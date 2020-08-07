<template>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                        <p>User Name : {{getUser.name}}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>    
    import { mapGetters } from "vuex";
    export default {
        name : 'examplecomponent',
        data(){
            return{
                id :'',
                name : '',
                email : '',
            }
        },
        computed:{
        ...mapGetters({
            authenticated: 'auth/authenticated', // map `this.add()` to `this.$store.dispatch('increment')`
            getUser : 'auth/user',
            }),
        },
        mounted(){
            // console.log(this.getUser);
        }
    }
</script>
