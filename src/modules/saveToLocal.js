const saveToLocal = (e)=>{
    let saveButton = document.querySelector(".saveButton")
    saveButton.addEventListener("click", ()=>{
        let url = document.querySelector(".motivation-form__url").value
        let text = document.querySelector(".motivation-form__text").value
        let motivationArray = JSON.parse(localStorage.getItem("motivationArray")) || [];
        let motivationObject = {
            url: url,
            text: text
        };

        if(motivationObject.text !== "" || motivationObject.url !== ""){ //check if input fields are not empty
            motivationArray.push(motivationObject);
            localStorage.setItem("motivationArray", JSON.stringify(motivationArray))
            window.location.reload()
        } else{
            window.alert("Don't leave url and text empty!")
        }

    })
}



export default saveToLocal

