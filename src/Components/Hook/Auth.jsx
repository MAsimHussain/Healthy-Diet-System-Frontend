import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const userAuth = () => {
    const userData = JSON.parse(sessionStorage.getItem("UserData"));
    if (userData) {
      setUser(userData.token);
      setRole(userData.Role);
    }
  };
  useEffect(() => {
    userAuth();
  }, []);

  return { user, role };
}
