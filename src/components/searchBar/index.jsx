import { InputText } from "primereact/inputtext";

export default function SearchBar({ search, onSearchChange }) {
    return (
        <InputText value={search} onChange={onSearchChange} placeholder="Rechercher..." />
    );
}