import axios from 'axios'

export default {

    submit: function(answers) {
        return axios.post(`/api/survey`, {answers})
    },
 
}