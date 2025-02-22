import styled from '@emotion/styled';

export const JanelaContainer = styled.div`
	min-height: 15rem;
	min-width: 15rem;
	background-color: #2d2d2d;
	position: absolute;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
	color: #000;
	border: 1px solid #ffffff50;
	transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
`;

export const JanelaCabecalho = styled.div`
	background-color: #f4c430;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: default;

	&:active {
		cursor: grabbing;
	};

	div {
		display: flex;
	}

	p{
		padding-inline: .5rem;
		font-size: 1.2rem;
		color: #000;
	};

	span{ //botões de ação
		height: 2rem;
		width: 2rem;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			background-color: #00000030;
		};
	}
`;
export const JanelaConteudo = styled.div`
	color: #fff;
	display: flex;
	flex-direction: column;

	textarea {
		display: flex;
		padding: .3rem;
	 	height: 100%;
		width: 100%;
		resize: none;
		border: none;
	}

`;