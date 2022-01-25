
import '../App.css';
import Pelicula from './Pelicula';

//import PeliculasJson from './peliculas.json';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';
import { useState } from 'react';
import React, { useEffect } from 'react';

function ListadoPeliculas() {


	

	const [paginaActual, setPaginaActual] = useState(1);
	const[peliculas,setPeliculas]=useState([]);
	const TOTAL_POR_PAGINA = 4;

	//solo llamara a esta funcion solo cuando llame a peliculas, setpeliculas
	useEffect(()=>{
	buscarPeliculas();
	},[]);

	//let peliculas = PeliculasJson;

	const buscarPeliculas=async()=>{
		
		let url='https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json'
		
		 let respuesta= await fetch(url,{
			"method":"GET",
			//"mode":'no-cors',
			"headers":{
				"Accept": 'application/json',
				"Content-Type":'application/json',
				"Origin":'https://raw.githubusercontent.com/',
				//"Access-Control-Allow-Origin": "*",
				//"Access-Control-Allow-Credentials": true
				
			}
			
		});

		let json= await respuesta.json();
		setPeliculas(json);
		
		//alert(json);
	}

	

	const cargarPeliculas = () => {
	/*	*/
	}


	const getTotalPaginas = () => {
		let cantidadTotalDePeliculas = peliculas.length;
		return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
	}


	let peliculasPorPagina = peliculas.slice(
			(paginaActual - 1) * TOTAL_POR_PAGINA,
			paginaActual * TOTAL_POR_PAGINA
		);

	return (
		<PageWrapper>
			{peliculasPorPagina.map(pelicula =>
				<Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
					director={pelicula.director} actores={pelicula.actores}
					fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
					{pelicula.descripcion}
				</Pelicula>
			)}
			<Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
				setPaginaActual(pagina)
			}} />

		</PageWrapper>

	);
}

export default ListadoPeliculas;

