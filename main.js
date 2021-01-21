generateUrl = text => "https://api.funtranslations.com/translate/minion.json?text="+text
function runFun(){
    var inputEle = document.querySelector("textarea");
    var outEle = document.querySelector("#out");
    var res = fetch(generateUrl(inputEle.value)).then(res => res.json()).then(json => {
        outEle.innerHTML = json.contents.translated;
    }).catch(err=>console.log("Error:",err));
}
document.querySelector("#btn").addEventListener('click',runFun);