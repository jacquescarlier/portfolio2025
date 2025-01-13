const BackLinks = () => {

    return (
        <ul className="backlinks">
          <li><a className="tooltip" href="https://validator.w3.org/#validate_by_uri" target="_blank" rel="noopener" aria-label="Validateur W3C">Validateur W3C <em>Contrôler votre site</em></a> </li>
          <li><a className="tooltip" href="https://developer.mozilla.org/fr/" target="_blank" rel="noopener"aria-label="MDN doc" >MDN Doc<em>Documentation Mozilla</em></a> </li>
          <li><a className="tooltip" href="https://fr.react.dev/" target="_blank" rel="noopener" aria-label="Doc React">React<em>Documentation React</em></a></li>
          <li><a className="tooltip" href="https://www.google.com/" target="_blank" rel="noopener" aria-label="Moteur de recherche Google">Google<em>Moteur de recherche</em></a></li>
        </ul>
    )
}

export default BackLinks