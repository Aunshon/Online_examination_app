import axios from 'axios'

export default new class Processor {
    LogedInUser() {
        axios.get('/api/user').then(response => {
            // this.data.user = response.data;
            this.id = response.data.id;
            this.name = response.data.name;
            this.email = response.data.email;
            // console.log(response.data);
        }).catch(response => {
            M.toast({
                html: response.message,
                classes: 'rounded red'
            });
            this.$router.push({
                name: 'LoginComponent'
            });
        });
    }
}