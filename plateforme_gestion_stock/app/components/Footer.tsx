"use client";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Colonne 1 */}
        <div className="footer-col">
          <h2 className="footer-logo">Gestion Produits</h2>
          <p className="footer-desc">
            Plateforme professionnelle pour gérer vos produits, vos stocks, vos alertes et vos statistiques.
          </p>
        </div>

        {/* Colonne 2 */}
        <div className="footer-col">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/produits">Produits</a></li>
            <li><a href="/stock">Stock</a></li>
            <li><a href="/alertes">Alertes</a></li>
            <li><a href="/categories">Catégories</a></li>
          </ul>
        </div>

        {/* Colonne 3 */}
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li><a href="/docs">Documentation</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/aide">Aide</a></li>
          </ul>
        </div>

        {/* Colonne 4 */}
        <div className="footer-col">
          <h3>Légal</h3>
          <ul>
            <li><a href="/confidentialite">Confidentialité</a></li>
            <li><a href="/conditions">Conditions d’utilisation</a></li>
            <li><a href="/securite">Sécurité</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gestion Produits — Tous droits réservés.</p>
      </div>
    </footer>
  );
}
