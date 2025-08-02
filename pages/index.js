export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Héro */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur MultiShop Deliver</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Comparez les prix dans vos supermarchés préférés, centralisez vos achats et faites-vous livrer en toute simplicité.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Commencer à faire des économies
        </button>
      </section>

      {/* Avantages */}
      <section className="py-20 px-6">
        <h2 className="text-2xl font-semibold text-center mb-12">Pourquoi choisir MultiShop Deliver ?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Comparaison de prix intelligente</h3>
            <p>Comparez les prix au kilo et les promotions entre enseignes en un clic.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Centralisation des achats</h3>
            <p>Un seul panier pour plusieurs enseignes, prêt à être livré.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Livraison flexible</h3>
            <p>Choisissez votre créneau horaire ou livraison express via livreurs indépendants.</p>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-6">Nos enseignes partenaires</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img src="/carrefour-logo.png" alt="Carrefour" className="h-10" />
          <img src="/colruyt-logo.png" alt="Colruyt" className="h-10" />
          <img src="/delhaize-logo.png" alt="Delhaize" className="h-10" />
          <img src="/aldi-logo.png" alt="Aldi" className="h-10" />
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-12">Ce que nos clients disent</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="mb-2">"J'ai gagné plus de 30€ sur mes courses du mois dernier sans rien faire de plus !"</p>
            <p className="text-sm text-gray-600">- Sophie, Liège</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="mb-2">"Livraison nickel, très pratique pour comparer et regrouper mes courses."</p>
            <p className="text-sm text-gray-600">- Maxime, Namur</p>
          </div>
        </div>
      </section>

      {/* Appel à l'action final */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Prêt(e) à simplifier vos courses ?</h2>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Je crée mon compte gratuitement
        </button>
      </section>
    </main>
  );
}

