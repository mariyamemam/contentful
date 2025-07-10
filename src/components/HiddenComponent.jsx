import { useEffect, useState } from "react";
import './styles.css';
import client from "../contentfulClient";
import  { getManagementEnvironment } from "../updateClient";

export function HiddenContent() {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "hiddenSection"
      })
      .then((response) => setEntry(response.items[0]))
      .catch(console.error);
  }, []);

  if (!entry) {
    return <div>Loading...</div>;
  }

  const description = entry.fields.description;
  const allText = description.content
    .map((block) =>
      block.content.map((node) => node.value).join("")
    )
    .join("\n");

    function handleClick() {
    const value = entry.fields.show === "off" ? "on" : "off";
        getManagementEnvironment()
            .then((env) => env.getEntry(entry.sys.id))
            .then((managedEntry) => {
            managedEntry.fields.show['en-US'] = value;
            return managedEntry.update().then((updated) => updated.publish());
            })
            .then(() => {
            console.log('Updated and published!');
            window.location.reload(); 
            })
            .catch(console.error);
        }

  if (entry.fields.show === "off"){
    return (
      // <button onClick={handleClick}>Set Show On</button>
      null
    );
  }

  return (
    <div className="container">
      <div className="title">{entry.fields.title}</div>
      <div className="content">{allText}</div>
      <button onClick={handleClick}>Off</button>
    </div>
  );
}
