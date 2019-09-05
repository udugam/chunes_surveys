import axios from 'axios'

export default {

    submit: function(answers, id) {
        return axios.post(`/api/survey`, {answers, id})
    },
 
}