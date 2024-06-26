import styled from '@emotion/styled'

export const Background = styled.div`
	background-image: url(${props => props.Image});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
	display: flex;

	.areaIcones {
		padding: 2vh;
		display: flex;
	}
`;

export const TaskBar = styled.div`
	background-color: #00000080;
	border-top: 1px solid #00000050;
	width: 100%;
	height: 7vh;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
`;

export const Icones = styled.img`
	height: 5vh;
	width: 5vh;
	padding-inline: 10px;
`;