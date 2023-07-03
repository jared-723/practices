const users = [
	{
		name: "brayan",
		age: 23,
		ocupation: "dev",
		motivation: "lorem lorem lorem dolares",
		hobbies: ["running", "coding", "eat", "soccer", "video games", "rodar"],
	},
	{
		name: "Edwar León",
		age: 33,
		ocupation: "dev in progress",
		motivation: "ella",
		hobbies: ["ella", "ella", "ella", "ella"],
	},
	{
		name: "Leonardo",
		age: 28,
		ocupation: "estudiar programacion",
		motivation: "el dinero",
		hobbies: ["impresion3d", "programar", "masprogramacion", "backend"],
	},
	{
		name: "Juan",
		age: 26,
		ocupation: "Dj",
		motivation: "Mi mama xd",
		hobbies: ["Mezclar", "Ir a raves", "futbol", "read"],
	},
	{
		name: "Danilo_Florez",
		age: 25,
		ocupation: "Estudiante y Depotista de alto rendimiento",
		motivation: "El dinero y el exito",
		hobbies: ["programar", "jugar futbol", "dormir", "ir a caminar"],
	},
	{
		name: "Daniel",
		age: 20,
		ocupation: "model",
		motivation: "la fiesta",
		hobbies: ["futbol", "musica", "pasión de gavilanes", "las mujeres"],
	},
	{
		name: "Juan Carcamo",
		age: 23,
		ocupation: "Estudiante",
		motivation: "Los dolares",
		hobbies: ["futbol", "gym", "paliculas", "programar"],
	},
	{
		name: "Yonkleiverson",
		age: 20,
		ocupation: "comerciante",
		motivation: "el tusi",
		hobbies: [
			"jugar free fire",
			"ir a misa",
			"estudiar arduamente",
			"comer perros de 0.5$",
		],
	},
	{
		name: "Cistian Fabra Lar",
		age: 25,
		ocupation: "Diseño grafico",
		motivation: "Dolares",
		hobbies: ["fut", "box", "bike", "tenis"],
	},
	{
		name: "Sergio",
		age: 24,
		ocupation: "Studing",
		motivation: "$$$",
		hobbies: ["Calistenics", "Guitar", "comer", "pelear"],
	},
	{
		name: "Gustavo Alberto Molano Ruiz",
		age: 54,
		ocupation: "Licenciado en Informática",
		motivation: "motorbikes",
		hobbies: ["programming", "bikes", "databases", "cooking"],
	},
	{
		name: "Polo",
		age: 19,
		ocupation: "aprender a programar",
		motivation: "Euros",
		hobbies: ["ejercicio", "cocinar", "peliculas", "anime"],
	},
	{
		name: "Ariel",
		age: 25,
		ocupation: "joseador",
		motivation: "la plata",
		hobbies: ["fútbol", "River", "Lol", "tarde de plaza con los vagos"],
	},
	{
		name: "Angel Nieto",
		age: 29,
		ocupation: "Maestro de matematicas",
		motivation: "Estudiar",
		hobbies: ["Comer", "Bañarme", "dormir", "jugar parkes"],
	},
	{
		name: "Cristian Agudelo",
		age: 26,
		ocupation: "Papa de un hermoso hijo",
		motivation: "Mi Hijo",
		hobbies: ["Atlético Nacional", "Baloncesto", "Correr", "Billar Pool"],
	},
];



function addList(arr){
    let html='';
    for(let data of arr){
        html += `<li>${data}</li>`
    }
    return html;
}

function db(){
    const cardHTML = document.querySelector('.main');
    let html=''
    for(let user of users){

        html +=`
        <div class="card__user">
        <h3>${user.name}</h3>
        <p>Edad:${user.age} - ocupación:${user.ocupation}</p>
        <p>Motivación: <b>${user.motivation}</b> </p>
        <h3>'Hobbies'</h3>
        <ul>${addList(user.hobbies)}</ul>
        </div>
        `
        cardHTML.innerHTML= html;
    }

};

db();