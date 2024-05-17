import React, { useState } from 'react';

// Composant de barre de recherche
export default function SearchBar({ search, onSearchChange }) {
    return (
        <input type="text" value={search} onChange={onSearchChange} placeholder="Rechercher..." />
    );
}