/* eslint-disable */

import React from 'react';
import UserStack from '../MainContainer';
import AuthStack from './authStack';
import {useAuth} from '../hooks/useAuth';

export default function RootNavigation() {
  const {user} = useAuth();

  return user ? <UserStack /> : <AuthStack />;
}
