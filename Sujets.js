// sujets.js — Base de données des sujets HGGMC
// Placez ce fichier dans le même dossier que index.html.
// Chaque objet respecte la structure suivante :
//
//  id          : identifiant unique (string)
//  topic       : intitulé exact du sujet (string)
//  school      : établissement concours (string)
//  year        : année du concours (number)
//  tags        : tableau de tags — utiliser EXACTEMENT les valeurs ci-dessous :
//                  Aires géo  → "Amériques", "Asie", "Europe", "Afrique",
//                               "Proche et Moyen-Orient", "France"
//                  Thèmes     → "Gouvernance & Puissance", "Économie & Croissance",
//                               "Mondialisation & Acteurs", "Enjeux durables"
//  rapportLink : URL vers le rapport du jury (string | null)
//  copieLink   : URL vers une copie de référence (string | null)
//  copieNote   : mention ou note obtenue, ex. "20/20" (string | null)

const sujets = [

  // ─────────────────────────────────────────────
  // HGG HEC
  // ─────────────────────────────────────────────

  {
    id: "s005",
    topic: "Les ouvriers et les transformations du travail depuis les années 1920 en Europe de l'Ouest.",
    school: "HEC",
    year: 2005,
    tags: [
      "Europe",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-HEC-2005.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s006",
    topic: "Les outils économiques de la puissance des Etats-Unis d'Amérique depuis 1960.",
    school: "HEC",
    year: 2004,
    tags: [
      "Amériques",
      "Gouvernance & Puissance",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s007",
    topic: "Le rôle de l'Etat dans le développement économique du Japon depuis 1945.",
    school: "HEC",
    year: 2003,
    tags: [
      "Asie",
      "Économie & Croissance",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s008",
    topic: "Transports et mutations économiques de l'espace ouest-européen depuis les années 1920.",
    school: "HEC",
    year: 2002,
    tags: [
      "Europe",
      "Économie & Croissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s009",
    topic: "L'évolution de l'emploi salarié dans l'espace ouest-européen et aux Etats-Unis du début des années 1920 au début des années 1970.",
    school: "HEC",
    year: 2001,
    tags: [
      "Europe",
      "Amériques",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s010",
    topic: "Nouvelles technologies et mutations du tissu industriel dans l'Union européenne et les Etats-Unis depuis les années 1970.",
    school: "HEC",
    year: 2000,
    tags: [
      "Europe",
      "Amériques",
      "Économie & Croissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  // ─────────────────────────────────────────────
  // HGG ESSEC
  // ─────────────────────────────────────────────

  {
    id: "s011",
    topic: "Les arcs de crise dans le monde depuis le début de la guerre froide.",
    school: "ESSEC",
    year: 2025,
    tags: [
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s012",
    topic: "Globalisation et multiplication des frontières depuis les années 90 : un paradoxe ?",
    school: "ESSEC",
    year: 2024,
    tags: [
      "Mondialisation & Acteurs",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s013",
    topic: "La France, puissance d'influence mondiale ?",
    school: "ESSEC",
    year: 2023,
    tags: [
      "France",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2023.pdf",
    copieLink:   "https://major-prepa.com/wp-content/uploads/2023/11/copie-rayan-geopo-bce-essec-19.pdf",
    copieNote:   "19/20"
  },

  {
    id: "s014",
    topic: "Le contrôle des routes stratégiques depuis 1913, vecteur de domination mondiale pour les Etats.",
    school: "ESSEC",
    year: 2022,
    tags: [
      "Gouvernance & Puissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2022.pdf",
    copieLink:   "https://misterprepa.net/wp-content/uploads/2022/10/Copie-0265-00094-806317-2022.pdf",
    copieNote:   "20/20"
  },

  {
    id: "s015",
    topic: "La maîtrise des espaces communs (maritime, aérien, extra-atmosphérique et numérique), enjeu de puissance par les États depuis 1945.",
    school: "ESSEC",
    year: 2021,
    tags: [
      "Gouvernance & Puissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2021.pdf",
    copieLink:   "https://www.cjoint.com/doc/21_10/KJsiLqA20RK_G%C3%A9opo-Essec-Tom.pdf",
    copieNote:   "19/20"
  },

  {
    id: "s016",
    topic: "Le bassin méditerranéen : un espace de crises et de rivalités internationales depuis la fin de la guerre froide.",
    school: "ESSEC",
    year: 2020,
    tags: [
      "Europe",
      "Proche et Moyen-Orient",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2020.pdf",
    copieLink:   "https://misterprepa.net/wp-content/uploads/2020/11/cecile-mage-HGG-20-edhec.pdf",
    copieNote:   "20/20"
  },

  {
    id: "s017",
    topic: "La puissance chinoise en Asie orientale.",
    school: "ESSEC",
    year: 2019,
    tags: [
      "Asie",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2019.pdf",
    copieLink:   "https://misterprepa.net/wp-content/uploads/2019/10/essec-17.pdf",
    copieNote:   "17/20"
  },

  {
    id: "s018",
    topic: "La construction européenne confrontée à la question de la nation (1951-2018).",
    school: "ESSEC",
    year: 2018,
    tags: [
      "Europe",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2018.pdf",
    copieLink:   "https://misterprepa.net/wp-content/uploads/2020/05/Bonne-copie-HGG-ESSEC-2018-.pdf",
    copieNote:   "20/20"
  },

  {
    id: "s019",
    topic: "Le développement de l'Afrique à l'épreuve de la guerre (des années 1960 à nos jours).",
    school: "ESSEC",
    year: 2017,
    tags: [
      "Afrique",
      "Gouvernance & Puissance",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2017.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s020",
    topic: "La construction européenne face aux défis de la Méditerranée et du monde méditerranéen (1957-2016).",
    school: "ESSEC",
    year: 2016,
    tags: [
      "Europe",
      "Proche et Moyen-Orient",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2016.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s021",
    topic: "Nourrir la planète : exigences paradoxales et nouvelle « géopolitique de la faim » (de la chute du mur de Berlin à nos jours).",
    school: "ESSEC",
    year: 2015,
    tags: [
      "Enjeux durables",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2015.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s022",
    topic: "L'industrie, un enjeu majeur au carrefour des problématiques de la mondialisation contemporaine.",
    school: "ESSEC",
    year: 2014,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2014.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s023",
    topic: "Les Etats-Unis changent : les mutations structurelles de l'économie et de la société américaine et leurs conséquences géopolitiques dans le monde de 1991 à nos jours.",
    school: "ESSEC",
    year: 2013,
    tags: [
      "Amériques",
      "Économie & Croissance",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2013.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s024",
    topic: "Croissance, puissance et développement durable : quelles corrélations et implications pour les grands pays et les groupes de pays dans le monde ?",
    school: "ESSEC",
    year: 2012,
    tags: [
      "Économie & Croissance",
      "Enjeux durables",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2012.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s025",
    topic: "La France et les Français face aux grands défis économiques et géopolitiques des trente dernières années.",
    school: "ESSEC",
    year: 2011,
    tags: [
      "France",
      "Économie & Croissance",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2011.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s026",
    topic: "Quels rôles pour l'Union Européenne dans la mondialisation et le jeu des puissances ?",
    school: "ESSEC",
    year: 2010,
    tags: [
      "Europe",
      "Mondialisation & Acteurs",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2010.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s027",
    topic: "L'essor économique et la montée en puissance de la Chine : chances ou menaces pour le reste du monde ?",
    school: "ESSEC",
    year: 2009,
    tags: [
      "Asie",
      "Économie & Croissance",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2009.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s028",
    topic: "Le pétrole et le gaz naturel, richesses et armes à risque.",
    school: "ESSEC",
    year: 2008,
    tags: [
      "Gouvernance & Puissance",
      "Enjeux durables",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2008.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s029",
    topic: "L'Afrique, un continent toujours périphérique et en mal développement ?",
    school: "ESSEC",
    year: 2007,
    tags: [
      "Afrique",
      "Économie & Croissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2007.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s030",
    topic: "Les enjeux économiques et géopolitiques des flux et de l'organisation du commerce mondial depuis les années 1980.",
    school: "ESSEC",
    year: 2006,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2006.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s031",
    topic: "Les difficultés de la construction européenne : obstacles et désaccords.",
    school: "ESSEC",
    year: 2005,
    tags: [
      "Europe",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2005.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s032",
    topic: "L'ouverture de l'économie japonaise sur le monde. Sans négliger les héritages antérieurs, le candidat insistera sur la période postérieure à 1945.",
    school: "ESSEC",
    year: 2004,
    tags: [
      "Asie",
      "Économie & Croissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s033",
    topic: "Deux évolutions du système socialiste : la transition en Russie et la « voie chinoise ». Comparez et évaluez.",
    school: "ESSEC",
    year: 2003,
    tags: [
      "Asie",
      "Europe",
      "Économie & Croissance",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s034",
    topic: "L'industrie a-t-elle encore une place dans l'économie française aujourd'hui ? L'analyse ne négligera ni les héritages historiques ni la dimension sociale de la question.",
    school: "ESSEC",
    year: 2002,
    tags: [
      "France",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s035",
    topic: "Population, société, économie dans les pays en développement. Sans négliger les héritages historiques, le candidat insistera sur l'actualité du problème.",
    school: "ESSEC",
    year: 2001,
    tags: [
      "Économie & Croissance",
      "Enjeux durables"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s036",
    topic: "Les mutations de l'agriculture française depuis le début des années soixante s'expliquent-elles par la libéralisation des échanges dans le monde ?",
    school: "ESSEC",
    year: 2000,
    tags: [
      "France",
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  // ─────────────────────────────────────────────
  // HGG ESCP
  // ─────────────────────────────────────────────

  {
    id: "s037",
    topic: "Le changement climatique, un facteur de recomposition de la mondialisation.",
    school: "ESCP",
    year: 2024,
    tags: [
      "Enjeux durables",
      "Mondialisation & Acteurs"
    ],
    rapportLink: null,
    copieLink:   "https://www.annales-prepa.fr/wp-content/uploads/Copie-HGG-ESCP-2024-1920.pdf",
    copieNote:   "20/20"
  },

  {
    id: "s038",
    topic: "Instabilités et violences en Amérique latine.",
    school: "ESCP",
    year: 2023,
    tags: [
      "Amériques",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2023.pdf",
    copieLink:   "https://major-prepa.com/wp-content/uploads/2023/11/Copie-0266-00119-553815-2023.pdf",
    copieNote:   "17/20"
  },

  {
    id: "s039",
    topic: "Vers un retour des frontières ?",
    school: "ESCP",
    year: 2022,
    tags: [
      "Mondialisation & Acteurs",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2022.pdf",
    copieLink:   "https://misterprepa.net/wp-content/uploads/2022/11/Copie-Geopolitique-HEC-Romane-20-.pdf",
    copieNote:   "20/20"
  },

  {
    id: "s040",
    topic: "Mondialisation et mise en concurrence des pays et des territoires pour attirer les activités économiques.",
    school: "ESCP",
    year: 2021,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2021.pdf",
    copieLink:   "https://misterprepa.net/wp-content/uploads/2021/10/copie-geopo-2021-escp.pdf",
    copieNote:   "20/20"
  },

  {
    id: "s041",
    topic: "La France dans la recomposition des puissances dominantes.",
    school: "ESCP",
    year: 2020,
    tags: [
      "France",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   "https://misterprepa.net/wp-content/uploads/2020/12/Copie-notee-2020.pdf",
    copieNote:   "20/20"
  },

  {
    id: "s042",
    topic: "Les matières premières dans la stratégie de puissance des Etats.",
    school: "ESCP",
    year: 2019,
    tags: [
      "Gouvernance & Puissance",
      "Enjeux durables",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2019.pdf",
    copieLink:   "https://misterprepa.net/wp-content/uploads/2020/02/HGGMC-ESCP-2019-Copie-de-Jordan-1920-.pdf",
    copieNote:   "19/20"
  },

  {
    id: "s043",
    topic: "États-Unis – Chine : rivalités de pouvoir et d'influence.",
    school: "ESCP",
    year: 2018,
    tags: [
      "Amériques",
      "Asie",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2018.pdf",
    copieLink:   "https://misterprepa.net/wp-content/uploads/2019/03/USA-vs-Chine.pdf",
    copieNote:   "17/20"
  },

  {
    id: "s044",
    topic: "L'Union européenne face aux effets déstabilisateurs de la mondialisation.",
    school: "ESCP",
    year: 2017,
    tags: [
      "Europe",
      "Mondialisation & Acteurs",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2017.pdf",
    copieLink:   "https://major-prepa.com/wp-content/uploads/2017/11/copie-HGGMC-18.pdf",
    copieNote:   "18/20"
  },

  {
    id: "s045",
    topic: "Influences et ingérences étrangères au Proche et Moyen-Orient.",
    school: "ESCP",
    year: 2016,
    tags: [
      "Proche et Moyen-Orient",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2016.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s046",
    topic: "Les espaces maritimes, objets de tensions et de conflits entre les États.",
    school: "ESCP",
    year: 2015,
    tags: [
      "Gouvernance & Puissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2015.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s047",
    topic: "L'Afrique subsaharienne est-elle à l'écart du monde ?",
    school: "ESCP",
    year: 2014,
    tags: [
      "Afrique",
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2014.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s048",
    topic: "Les États-Unis et l'exercice de la puissance.",
    school: "ESCP",
    year: 2013,
    tags: [
      "Amériques",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2013.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s049",
    topic: "Les zones d'intégration régionales : étape ou alternative au processus de mondialisation ?",
    school: "ESCP",
    year: 2012,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2012.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s050",
    topic: "Rivalités et rapports de puissance en Asie orientale.",
    school: "ESCP",
    year: 2011,
    tags: [
      "Asie",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2011.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s051",
    topic: "Les années 1980-2000 sont-elles en rupture ou en continuité par rapport au processus de mondialisation hérité de la Révolution Industrielle ?",
    school: "ESCP",
    year: 2010,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2010.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s052",
    topic: "Les Amériques entre intégrations et fragmentations.",
    school: "ESCP",
    year: 2009,
    tags: [
      "Amériques",
      "Mondialisation & Acteurs",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2009.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s053",
    topic: "Que reste-t-il aujourd'hui du clivage Nord-Sud ?",
    school: "ESCP",
    year: 2008,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2008.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s054",
    topic: "La Méditerranée, jeux d'interfaces économiques et géopolitiques de 1945 à nos jours.",
    school: "ESCP",
    year: 2007,
    tags: [
      "Europe",
      "Proche et Moyen-Orient",
      "Gouvernance & Puissance",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2007.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s055",
    topic: "Consommation et consommateurs dans les pays d'économie libérale depuis le début des années 1950.",
    school: "ESCP",
    year: 2006,
    tags: [
      "Économie & Croissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2006.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s056",
    topic: "Les innovations scientifiques et techniques dans l'organisation et la dynamique de la mondialisation.",
    school: "ESCP",
    year: 2006,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2006.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s057",
    topic: "La mobilité des marchandises, des capitaux et des hommes dans l'espace de l'Europe des 15 de 1945 à nos jours.",
    school: "ESCP",
    year: 2005,
    tags: [
      "Europe",
      "Mondialisation & Acteurs"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s058",
    topic: "Hiérarchie et basculements des rapports de force mondiaux depuis 1945.",
    school: "ESCP",
    year: 2004,
    tags: [
      "Gouvernance & Puissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s059",
    topic: "Les problématiques énergétiques de l'Union européenne à 15 de 1945 à nos jours.",
    school: "ESCP",
    year: 2003,
    tags: [
      "Europe",
      "Enjeux durables",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s060",
    topic: "Transports et mutations économiques de l'espace ouest-européen depuis les années 1920.",
    school: "ESCP",
    year: 2002,
    tags: [
      "Europe",
      "Économie & Croissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s061",
    topic: "L'évolution de l'emploi salarié dans l'espace ouest-européen et aux Etats-Unis du début des années 1920 au début des années 1970.",
    school: "ESCP",
    year: 2001,
    tags: [
      "Europe",
      "Amériques",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s062",
    topic: "Les transformations des industries états-uniennes et mexicaine depuis les années 1970 dans le cadre de la mondialisation.",
    school: "ESCP",
    year: 2000,
    tags: [
      "Amériques",
      "Économie & Croissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  // ─────────────────────────────────────────────
  // HGG Grenoble EM
  // ─────────────────────────────────────────────

  {
    id: "s063",
    topic: "Quelle place pour l'Union Européenne dans l'espace méditerranéen ?",
    school: "Grenoble EM",
    year: 2024,
    tags: [
      "Europe",
      "Proche et Moyen-Orient",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s064",
    topic: "Une guerre économique permet-elle de régler un différend international ?",
    school: "Grenoble EM",
    year: 2023,
    tags: [
      "Gouvernance & Puissance",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Grenoble-EM-2023.pdf",
    copieLink:   "https://misterprepa.net/wp-content/uploads/2023/10/Bonne-copie-HGG-GEM-2023-Robin-20-20.pdf",
    copieNote:   "20/20"
  },

  {
    id: "s065",
    topic: "Une gouvernance mondiale de plus en plus efficace ?",
    school: "Grenoble EM",
    year: 2022,
    tags: [
      "Gouvernance & Puissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Grenoble-EM-2022.pdf",
    copieLink:   "https://major-prepa.com/wp-content/uploads/2022/11/Copie-0267-00071-925034-2022.pdf",
    copieNote:   "19/20"
  },

  {
    id: "s066",
    topic: "La politique commerciale, vecteur de la puissance américaine ?",
    school: "Grenoble EM",
    year: 2021,
    tags: [
      "Amériques",
      "Gouvernance & Puissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Grenoble-EM-2021.pdf",
    copieLink:   "https://major-prepa.com/wp-content/uploads/2021/10/BCE-Copie-Geopo-GEM-Thomas-D.-19_20.pdf",
    copieNote:   "19/20"
  },

  {
    id: "s067",
    topic: "La Chine est-elle un colosse aux pieds d'argile ?",
    school: "Grenoble EM",
    year: 2020,
    tags: [
      "Asie",
      "Gouvernance & Puissance",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Grenoble-EM-2020.pdf",
    copieLink:   "https://misterprepa.net/wp-content/uploads/2020/10/2020-GEOPO-GEM-GEM-Nicolas.pdf",
    copieNote:   "20/20"
  },

  {
    id: "s068",
    topic: "Le multilatéralisme est-il menacé ?",
    school: "Grenoble EM",
    year: 2019,
    tags: [
      "Gouvernance & Puissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Grenoble-EM-2019.pdf",
    copieLink:   null,
    copieNote:   null
  },

  // ─────────────────────────────────────────────
  // HGG Ecricome
  // ─────────────────────────────────────────────

  {
    id: "s069",
    topic: "L'eau douce, enjeu de développement durable et de paix ?",
    school: "Ecricome",
    year: 2025,
    tags: [
      "Enjeux durables",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s070",
    topic: "Construire une Europe de la défense depuis les années 1950.",
    school: "Ecricome",
    year: 2025,
    tags: [
      "Europe",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   "https://www.annales-prepa.fr/wp-content/uploads/Copie-HGG-Ecricome-2025-1920.pdf",
    copieNote:   "19/20"
  },

  {
    id: "s071",
    topic: "L'Afrique au 21ème siècle : de nouvelles dépendances post-coloniales ?",
    school: "Ecricome",
    year: 2024,
    tags: [
      "Afrique",
      "Mondialisation & Acteurs",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   "https://www.annales-prepa.fr/wp-content/uploads/Geopolitique-Ecricome-2024.pdf",
    copieNote:   "20/20"
  },

  {
    id: "s072",
    topic: "Sommes nous entrés dans l'ère de la démondialisation ?",
    school: "Ecricome",
    year: 2024,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s073",
    topic: "FTN, auxiliaires ou concurrentes de la puissance des Etats ?",
    school: "Ecricome",
    year: 2023,
    tags: [
      "Mondialisation & Acteurs",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   "https://misterprepa.net/wp-content/uploads/2023/08/Copie-Geopo-ECRICOME-2023-195.pdf",
    copieNote:   "19,5/20"
  },

  {
    id: "s074",
    topic: "Chine et Inde, partenaires ou rivales ?",
    school: "Ecricome",
    year: 2023,
    tags: [
      "Asie",
      "Gouvernance & Puissance",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   "https://misterprepa.net/wp-content/uploads/2023/07/LA-COPIE-DE-CASSANDRE-19-GEOPO-ECRICOME-2023.pdf",
    copieNote:   "19,5/20"
  },

  {
    id: "s075",
    topic: "Le nucléaire dans les relations internationales.",
    school: "Ecricome",
    year: 2022,
    tags: [
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   "https://major-prepa.com/wp-content/uploads/2022/09/Ecricome-Copie-15034370800.pdf",
    copieNote:   "18/20"
  },

  {
    id: "s076",
    topic: "Le Pacifique : de nouvelles réalités stratégiques ?",
    school: "Ecricome",
    year: 2022,
    tags: [
      "Asie",
      "Amériques",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   "https://misterprepa.net/wp-content/uploads/2022/08/HGG-Alexis-19_20.pdf",
    copieNote:   "19/20"
  },

  {
    id: "s077",
    topic: "Le monde arabe entre intégration et fragmentations.",
    school: "Ecricome",
    year: 2021,
    tags: [
      "Proche et Moyen-Orient",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2021.pdf",
    copieLink:   "https://www.cjoint.com/doc/21_10/KJekvaFZz5f_Ecricome-Copie-HGG.pdf",
    copieNote:   "19,7/20"
  },

  {
    id: "s078",
    topic: "Agriculture et alimentation : comment assurer la sécurité alimentaire aujourd'hui et demain ?",
    school: "Ecricome",
    year: 2021,
    tags: [
      "Enjeux durables",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2021.pdf",
    copieLink:   "https://www.cjoint.com/doc/21_10/KJziDZuGn5y_Ecricome-Copie-g%C3%A9opo.pdf",
    copieNote:   "19,2/20"
  },

  {
    id: "s079",
    topic: "L'influence de la France en Europe : héritages et mutations contemporaines.",
    school: "Ecricome",
    year: 2020,
    tags: [
      "France",
      "Europe",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2020.pdf",
    copieLink:   "https://misterprepa.net/wp-content/uploads/2021/02/Geopo.pdf",
    copieNote:   "19/20"
  },

  {
    id: "s080",
    topic: "La recherche et les nouvelles technologies introduisent-elles de nouveaux rapports de force mondiaux ?",
    school: "Ecricome",
    year: 2020,
    tags: [
      "Gouvernance & Puissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2020.pdf",
    copieLink:   "https://major-prepa.com/wp-content/uploads/2020/11/Ecricome-Copie-Geopo-Anonyme-195_20-Sujet-2.pdf",
    copieNote:   "19,5/20"
  },

  {
    id: "s081",
    topic: "La Chine installe-t-elle un nouvel ordre mondial ?",
    school: "Ecricome",
    year: 2019,
    tags: [
      "Asie",
      "Gouvernance & Puissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2019.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s082",
    topic: "Les Etats-Unis et l'Union européenne dans le nouvel ordre économique et géopolitique mondial : la fin de l'Occident ?",
    school: "Ecricome",
    year: 2019,
    tags: [
      "Amériques",
      "Europe",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2019.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s083",
    topic: "Le dérèglement climatique : une nouvelle donne pour la géopolitique mondiale et les relations internationales.",
    school: "Ecricome",
    year: 2018,
    tags: [
      "Enjeux durables",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2018.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s084",
    topic: "La Russie, partenaire ou menace pour l'Union européenne ?",
    school: "Ecricome",
    year: 2018,
    tags: [
      "Europe",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2018.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s085",
    topic: "Les guerres d'aujourd'hui sont-elles les guerres d'hier ?",
    school: "Ecricome",
    year: 2017,
    tags: [
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2017.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s086",
    topic: "Au regard de l'évolution de la société américaine depuis les années 1960, y a-t-il encore une place pour un modèle et un rêve américains ?",
    school: "Ecricome",
    year: 2017,
    tags: [
      "Amériques",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2017.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s087",
    topic: "L'internationalisation et la mondialisation depuis les années 1950 ont-elles réduit les inégalités ?",
    school: "Ecricome",
    year: 2016,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2016.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s088",
    topic: "Le Moyen-Orient depuis les années 1990 : vers un nouvel ordre régional ?",
    school: "Ecricome",
    year: 2016,
    tags: [
      "Proche et Moyen-Orient",
      "Gouvernance & Puissance"
    ],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2016.pdf",
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s089",
    topic: "Un monde sans frontières : une utopie dépassée ?",
    school: "Ecricome",
    year: 2015,
    tags: [
      "Mondialisation & Acteurs",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s090",
    topic: "L'Asie de l'Est : nouveau centre géopolitique et économique du monde ?",
    school: "Ecricome",
    year: 2015,
    tags: [
      "Asie",
      "Gouvernance & Puissance",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s091",
    topic: "La mondialisation et les mutations de la société chinoise.",
    school: "Ecricome",
    year: 2014,
    tags: [
      "Asie",
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s092",
    topic: "Les matières premières au cœur des nouveaux enjeux économiques et géopolitiques contemporains ?",
    school: "Ecricome",
    year: 2014,
    tags: [
      "Gouvernance & Puissance",
      "Enjeux durables",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s093",
    topic: "L'Inde du sous-développement à la puissance ?",
    school: "Ecricome",
    year: 2013,
    tags: [
      "Asie",
      "Économie & Croissance",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s094",
    topic: "Les entreprises, acteurs clés de la mondialisation.",
    school: "Ecricome",
    year: 2013,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s095",
    topic: "L'Union européenne face aux défis rencontrés au cours des 3 dernières décennies.",
    school: "Ecricome",
    year: 2012,
    tags: [
      "Europe",
      "Gouvernance & Puissance",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s096",
    topic: "Les métropoles, territoires dominants de la mondialisation.",
    school: "Ecricome",
    year: 2012,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s097",
    topic: "Le continent africain dans le jeu des puissances depuis la fin de la Guerre froide.",
    school: "Ecricome",
    year: 2011,
    tags: [
      "Afrique",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s098",
    topic: "La montée en puissance des pays émergents : un nouvel ordre mondial ?",
    school: "Ecricome",
    year: 2011,
    tags: [
      "Gouvernance & Puissance",
      "Économie & Croissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s099",
    topic: "Le développement du Proche et du Moyen-Orient, otage des ressources naturelles et des fractures géopolitiques.",
    school: "Ecricome",
    year: 2010,
    tags: [
      "Proche et Moyen-Orient",
      "Gouvernance & Puissance",
      "Enjeux durables"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s100",
    topic: "Le développement durable, une réponse globale à la multiplicité des crises d'aujourd'hui ?",
    school: "Ecricome",
    year: 2010,
    tags: [
      "Enjeux durables",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s101",
    topic: "Les dynamiques démographiques et leurs incidences économiques, sociales et géopolitiques dans le monde d'aujourd'hui.",
    school: "Ecricome",
    year: 2009,
    tags: [
      "Enjeux durables",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s102",
    topic: "Les Etats-Unis d'Amérique : la fin de « l'empire » ?",
    school: "Ecricome",
    year: 2009,
    tags: [
      "Amériques",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s103",
    topic: "Le rapport de l'Europe au monde au début du XXème et au début du XXIème siècle.",
    school: "Ecricome",
    year: 2008,
    tags: [
      "Europe",
      "Gouvernance & Puissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s104",
    topic: "Nourrir 6,5 milliards d'hommes.",
    school: "Ecricome",
    year: 2008,
    tags: [
      "Enjeux durables",
      "Mondialisation & Acteurs"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s105",
    topic: "Etats-Unis, Japon, Chine : coopérations et rivalités économiques et géopolitiques dans le monde d'aujourd'hui.",
    school: "Ecricome",
    year: 2007,
    tags: [
      "Amériques",
      "Asie",
      "Gouvernance & Puissance",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s106",
    topic: "L'Europe centrale et orientale, de l'expérience communiste à l'intégration européenne (1948-2007).",
    school: "Ecricome",
    year: 2007,
    tags: [
      "Europe",
      "Gouvernance & Puissance",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s107",
    topic: "Les enjeux de la mondialisation pour les économies et les sociétés d'Amérique latine.",
    school: "Ecricome",
    year: 2006,
    tags: [
      "Amériques",
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s108",
    topic: "Croissance économique et mutations sociales au XXème siècle : y a-t-il une exception française ?",
    school: "Ecricome",
    year: 2006,
    tags: [
      "France",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s109",
    topic: "Territoire, société et compétitivité de l'économie française depuis la fin des années 1970.",
    school: "Ecricome",
    year: 2005,
    tags: [
      "France",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s110",
    topic: "Les Etats-Unis et la question énergétique depuis les années 1970.",
    school: "Ecricome",
    year: 2005,
    tags: [
      "Amériques",
      "Enjeux durables",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s111",
    topic: "Le capitalisme américain des années 1960 à nos jours.",
    school: "Ecricome",
    year: 2004,
    tags: [
      "Amériques",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s112",
    topic: "L'Union européenne est-elle en train de devenir une puissance économique majeure ?",
    school: "Ecricome",
    year: 2004,
    tags: [
      "Europe",
      "Économie & Croissance",
      "Gouvernance & Puissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s113",
    topic: "L'évolution de la démographie et de la société française de la fin de la Seconde Guerre mondiale à nos jours.",
    school: "Ecricome",
    year: 2003,
    tags: [
      "France",
      "Enjeux durables",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s114",
    topic: "Les enjeux du commerce mondial de 1945 à nos jours.",
    school: "Ecricome",
    year: 2003,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s115",
    topic: "L'impact du Japon sur l'activité économique de ses grands partenaires depuis les années 1960.",
    school: "Ecricome",
    year: 2002,
    tags: [
      "Asie",
      "Économie & Croissance",
      "Mondialisation & Acteurs"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s116",
    topic: "Le poids du pétrole dans l'économie des pays de la Triade.",
    school: "Ecricome",
    year: 2002,
    tags: [
      "Économie & Croissance",
      "Enjeux durables"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s117",
    topic: "Le dollar : vecteur de l'hégémonie des Etats-Unis depuis 1945.",
    school: "Ecricome",
    year: 2001,
    tags: [
      "Amériques",
      "Gouvernance & Puissance",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s118",
    topic: "La mondialisation est-elle un facteur d'accroissement ou de réduction des inégalités dans le monde ?",
    school: "Ecricome",
    year: 2001,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s119",
    topic: "Les enjeux de l'agro-alimentaire dans l'économie mondialisée.",
    school: "Ecricome",
    year: 2000,
    tags: [
      "Mondialisation & Acteurs",
      "Économie & Croissance",
      "Enjeux durables"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  },

  {
    id: "s120",
    topic: "Le capitalisme français de 1945 à nos jours.",
    school: "Ecricome",
    year: 2000,
    tags: [
      "France",
      "Économie & Croissance"
    ],
    rapportLink: null,
    copieLink:   null,
    copieNote:   null
  }

];