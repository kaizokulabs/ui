import React from 'react';

import { Button } from '@/components/Button';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="bg-background-800 storybook-header">
      <img src="/logo-nobg.png" alt="Logo" width="64" height="64" />
      <div>
        {user ? (
          <>
            <span className="text-text-100 mr-5">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button onClick={onLogout}>
              Log out
            </Button>
          </>
        ) : (
          <>
            <Button onClick={onLogin}>
              Log in
            </Button>
            <Button primary onClick={onCreateAccount}>
              Sign up
            </Button>
          </>
        )}
      </div>
    </div>
  </header>
);
