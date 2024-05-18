import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import FileForm from "../fileCreateForm";

export default function CreateFileForm() {
    const [displayDialog, setDisplayDialog] = useState(false);

    const createFileDialog = () => {
        setDisplayDialog(true);
    }

    const hideDialog = () => {
        setDisplayDialog(false);
    }

    return (
        <>
            <Button type="button" label="+" onClick={createFileDialog} />
            <Dialog header="Create File" visible={displayDialog} onHide={hideDialog}>
                <FileForm />
            </Dialog>
        </>
    )
}