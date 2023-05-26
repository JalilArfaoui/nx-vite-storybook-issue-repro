import React from 'react';
import { getSomethingFromDomain } from '@repro-app/domain-something';

export const DarkModeToggle = () => {
  const something = getSomethingFromDomain();

  return <div>This is {something}</div>;
};
