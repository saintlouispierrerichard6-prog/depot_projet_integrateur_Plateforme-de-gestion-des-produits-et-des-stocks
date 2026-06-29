export default function DashboardGestionnaire() {
  return (
    <div className="w-full p-6 space-y-10">

      {/* ============================
          SECTION: INFO GESTIONNAIRE
      ============================ */}
      <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow">
        <div className="flex items-center gap-4">
          <img
            src="/gestionnaire.jpg"
            alt="photo gestionnaire"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold">Jean Dupont</h2>
            <p className="text-gray-600">Gestionnaire</p>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
          Messages
        </button>
      </div>

      {/* ============================
          SECTION: GRAPH TEMPS RÉEL
      ============================ */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Évolution des produits (temps réel)</h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <canvas id="productChart"></canvas>
        </div>
      </div>

      {/* ============================
          SECTION: TABLEAU UTILISATEURS
      ============================ */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Nouveaux utilisateurs inscrits</h2>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Nom</th>
                <th className="p-4 text-left">Rôle</th>
                <th className="p-4 text-left">Date d'inscription</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">Marie Pierre</td>
                <td className="p-4">Employé Stock</td>
                <td className="p-4">2026-06-29</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">Alex Moreau</td>
                <td className="p-4">Employé Stock</td>
                <td className="p-4">2026-06-28</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ============================
          SECTION: MESSAGERIE
      ============================ */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Envoyer un message aux employés</h2>

        <textarea
          className="w-full h-32 p-4 border rounded-xl shadow"
          placeholder="Écrire un message..."
        ></textarea>

        <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition">
          Envoyer
        </button>
      </div>

      {/* ============================
          SECTION: STATISTIQUES (KOD OU TE BAY)
      ============================ */}
      <div>
        <h1 className="text-3xl font-bold mb-6">Dashboard Gestionnaire</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-600 text-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Produits</h2>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>

          <div className="bg-green-600 text-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Employés</h2>
            <p className="text-3xl font-bold mt-2">15</p>
          </div>

          <div className="bg-purple-600 text-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold">Commandes</h2>
            <p className="text-3xl font-bold mt-2">48</p>
          </div>
        </div>
      </div>

      {/* ============================
          SECTION: ACTIONS RAPIDES (KOD OU TE BAY)
      ============================ */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Actions rapides</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <button className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition">
            Ajouter Produit
          </button>
          <button className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition">
            Ajouter Employé
          </button>
          <button className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition">
            Ajouter Fournisseur
          </button>
          <button className="bg-gray-100 p-4 rounded-xl shadow hover:bg-gray-200 transition">
            Voir Rapports
          </button>
        </div>
      </div>

      {/* ============================
          SECTION: HISTORIQUE (KOD OU TE BAY)
      ============================ */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Historique des activités</h2>

        <div className="bg-white p-6 rounded-xl shadow">
          <ul className="space-y-3">
            <li className="border-b pb-2">Employé Jean a ajouté 20 produits</li>
            <li className="border-b pb-2">Commande #452 validée</li>
            <li className="border-b pb-2">Stock critique détecté pour Produit X</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
