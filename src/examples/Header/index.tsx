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
            <Button onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button onClick={onLogin} label="Log in" />
            <Button primary onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
