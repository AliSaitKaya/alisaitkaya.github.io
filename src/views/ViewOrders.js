import React, { useState, useRef, useEffect } from "react";

function DropdownMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  // Sayfa tıklama olayını dinleyip menü dışında tıklama yapıldığında menüyü kapatır
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      style={{
        marginLeft: "250px", // Sidebar genişliği kadar boşluk bırak
        padding: "20px",
        color: "white", // Yazı rengi beyaz yapıldı
        backgroundColor: "#2c2c2c", // İçerik alanı için koyu bir arka plan rengi
        position: "relative", // Dropdown menüsünün doğru konumlanması için gerekli
      }}
    >
      <h1>Orders View</h1>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
      >
        Orders Type
      </button>
      {isDropdownOpen && (
        <ul
          className="dropdown-menu show"
          style={{ position: "absolute", top: "100%", left: 0 }}
        >
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setIsDropdownOpen(false)}
            >
              PCD1001
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setIsDropdownOpen(false)}
            >
              PCD1002
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setIsDropdownOpen(false)}
            >
              Something else here
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
