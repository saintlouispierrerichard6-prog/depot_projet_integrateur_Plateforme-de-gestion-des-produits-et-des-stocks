"use client";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Plateforme de gestion des produits</h1>
        <p>
          Gérez vos produits, vos stocks, vos alertes et vos statistiques en toute simplicité.
        </p>

        <div className="hero-buttons">
          <a href="/login" className="btn-primary">Connexion</a>
          <a href="/inscription" className="btn-secondary">Commencer</a>
        </div>
      </div>
    </section>
  );
}
