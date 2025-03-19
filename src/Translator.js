import React, { useState } from "react";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [inputLanguage, setInputLanguage] = useState("en");
  const [outputLanguage, setOutputLanguage] = useState("es");
  const [loading, setLoading] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
  ];

  const translateText = async () => {
    if (!inputText.trim()) {
      alert("Please enter text to translate.");
      return;
    }

    setLoading(true);
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURIComponent(
      inputText
    )}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Translation failed");

      const json = await response.json();
      setOutputText(json[0].map((item) => item[0]).join(""));
    } catch (error) {
      console.error("Error:", error);
      alert("Error in translation. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Language Translator</h1>
      
      <div className="mb-3">
        <label className="block mb-1">Input Language:</label>
        <select
          className="w-full p-2 border rounded"
          value={inputLanguage}
          onChange={(e) => setInputLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>



      <div className="mb-3">
        <label className="block mb-1">Text to Translate:</label>
        <textarea
          className="w-full p-2 border rounded"
          rows="3"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text..."
        />
      </div>


      <div className="mb-3">
        <label className="block mb-1">Output Language:</label>
        <select
          className="w-full p-2 border rounded"
          value={outputLanguage}
          onChange={(e) => setOutputLanguage(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}

        </select>
      </div>

      <button
        onClick={translateText} style={{backgroundColor: '#FFD700'}}
        className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Translating..." : "Translate"}  
      </button>

      {outputText && (
        <div className="mt-4 p-3 border rounded bg-gray-100">
          <strong>Translated Text:</strong>
          <p>{outputText}</p>
        </div>
      )}

    </div>
  );
};

export default Translator;
