"use client"

import React, { Suspense, useEffect, useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    // Debounce search to avoid making too many API requests while typing
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (query.trim().length === 0) {
                // Fetch all recipes if the query is empty
                onSearch('');
            } else if (query.trim().length >= 3) {
                // Perform the search if query is at least 3 characters
                onSearch(query.trim());
            }
        }, 300); // 300ms debounce delay

        // Cleanup the timeout when query changes or component unmounts
        return () => clearTimeout(delayDebounce);
    }, [query, onSearch]);

    return (
        <div className="search-bar">
            <Suspense>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search for recipes..."
                    className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500 transition duration-300 shadow-sm text-lg mb-4"
                />
            </Suspense>
        </div>
    );
};

export default SearchBar;