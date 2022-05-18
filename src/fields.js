export const formFields = [
    { type: "text", id: "name", label: "Nombre", placeholder: "Ej. Juan" },
    {
        type: "text",
        id: "lastName",
        label: "Apellido",
        placeholder: "Ej. Perez",
    },
    {
        type: "radio",
        id: "vegeta",
        label: "Menú vegano?",
        radioElem: [
            {
                id: "vegetaYes",
                name: "vegeta",
                value: "vegetaYes",
                label: "Sí",
            },
            { id: "vegetaNo", name: "vegeta", value: "vegetaNo", label: "No" },
        ],
    },
    {
        type: "radio",
        id: "vegetar",
        label: "Menú vegetariano?",
        radioElem: [
            {
                id: "vegetarYes",
                name: "vegetar",
                value: "vegetarYes",
                label: "Sí",
            },
            {
                id: "vegetarNo",
                name: "vegetar",
                value: "vegetarNo",
                label: "No",
            },
        ],
    },
];
