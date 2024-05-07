import React, { useState, useRef } from 'react';
import '@mdxeditor/editor/style.css'
import { MDXEditor, toolbarPlugin , diffSourcePlugin , DiffSourceToggleWrapper ,  UndoRedo} from '@mdxeditor/editor'
import axios from 'axios'

function App() {
  const [markdown, setMarkdown] = useState('hello world');
  const [fileId, setFileId] = useState(null);
  const initialMarkdown = useRef(markdown);

  const handleSave = async () => {
    try {
      const name = 'Untitled';
      const content = markdown;

      let response;
      if (fileId) {
        response = await axios.put(`http://localhost:8080/file/update/${fileId}`, { name, content }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
      } else {
        response = await axios.post('http://localhost:8080/file/save', { name, content }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        if (response.data && response.data.id) {
          setFileId(response.data.id);
        }
      }

      if (response.status !== 200) {
        throw new Error('Failed to save markdown');
      }

      console.log('Markdown saved successfully');
    } catch (error) {
      console.error('Failed to save markdown:', error);
    }
  };

  return (
    <MDXEditor
      onChange={handleSave}
      markdown={markdown}
      plugins={[
        diffSourcePlugin({ diffMarkdown: initialMarkdown.current, viewMode: 'rich-text'}),
        toolbarPlugin({
          toolbarContents: () => (
            <DiffSourceToggleWrapper>
              <UndoRedo />
              <button onClick={handleSave}>Save</button>
            </DiffSourceToggleWrapper>
          )
        })
      ]}
    />
  )
}

export default App



//image
/*<MDXEditor
  markdown={markdown}
  plugins={[
    imagePlugin({
      imageUploadHandler: (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      },
      imageAutocompleteSuggestions: ['https://picsum.photos/200/300', 'https://picsum.photos/200']
    }),
    toolbarPlugin({ toolbarContents: () => <InsertImage /> })
  ]}
/>*/