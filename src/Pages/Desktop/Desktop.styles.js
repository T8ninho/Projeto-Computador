import styled from '@emotion/styled'

export const Background = styled.div`
	background-image: url(${props => props.Image});
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
	display: flex;
`;

export const AreaIcones = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const TaskBar = styled.div`
	background-color: #00000080;
	border-top: 1px solid #00000050;
	backdrop-filter: blur(5px);
	width: 100%;
	height: 5vh;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
`;