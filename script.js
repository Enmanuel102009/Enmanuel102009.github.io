// Base de datos interna de elementos con configuraciones iónicas
const elements = {
    'H': { Z: 1, A: 1, e: 1, p: 1, n: 0, name: 'Hidrógeno', ion: '+1' },
    'He': { Z: 2, A: 4, e: 2, p: 2, n: 2, name: 'Helio', ion: '0' },
    'Li': { Z: 3, A: 7, e: 3, p: 3, n: 4, name: 'Litio', ion: '+1' },
    'Be': { Z: 4, A: 9, e: 4, p: 4, n: 5, name: 'Berilio', ion: '+2' },
    'B': { Z: 5, A: 11, e: 5, p: 5, n: 6, name: 'Boro', ion: '+3' },
    'C': { Z: 6, A: 12, e: 6, p: 6, n: 6, name: 'Carbono', ion: '+4/-4' },
    'N': { Z: 7, A: 14, e: 7, p: 7, n: 7, name: 'Nitrógeno', ion: '-3' },
    'O': { Z: 8, A: 16, e: 8, p: 8, n: 8, name: 'Oxígeno', ion: '-2' },
    'F': { Z: 9, A: 19, e: 9, p: 9, n: 10, name: 'Flúor', ion: '-1' },
    'Ne': { Z: 10, A: 20, e: 10, p: 10, n: 10, name: 'Neón', ion: '0' },
    'Na': { Z: 11, A: 23, e: 11, p: 11, n: 12, name: 'Sodio', ion: '+1' },
    'Mg': { Z: 12, A: 24, e: 12, p: 12, n: 12, name: 'Magnesio', ion: '+2' },
    'Al': { Z: 13, A: 27, e: 13, p: 13, n: 14, name: 'Aluminio', ion: '+3' },
    'Si': { Z: 14, A: 28, e: 14, p: 14, n: 14, name: 'Silicio', ion: '+4/-4' },
    'P': { Z: 15, A: 31, e: 15, p: 15, n: 16, name: 'Fósforo', ion: '-3' },
    'S': { Z: 16, A: 32, e: 16, p: 16, n: 16, name: 'Azufre', ion: '-2' },
    'Cl': { Z: 17, A: 35, e: 17, p: 17, n: 18, name: 'Cloro', ion: '-1' },
    'Ar': { Z: 18, A: 40, e: 18, p: 18, n: 22, name: 'Argón', ion: '0' },
    'K': { Z: 19, A: 39, e: 19, p: 19, n: 20, name: 'Potasio', ion: '+1' },
    'Ca': { Z: 20, A: 40, e: 20, p: 20, n: 20, name: 'Calcio', ion: '+2' },
    'Sc': { Z: 21, A: 45, e: 21, p: 21, n: 24, name: 'Escandio', ion: '+3' },
    'Ti': { Z: 22, A: 48, e: 22, p: 22, n: 26, name: 'Titanio', ion: '+4' },
    'V': { Z: 23, A: 51, e: 23, p: 23, n: 28, name: 'Vanadio', ion: '+5' },
    'Cr': { Z: 24, A: 52, e: 24, p: 24, n: 28, name: 'Cromo', ion: '+3/+6' },
    'Mn': { Z: 25, A: 55, e: 25, p: 25, n: 30, name: 'Manganeso', ion: '+2/+4/+7' },
    'Fe': { Z: 26, A: 56, e: 26, p: 26, n: 30, name: 'Hierro', ion: '+2/+3' },
    'Co': { Z: 27, A: 59, e: 27, p: 27, n: 32, name: 'Cobalto', ion: '+2/+3' },
    'Ni': { Z: 28, A: 59, e: 28, p: 28, n: 31, name: 'Níquel', ion: '+2/+3' },
    'Cu': { Z: 29, A: 64, e: 29, p: 29, n: 35, name: 'Cobre', ion: '+1/+2' },
    'Zn': { Z: 30, A: 65, e: 30, p: 30, n: 35, name: 'Zinc', ion: '+2' },
    'Ga': { Z: 31, A: 70, e: 31, p: 31, n: 39, name: 'Galio', ion: '+3' },
    'Ge': { Z: 32, A: 73, e: 32, p: 32, n: 41, name: 'Germanio', ion: '+4' },
    'As': { Z: 33, A: 75, e: 33, p: 33, n: 42, name: 'Arsénico', ion: '-3/+3' },
    'Se': { Z: 34, A: 78, e: 34, p: 34, n: 44, name: 'Selenio', ion: '-2/+4' },
    'Br': { Z: 35, A: 80, e: 35, p: 35, n: 45, name: 'Bromo', ion: '-1/+5' },
    'Kr': { Z: 36, A: 84, e: 36, p: 36, n: 48, name: 'Kriptón', ion: '0' },
    'Rb': { Z: 37, A: 86, e: 37, p: 37, n: 49, name: 'Rubidio', ion: '+1' },
    'Sr': { Z: 38, A: 88, e: 38, p: 38, n: 50, name: 'Estroncio', ion: '+2' },
    'Y': { Z: 39, A: 89, e: 39, p: 39, n: 50, name: 'Itrio', ion: '+3' },
    'Zr': { Z: 40, A: 91, e: 40, p: 40, n: 51, name: 'Zirconio', ion: '+4' },
    'Nb': { Z: 41, A: 92, e: 41, p: 41, n: 51, name: 'Niobio', ion: '+5' },
    'Mo': { Z: 42, A: 96, e: 42, p: 42, n: 54, name: 'Molibdeno', ion: '+4/+6' },
    'Tc': { Z: 43, A: 98, e: 43, p: 43, n: 55, name: 'Tecnecio', ion: '+7' },
    'Ru': { Z: 44, A: 101, e: 44, p: 44, n: 57, name: 'Rutenio', ion: '+3/+4' },
    'Rh': { Z: 45, A: 103, e: 45, p: 45, n: 58, name: 'Rodio', ion: '+3' },
    'Pd': { Z: 46, A: 106, e: 46, p: 46, n: 60, name: 'Paladio', ion: '+2/+4' },
    'Ag': { Z: 47, A: 108, e: 47, p: 47, n: 61, name: 'Plata', ion: '+1' },
    'Cd': { Z: 48, A: 112, e: 48, p: 48, n: 64, name: 'Cadmio', ion: '+2' },
    'In': { Z: 49, A: 115, e: 49, p: 49, n: 66, name: 'Indio', ion: '+3' },
    'Sn': { Z: 50, A: 118, e: 50, p: 50, n: 68, name: 'Estaño', ion: '+2/+4' },
    'Sb': { Z: 51, A: 121, e: 51, p: 51, n: 70, name: 'Antimonio', ion: '+3/+5' },
    'Te': { Z: 52, A: 128, e: 52, p: 52, n: 76, name: 'Telurio', ion: '-2/+4' },
    'I': { Z: 53, A: 127, e: 53, p: 53, n: 74, name: 'Yodo', ion: '-1/+5' },
    'Xe': { Z: 54, A: 131, e: 54, p: 54, n: 77, name: 'Xenón', ion: '0' },
    'Cs': { Z: 55, A: 132, e: 55, p: 55, n: 77, name: 'Cesio', ion: '+1' },
    'Ba': { Z: 56, A: 137, e: 56, p: 56, n: 81, name: 'Bario', ion: '+2' },
    'La': { Z: 57, A: 138, e: 57, p: 57, n: 81, name: 'Lantano', ion: '+3' },
    'Ce': { Z: 58, A: 140, e: 58, p: 58, n: 82, name: 'Cerio', ion: '+3/+4' },
    'Pr': { Z: 59, A: 141, e: 59, p: 59, n: 82, name: 'Praseodimio', ion: '+3' },
    'Nd': { Z: 60, A: 144, e: 60, p: 60, n: 84, name: 'Neodimio', ion: '+3' },
    'Pm': { Z: 61, A: 145, e: 61, p: 61, n: 84, name: 'Prometio', ion: '+3' },
    'Sm': { Z: 62, A: 150, e: 62, p: 62, n: 88, name: 'Samario', ion: '+3' },
    'Eu': { Z: 63, A: 152, e: 63, p: 63, n: 89, name: 'Europio', ion: '+2/+3' },
    'Gd': { Z: 64, A: 157, e: 64, p: 64, n: 93, name: 'Gadolinio', ion: '+3' },
    'Tb': { Z: 65, A: 158, e: 65, p: 65, n: 93, name: 'Terbio', ion: '+3' },
    'Dy': { Z: 66, A: 162, e: 66, p: 66, n: 96, name: 'Disprosio', ion: '+3' },
    'Ho': { Z: 67, A: 164, e: 67, p: 67, n: 97, name: 'Holmio', ion: '+3' },
    'Er': { Z: 68, A: 167, e: 68, p: 68, n: 99, name: 'Erbio', ion: '+3' },
    'Tm': { Z: 69, A: 169, e: 69, p: 69, n: 100, name: 'Tulio', ion: '+3' },
    'Yb': { Z: 70, A: 173, e: 70, p: 70, n: 103, name: 'Iterbio', ion: '+2/+3' },
    'Lu': { Z: 71, A: 175, e: 71, p: 71, n: 104, name: 'Lutecio', ion: '+3' },
    'Hf': { Z: 72, A: 178, e: 72, p: 72, n: 106, name: 'Hafnio', ion: '+4' },
    'Ta': { Z: 73, A: 181, e: 73, p: 73, n: 108, name: 'Tantalio', ion: '+5' },
    'W': { Z: 74, A: 184, e: 74, p: 74, n: 110, name: 'Wolframio', ion: '+6' },
    'Re': { Z: 75, A: 186, e: 75, p: 75, n: 111, name: 'Renio', ion: '+4/+7' },
    'Os': { Z: 76, A: 190, e: 76, p: 76, n: 114, name: 'Osmio', ion: '+4' },
    'Ir': { Z: 77, A: 192, e: 77, p: 77, n: 115, name: 'Iridio', ion: '+3/+4' },
    'Pt': { Z: 78, A: 195, e: 78, p: 78, n: 117, name: 'Platino', ion: '+2/+4' },
    'Au': { Z: 79, A: 197, e: 79, p: 79, n: 118, name: 'Oro', ion: '+1/+3' },
    'Hg': { Z: 80, A: 201, e: 80, p: 80, n: 121, name: 'Mercurio', ion: '+1/+2' },
    'Tl': { Z: 81, A: 204, e: 81, p: 81, n: 123, name: 'Talio', ion: '+1/+3' },
    'Pb': { Z: 82, A: 207, e: 82, p: 82, n: 125, name: 'Plomo', ion: '+2/+4' },
    'Bi': { Z: 83, A: 209, e: 83, p: 83, n: 126, name: 'Bismuto', ion: '+3' },
    'Po': { Z: 84, A: 210, e: 84, p: 84, n: 126, name: 'Polonio', ion: '+4/+6' },
    'At': { Z: 85, A: 210, e: 85, p: 85, n: 125, name: 'Astato', ion: '-1/+1/+3/+5/+7' },
    'Rn': { Z: 86, A: 222, e: 86, p: 86, n: 136, name: 'Radón', ion: '0' },
    'Fr': { Z: 87, A: 223, e: 87, p: 87, n: 136, name: 'Francio', ion: '+1' },
    'Ra': { Z: 88, A: 226, e: 88, p: 88, n: 138, name: 'Radio', ion: '+2' },
    'Ac': { Z: 89, A: 227, e: 89, p: 89, n: 138, name: 'Actinio', ion: '+3
    'Th': { Z: 90, A: 232, e: 90, p: 90, n: 142, name: 'Torio', ion: '+4' },
    'Pa': { Z: 91, A: 231, e: 91, p: 91, n: 140, name: 'Protactinio', ion: '+5' },
    'U': { Z: 92, A: 238, e: 92, p: 92, n: 146, name: 'Uranio', ion: '+6' },
    'Np': { Z: 93, A: 237, e: 93, p: 93, n: 144, name: 'Neptunio', ion: '+5' },
    'Pu': { Z: 94, A: 244, e: 94, p: 94, n: 150, name: 'Plutonio', ion: '+4' },
    'Am': { Z: 95, A: 243, e: 95, p: 95, n: 148, name: 'Americio', ion: '+3' },
    'Cm': { Z: 96, A: 247, e: 96, p: 96, n: 151, name: 'Curio', ion: '+3' },
    'Bk': { Z: 97, A: 247, e: 97, p: 97, n: 150, name: 'Berkelio', ion: '+3' },
    'Cf': { Z: 98, A: 251, e: 98, p: 98, n: 153, name: 'Californio', ion: '+3' },
    'Es': { Z: 99, A: 252, e: 99, p: 99, n: 153, name: 'Einstenio', ion: '+3' },
    'Fm': { Z: 100, A: 257, e: 100, p: 100, n: 157, name: 'Fermio', ion: '+3' },
    'Md': { Z: 101, A: 258, e: 101, p: 101, n: 157, name: 'Mendelevio', ion: '+2' },
    'No': { Z: 102, A: 259, e: 102, p: 102, n: 157, name: 'Nobelio', ion: '+2' },
    'Lr': { Z: 103, A: 262, e: 103, p: 103, n: 159, name: 'Lawrencio', ion: '+3' },
    'Rf': { Z: 104, A: 267, e: 104, p: 104, n: 163, name: 'Rutherfordio', ion: '+4' },
    'Db': { Z: 105, A: 268, e: 105, p: 105, n: 163, name: 'Dubnio', ion: '+5' },
    'Sg': { Z: 106, A: 271, e: 106, p: 106, n: 165, name: 'Seaborgio', ion: '+6' },
    'Bh': { Z: 107, A: 270, e: 107, p: 107, n: 163, name: 'Bohrio', ion: '+7' },
    'Hs': { Z: 108, A: 277, e: 108, p: 108, n: 169, name: 'Hassio', ion: '+8' },
    'Mt': { Z: 109, A: 276, e: 109, p: 109, n: 167, name: 'Meitnerio', ion: '+1' },
    'Ds': { Z: 110, A: 281, e: 110, p: 110, n: 171, name: 'Darmstadtio', ion: '+1' },
    'Rg': { Z: 111, A: 280, e: 111, p: 111, n: 169, name: 'Roentgenio', ion: '+1' },
    'Cn': { Z: 112, A: 285, e: 112, p: 112, n: 173, name: 'Copernicio', ion: '+2' },
    'Nh': { Z: 113, A: 286, e: 113, p: 113, n: 173, name: 'Nihonio', ion: '+1/+3' },
    'Fl': { Z: 114, A: 289, e: 114, p: 114, n: 175, name: 'Flerovio', ion: '+2/+4' },
    'Mc': { Z: 115, A: 290, e: 115, p: 115, n: 175, name: 'Moscovio', ion: '+1/+3' },
    'Lv': { Z: 116, A: 293, e: 116, p: 116, n: 177, name: 'Livermorio', ion: '+2/+4' },
    'Ts': { Z: 117, A: 294, e: 117, p: 117, n: 177, name: 'Tennessino', ion: '+1' },
    'Og': { Z: 118, A: 294, e: 118, p: 118, n: 176, name: 'Oganesón', ion: '0' }
};

// Configuración de gas noble
const nobleGases = {
    1: 'He',
    2: 'Ne',
    3: 'Ar',
    4: 'Kr',
    5: 'Xe',
    6: 'Rn',
    7: 'Og'
};

// Función para calcular la configuración electrónica e iónica
function calculate() {
    const inputValue = document.getElementById("inputValue").value.trim().toUpperCase();
    let element;

    try {
        // Comprobar si el valor ingresado es un símbolo, número atómico o variable con formato "Variable=Valor"
        if (elements[inputValue]) {
            // Buscar por símbolo
            element = elements[inputValue];
        } else if (!isNaN(inputValue)) {
            // Buscar por número atómico
            element = Object.values(elements).find(e => e.Z === parseInt(inputValue));
        } else {
            // Buscar por otras variables Z, e, P+, A, N
            const [variable, value] = inputValue.split("=");
            if (variable && value) {
                const numericValue = parseInt(value);
                if (isNaN(numericValue)) {
                    alert("El valor después del signo '=' debe ser un número.");
                    return;
                }
                switch (variable.toUpperCase()) {
                    case "Z":
                        element = Object.values(elements).find(e => e.Z === numericValue);
                        break;
                    case "E":
                        element = Object.values(elements).find(e => e.e === numericValue);
                        break;
                    case "P+":
                        element = Object.values(elements).find(e => e.p === numericValue);
                        break;
                    case "A":
                        element = Object.values(elements).find(e => e.A === numericValue);
                        break;
                    case "N":
                        element = Object.values(elements).find(e => e.n === numericValue);
                        break;
                    case "SYMBOL": // Añadimos la búsqueda por símbolo
                        element = elements[value.toUpperCase()];
                        if (!element) {
                            alert("Símbolo no encontrado.");
                            return;
                        }
                        break;
                    default:
                        alert("Variable no reconocida. Usa Z, e, P+, A o N.");
                        return;
                }
            } else {
                alert("Formato no válido. Usa 'Z=1', 'e=2', etc.");
                return;
            }
        }

        if (!element) {
            alert("Elemento no encontrado.");
            return;
        }

        // Actualizar los resultados
        document.getElementById("atomicNumber").innerText = element.Z;
        document.getElementById("electrons").innerText = element.e;
        document.getElementById("protons").innerText = element.p;
        document.getElementById("atomicMass").innerText = element.A;
        document.getElementById("neutrons").innerText = element.n;
        document.getElementById("electronConfig").innerText = calculateElectronConfiguration(element.e);
        document.getElementById("ionicConfig").innerText = calculateIonicConfiguration(element);
        document.getElementById("nobleGasSymbol").innerText = nobleGases[Math.ceil(element.Z / 10)];
        document.getElementById("elementName").innerText = element.name;
    } catch (error) {
        console.error("Error al calcular el elemento:", error);
        alert("Ocurrió un error al intentar calcular. Verifica la consola del navegador para más detalles.");
    }
}

// Función mejorada para calcular la configuración electrónica
function calculateElectronConfiguration(electrons) {
    const orbitals = [
        { name: "1s", maxElectrons: 2 },
        { name: "2s", maxElectrons: 2 },
        { name: "2p", maxElectrons: 6 },
        { name: "3s", maxElectrons: 2 },
        { name: "3p", maxElectrons: 6 },
        { name: "4s", maxElectrons: 2 },
        { name: "3d", maxElectrons: 10 },
        { name: "4p", maxElectrons: 6 },
        { name: "5s", maxElectrons: 2 },
        { name: "4d", maxElectrons: 10 },
        { name: "5p", maxElectrons: 6 },
        { name: "6s", maxElectrons: 2 },
        { name: "4f", maxElectrons: 14 },
        { name: "5d", maxElectrons: 10 },
        { name: "6p", maxElectrons: 6 },
        { name: "7s", maxElectrons: 2 },
        { name: "5f", maxElectrons: 14 },
        { name: "6d", maxElectrons: 10 },
        { name: "7p", maxElectrons: 6 }
    ];

    let configuration = [];
    let i = 0;

    while (electrons > 0 && i < orbitals.length) {
        
        con
const { name, maxElectrons } = orbitals[i];
        if (electrons >= maxElectrons) {
            configuration.
            configurati
push(`${name}${maxElectrons}`);
            electrons -= maxElectrons;
        } 
            electrons -= maxElectrons;
        } 

            electrons -= maxElectrons;
    

            electrons -

           
else {
            configuration.
            configuratio

            c
push(`${name}${electrons}`);
            electrons = 
            e

   
0;
        }
        i++;
    }

    
        }
        i++;
    }


        }
      

 
return configuration.join(', ');
}


}
// Función para calcular la configuración iónica (simplificada)
function calculateIonicConfiguration(element) {
    
 
return element.e > element.Z ? 'Configuración iónica positiva' : 'Configuración iónica negativa';
}
