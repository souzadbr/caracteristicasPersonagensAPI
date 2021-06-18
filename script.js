const busca = document.querySelector ("#busca")

const showData = (result)=> {
	for(const campo in result){
		if(document.querySelector("#"+campo)){
		document.querySelector("#"+campo).value = result[campo]		

	}
	}
}

busca.addEventListener("blur",(e)=>{
	let search = busca.value
	const options = {
	method: 'GET',
	mode: 'cors',
	cache:'default'
	}

fetch(`https://rickandmortyapi.com/api/character/${search}`, options)
.then((response) =>{return response.json()})
.then((data)=>{
	showData(data)
	document.getElementById("imagem1").src = data.image;

}).catch(e=> console.log('Deu Erro: '+ e,message))
})
