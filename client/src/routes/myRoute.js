import React from 'react';
import { Route, Redirect} from 'react-router-dom';

export default function MyRoute({ component:  Component, isClosed, ...rest}) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect />
    )
  }
}