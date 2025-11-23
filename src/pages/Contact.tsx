import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Helmet>
        <title>Contact — Portfolio</title>
        <meta
          name="description"
          content="Page de contact pour envoyer un message à Yasmine Ettouyjer"
        />
      </Helmet>

      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-muted-foreground mb-6">
        Vous pouvez m'envoyer un message via le formulaire ci-dessous :
      </p>

      <form
        action="https://formspree.io/f/xrbrodrz" // <-- Remplace par ton URL Formspree
        method="POST"
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className="border rounded px-3 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
          className="border rounded px-3 py-2"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          className="border rounded px-3 py-2 h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
