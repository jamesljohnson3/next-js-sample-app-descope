import { useState } from "react";
import axios from "axios";
import base64 from "js-base64";

export default function Page() {
  const [text, setText] = useState("");
  const [audio, setAudio] = useState("");

  const handleButtonClick = async () => {
    const response = await axios.post("https://abidlabs-speak.hf.space/run/predict/", {
      data: [text],
    });
    const audioUrl = response.data.data[0];
    const audioData = await axios.get(audioUrl, { responseType: "arraybuffer" });
    const audioBlob = new Blob([audioData.data], { type: "audio/wav" });
    const audioBase64 = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(audioBlob);
    });
    setAudio(audioBase64);
  };

  return (
    <div>
      <h1>Text to Speech App powered by Gradio API hosted on 🤗</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleButtonClick}>⚡️ Text to speech magic ⚡️</button>
      {audio && (
        <audio controls>
          <source src={audio} type="audio/wav" />
        </audio>
      )}
    </div>
  );
}
