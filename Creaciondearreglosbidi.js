//Ejercicio creacion de arreglos bidimensionales

function creacionArreglosBidimensionales() {
    let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let arreglo = new Array(9);
    let cont = 0;
    //Convierto matriz a arreglo para hacer una 4x4 con 0,10 y 11
    //
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            arreglo[cont] = matriz[i][j];
            cont++;
        }
    }
    arreglo.push(0);
    arreglo.push(10);
    arreglo.push(11);
    //Ordeno porque entran al final
    arreglo.sort(function (a, b) { return a - b });

    
        let matrizBase = new Array(3);
        for (let i = 0; i < matrizBase.length; i++) {
            matrizBase[i] = new Array(4);
        }
        cont = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                matrizBase[i][j] = arreglo[cont];
                cont++;
            }
        }
        
        console.log(matrizBase);


        
        let matrizCuadrada = new Array(3);
        for (let i = 0; i < 3; i++) {
            matrizCuadrada[i] = new Array(4);
        }

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                matrizCuadrada[i][j] = matrizBase[i][j] * matrizBase[i][j];

            }
        }
        console.log(matrizCuadrada);
        let matrizDiferenteOrden = new Array(4);
        for (let i = 0; i < 4; i++) {
            matrizDiferenteOrden[i] = new Array(3);
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                matrizDiferenteOrden[j][i] = matrizBase[i][j];

            }
        }
        console.log(matrizDiferenteOrden);
        
        let matrizElementosEliminados = new Array(3);
        for (let i = 0; i < 3; i++) {
            matrizElementosEliminados[i] = new Array(3);
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                matrizElementosEliminados[i][j] = matrizBase[i][j];
            }
        }
        console.log(matrizElementosEliminados);
    
        let matrizOrdenInverso = new Array(4);
        for (let i = 0; i < 4; i++) {
            matrizOrdenInverso[i] = new Array(3);
        }
        let x = 0, y = 0;
        for (let i = matrizDiferenteOrden.length - 1; i >= 0; i--) {
            for (let j = matrizDiferenteOrden[i].length - 1; j >= 0; j--) {
                matrizOrdenInverso[x][y] = (matrizDiferenteOrden[i][j]) + 0.5;
                if (y == 2) {
                    x++;
                    y = 0;
                }
                else y++;
            }

        }
        console.log(matrizOrdenInverso);

        let matrizCentenasColumna = new Array(3);
        for (let i = 0; i < 3; i++) {
            matrizCentenasColumna[i] = new Array(4);
        }
        let valorSumar = 100;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                matrizCentenasColumna[i][j] = matrizBase[i][j] + valorSumar;
                valorSumar += 100;
            } valorSumar = 100;
        }
        console.log(matrizCentenasColumna);
    
        let matrizCentenasFila = new Array(3);
        for (let i = 0; i < 3; i++) {
            matrizCentenasFila[i] = new Array(4);
        }
        valorSumar = 100;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                matrizCentenasFila[i][j] = matrizBase[i][j] + valorSumar;

            } valorSumar += 100;
        }
        console.log(matrizCentenasFila);
    

}