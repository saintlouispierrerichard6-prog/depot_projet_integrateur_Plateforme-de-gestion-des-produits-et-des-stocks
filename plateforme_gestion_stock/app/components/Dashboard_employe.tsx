export default function DashboardEmploye() {
  return (
    <div className="w-full p-6 space-y-10">

      {/* ============================
          SECTION: INFO EMPLOYÉ
      ============================ */}
      <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow">
        <div className="flex items-center gap-4">
          <img
            src="/employe.jpg"
            alt="photo employé"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold">Pierre Louis</h2>
            <p className="text-gray-600">Employé Stock</p>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
          Messages
        </button>
      </div>

      {/* ============================
          SECTION: NOTIFICATIONS
      ============================ */}
      <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-xl shadow">
        <h2 className="text-xl font-bold">⚠ Notifications</h2>
        <p className="mt-2">Produit X a atteint le seuil critique.</p>
        <p>Produit Y est en rupture de stock.</p>
      </div>

      {/* ============================
          SECTION: GRAPHIQUES
      ============================ */}
      <div className="space-y-10">

        {/* Graph linéaire */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Activité (Graph Linéaire)</h2>
          <div className="bg-white p-6 rounded-xl shadow">
            <canvas id="graphLine"></canvas>
          </div>
        </div>

        {/* Graph circulaire */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Répartition du Stock (Graph Circulaire)</h2>
          <div className="bg-white p-6 rounded-xl shadow">
            <canvas id="graphPie"></canvas>
          </div>
        </div>

        {/* Graph barre */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Produits manipulés (Graph Barre)</h2>
          <div className="bg-white p-6 rounded-xl shadow">
            <canvas id="graphBar"></canvas>
          </div>
        </div>

      </div>

      {/* ============================
          SECTION: MESSAGES REÇUS
      ============================ */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Messages reçus</h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <ul className="space-y-3">
            <li className="border-b pb-2">Gestionnaire: Mise à jour du stock Produit X</li>
            <li className="border-b pb-2">Gestionnaire: Livraison prévue demain</li>
          </ul>
        </div>
      </div>

      {/* ============================
          SECTION: ENVOYER MESSAGE
      ============================ */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Envoyer un message au gestionnaire</h2>

        <textarea
          className="w-full h-32 p-4 border rounded-xl shadow"
          placeholder="Écrire un message..."
        ></textarea>

        <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition">
          Envoyer
        </button>
      </div>

      {/* ============================
          SECTION: BOUTONS QR / PDF / IMPRIMER
      ============================ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-indigo-600 text-white p-4 rounded-xl shadow hover:bg-indigo-700 transition">
          Générer Code QR
        </button>

        <button className="bg-gray-800 text-white p-4 rounded-xl shadow hover:bg-gray-900 transition">
          Générer Rapport PDF
        </button>

        <button className="bg-orange-600 text-white p-4 rounded-xl shadow hover:bg-orange-700 transition">
          Imprimer Rapport
        </button>
      </div>

      {/* ============================
          SECTION: STATISTIQUES STOCK
          (SA OU TE BAY — MWEN KENBE LI)
      ============================ */}
      <h1 className="text-3xl font-bold mb-6">Dashboard Employé (Stock)</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-orange-600 text-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Stock Total</h2>
          <p className="text-3xl font-bold mt-2">850</p>
        </div>

        <div className="bg-red-600 text-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Ruptures</h2>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-yellow-600 text-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Stock Faible</h2>
          <p className="text-3xl font-bold mt-2">34</p>
        </div>
      </div>

      {/* ============================
          SECTION: ACTIONS RAPIDES
          (SA OU TE BAY — MWEN KENBE LI)
      ============================ */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Actions rapides</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <button className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition">
            Ajouter Stock
          </button>
          <button className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition">
            Modifier Stock
          </button>
          <button className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition">
            Signaler Rupture
          </button>
          <button className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition">
            Voir Livraisons
          </button>
        </div>
      </div>

      {/* ============================
          SECTION: HISTORIQUE
          (SA OU TE BAY — MWEN KENBE LI)
      ============================ */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Historique des actions</h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <ul className="space-y-3">
            <li className="border-b pb-2">Vous avez ajouté 10 unités au Produit Y</li>
            <li className="border-b pb-2">Rupture signalée pour Produit Z</li>
            <li className="border-b pb-2">Livraison #221 reçue</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
