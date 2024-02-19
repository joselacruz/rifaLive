

export  const buyTicket = ({tlf, mensajeCodificado}) => {
    const linkWhatsApp = `https://wa.me/${tlf}?text=${mensajeCodificado}&lang=es`;

    window.open(linkWhatsApp)
}