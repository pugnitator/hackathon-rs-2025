import {UserBadge} from "../../../../components/ui/badge/user-badge.jsx";
import styled from "styled-components";

export const SidebarContainer = ({ className, badge, image_url, about }) =>
	<section className={className}>
		<UserBadge badgeText={badge} badgeColor='#FF0000'>
			<img alt='member photo' src={image_url} className="sidebar__photo" width='363px' height='363px'/>
		</UserBadge>
		<div className="sidebar__about">
			<p className="sidebar__text">
				{about}
			</p>
		</div>
	</section>


export const Sidebar = styled(SidebarContainer)`
	width: 432px;
	min-height: 794px;
	background-color: #6C63FF;
	padding: 35px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 2px 2px 10px navy;
	
	@media (max-width: 950px) {
		width: 350px;
  }
	
	@media (max-width: 750px) {
		min-height: auto;
		margin-bottom: 50px;
  }

  & .sidebar__photo {
    width: 364px;
    border-radius: 50%;
    margin-bottom: 35px;

    @media (max-width: 950px) {
      width: 250px;
			height: 250px;
    }
  }


  & .sidebar__about {
    width: 100%;
    min-height: 90px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		color: black;
		padding: 20px;
		
		&:before {
			content: "«";
			position: absolute;
			top: 0;
			left: 0;
			color: white;
		}

    &:after {
      content: "»";
      position: absolute;
      bottom: 0;
      right: 0;
			color: white;
    }
		
		& p {
			font-size: 24px;
			color: #fff;
		}
  }
`