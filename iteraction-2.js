const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (alumno of alumns){
    if ((alumno.T1 && alumno.T2) || (alumno.T2 && alumno.T3) || (alumno.T1 && alumno.T3)){
        alumno.isApproved = true;
        // console.log(alumno)
    } if (!alumno.T1 && !alumno.T2){
        alumno.isApproved = false;
    }
    console.log(alumno);
    } 


