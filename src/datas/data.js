  export const aboutData = [
  {
    id: 1,
    title: "Expérience",
    content: `Après plus de 30 années dans l'industrie en tant que technicien de production, de recherche et développement, qui m'ont permis d’acquérir des compétences telles que l’organisation, l’écoute et l'apprentissage en continu de nouvelle technologie.
    J’ai profité d'un concours de circonstance pour effectuer une reconversion professionnelle dans le développement Web, domaine qui m’intéressait depuis de nombreuses années. Je suis motivé pour apprendre de nouveaux framework, langages et m'ouvrir l'esprit à de nouvelles technologies.`,
  },

];

export const imgLangages = [
  {
    id: 101,
    alt: "logo Html",
	tips: "HTML",
    img: "./langages/020-html-5.webp"
  },
  {
    id: 102,
    alt: "logo Css",
	tips: "CSS",
    img: "./langages/019-css-3.webp"
  },
  {
    id: 103,
    alt: "logo Sass",
	tips: "SASS",
    img: "./langages/Sass1.webp"
  },
  {
    id: 104,
    alt: "logo Javascript",
	tips:"JavaScript",
    img: "./langages/Javascript1.webp"
  },
  {
    id: 105,
    alt: "logo React",
	tips:"REACT",
    img: "./langages/react-logopf.webp"
  },
  {
    id: 107,
    alt: "logo Seo",
	tips:"SEO",
    img: "./langages/023-seo.webp"
  },
  {
	id: 108,
	alt: "logo Jest",
	tips:"JEST",
	img: "./langages/jest-logo.webp"
  }
]
export const projects = [
	{
		"id": "c67ab888",
		"title": "Ohmyfood",
		"cover": "./ohmyfood/omf1-cover.webp",
		"srcsetlow": "./ohmyfood/omf1low.webp",
		"alt": "image du site de restauration Ohmyfood",
		"pictures": [
			"../ohmyfood/omf1.webp",
			"../ohmyfood/omf1-1.webp",
			"../ohmyfood/omf2.webp",
			"../ohmyfood/omf3.webp"
		],
		"description": "Améliorez l'interface d'un site mobile avec des animations, en utilisant SASS",
		"project": ["https://jacquescarlier.github.io/oh_my_food_margepb/"],
		"logos": [
			"../langages/020-html-5.webp",
			"../langages/Sass1.webp"
		],
		"learning": [
			"SASS"
		],
		"tags": [
			["https://github.com/jacquescarlier/oh_my_food_margepb"]
		]
	},
	{
		"id": "c67ab8a7",
		"title": "Portfolio Sophie Bluel",
		"cover": "./sophie-bluel/sb11-cover.webp",
		"srcsetlow": "../sophie-bluel/sb11.webp",
		"alt": "image du site du portfolio de Sophie Bluel",
		"pictures": [
			"../sophie-bluel/sophie11.webp",
			"../sophie-bluel/sophie-admin1.webp",
			"../sophie-bluel/sophie-login1.webp",
			"../sophie-bluel/sophie-modale1.webp",
			"../sophie-bluel/sophie-addphoto11.webp",
			"../sophie-bluel/sophie-addphoto21.webp"
		],
		"description": "Concevoir un site portfolio d'une architecte d'intérieur en javascript.",
		"learning": [
			"HTML",
			"CSS",
			"Javascript"
		],
		"logos": [
			"../langages/020-html-5.webp",
			"../langages/019-css-3.webp",
			"../langages/Javascript1.webp"
		],
		"tags": [
			["https://github.com/jacquescarlier/Architecte_P6_JCR"]
		]
	},
	{
		"id": "c67ab899",
		"title": "Kasa",
		"alt": "Image du site de location immobilière Kasa",
		"cover": "./kasa/kasa1-cover.webp",
		"srcsetlow": "./kasa/kasa1.webp",
		"pictures": [
			"../kasa/kasa1.webp",
			"../kasa/kasaapropos.webp",
			"../kasa/kasaapropos2.webp",
			"../kasa/kasadetails1.webp",
			"../kasa/kasadetails2.webp"
		],
		"description": "Créer une application web de location immobilière avec React.",
		"project": ["https://kasa-react-et-vite.vercel.app/"],
		"logos": [
			"../langages/Sass1.webp",
			"../langages/react-logopf.webp"
		],
		"learning": [
			"SASS",
			"React"
		],
		"tags": [
			[ "https://github.com/jacquescarlier/kasa_React_et_Vite"]
		]
	},
	{
		"id": "c67ab4422",
		"title": "77events",
		"cover": "./724events/77events_cover.webp",
		"srcsetlow": "./724events/77events_cover.webp",
		"alt": "image du site de l'application 77 events",
		"pictures": [
			"../724events/77events1.webp",
			"../724events/77events9.webp",
			"../724events/77events2.webp",
			"../724events/77events3.webp",
			"../724events/77events4.webp",
			"../724events/77events5.webp",
			"../724events/77events6.webp",
			"../724events/77events7.webp",
			"../724events/77events10.webp"
		],
		"description": "Debuggez le site d'une agence d'événementiel, en utilisant jest et React devtools components",
		"project": ["https://debugger-uneapplication.netlify.app/"],
		"logos": [
			"../langages/react-logopf.webp",
			"../langages/jest-logo.webp"
		],
		"learning": [
			"React",
			"jest",
			"devTools component"
		],
		"tags": [
			["https://github.com/jacquescarlier/ab11"]
		]
	} /*,
	{
		"id": "c67ab4444",
		"title": "Argent Bank",
		"cover": "./argentbank/argentbankcover.webp",
		"alt": "image du site de l'application bancaire ArgentBank",
		"pictures": [
			"../argentbank/argentbank1.webp",
			"../argentbank/argentbank2.webp",
			"../argentbank/argentbank3.webp",
			"../argentbank/argentbank4.webp",
			"../argentbank/argentbank6.webp",
			"../argentbank/argentbank5.webp"
		],
		"description": "Implémentez le front-end d'une application bancaire avec React.",
		"logos": [
			"../langages/019-css-3.webp",
			"../langages/react-logopf.webp",
			"../langages/redux.webp"
		],
		"learning": [
			"React",
			"Redux",
			"Swagger"
		],
		"tags": [
			["https://github.com/jacquescarlier/ab11"]
		]
	}*/
]