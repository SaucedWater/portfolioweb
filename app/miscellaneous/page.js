// app/miscellaneous/page.js
import Head from "next/head";

export default function Miscellaneous() {
  return (
    <>
      <Head>
        <title>Miscellaneous | Ian Kwok Portfolio</title>
        <meta name="description" content="Fun extras and personal content from Ian's portfolio." />
      </Head>

      <section className="py-16 bg-gray-900 text-gray-300 min-h-screen text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">./Miscellaneous</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-semibold text-cyan-400">Coming Soon...</h3>
            <p className="text-gray-400 mt-2">More cool projects will be added!</p>
          </div>
        </div>
      </section>
    </>
  );
}
