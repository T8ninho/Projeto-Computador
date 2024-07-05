import styled from '@emotion/styled'

export const Background = styled.div`
	background-image: url(${props => props.Image});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	display: flex;
`;

export const AreaIcones = styled.div`
	padding: .5rem;
	display: flex;
	flex-direction: column;
	gap: .5rem;
`;