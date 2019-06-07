import axios from 'axios';

let zipcode = '9071801';
axios.get(`https://api.zipaddress.net/?zipcode=${zipcode}`)
    .then(function (response) {
        console.log(response);
        alert(response.data.data.fullAddress);
    })
    .catch(function (response) {
        console.log(response);
    });
