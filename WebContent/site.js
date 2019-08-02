function validaFormulario(){
    if (document.fichacadastral.txtnome.value == ""){

        alert("Preencha o nome");
        
        document.fichacadastral.txtnome.focus();
        
        return false;

    }
    if (document.fichacadastral.dataNasc.value == ""){

        alert("Preencha a data de nascimento");
        
        document.fichacadastral.dataNasc.focus();
        
        return false;

    }
    if (document.fichacadastral.txtCpf.value == ""){

        alert("Preencha o cpf");
        
        document.fichacadastral.txtCpf.focus();
        
        return false;

    }
    if (document.fichacadastral.txtEmail.value == ""){

        alert("Preencha o email");
        
        document.fichacadastral.txtEmail.focus();
        
        return false;

    }
    if (document.fichacadastral.numTelefone.value == ""){

        alert("Preencha o telefone");
        
        document.fichacadastral.numTelefone.focus();
        
        return false;

    }
    if (!document.fichacadastral.genero.value){
        
        alert("Escolha um gênero")

        return false;
    }
    if (!document.fichacadastral.checkbox.cheked){

        alert("Concorde com os termos de uso");

        return false;
    }
    return true;
}

function validaBotao(){
    if (document.getElementById("checkbox").checked==false){
        
        document.getElementById("enviar").disabled = true;
        
    }else{
        
        document.getElementById("enviar").disabled = false;
        
    }
}
window.onload = validaBotao;


