import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import SearchIcon from "../../icons/SearchIcon";
import ClearIcon from "../../icons/ClearIcon";
import FilterIcon from "../../icons/FilterIcon";
import styles from "./Search.module.css";

interface SearchProps {
  placeholder?: string;
  onChange: (value: string) => void;
  open: () => void;
  enableFilters?: boolean;
  search?: string;
}

export const Search = ({
  placeholder = "Search...",
  onChange,
  open,
  enableFilters = false,
  search = "",
}: SearchProps) => {
  const [searchValue, setSearchValue] = useState(search);
  const debounced = useDebouncedCallback((value) => {
    if (onChange) onChange(value);
  }, 500);
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
        <input
          className={styles.input}
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            debounced(e.target.value);
          }}
        />
        {searchValue && (
          <div
            className={styles.clearIcon}
            onClick={() => {
              setSearchValue("");
              if (onChange) onChange("");
            }}
          >
            <ClearIcon />
          </div>
        )}
      </div>
      {enableFilters && (
        <button className={styles.filterButton} onClick={open}>
          <FilterIcon />
        </button>
      )}
    </div>
  );
};
