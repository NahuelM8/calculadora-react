import React, { useState } from "react";
import "./estilos/App.css";

const App = () => {
	let [resultado, setResultado] = useState("");
	let [calculo, setCalculo] = useState("");

	const imprimir = (str) => {
		setResultado(resultado.concat(str));
	};

	const suprimir = () => {
		setResultado(resultado.slice(0, -1));
	};

	const limpiar = () => {
		setResultado("");
		setCalculo("");
	};

	const deshabilitarDespuesError = () => {};

	const calcular = () => {
		try {
			setCalculo(resultado.concat("="));
			setResultado(eval(resultado).toString());
		} catch (error) {
			setCalculo("ERROR");
			setResultado("[AC]: Back");
		}
	};

	return (
		<div id="wrapper">
			<div className="calculadora">
				<div className="contenedor-calculadora">
					<div className="visor-calculadora">
						<p className="visor-calculo">{calculo}</p>
						<p className="visor-resultado">{resultado}</p>
					</div>
					<div className="botonera-calculadora">
						<div className="boton-calculadora numero" onClick={() => imprimir("(")}>
							{"("}
						</div>
						<div className="boton-calculadora numero" onClick={() => imprimir(")")}>
							{")"}
						</div>
						<div className="boton-calculadora borrar" onClick={suprimir}>
							DEL
						</div>
						<div className="boton-calculadora borrar" onClick={limpiar}>
							AC
						</div>
						<div className="boton-calculadora numero" onClick={() => imprimir("7")}>
							7
						</div>
						<div className="boton-calculadora numero" onClick={() => imprimir("8")}>
							8
						</div>
						<div className="boton-calculadora numero" onClick={() => imprimir("9")}>
							9
						</div>
						<div
							className="boton-calculadora operacion"
							onClick={() => imprimir("/")}>
							/
						</div>
						<div className="boton-calculadora numero" onClick={() => imprimir("6")}>
							6
						</div>
						<div className="boton-calculadora numero" onClick={() => imprimir("5")}>
							5
						</div>
						<div className="boton-calculadora numero" onClick={() => imprimir("4")}>
							4
						</div>
						<div
							className="boton-calculadora operacion"
							onClick={() => imprimir("*")}>
							*
						</div>
						<div className="boton-calculadora numero" onClick={() => imprimir("3")}>
							3
						</div>
						<div className="boton-calculadora numero" onClick={() => imprimir("2")}>
							2
						</div>
						<div className="boton-calculadora numero" onClick={() => imprimir("1")}>
							1
						</div>
						<div
							className="boton-calculadora operacion"
							onClick={() => imprimir("-")}>
							-
						</div>
						<div className="boton-calculadora numero" onClick={() => imprimir("0")}>
							0
						</div>
						<div
							className="boton-calculadora numero punto"
							onClick={() => imprimir(".")}>
							.
						</div>
						<div className="boton-calculadora resultado" onClick={calcular}>
							=
						</div>
						<div
							className="boton-calculadora operacion"
							onClick={() => imprimir("+")}>
							+
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
