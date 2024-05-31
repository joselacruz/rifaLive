interface props {
  tlf: string
  mensajeCodificado: string
}
export  const buyTicket = ({tlf, mensajeCodificado}:props) => {
    const linkWhatsApp = `https://wa.me/${tlf}?text=${mensajeCodificado}&lang=es`;

    window.open(linkWhatsApp)
}