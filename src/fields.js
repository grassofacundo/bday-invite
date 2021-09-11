export const formFields = [
    {type: "radio", id: "vegeta", label: "Vegeta?", radioElem: [
        {id: "vegetaYes", name: "vegeta", value: "vegetaYes", label: "Sí"},
        {id: "vegetaNo", name: "vegeta", value: "vegetaNo", label: "No"}
    ]},
    {type: "text", id: "name", label: "Nombre", placeholder: "Ej. Juan"},
    {type: "text", id: "lastName", label: "Apellido", placeholder: "Ej. Perez"},
    {type: "number", id: "dni", label: "DNI", placeholder: "-"},
    {type: "number", id: "extrasAdult", label: "Adultes extras que lleves", placeholder: "-"},
    {type: "number", id: "extrasKid", label: "Niñes extras que lleves", placeholder: "-"},
];