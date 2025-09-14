import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorageCount } from "../../hook/local_storage/useLocalStorageCount"; // adjust path

interface IconWithBadgesProps {
  icon: React.ReactNode;
  route?: string;
  storageKey: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const IconWithBadges: React.FC<IconWithBadgesProps> = ({
  icon,
  route,
  storageKey,
  onClick,
  children,
}) => {
  const count = useLocalStorageCount(storageKey);
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick();
    else if (route) navigate(route);
  };

  return (
    <div className="icon-with-badge position-relative">
      <button onClick={handleClick}>
        {icon}
        {count > 0 && <span className="badge">{count}</span>}
      </button>
      {children}
    </div>
  );
};

export default IconWithBadges;
