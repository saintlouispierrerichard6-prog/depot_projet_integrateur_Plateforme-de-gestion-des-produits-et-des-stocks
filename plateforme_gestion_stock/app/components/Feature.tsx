"use client";
import "./Feature.css";

export default function Feature() {
  return (
    <section className="features">
      <h2>Fonctionnalités principales</h2>

      <div className="features-grid">
        <div className="card">
          <h3>Gestion des produits</h3>
          <p>Ajoutez, modifiez et consultez vos produits facilement.</p>
        </div>

        <div className="card">
          <h3>Gestion des stocks</h3>
          <p>Suivez les quantités disponibles et les ruptures.</p>
        </div>

        <div className="card">
          <h3>Alertes automatiques</h3>
          <p>Recevez des alertes lorsque les stocks sont faibles.</p>
        </div>
      </div>
    </section>
  );
}
