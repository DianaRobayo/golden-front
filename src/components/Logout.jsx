import React from 'react'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Limpia el local storage
    localStorage.clear();

    // Navigate (redirección) al login
    navigate("/login");
  });

  return (
    <h1>Cerrando sesión...</h1>
  )
}
