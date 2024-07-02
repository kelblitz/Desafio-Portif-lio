
const btn = document.querySelector('#submitbtn');

btn.addEventListener('click', function(event){
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const assunto = document.querySelector('#assunto').value;
    const mensagem = document.querySelector('#mensagem').value;

    if (nome.length < 2) {
        alert("O campo 'Nome' não foi preenchido corretamente.");
        return;
    }

    if (email.length < 8) {
        alert("O campo 'Email' não foi preenchido corretamente.");
        return;
    } 
    if (assunto.length < 2) {
        alert("O campo 'Assunto' não foi preenchido.");
        return;
    }
    if (mensagem.length < 5) {
        alert("O campo 'Mensagem' não foi preenchido.");
        return;
    }else {
        alert('Formulário enviado!');
    }

    console.table([nome, email, assunto, mensagem]);
    console.log('Contato de: ' + nome + '  Assunto: '+ mensagem);
})
