var firstname = 'Whitney';
var lastname = 'Cheung';
var city = 'Mijdrecht';

function i18l(language){
    switch(language){
        case 'nl':
            return({
                firstname: firstname,
                lastname: lastname,
                city: city
            })
            break;
    
        default:    
        case 'uk':
            return({
                firstname: firstname,
                lastname: lastname,
                city: city
            })
            break;
    }
}

module.exports = {i18l};