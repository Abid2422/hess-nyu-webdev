import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

const TOKEN_STORAGE_KEY = 'hess-admin-token';
const USERNAME_STORAGE_KEY = 'hess-admin-username';

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_STORAGE_KEY));
  const [username, setUsername] = useState(() => localStorage.getItem(USERNAME_STORAGE_KEY));

  useEffect(() => {
    if (token) {
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
    }
  }, [token]);

  useEffect(() => {
    if (username) {
      localStorage.setItem(USERNAME_STORAGE_KEY, username);
    } else {
      localStorage.removeItem(USERNAME_STORAGE_KEY);
    }
  }, [username]);

  const value = useMemo(() => ({
    token,
    username,
    isAuthenticated: Boolean(token),
    login: ({ token: newToken, username: newUsername }) => {
      setToken(newToken);
      setUsername(newUsername);
    },
    logout: () => {
      setToken(null);
      setUsername(null);
    },
  }), [token, username]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}


