import fetch from "node-fetch";

class ValidationProvider {

    constructor(api_key) {
        this.api_key = api_key
    }

    getEmailValidation = async function(email) {

        const data = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=${this.api_key}&email=${email}`)
        const response = await data.json()

        const datas = {
            "is_valid": response.is_valid_format.value,
            "quality_score": response.quality_score,
            "deliverability": response.deliverability
        }
        console.log(datas)
        return datas
    }

    getPhoneValidation = async function(number) {

        const data = await fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=f0c05605a996485d9945695d966acbe3&phone=${number}`)
        const response = await data.json()

        const datas = {
            "is_valid": response.valid,
            "provider": response.carrier,
            "country": response.country.name
        }
        console.log(datas)
        return datas
    }
}