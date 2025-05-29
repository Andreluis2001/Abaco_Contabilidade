const botaoEntrar = document.getElementById('btn-entrar');
const cortina = document.getElementById('login-cortina');

botaoEntrar.addEventListener('click', function() {
    cortina.classList.add('ativo');
    setTimeout(function() {
        window.location.href = 'index.ejs';
    }, 1000);
});