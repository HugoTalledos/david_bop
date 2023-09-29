import React, { useEffect } from 'react';

export default function () {
  useEffect(() => {
    window.location.href = process.env.STRAPI_ADMIN_CLIENT_FRONT;
  }, []);
  return (<h1>Loading ...</h1>)
}