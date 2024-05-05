import { MDXEditor, UndoRedo, BoldItalicUnderlineToggles, CodeToggle,toolbarPlugin } from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'


export default function Edition() {
  return (
    <>
      <MDXEditor
        markdown="Hello world"
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {' '}
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <CodeToggle />
              </>
            )
          })
        ]}
      />
    </>
  )
}