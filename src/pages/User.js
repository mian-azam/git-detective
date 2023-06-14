import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UserInfo from "../components/UserInfo";

const User = () => {
  const [userName, setUserName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setUserName(id);
  }, [id]);

  return (
    <div className="user">
      <UserInfo userName={userName} />
    </div>
  );
};

export default User;