export default async function handler(request, response) {
  console.log("query", request.query);
  console.log("body", request.body);
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

  // const requestedTranslation = await result.json();
  // response.status(201).json({ requestedTranslation });

  if (request.method === "POST") {
    try {
      const requestedTranslation = await result.json();
      response.status(201).json({ requestedTranslation });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ status: "Method not allowed" });
}
