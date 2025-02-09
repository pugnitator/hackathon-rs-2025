import {ProgressBarCircle} from "../../../../components/ui/progress-bar-circle/progress-bar-circle.jsx";
import {ProgressBarBasic} from "../../../../components/ui/progress-bar-basic/progress -bar-basic.jsx";
import styled from "styled-components";
import {Switch} from "antd";
import {useState} from "react";
import TelegramLogo from '../../../../assets/telegram-logo.svg'

const MainContentContainer = ({	className, name, lastname, age, occupation, contact, HTML, CSS, JS	}) => {
	const [isCircular, setIsCircular] = useState(true);

	return (
		<div className={className}>
				<h1 className="main-content__name">{name} {lastname}</h1>
			<hr/>
			<div className="main-content__details">
				<Detail><b>Возраст:</b> {age}</Detail>
				<Detail><b>Специальность:</b> Фронтенд-разработчик</Detail>
				<Detail><b>Город:</b> Москва</Detail>
			</div>

			<div className="socials">
				<h2 className="socials__title">Социальные сети</h2>
				<div className="socials__body">
					<SocialIcon href={contact} target="_blank">
						<img src={`${TelegramLogo}`} alt="" width='40' height='40'/>
					</SocialIcon>
				</div>
			</div>

			<section className="role">
				<h2 className="role__title">Роль в проекте</h2>
				<p className="role__description">{occupation}</p>
			</section>

			<section className="skills">
				<div className="skills__navigation">
					<h2 className="skills__title">Навыки</h2>
					<ToggleContainer>
						<span>Circular</span>
						<StyledSwitch checked={isCircular} onChange={() => setIsCircular(!isCircular)}/>
					</ToggleContainer>
				</div>

				<ProgressContainer>
					{isCircular ? (
						<>
							<ProgressBarCircle title='HTML' progress={HTML}/>
							<ProgressBarCircle title='CSS' progress={CSS}/>
							<ProgressBarCircle title="JavaScript" progress={JS}/>
						</>
					) : (
						<>
							<ProgressBarBasic title='HTML' progress={HTML}/>
							<ProgressBarBasic title='CSS' progress={CSS}/>
							<ProgressBarBasic title="JavaScript" progress={JS}/>
						</>
					)}
				</ProgressContainer>

			</section>
		</div>
	)
}

export const MainContent = styled(MainContentContainer)`
	padding-inline: 53px;
	width: 100%;
	
	& hr {
		border-color: #DADADA;
	}

  & .main-content__name {
		display: flex;
		justify-content: space-between;
	}

  & .main-content__name {
    font-size: 36px;
    line-height: 42px;
    color: #6C63FF;
    text-align: start;
    margin-bottom: 5px;
  }

  & .main-content__details {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin-top: 23px;
		
		@media (max-width: 540px) {
			display: flex;
			justify-content: start;
			flex-wrap: wrap;
			gap: 20px;
			
			& p {
				border: none;
			}
			
			& b {
				font-size: 22px;
			}
    }
  }
	
	& .socials {
    margin-top: 39px;
		text-align: start;
		
		& .socials__title {
      color: #6C63FF;
      font-size: 30px;
      line-height: 24px;
      margin-bottom: 10px;
		}

    & .socials__body {
      display: flex;
			margin-top: 20px;
    }
	}

  & .role {
    margin-top: 55px;
    text-align: start;

    & .role__title {
      color: #6C63FF;
      font-size: 30px;
      line-height: 24px;
      margin-bottom: 10px;
    }
  }

  & .skills {
    margin-top: 76px;
    text-align: start;
    & .skills__title {
      color: #6C63FF;
      font-size: 30px;
      line-height: 24px;
      margin-bottom: 10px;
    }

    & .skills__navigation {
      display: flex;
      justify-content: space-between;
    }

  }
`

const Detail = styled.p`
	width: 33.33%;
	border-right: 1px solid #242424;
	
	& b {
		font-weight: 600;
	}
	
	&:last-child {
		border-right: none;
	}
`

const ProgressContainer = styled.div`
  display: flex;
	flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const StyledSwitch = styled(Switch)`
  width: 60px;
  height: 30px;
  background: ${({ checked }) => (checked ? "#635DFF" : "#D3D3D3")} !important;
	
	&:focus {
		outline: none;
	}

  .ant-switch-handle {
    width: 24px;
    height: 24px;
		border-radius: 50%;
    top: 3px;
    left: ${({ checked }) => (checked ? "32px" : "3px")} !important;
    background: white;
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SocialIcon = styled.a`
	cursor: pointer;
	
	&:hover {
		cursor: pointer;
	}
`