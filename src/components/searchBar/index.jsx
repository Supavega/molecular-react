export default function SearchBar({ search, onSearchChange }) {
    return (
        <input type="text" value={search} onChange={onSearchChange} placeholder="Rechercher..." />
    );
}