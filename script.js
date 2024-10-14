// Base de datos interna de elementos
const elements = {
    'H':   { Z: 1,   A: 1,  e: 1,  p: 1,  n: 0,   name: 'Hidrógeno' },
    'He':  { Z: 2,   A: 4,  e: 2,  p: 2,  n: 2,   name: 'Helio' },
    'Li':  { Z: 3,   A: 7,  e: 3,  p: 3,  n: 4,   name: 'Litio' },
    'Be':  { Z: 4,   A: 9,  e: 4,  p: 4,  n: 5,   name: 'Berilio' },
    'B':   { Z: 5,   A: 11, e: 5,  p: 5,  n: 6,   name: 'Boro' },
    'C':   { Z: 6,   A: 12, e: 6,  p: 6,  n: 6,   name: 'Carbono' },
    'N':   { Z: 7,   A: 14, e: 7,  p: 7,  n: 7,   name: 'Nitrógeno' },
    'O':   { Z: 8,   A: 16, e: 8,  p: 8,  n: 8,   name: 'Oxígeno' },
    'F':   { Z: 9,   A: 19, e: 9,  p: 9,  n: 10,  name: 'Flúor' },
    'Ne':  { Z: 10,  A: 20, e: 10, p: 10, n: 10,  name: 'Neón' },
    'Na':  { Z: 11,  A: 23, e: 11, p: 11, n: 12,  name: 'Sodio' },
    'Mg':  { Z: 12,  A: 24, e: 12, p: 12, n: 12,  name: 'Magnesio' },
    'Al':  { Z: 13,  A: 27, e: 13, p: 13, n: 14,  name: 'Aluminio' },
    'Si':  { Z: 14,  A: 28, e: 14, p: 14, n: 14,  name: 'Silicio' },
    'P':   { Z: 15,  A: 31, e: 15, p: 15, n: 16,  name: 'Fósforo' },
    'S':   { Z: 16,  A: 32, e: 16, p: 16, n: 16,  name: 'Azufre' },
    'Cl':  { Z: 17,  A: 35, e: 17, p: 17, n: 18,  name: 'Cloro' },
    'Ar':  { Z: 18,  A: 40, e: 18, p: 18, n: 22,  name: 'Argón' },
    'K':   { Z: 19,  A: 39, e: 19, p: 19, n: 20,  name: 'Potasio' },
    'Ca':  { Z: 20,  A: 40, e: 20, p: 20, n: 20,  name: 'Calcio' },
    'Sc':  { Z: 21,  A: 45, e: 21, p: 21, n: 24,  name: 'Escandio' },
    'Ti':  { Z: 22,  A: 48, e: 22, p: 22, n: 26,  name: 'Titanio' },
    'V':   { Z: 23,  A: 51, e: 23, p: 23, n: 28,  name: 'Vanadio' },
    'Cr':  { Z: 24,  A: 52, e: 24, p: 24, n: 28,  name: 'Cromo' },
    'Mn':  { Z: 25,  A: 55, e: 25, p: 25, n: 30,  name: 'Manganeso' },
    'Fe':  { Z: 26,  A: 56, e: 26, p: 26, n: 30,  name: 'Hierro' },
    'Co':  { Z: 27,  A: 59, e: 27, p: 27, n: 32,  name: 'Cobalto' },
    'Ni':  { Z: 28,  A: 59, e: 28, p: 28, n: 31,  name: 'Níquel' },
    'Cu':  { Z: 29,  A: 64, e: 29, p: 29, n: 35,  name: 'Cobre' },
    'Zn':  { Z: 30,  A: 65, e: 30, p: 30, n: 35,  name: 'Zinc' },
    'Ga':  { Z: 31,  A: 70, e: 31, p: 31, n: 39,  name: 'Galio' },
    'Ge':  { Z: 32,  A: 73, e: 32, p: 32, n: 41,  name: 'Germanio' },
    'As':  { Z: 33,  A: 75, e: 33, p: 33, n: 42,  name: 'Arsénico' },
    'Se':  { Z: 34,  A: 78, e: 34, p: 34, n: 44,  name: 'Selenio' },
    'Br':  { Z: 35,  A: 80, e: 35, p: 35, n: 45,  name: 'Bromo' },
    'Kr':  { Z: 36,  A: 84, e: 36, p: 36, n: 48,  name: 'Kriptón' },
    'Rb':  { Z: 37,  A: 86, e: 37, p: 37, n: 49,  name: 'Rubidio' },
    'Sr':  { Z: 38,  A: 88, e: 38, p: 38, n: 50,  name: 'Estroncio' },
    'Y':   { Z: 39,  A: 89, e: 39, p: 39, n: 50,  name: 'Itrio' },
    'Zr':  { Z: 40,  A: 91, e: 40, p: 40, n: 51,  name: 'Zirconio' },
    'Nb':  { Z: 41,  A: 92, e: 41, p: 41, n: 51,  name: 'Niobio' },
    'Mo':  { Z: 42,  A: 96, e: 42, p: 42, n: 54,  name: 'Moliendo' },
    'Tc':  { Z: 43,  A: 98, e: 43, p: 43, n: 55,  name: 'Tecnecio' },
    'Ru':  { Z: 44,  A: 101,e: 44, p: 44, n: 57,  name: 'Rutenio' },
    'Rh':  { Z: 45,  A: 103,e: 45, p: 45, n: 58,  name: 'Rodio' },
    'Pd':  { Z: 46,  A: 106,e: 46, p: 46, n: 60,  name: 'Paladio' },
    'Ag':  { Z: 47,  A: 108,e: 47, p: 47, n: 61,  name: 'Plata' },
    'Cd':  { Z: 48,  A: 112,e: 48, p: 48, n: 64,  name: 'Cadmio' },
    'In':  { Z: 49,  A: 115,e: 49, p: 49, n: 66,  name: 'Indio' },
    'Sn':  { Z: 50,  A: 118,e: 50, p: 50, n: 68,  name: 'Estaño' },
    'Sb':  { Z: 51,  A: 121,e: 51, p: 51, n: 70,  name: 'Antimonio' },
    'Te':  { Z: 52,  A: 128,e: 52, p: 52, n: 76,  name: 'Telurio' },
    'I':   { Z: 53,  A: 127,e: 53, p: 53, n: 74,  name: 'Yodo' },
    'Xe':  { Z: 54,  A: 131,e: 54, p: 54, n: 77,  name: 'Xenón' },
    'Cs':  { Z: 55,  A: 132,e: 55, p: 55, n: 77,  name: 'Cesio' },
    'Ba':  { Z: 56,  A: 137,e: 56, p: 56, n: 81,  name: 'Bario' },
    'La':  { Z: 57,  A: 138,e: 57, p: 57, n: 81,  name: 'Lantano' },
    'Ce':  { Z: 58,  A: 140,e: 58, p: 58, n: 82,  name: 'Cerio' },
    'Pr':  { Z: 59,  A: 141,e: 59, p: 59, n: 82,  name: 'Praseodimio' },
    'Nd':  { Z: 60,  A: 144,e: 60, p: 60, n: 84,  name: 'Neodimio' },
    'Pm':  { Z: 61,  A: 145,e: 61, p: 61, n: 84,  name: 'Prometio' },
    'Sm':  { Z: 62,  A: 150,e: 62, p: 62, n: 88,  name: 'Samario' },
    'Eu':  { Z: 63,  A: 152,e: 63, p: 63, n: 89,  name: 'Europio' },
    'Gd':  { Z: 64,  A: 157,e: 64, p: 64, n: 93,  name: 'Gadolinio' },
    'Tb':  { Z: 65,  A: 158,e: 65, p: 65, n: 93,  name: 'Terbio' },
    'Dy':  { Z: 66,  A: 162,e: 66, p: 66, n: 96,  name: 'Disprosio' },
    'Ho':  { Z: 67,  A: 164,e: 67, p: 67, n: 97,  name: 'Holmio' },
    'Er':  { Z: 68,  A: 167,e: 68, p: 68, n: 99,  name: 'Erbio' },
    'Tm':  { Z: 69,  A: 169,e: 69, p: 69, n: 100, name: 'Terlencio' },
    'Yb':  { Z: 70,  A: 173,e: 70, p: 70, n: 103, name: 'Iterbio' },
    'Lu':  { Z: 71,  A: 175,e: 71, p: 71, n: 104, name: 'Lutecio' },
    'Hf':  { Z: 72,  A: 178,e: 72, p: 72, n: 106, name: 'Hafnio' },
    'Ta':  { Z: 73,  A: 181,e: 73, p: 73, n: 108, name: 'Tantalio' },
    'W':   { Z: 74,  A: 184,e: 74, p: 74, n: 110, name: 'Wolframio' },
    'Re':  { Z: 75,  A: 186,e: 75, p: 75, n: 111, name: 'Renio' },
    'Os':  { Z: 76,  A: 190,e: 76, p: 76, n: 114, name: 'Osmio' },
    'Ir':  { Z: 77,  A: 192,e: 77, p: 77, n: 115, name: 'Iridio' },
    'Pt':  { Z: 78,  A: 195,e: 78, p: 78, n: 117, name: 'Platino' },
    'Au':  { Z: 79,  A: 197,e: 79, p: 79, n: 118, name: 'Oro' },
    'Hg':  { Z: 80,  A: 201,e: 80, p: 80, n: 121, name: 'Mercurio' },
    'Tl':  { Z: 81,  A: 204,e: 81, p: 81, n: 123, name: 'Talio' },
    'Pb':  { Z: 82,  A: 207,e: 82, p: 82, n: 125, name: 'Plomo' },
    'Bi':  { Z: 83,  A: 209,e: 83, p: 83, n: 126, name: 'Bismuto' },
    'Po':  { Z: 84,  A: 210,e: 84, p: 84, n: 126, name: 'Polonio' },
    'At':  { Z: 85,  A: 210,e: 85, p: 85, n: 125, name: 'Astato' },
    'Rn':  { Z: 86,  A: 222,e: 86, p: 86, n: 136, name: 'Radón' },
    'Fr':  { Z: 87,  A: 223,e: 87, p: 87, n: 136, name: 'Francio' },
    'Ra':  { Z: 88,  A: 226,e: 88, p: 88, n: 138, name: 'Radio' },
    'Ac':  { Z: 89,  A: 227,e: 89, p: 89, n: 138, name: 'Actinio' },
    'Th':  { Z: 90,  A: 232,e: 90, p: 90, n: 142, name: 'Torio' },
    'Pa':  { Z: 91,  A: 231,e: 91, p: 91, n: 140, name: 'Protactinio' },
    'U':   { Z: 92,  A: 238,e: 92, p: 92, n: 146, name: 'Uranio' },
    'Np':  { Z: 93,  A: 237,e: 93, p: 93, n: 144, name: 'Neptunio' },
    'Pu':  { Z: 94,  A: 244,e: 94, p: 94, n: 150, name: 'Plutonio' },
    'Am':  { Z: 95,  A: 243,e: 95, p: 95, n: 148, name: 'Americio' },
    'Cm':  { Z: 96,  A: 247,e: 96, p: 96, n: 151, name: 'Curio' },
    'Bk':  { Z: 97,  A: 247,e: 97, p: 97, n: 150, name: 'Berkelio' },
    'Cf':  { Z: 98,  A: 251,e: 98, p: 98, n: 153, name: 'Californio' },
    'Es':  { Z: 99,  A: 252,e: 99, p: 99, n: 153, name: 'Einstenio' },
    'Fm':  { Z: 100,A: 257,e: 100,p: 100,n: 157, name: 'Fermio' },
    'Md':  { Z: 101,A: 258,e: 101,p: 101,n: 157, name: 'Mendelevio' },
    'No':  { Z: 102,A: 259,e: 102,p: 102,n: 157, name: 'Nobelio' },
    'Lr':  { Z: 103,A: 262,e: 103,p: 103,n: 159, name: 'Lawrencio' },
    'Rf':  { Z: 104,A: 267,e: 104,p: 104,n: 163, name: 'Rutherfordio' },
    'Db':  { Z: 105,A: 268,e: 105,p: 105,n: 163, name: 'Dubnio' },
    'Sg':  { Z: 106,A: 271,e: 106,p: 106,n: 165, name: 'Seaborgio' },
    'Bh':  { Z: 107,A: 270,e: 107,p: 107,n: 163, name: 'Bohrium' },
    'Hs':  { Z: 108,A: 277,e: 108,p: 108,n: 169, name: 'Hassio' },
    'Mt':  { Z: 109,A: 276,e: 109,p: 109,n: 167, name: 'Meitnerio' },
    'Ds':  { Z: 110,A: 281,e: 110,p: 110,n: 171, name: 'Darmstadtio' },
    'Rg':  { Z: 111,A: 280,e: 111,p: 111,n: 169, name: 'Roentgenio' },
    'Cn':  { Z: 112,A: 285,e: 112,p: 112,n: 173, name: 'Copernicio' },
    'Nh':  { Z: 113,A: 286,e: 113,p: 113,n: 173, name: 'Nihonio' },
    'Fl':  { Z: 114,A: 289,e: 114,p: 114,n: 175, name: 'Flerovio' },
    'Mc':  { Z: 115,A: 290,e: 115,p: 115,n: 175, name: 'Moscovio' },
    'Lv':  { Z: 116,A: 293,e: 116,p: 116,n: 177, name: 'Livermorio' },
    'Ts':  { Z: 117,A: 294,e: 117,p: 117,n: 177, name: 'Tennessino' },
    'Og':  { Z: 118,A: 294,e: 118,p: 118,n: 176, name: 'Oganesón' },
};

// Configuracion de gas noble
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
        // Comprobar si el valor ingresado es un símbolo, número atómico, o variable con formato "Variable=Valor"
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
                switch (variable) {
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
        document.getElementById("ionicConfig").innerText = "Pendiente de cálculo"; // Puedes agregar más lógica aquí
        document.getElementById("nobleGasSymbol").innerText = nobleGases[Math.ceil(element.Z / 10)];
        document.getElementById("elementName").innerText = element.name;
    } catch (error) {
        console.error("Error al calcular el elemento:", error);
        alert("Ocurrió un error al intentar calcular. Verifica la consola del navegador para más detalles.");
    }
}

// Función mejorada para calcular la configuración electrónica con separación por comas
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

    let configuration = "";
    let i = 0;

    while (electrons > 0 && i < orbitals.length) {
        const { name, maxElectrons } = orbitals[i];
        if (electrons >= maxElectrons) {
            configuration += `${name}${maxElectrons} `;
            electrons -= maxElectrons;
        } else {
            configuration += `${name}${electrons} `;
            electrons = 0;
        }
        i++;
    }

    return configuration.trim();
}

