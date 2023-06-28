import PropTypes from 'prop-types';
import { Spotify } from "react-spotify-embed"

export const SpotifyCard = ({link}) => {
  return (
    <Spotify wide link={link} />
  )
}

SpotifyCard.propTypes = {
  link: PropTypes.string.isRequired, // Validación de la propiedad "link" como una cadena requerida
};