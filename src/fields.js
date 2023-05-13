export const formFields = [
    { type: "text", id: "name", label: "Name", placeholder: "Ex. John" },
    {
        type: "text",
        id: "lastName",
        label: "Last name",
        placeholder: "Ex. William",
    },
    {
        type: "radio",
        id: "vegeta",
        label: "Needs vegan menu?",
        radioElem: [
            {
                id: "vegetaYes",
                name: "vegeta",
                value: "vegetaYes",
                label: "Yes",
            },
            { id: "vegetaNo", name: "vegeta", value: "vegetaNo", label: "No" },
        ],
    },
    {
        type: "radio",
        id: "vegetar",
        label: "Needs vegetarian menu?",
        radioElem: [
            {
                id: "vegetarYes",
                name: "vegetar",
                value: "vegetarYes",
                label: "Yes",
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
