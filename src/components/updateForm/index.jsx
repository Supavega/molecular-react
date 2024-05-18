import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { CenterForm } from "../shared/form";
import { Flex } from "../shared/flex";
import UpdateHook from "../../hooks/updateHook";

export default function UpdateForm() {
    const { values, handleChange, handleSubmit } = UpdateHook();

    return(
        <>
        <Flex>
            <CenterForm onSubmit={handleSubmit}>
                <InputText name="username" placeholder="username" value={values.username} onChange={handleChange} />
                <InputText name="mail" placeholder="mail" value={values.mail} onChange={handleChange} />
                <legend>&#40; * &#41; are needed to update: </legend>
                <Password name="password" placeholder="password*" value={values.password} onChange={handleChange} />
                <Button type="submit" label="Update"/>
            </CenterForm>   
        </Flex>
        </>
    );
}