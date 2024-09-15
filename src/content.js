export const config = {
    en: [
        {
            text: "Hey mate! This is my birthday invite!",
        },
        {
            title: "When?",
            text: "Next week at 5PM",
        },
        {
            title: "Where?",
            text: "I decided to celebrate it in a golf club: the Comahue Golf Club",
            map: {
                text: "Check map",
                link: "https://maps.app.goo.gl/DSXAJwHV4qLi79kq7",
            },
        },
        {
            text: "The space is limited though, so I only invited specific people, click on the button below to see if your name is in there",
            hasListButton: true,
        },
        {
            hideContentAfterConfirm: true,
            title: "Confirm your presence!",
            text: "Write your name and the name of any companion you want to bring in the form below",
            hasInvitationFormButton: true,
        },
    ],
    es: [
        {
            text: "Hola! Esta es mi invitació de cumpleaños!",
        },
        {
            title: "Cuándo?",
            text: "La semana que viene, a las 17hs",
        },
        {
            title: "Adónde?",
            text: "Lo voy a festejar en mi casita Tuluminati",
            map: {
                text: "Aqui el mapa",
                link: "https://maps.app.goo.gl/DSXAJwHV4qLi79kq7",
            },
        },
        {
            text: "El corazón es grande pero la casa no tanto, Así que sólo invité a la gente de la lista",
            hasListButton: true,
        },
        {
            hideContentAfterConfirm: true,
            title: "Confirmá tu presencia!",
            text: "Escribí tu nombre y el de cualquier otra persona que te gustaría invitar",
            hasInvitationFormButton: true,
        },
    ],
};

export const assets = [
    `${process.env.PUBLIC_URL}/assets/video1`,
    `${process.env.PUBLIC_URL}/assets/img2`,
    `${process.env.PUBLIC_URL}/assets/img3`,
    `${process.env.PUBLIC_URL}/assets/img4`,
    `${process.env.PUBLIC_URL}/assets/img5`,
];

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

export const guests = [
    "Friend 1",
    "Friend 2",
    "Friend 3",
    "Friend 4",
    "Friend 5",
    "Friend 6",
    "Friend 7",
    "Friend 8",
    "Friend 9",
    "Friend 10",
    "Friend 11",
    "Friend 12",
    "Friend 13",
    "Friend 14",
    "Friend 15",
    "Friend 16",
];

export const texts = {
    list: {
        en: "See list",
        es: "Ver lista",
    },
    guestConfirmed: {
        en: {
            many: "See you all soon!",
            one: "See you soon",
        },
        es: {
            many: "Nos vemos pronto!",
            one: "Nos vemos pronto!",
        },
    },
    form: {
        en: "See form",
        es: "Ver formulario",
    },
};
