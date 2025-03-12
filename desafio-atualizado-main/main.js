document.getElementById('inscricaoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    

    
    if (!nome || !email) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    
    console.log('Dados do formulário:', { nome, email, /* ... */ });
    alert('Inscrição realizada com sucesso!');


    this.reset();
});

document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById("previewImage");
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});