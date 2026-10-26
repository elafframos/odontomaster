function handleFormSubmit(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const convenio = document.getElementById('convenio').value;
    const tratamento = document.getElementById('tratamento').value;
    const periodo = document.getElementById('periodo').value;

    const mensagem = `Olá, gostaria de agendar uma consulta na Odonto Master Gurupi!\n\n` +
                     `*Nome:* ${nome}\n` +
                     `*Telefone:* ${telefone}\n` +
                     `*Plano/Convênio:* ${convenio}\n` +
                     `*Tratamento:* ${tratamento}\n` +
                     `*Período Preferencial:* ${periodo}`;

    const numeroWhatsApp = "5563984456582";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
}