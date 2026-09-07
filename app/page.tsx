export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">ZAIVORA</h1>

        <div>
          <button className="px-4 py-2 mr-2 text-gray-300">
            Log In
          </button>

          <button className="px-4 py-2 bg-white text-black rounded-lg font-bold">
            Sign Up
          </button>
        </div>
      </nav>

      <section className="text-center px-6 py-24">
        <p className="text-sm text-gray-400 mb-4">
          Real user numbers will be added once verified
        </p>

        <h2 className="text-6xl font-bold mb-4">
          ZAIVORA
        </h2>

        <p className="text-2xl text-gray-300 mb-2">
          Know Your Trip. Before You Go. 🌍
        </p>

        <p className="text-gray-400 mb-10">
          The AI Budget Travel Planner for Students
        </p>

        <div className="max-w-lg mx-auto bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <input
            type="number"
            placeholder="Enter Your Budget $500"
            className="w-full p-3 rounded bg-gray-800 mb-3 text-white"
          />

          <input
            type="number"
            placeholder="Days: 7"
            className="w-full p-3 rounded bg-gray-800 mb-4 text-white"
          />

          <button className="w-full bg-green-500 text-black font-bold p-3 rounded-lg">
            Find My Trip
          </button>
        </div>
      </section>

      <section className="px-6 py-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold mb-2">
            Real Cost Calculator
          </h3>
          <p className="text-gray-400">
            Flight + Hotel + Food = Total. No surprises.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold mb-2">
            Budget → Destination
          </h3>
          <p className="text-gray-400">
            Find the best destinations for your budget.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold mb-2">
            Student Mode
          </h3>
          <p className="text-gray-400">
            Student discounts and cheaper travel options.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join Beta - Sept 2026
        </h2>

        <input
          type="email"
          placeholder="Enter email"
          className="p-3 rounded bg-gray-800 mr-2 text-white"
        />

        <button className="bg-white text-black font-bold px-6 py-3 rounded-lg">
          Get Early Access
        </button>
      </section>
    </main>
  )
}
