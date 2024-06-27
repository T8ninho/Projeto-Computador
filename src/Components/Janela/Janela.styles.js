import styled from '@emotion/styled';

export const JanelaContainer = styled.div`
	height: 300px;
	width: 300px;
	background-color: #2d2d2d;
	position: absolute;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
	color: #000;
	border: 1px solid #ffffff50;
	
`;

export const JanelaCabecalho = styled.div`
	background-color: #f4c430;
	color: #000;
	height: 3vh;
	flex: 1;
	/* padding-inline: 5px; */
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: default;

	div {
		display: flex;
	}

	p{
		padding-inline: 5px;
		font-size: 2.2vh;
	};

	span{
		height: 3vh;
		width: 3vh;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			background-color: #00000030;
		};
	}
	&:active {
		cursor: grabbing;
	};
`;
export const JanelaConteudo = styled.div`
	color: #fff;
	display: flex;
	height: 90%;
	p {
			display: flex;
		font-size: 1.6vh;
		height: 100%;
		width: 100%;
	}

`;