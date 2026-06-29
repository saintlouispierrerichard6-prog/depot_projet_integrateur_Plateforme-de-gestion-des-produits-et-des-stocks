export default function EmployeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* ENTETE EMPLOYE */}
      <header className="bg-green-700 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Tableau de bord Employé</h1>

        <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition">
          Déconnexion
        </button>
      </header>

      {/* CONTENU */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>

      {/* FOOTER EMPLOYE */}
      <footer className="bg-green-900 text-white p-4 text-center">
        © 2026 - Employé Stock | Plateforme de Gestion
      </footer>
    </div>
  );
}
