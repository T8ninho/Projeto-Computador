import styled from '@emotion/styled'

export const TaskBarContainer = styled.div`
	background-color: #00000080;
	border-top: 1px solid #00000050;
	backdrop-filter: blur(.5rem);
	width: 100%;
	height: 3rem;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		display: flex;
		gap: 1px;
	}
`;

export const ContainerIcone = styled.div`
	height: 3rem;
	min-width: 2rem;
	font-size: 1.2rem;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-inline: 5px;

	&:hover {
		background-color: #ffffff50;
	}
`;

export const IconesTaskBar = styled.div`
	height: 2.3rem;
	width: 2.3rem;
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