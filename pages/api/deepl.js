export default async function handler(request, response) {
  const result = await fetch("https://api-free.deepl.com/v2/translate", {
    method: "POST",
    body: JSON.stringify({
      text: [request.body.text],
      target_lang: request.body.target_lang,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `DeepL-Auth-Key ${process.env.DEEPL_AUTH_KEY}`,
    },
  });

  if (request.method === "POST") {
    try {
      const requestedTranslation = await result.json();
      return response.status(201).json({ requestedTranslation });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
