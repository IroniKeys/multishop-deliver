import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="p-6 border-b shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MultiShop Deliver</h1>
          <nav className="space-x-6">
            <Link href="/comparateur" className="hover:text-blue-600">Comparer les prix</Link>
            <Link href="/livraison" className="hover:text-blue-600">Modes de livraison</Link>
            <Link href="/connexion" className="hover:text-blue-600">Mon compte</Link>
          </nav>
        </div>
      </header>

      <section className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold mb-6">Comparez. Commandez. Faites-vous livrer.</h2>
          <p className="text-lg mb-8">Votre assistant courses intelligent : trouvez les meilleurs prix dans vos supermarchés préférés, commandez en ligne et faites-vous livrer rapidement.</p>
          <Link href="/comparateur" className="bg-blue-600 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">Commencer maintenant</Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">
        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">1. Comparez les prix</h3>
          <p>Entrez votre liste de courses et comparez automatiquement les prix entre Carrefour, Colruyt, Delhaize, etc.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">2. Centralisez vos achats</h3>
          <p>Commandez en une seule fois via Collect & Go, Drive ou directement via nos livreurs partenaires.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-2">3. Recevez votre commande</h3>
          <p>Choisissez une livraison rapide à domicile ou un retrait en point relais. Simple, pratique et économique.</p>
        </div>
      </section>

      <footer className="bg-gray-100 py-8 text-center text-sm text-gray-600">
        © 2025 MultiShop Deliver. Tous droits réservés.
      </footer>
    </main>
  );
}
