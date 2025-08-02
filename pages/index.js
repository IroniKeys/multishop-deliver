export default function Home() {
  const partenaires = [
    { nom: "Carrefour", logo: "/carrefour-logo.png" },
    { nom: "Colruyt", logo: "/colruyt-logo.png" },
    { nom: "Delhaize", logo: "/delhaize-logo.png" },
    { nom: "Aldi", logo: "/aldi-logo.png" },
    { nom: "Lidl", logo: "/lidl-logo.png" },
    { nom: "Intermarché", logo: "/intermarché-logo.png" },
  ];

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

      {/* Nos enseignes partenaires */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-10">Nos enseignes partenaires</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {partenaires.map((p, index) => (
            <div key={index} className="flex justify-center items-center p-2">
              <img
                src={p.logo}
                alt={p.nom}
                className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-12">Ce que nos clients disent</h2>
        <blockquote className="italic max-w-xl mx-auto mb-6">
          "J'ai gagné plus de 30€ sur mes courses du mois dernier sans rien faire de plus !"
          <br />- Sophie, Liège
        </blockquote>
        <blockquote className="italic max-w-xl mx-auto">
          "Livraison nickel, très pratique pour comparer et regrouper mes courses."
          <br />- Maxime, Namur
        </blockquote>
      </section>

      {/* Call-to-action */}
      <section className="py-20 px-6 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold mb-6">Prêt(e) à simplifier vos courses ?</h2>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Je crée mon compte gratuitement
        </button>
      </section>
    </main>
  );
}
