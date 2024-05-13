const mainBtnTextChange = () =>{
    let mainButton = document.querySelector(".main-button") 
    let motivationArray = JSON.parse(localStorage.getItem("motivationArray"))
    if(motivationArray === null){
        mainButton.textContent = "New motivation"
    }
}
  //changes the button text based on if there is a motivation already or not
export default mainBtnTextChange