class ValidationProvider {

    is_valid;
    quality_score;

    getEmailValidation(email) {
        fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=c5c66b0590814f0991853d1d9f3fc183&email=${email}`)
            .then(res => {
                this.is_valid = res['data']['is_valid_format'].value;
                this.quality_score = res['data']['quality_score']
            })
        return this.quality_score
    }
}