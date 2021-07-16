import marked from 'marked';
import { useState } from 'react';
import './styles/App.css';
import Output from './components/Output'
import Input from './components/Input';

function App() {

  //markdown text state
  const [markdown, setMarkdown] = useState({text:placeholder});

  const [editorView, setEditorView] = useState({editorMax:true})


  //Clear editor function for button
  const clear = () => {
    setMarkdown({text:''})
  }

  //Reset editor to placeholder function for button
  const resetDemo = () => {
    setMarkdown({text:placeholder})
  }

  //Update markdown based on realtime editor input
  const updatePreview = (e) => {
    setMarkdown({text:e.target.value})
  }

  //change editor maximised status
  const editorViewToggle = () =>{
    setEditorView({editorMax:!editorView.editorMax})
  }

  // inner HTML function
  const inHTML = () => {return {__html:marked(markdown.text)};}

  return (
    <div className="App">
      <div id="header">
        <h1>Annup's Markdown Previewer</h1>
        <h2>Enter some markdown into the editor and watch how it is magicaly rendered in realtime.</h2>
        <h3>Type your own markdown text or click the Demo button to view some sample markdown text.</h3>
      </div>
      <div id="main">
        <Input placeholder={markdown} clear={clear} resetDemo={resetDemo} update={updatePreview} size={editorView} sizeToggle={editorViewToggle}/>
        <Output markdown={inHTML()} />
      </div>
    </div>
  );
}

export default App;

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;