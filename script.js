function prom(){
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve("Hello World!")
		},1000)
	})
}

let x = prom();
x.then((data)=>{
	const div = document.getEelentById("output");
	div.innerText = data;
})