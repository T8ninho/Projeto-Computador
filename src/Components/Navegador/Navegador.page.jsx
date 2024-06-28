import PropTypes from 'prop-types';

export default function Navegador({ Url, title }) {
  return (
    <>
	{/* <input type='text' value={Url} onChange={Url}/> */}
		<iframe
		src={Url}
		title={title}
		style={{
			width: '100%',
			height: '100%',
		}}
		></iframe>
	</>
  );
}

Navegador.propTypes = {
  Url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
