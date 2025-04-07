
document.addEventListener("DOMContentLoaded", () => {
const formulario = document.getElementById("formulario-participante");
const inputNome = document.getElementById("nome");
const inputTel = document.getElementById("telefone");
const inputCEP = document.getElementById("cep");
const inputCPF = document.getElementById("cpf");

const requisitos = [/[0-9]/, /[a-zA-Z]/];
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (inputNome.value.match(requisitos[0])) alert("O nome não pode conter números.");
    if (inputTel.value.match(requisitos[1])) alert("Telefone inválido.");
    if (inputCEP.value.match(requisitos[1]) || inputCEP.value != 8) alert("CEP inválido.");
    if (inputCPF.value.match(requisitos[1])) alert("CPF inválido.");
});







   
    formularioParticipante.addEventListener("submit", (event) => {
        let camposObrigatoriosPreenchidos = true;
        
      // Verifica campos obrigatórios
        const camposObrigatorios = formularioParticipante.querySelectorAll("[required]");
        camposObrigatorios.forEach(campo => {
        if (!campo.value) {
            camposObrigatoriosPreenchidos = false;
            campo.style.borderColor = "red"; 
        } else {
            campo.style.borderColor = "";
        }
        });

        if (!camposObrigatoriosPreenchidos) {
            event.preventDefault(); 
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            event.preventDefault();
            erroEmail.style.display = "block";
        } else {
            alert("Formulário enviado com sucesso! ");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const identidadeInput = document.getElementById('identidade');
    const comprovanteInput = document.getElementById('comprovante');

    identidadeInput.addEventListener('change', () => {
        if (identidadeInput.files.length > 0) {
            console.log('Documento de identidade selecionado:', identidadeInput.files[0]);
        }
    });

    comprovanteInput.addEventListener('change', () => {
        if (comprovanteInput.files.length > 0) {
            console.log('Comprovante de residência selecionado:', comprovanteInput.files[0]);
        }
    });
});

const trackButtons = document.querySelectorAll('.track-button');

trackButtons.forEach(button => {
    button.addEventListener('click', () => {
        trackButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

//salvar informacao de login
function salvarCadastro() {
    let usuario = document.getElementById("cadastroUsuario").value;
    let senha = document.getElementById("cadastroSenha").value;

    if (usuario && senha) {
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("senha", senha);
        alert("Cadastro realizado com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("Preencha todos os campos.");
    }
}

//validar login
function validarLogin() {
    let usuarioSalvo = localStorage.getItem("usuario");
    let senhaSalva = localStorage.getItem("senha");

    let usuarioDigitado = document.getElementById("loginUsuario").value;
    let senhaDigitada = document.getElementById("loginSenha").value;

    if (usuarioDigitado === usuarioSalvo && senhaDigitada === senhaSalva) {
        alert("Login realizado com sucesso!");
        
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

