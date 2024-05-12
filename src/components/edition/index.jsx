import '@mdxeditor/editor/style.css'
import { MDXEditor, toolbarPlugin , diffSourcePlugin , DiffSourceToggleWrapper ,  UndoRedo} from '@mdxeditor/editor'

export default function EditionComp() {
    return (
        <MDXEditor
            plugins={[
                diffSourcePlugin({ diffMarkdown: '', viewMode: 'rich-text'}),
                toolbarPlugin({
                    toolbarContents: () => (
                        <DiffSourceToggleWrapper>
                            <UndoRedo />
                            <button>Save</button>
                        </DiffSourceToggleWrapper>
                    )
                })
            ]}
        />
    )
}