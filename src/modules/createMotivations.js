const createMotivations = () =>{
        let motivationArray = JSON.parse(localStorage.getItem("motivationArray"))
        let motivationList = document.querySelector(".motivation-list")


        if(motivationArray === null){
            motivationContainer.style.display = "none" // hide empty list, if it is empty
        }else{
            for(let motivation of motivationArray){
                let motivationContainer = document.createElement("div")
                motivationContainer.classList.add("motivation-container")

                let img = document.createElement("img")
                img.src = motivation.url
                img.classList.add("motivation-container__image")

                let span = document.createElement("span")
                span.textContent = motivation.text
                span.classList.add("motivation-container__text")

                motivationContainer.appendChild(img)
                motivationContainer.appendChild(span)
                motivationList.appendChild(motivationContainer)

        }
    }
}

export default createMotivations