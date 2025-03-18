import React, { useEffect } from "react";


function PopOver() {
    useEffect(() => {
        // Inicializar los popovers después de que el componente se renderice
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

    }, []); // [] asegura que esto se ejecute solo una vez cuando el componente se monte

    return (
        <div>
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-content="Top popover"
            >
                Popover on top
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="right"
                data-bs-content="Right popover"
            >
                Popover on right
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-content="Bottom popover"
            >
                Popover on bottom
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="left"
                data-bs-content="Left popover"
            >
                Popover on left
            </button>
        </div>
    );
}

export default PopOver;

