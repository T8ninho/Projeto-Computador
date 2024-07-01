import styled from '@emotion/styled';

export const IconesContainer = styled.div`
	display: flex;
	flex-direction: column;
	place-items: center;
	height: auto;
	/* padding-inline: .4rem; */

	&:hover {
		background-color: #ffffff50;
	}

	${({ isSelected }) =>
        isSelected &&
        `
        background-color: #ffffff60; /* cor quando selecionado */
    `}

`;
export const Icones = styled.div`
	height: 2rem;
	width: 2rem;
	margin: .5rem;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-image: url(${props => props.Icon});
	transition: background-image .2s ease-in-out;

	${props => props.IconHover &&  `
		&:hover {
			background-image: url(${props.IconHover});
		}
	`}
`;