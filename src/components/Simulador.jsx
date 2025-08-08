import React, { useState } from "react";

export const Simulador = () => {
  const [skin, setSkin] = useState(null);

  const skins = [
    { id: 1, name: "AK-47 | Redline", price: 120 },
    { id: 2, name: "AWP | Asiimov", price: 300 },
    { id: 3, name: "Glock-18 | Fade", price: 85 },
  ];

  const abrirCaja = () => {
    const randomIndex = Math.floor(Math.random() * skins.length);
    setSkin(skins[randomIndex]);
  };

  return (
    <div style={{ color: "white", textAlign: "center", marginTop: 40 }}>
      <h2>Simulador de apertura de cajas</h2>
      <button
        onClick={abrirCaja}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          backgroundColor: "#00cc99",
          border: "none",
          borderRadius: 6,
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Abrir caja
      </button>

      {skin && (
        <div style={{ marginTop: 30 }}>
          <h3>¡Obtuviste:</h3>
          <p style={{ fontSize: 20, fontWeight: "bold" }}>{skin.name}</p>
          <p>Precio estimado: ${skin.price}</p>
        </div>
      )}
    </div>
  );
};
