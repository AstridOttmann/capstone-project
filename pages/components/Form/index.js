export default function Form({ onAddTranslations }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    event.target.reset();
    onAddTranslations({ word: data.word, translated: data.translated });
  }
  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="word">
          enter word
          <input id="word" name="word" />
        </label>
        <label htmlFor="translated">
          get translation
          <input id="translated" name="translated" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
