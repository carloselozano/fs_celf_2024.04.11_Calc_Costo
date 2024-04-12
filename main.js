

   var contPersonaCotizaOk = 1;
   var contEmailCotizaOk = 1;
   var contPesoOk = 1;
   var contCiudadOrigenOk = 1;
   var contCiudadDestinoOk = 1;

    function validarPersonaCotiza(){
        let personaCotiza= document.getElementById("personaCotiza").value;
        let formato=/^[a-zA-Z\s]+$/;

        if(personaCotiza==""){
            document.getElementById("errorPersonaCotiza").style.display = "block";
            document.getElementById("errorPersonaCotiza").innerHTML = "El Campo Persona Cotiza es obligatorio";
            contPersonaCotizaOk = 1;
        }
       else{ if(!formato.test(personaCotiza)){
                document.getElementById("errorPersonaCotiza").style.display ="block";
                document.getElementById("errorPersonaCotiza").innerHTML="El Campo Persona Cotiza debe ser Alfabetico";
                contPersonaCotizaOk = 1;
                }
             else
               {
                document.getElementById("errorPersonaCotiza").style.display ="none";  
                contPersonaCotizaOk = 0;
               }
       }
    }

    function validarEmailCotiza(){
      let emailCotiza= document.getElementById("emailCotiza").value;
      let formato=/^[\w.-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}$/;

      if(emailCotiza==""){
          document.getElementById("errorEmailCotiza").style.display = "block";
          document.getElementById("errorEmailCotiza").innerHTML = "El Campo Email es obligatorio";
          contEmailCotizaOk = 1;
      }
     else{ if(!formato.test(emailCotiza)){
              document.getElementById("errorEmailCotiza").style.display ="block";
              document.getElementById("errorEmailCotiza").innerHTML="El Campo Email es debe cumplir formato de correo electronico";
              contEmailCotizaOk = 1;
              }
           else
           {
              document.getElementById("errorEmailCotiza").style.display ="none";  
              contEmailCotizaOk = 0;
           }
     }
  }

    function validarPeso(){
        let peso = document.getElementById("peso").value;
        let formato=/^[0-9]$/;

        if(peso ==""){
            document.getElementById("errorPeso").style.display = "block";
            document.getElementById("errorPeso").innerHTML = "El campo Peso es obligatorio";
            contPesoOk = 1;
        }
       else{ if(!formato.test(peso)){
                document.getElementById("errorPeso").style.display ="block";
                document.getElementById("errorPeso").innerHTML="El campo Peso debe ser númerico";
                contPesoOk = 1;
                }
             else{
                document.getElementById("errorPeso").style.display ="none"; 
                contPesoOk = 0;
             } 
       }
    }


    function validarCiudadOrigen(){
      let ciudadOrigen= document.getElementById("ciudadOrigen").value;
      document.getElementById("respuestaCotizacion").style.display = "none";

      if(ciudadOrigen==""){
          document.getElementById("errorCiudadOrigen").style.display = "block";
          document.getElementById("errorCiudadOrigen").innerHTML = "El Campo Ciudad Origen es obligatorio";
          contCiudadOrigenOk = 1;

      }
      else{
          document.getElementById("errorCiudadOrigen").style.display ="none";  
          contCiudadOrigenOk = 0;
         }
   }

   function validarCiudadDestino(){
      let ciudadDestino= document.getElementById("ciudadDestino").value;
      
      document.getElementById("respuestaCotizacion").style.display = "none";

      if(ciudadDestino==""){
          document.getElementById("errorCiudadDestino").style.display = "block";
          document.getElementById("errorCiudadDestino").innerHTML = "El Campo Ciudad Destino es obligatorio";
          contCiudadDestinoOk = 1;

      }
      else{
          document.getElementById("errorCiudadDestino").style.display ="none";  
          contCiudadDestinoOk = 0;
      }
   }

   // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


    document.getElementById("personaCotiza").addEventListener("blur", validarPersonaCotiza);
    document.getElementById("emailCotiza").addEventListener("blur", validarEmailCotiza);
    document.getElementById("peso").addEventListener("blur", validarPeso);
    document.getElementById("ciudadOrigen").addEventListener("blur", validarCiudadOrigen);
    document.getElementById("ciudadDestino").addEventListener("blur", validarCiudadDestino);

    document.getElementById("ciudadOrigen").addEventListener("change", validarCiudadOrigen);
    document.getElementById("ciudadDestino").addEventListener("change", validarCiudadDestino);

   // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function enviarFormulario(){
       console.log("Enviar Formulario")

       if ( (contPersonaCotizaOk + contEmailCotizaOk + contPesoOk + contCiudadOrigenOk + contCiudadDestinoOk) > 0) {
         document.getElementById("btnEnviar").style.display ="none";  
       }
       else{
         document.getElementById("btnEnviar").style.display = "block";

       }
    }

   // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


   function calculaCosto(){
      let pesoCalcula = document.getElementById("peso").value;
      let ciudadOCalcula = document.getElementById("ciudadOrigen").value;
      let ciudadDCalcula = document.getElementById("ciudadDestino").value;
      let valorCalcula = 0;

      if (ciudadOCalcula == ciudadDCalcula){
          document.getElementById("respuestaCotizacion").style.display = "block";
          document.getElementById("respuestaCotizacion").innerHTML = "El valor del envío es de 100.000 pesos";
         }
         else{
            document.getElementById("respuestaCotizacion").style.display = "block";
            document.getElementById("respuestaCotizacion").innerHTML = "El valor del envío es de 300.000 pesos";
         }

   }
    
    document.getElementById("btnEnviar").addEventListener("click",calculaCosto);




