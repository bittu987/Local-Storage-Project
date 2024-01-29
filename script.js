
    document.getElementById("input").addEventListener('input',()=>{
    let input = document.getElementById("input").value;
    localStorage.setItem("savedText",input);
})

if (localStorage.getItem("savedText")) {
    document.getElementById("input").value = localStorage.getItem("savedText");
}










