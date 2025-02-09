import PropTypes from "prop-types";
import { Badge } from "antd";

export const UserBadge = ({ badgeText, badgeColor, children }) => {
  return (
    <Badge.Ribbon text={badgeText} color={badgeColor}>
      {children}
    </Badge.Ribbon>
  );
};

UserBadge.propTypes = {
  badgeText: PropTypes.string,
  badgeColor: PropTypes.string,
  children: PropTypes.node,
};
