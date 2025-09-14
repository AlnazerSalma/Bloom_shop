import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorageCount } from "../../hook/local_storage/useLocalStorageCount"; // adjust path

interface IconWithBadgesProps {
  icon: React.ReactNode;
  route: string;
  storageKey: string;
}

const IconWithBadges: React.FC<IconWithBadgesProps> = ({
  icon,
  route,
  storageKey,
}) => {
  const count = useLocalStorageCount(storageKey);
  const navigate = useNavigate();

  return (
    <div className="icon-with-badge">
      <button onClick={() => navigate(route)}>
        {icon}
        {count > 0 && <span className="badge">{count}</span>}
      </button>
    </div>
  );
};

export default IconWithBadges;
