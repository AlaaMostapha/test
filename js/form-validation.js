function validateForm() {
    var zip_code = document.forms["myForm"]["zip-code"].value;
    var card_number = document.forms["myForm"]["card-number"].value;
    var city = document.forms["myForm"]["city"].value;
    var state = document.forms["myForm"]["state"].value;
    var country = document.forms["myForm"]["country"].value;
    var year = document.forms["myForm"]["year"].value;
    var month = document.forms["myForm"]["month"].value;
    var cvc = document.forms["myForm"]["cvc"].value;

    var validation_msg;
    var numbers = /^[0-9]+$/;
    var letters = /^[0-9a-zA-Z]+$/;

        if (!zip_code || !zip_code.match(numbers) || zip_code.length != 15) {
            validation_msg = "zip code must be filled out and consists of 15 number";
            document.forms["myForm"]["zip-code"].classList.add("danger");
            console.log(validation_msg);
            return false;
        }else{
            document.forms["myForm"]["zip-code"].classList.remove("danger");
        }
        if (!card_number || !card_number.match(numbers) || !card_number.length < 15 && card_number.length > 19) {
            validation_msg = "card_number must be filled out and it's length is between 15 and 19";
            document.forms["myForm"]["card-number"].classList.add("danger");
            console.log(validation_msg);
            return false;
        }else{
            document.forms["myForm"]["card-number"].classList.remove("danger");
        }
        if (!city || !city.match(letters)) {
            validation_msg = "state must be filled out and consists of characters";
            document.forms["myForm"]["city"].classList.add("danger");
            console.log(validation_msg);
            return false;
        }else{
            document.forms["myForm"]["city"].classList.remove("danger");
        }
        if (!state || !state.match(letters)) {
            validation_msg = "state must be filled out and consists of characters";
            document.forms["myForm"]["state"].classList.add("danger");
            console.log(validation_msg);
            return false;
        }else{
            document.forms["myForm"]["state"].classList.remove("danger");
        }
        if (!country || !country.match(letters)) {
            validation_msg = "country must be filled out and consists of characters";
            document.forms["myForm"]["country"].classList.add("danger");
            console.log(validation_msg);
            return false;
        }else{
            document.forms["myForm"]["country"].classList.remove("danger");
        }
        if (!year || !year.match(numbers) ||year.length != 2) {
            validation_msg = "year must be filled out and consists of 2 number";
            document.forms["myForm"]["year"].classList.add("danger");
            console.log(validation_msg);
            return false;
        }else{
            document.forms["myForm"]["year"].classList.remove("danger");
        }
        if (!month || !month.match(numbers) ||month.length != 2) {
            validation_msg = "month must be filled out and consists of 2 number";
            document.forms["myForm"]["month"].classList.add("danger");
            console.log(validation_msg);
            return false;
        }else{
            document.forms["myForm"]["month"].classList.remove("danger");
        }
        if (!cvc || !cvc.match(numbers) ||cvc.length != 4 ){
            validation_msg = "cvc must be filled out and consists of 2 number";
            document.forms["myForm"]["cvc"].classList.add("danger");
            console.log(validation_msg);
            return false;
        }else{
            document.forms["myForm"]["cvc"].classList.remove("danger");
        }

}
// document.getElementById('alert-name').innerHTML = 'Name field is empty or less than 3 characters!';