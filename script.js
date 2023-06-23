function prom(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello, world!");
        },1000)
    })
}
let x = prom();
x.then(data=>{
	const div = document.getElementById("output");
    div.innerText = data;
})
