function recibir() {

    let votaciones = document.getElementById("votaciones").value;

    
    const miArreglo =["Alcaldia", "Gobernacion", "Consejo", "Asamblea", "Edil"];

    /*EL METODO CON SHIFT ELIMINA EL PRIMER VALOR Y DESPLAZA EL SEGUNDO VALOR HACIA EL PRIMERO*/
    let h1 = document.createElement("h1");
    let h1texto = document.createTextNode(miArreglo);
    h1.appendChild(h1texto);

   
    miArreglo.shift()

  
   /*EL METOCO CON PUSH AGREGARA EL VALOR AL FINAL*/
    let lugar = document.getElementById("recibirDatos");


    let h2 = document.createElement("h2");
    let h2lugarVotaciones = document.createTextNode(miArreglo);
    miArreglo.push("Presidente");
    document.getElementById("recibirDatos1").innerHTML = miArreglo;
    h2.appendChild(h2lugarVotaciones);

    

      /*EL METODO UNSHIFT AGREGARA EL RESULTADO DE AL COMIENZO DE TODOS LO VALORES*/
    let zona = document.getElementById("recibirDatos");


    let h3 = document.createElement("h3");
    let h3Vota = document.createTextNode(miArreglo);
    miArreglo.unshift("Camara");
     document.getElementById("recibirDatos1").innerHTML = miArreglo;
    h3.appendChild(h3Vota);

  /*CON EL METODO LENGTH ES PARA VER LA LONGITUD DE LOS VALORES*/
    let puesto = miArreglo.length;
    document.getElementById("recibirDatos").innerHTML = puesto;


 

  



    recibirDatos.appendChild(h1);
    recibirDatos.appendChild(h2);
    recibirDatos.appendChild(h3);
    

}