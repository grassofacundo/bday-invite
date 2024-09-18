export const config = {
    en: [
        {
            title: "It's my 33 birthday!",
            text: "And I wanted to invite you with this amazing invitation",
        },
        {
            title: "When?",
            text: "Thursday, 26 September, 6 PM",
        },
        {
            title: "Where?",
            text: "In a friend's house, at La Veleta",
            map: {
                text: "See the map",
                link: "https://maps.app.goo.gl/DSXAJwHV4qLi79kq7",
            },
        },
        {
            text: "I only invited specific people (the loved ones). Please, check the list if your name is in there",
            hasListButton: true,
        },
        {
            hideContentAfterConfirm: true,
            title: "Confirm your presence!",
            text: "Write your name and the name of any companion you want to bring in the form below (everybody is welcome)",
            hasInvitationFormButton: true,
        },
        {
            title: "What's the menu",
            text: "The menu will be argentinian barbecue 🥩 and some empanadas 🥟",
        },
        {
            title: "What do I bring?",
            text: "The food is on me. But please, bring your own drink 🍹",
        },
        {
            title: "That´s all!",
            text: "Remember to write your name in the list and I'll see you soon! Any inquiry, just let me know",
        },
    ],
    es: [
        {
            title: "Mi cumple 33",
            text: "Y decidí invitarte con esta súper invitación",
        },
        {
            title: "Cuándo?",
            text: "El jueves 26 de septiembre, a las 18hs",
        },
        {
            title: "Adónde?",
            text: "En la casa de una amiga, en La Veleta",
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
            text: "Escribí tu nombre y el de cualquier otra persona que te gustaría invitar (todes invitades!)",
            hasInvitationFormButton: true,
        },
        {
            title: "Qué se come?",
            text: "El menú va a ser un asadazo 🥩 y algunas empanadas 🥟",
        },
        {
            title: "Qué llevo?",
            text: "La comida la paga el Facu. Vos (tu) traete (tráete) lo que vayas a tomar 🍹",
        },
        {
            title: "Eso es todo!",
            text: "Acordate de poner tu nombre en la lista y nos vemos pronto! Cualquier duda, avisame nomás",
        },
    ],
};

export const assets = [
    `${process.env.PUBLIC_URL}/assets/img1`,
    `${process.env.PUBLIC_URL}/assets/img2`,
    `${process.env.PUBLIC_URL}/assets/img3`,
    `${process.env.PUBLIC_URL}/assets/gif4`,
    `${process.env.PUBLIC_URL}/assets/gif5`,
    `${process.env.PUBLIC_URL}/assets/video6`,
    `${process.env.PUBLIC_URL}/assets/img7`,
    `${process.env.PUBLIC_URL}/assets/gif8`,
];

export const formFields = {
    en: [
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
                {
                    id: "vegetaNo",
                    name: "vegeta",
                    value: "vegetaNo",
                    label: "No",
                },
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
    ],
    es: [
        { type: "text", id: "name", label: "Nombre", placeholder: "Ej. Juan" },
        {
            type: "text",
            id: "lastName",
            label: "Apellido",
            placeholder: "Ej. Cortez",
        },
        {
            type: "radio",
            id: "vegeta",
            label: "Menú vegetariano?",
            radioElem: [
                {
                    id: "vegetaYes",
                    name: "vegeta",
                    value: "vegetaYes",
                    label: "Sí",
                },
                {
                    id: "vegetaNo",
                    name: "vegeta",
                    value: "vegetaNo",
                    label: "No",
                },
            ],
        },
        {
            type: "radio",
            id: "vegetar",
            label: "Menú vegano?",
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
    ],
};

export const guests = [
    "German Sambu",
    "Mati Procer",
    "Sandra",
    "Lu Mancino",
    "Agus Ceres",
    "Jossie",
    "Oscar",
    "Fran",
    "Violeta",
];

export const texts = {
    buttonBack: {
        en: "Back",
        es: "Atrás",
    },
    buttonForward: {
        en: "Next",
        es: "Sig.",
    },
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
    formCompanion: {
        en: "Add companion",
        es: "Agregar invitado",
    },
    companion: {
        title: {
            en: "Companions",
            es: "Invitados",
        },
        buttonAdd: {
            en: "Add companion",
            es: "Agregar invitado",
        },
        buttonRemove: {
            en: "Remove companion",
            es: "Eliminar invitado",
        },
    },
    submit: {
        en: "Submit",
        es: "Guardar",
    },

    deadline: {
        en: "The deadline to submit has reached 😭",
        es: "Ya venció el plazo para anotarse 😭",
    },

    formError: {
        en: "Ups, something failed. try to submit again or just get in touch with me",
        es: "Ups, algo falló. Tratá de completar el formulario de vuelta o contactate conmigo directament",
    },
};
