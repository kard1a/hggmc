// sujets.js — Base de données des sujets HGGMC
// Placez ce fichier dans le même dossier que index.html.
// Chaque objet respecte la structure suivante :
//
//  id          : identifiant unique (string)
//  topic       : intitulé exact du sujet (string)
//  school      : établissement concours / source du sujet (string)
//  year        : année du concours (number)
//  tags        : tableau de tags — utiliser EXACTEMENT les valeurs ci-dessous :
//                  Aires géo  → "Amériques", "Asie", "Europe", "Afrique",
//                               "Proche et Moyen-Orient", "France"
//                  Thèmes     → "Gouvernance & Puissance", "Économie & Croissance",
//                               "Mondialisation & Acteurs", "Enjeux durables"
//                               "Agriculture & Alimentation", "Finance", "Histoire économique",
//                               "Culture & Soft Power", "Démographie", "Environnement",
//                               "Eau", "Énergie & Ressources", "Géopolitique", "Industrie",
//                               "Inégalités", "Innovation & Technologie", "Migrations",
//                               "Pays émergents", "Santé & Épidémies", "Tourisme",
//                               "Transports", "Villes & Métropoles", "Russie & Ex-URSS"
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
    tags: ["Europe", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-HEC-2005.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s006",
    topic: "Les outils économiques de la puissance des Etats-Unis d'Amérique depuis 1960.",
    school: "HEC",
    year: 2004,
    tags: ["Amériques", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s007",
    topic: "Le rôle de l'Etat dans le développement économique du Japon depuis 1945.",
    school: "HEC",
    year: 2003,
    tags: ["Asie", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s008",
    topic: "Transports et mutations économiques de l'espace ouest-européen depuis les années 1920.",
    school: "HEC",
    year: 2002,
    tags: ["Europe", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s009",
    topic: "L'évolution de l'emploi salarié dans l'espace ouest-européen et aux Etats-Unis du début des années 1920 au début des années 1970.",
    school: "HEC",
    year: 2001,
    tags: ["Europe", "Amériques", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s010",
    topic: "Nouvelles technologies et mutations du tissu industriel dans l'Union européenne et les Etats-Unis depuis les années 1970.",
    school: "HEC",
    year: 2000,
    tags: ["Europe", "Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  // ─────────────────────────────────────────────
  // HGG ESSEC
  // ─────────────────────────────────────────────

  {
    id: "s011",
    topic: "Les arcs de crise dans le monde depuis le début de la guerre froide.",
    school: "ESSEC",
    year: 2025,
    tags: ["Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s012",
    topic: "Globalisation et multiplication des frontières depuis les années 90 : un paradoxe ?",
    school: "ESSEC",
    year: 2024,
    tags: ["Mondialisation & Acteurs", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s013",
    topic: "La France, puissance d'influence mondiale ?",
    school: "ESSEC",
    year: 2023,
    tags: ["France", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2023.pdf",
    copieLink: "https://major-prepa.com/wp-content/uploads/2023/11/copie-rayan-geopo-bce-essec-19.pdf",
    copieNote: "19/20"
  },

  {
    id: "s014",
    topic: "Le contrôle des routes stratégiques depuis 1913, vecteur de domination mondiale pour les Etats.",
    school: "ESSEC",
    year: 2022,
    tags: ["Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2022.pdf",
    copieLink: "https://misterprepa.net/wp-content/uploads/2022/10/Copie-0265-00094-806317-2022.pdf",
    copieNote: "20/20"
  },

  {
    id: "s015",
    topic: "La maîtrise des espaces communs (maritime, aérien, extra-atmosphérique et numérique), enjeu de puissance par les États depuis 1945.",
    school: "ESSEC",
    year: 2021,
    tags: ["Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2021.pdf",
    copieLink: "https://www.cjoint.com/doc/21_10/KJsiLqA20RK_G%C3%A9opo-Essec-Tom.pdf",
    copieNote: "19/20"
  },

  {
    id: "s016",
    topic: "Le bassin méditerranéen : un espace de crises et de rivalités internationales depuis la fin de la guerre froide.",
    school: "ESSEC",
    year: 2020,
    tags: ["Europe", "Proche et Moyen-Orient", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2020.pdf",
    copieLink: "https://misterprepa.net/wp-content/uploads/2020/11/cecile-mage-HGG-20-edhec.pdf",
    copieNote: "20/20"
  },

  {
    id: "s017",
    topic: "La puissance chinoise en Asie orientale.",
    school: "ESSEC",
    year: 2019,
    tags: ["Asie", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2019.pdf",
    copieLink: "https://misterprepa.net/wp-content/uploads/2019/10/essec-17.pdf",
    copieNote: "17/20"
  },

  {
    id: "s018",
    topic: "La construction européenne confrontée à la question de la nation (1951-2018).",
    school: "ESSEC",
    year: 2018,
    tags: ["Europe", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2018.pdf",
    copieLink: "https://misterprepa.net/wp-content/uploads/2020/05/Bonne-copie-HGG-ESSEC-2018-.pdf",
    copieNote: "20/20"
  },

  {
    id: "s019",
    topic: "Le développement de l'Afrique à l'épreuve de la guerre (des années 1960 à nos jours).",
    school: "ESSEC",
    year: 2017,
    tags: ["Afrique", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2017.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s020",
    topic: "La construction européenne face aux défis de la Méditerranée et du monde méditerranéen (1957-2016).",
    school: "ESSEC",
    year: 2016,
    tags: ["Europe", "Proche et Moyen-Orient", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2016.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s021",
    topic: "Nourrir la planète : exigences paradoxales et nouvelle « géopolitique de la faim » (de la chute du mur de Berlin à nos jours).",
    school: "ESSEC",
    year: 2015,
    tags: ["Enjeux durables", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2015.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s022",
    topic: "L'industrie, un enjeu majeur au carrefour des problématiques de la mondialisation contemporaine.",
    school: "ESSEC",
    year: 2014,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2014.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s023",
    topic: "Les Etats-Unis changent : les mutations structurelles de l'économie et de la société américaine et leurs conséquences géopolitiques dans le monde de 1991 à nos jours.",
    school: "ESSEC",
    year: 2013,
    tags: ["Amériques", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2013.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s024",
    topic: "Croissance, puissance et développement durable : quelles corrélations et implications pour les grands pays et les groupes de pays dans le monde ?",
    school: "ESSEC",
    year: 2012,
    tags: ["Économie & Croissance", "Enjeux durables", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2012.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s025",
    topic: "La France et les Français face aux grands défis économiques et géopolitiques des trente dernières années.",
    school: "ESSEC",
    year: 2011,
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2011.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s026",
    topic: "Quels rôles pour l'Union Européenne dans la mondialisation et le jeu des puissances ?",
    school: "ESSEC",
    year: 2010,
    tags: ["Europe", "Mondialisation & Acteurs", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2010.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s027",
    topic: "L'essor économique et la montée en puissance de la Chine : chances ou menaces pour le reste du monde ?",
    school: "ESSEC",
    year: 2009,
    tags: ["Asie", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2009.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s028",
    topic: "Le pétrole et le gaz naturel, richesses et armes à risque.",
    school: "ESSEC",
    year: 2008,
    tags: ["Gouvernance & Puissance", "Enjeux durables", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2008.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s029",
    topic: "L'Afrique, un continent toujours périphérique et en mal développement ?",
    school: "ESSEC",
    year: 2007,
    tags: ["Afrique", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2007.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s030",
    topic: "Les enjeux économiques et géopolitiques des flux et de l'organisation du commerce mondial depuis les années 1980.",
    school: "ESSEC",
    year: 2006,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2006.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s031",
    topic: "Les difficultés de la construction européenne : obstacles et désaccords.",
    school: "ESSEC",
    year: 2005,
    tags: ["Europe", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESSEC-2005.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s032",
    topic: "L'ouverture de l'économie japonaise sur le monde. Sans négliger les héritages antérieurs, le candidat insistera sur la période postérieure à 1945.",
    school: "ESSEC",
    year: 2004,
    tags: ["Asie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s033",
    topic: "Deux évolutions du système socialiste : la transition en Russie et la « voie chinoise ». Comparez et évaluez.",
    school: "ESSEC",
    year: 2003,
    tags: ["Asie", "Europe", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s034",
    topic: "L'industrie a-t-elle encore une place dans l'économie française aujourd'hui ? L'analyse ne négligera ni les héritages historiques ni la dimension sociale de la question.",
    school: "ESSEC",
    year: 2002,
    tags: ["France", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s035",
    topic: "Population, société, économie dans les pays en développement. Sans négliger les héritages historiques, le candidat insistera sur l'actualité du problème.",
    school: "ESSEC",
    year: 2001,
    tags: ["Économie & Croissance", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s036",
    topic: "Les mutations de l'agriculture française depuis le début des années soixante s'expliquent-elles par la libéralisation des échanges dans le monde ?",
    school: "ESSEC",
    year: 2000,
    tags: ["France", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  // ─────────────────────────────────────────────
  // HGG ESCP
  // ─────────────────────────────────────────────

  {
    id: "s037",
    topic: "Le changement climatique, un facteur de recomposition de la mondialisation.",
    school: "ESCP",
    year: 2024,
    tags: ["Enjeux durables", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: "https://www.annales-prepa.fr/wp-content/uploads/Copie-HGG-ESCP-2024-1920.pdf",
    copieNote: "20/20"
  },

  {
    id: "s038",
    topic: "Instabilités et violences en Amérique latine.",
    school: "ESCP",
    year: 2023,
    tags: ["Amériques", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2023.pdf",
    copieLink: "https://major-prepa.com/wp-content/uploads/2023/11/Copie-0266-00119-553815-2023.pdf",
    copieNote: "17/20"
  },

  {
    id: "s039",
    topic: "Vers un retour des frontières ?",
    school: "ESCP",
    year: 2022,
    tags: ["Mondialisation & Acteurs", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2022.pdf",
    copieLink: "https://misterprepa.net/wp-content/uploads/2022/11/Copie-Geopolitique-HEC-Romane-20-.pdf",
    copieNote: "20/20"
  },

  {
    id: "s040",
    topic: "Mondialisation et mise en concurrence des pays et des territoires pour attirer les activités économiques.",
    school: "ESCP",
    year: 2021,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2021.pdf",
    copieLink: "https://misterprepa.net/wp-content/uploads/2021/10/copie-geopo-2021-escp.pdf",
    copieNote: "20/20"
  },

  {
    id: "s041",
    topic: "La France dans la recomposition des puissances dominantes.",
    school: "ESCP",
    year: 2020,
    tags: ["France", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: "https://misterprepa.net/wp-content/uploads/2020/12/Copie-notee-2020.pdf",
    copieNote: "20/20"
  },

  {
    id: "s042",
    topic: "Les matières premières dans la stratégie de puissance des Etats.",
    school: "ESCP",
    year: 2019,
    tags: ["Gouvernance & Puissance", "Enjeux durables", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2019.pdf",
    copieLink: "https://misterprepa.net/wp-content/uploads/2020/02/HGGMC-ESCP-2019-Copie-de-Jordan-1920-.pdf",
    copieNote: "19/20"
  },

  {
    id: "s043",
    topic: "États-Unis – Chine : rivalités de pouvoir et d'influence.",
    school: "ESCP",
    year: 2018,
    tags: ["Amériques", "Asie", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2018.pdf",
    copieLink: "https://misterprepa.net/wp-content/uploads/2019/03/USA-vs-Chine.pdf",
    copieNote: "17/20"
  },

  {
    id: "s044",
    topic: "L'Union européenne face aux effets déstabilisateurs de la mondialisation.",
    school: "ESCP",
    year: 2017,
    tags: ["Europe", "Mondialisation & Acteurs", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2017.pdf",
    copieLink: "https://major-prepa.com/wp-content/uploads/2017/11/copie-HGGMC-18.pdf",
    copieNote: "18/20"
  },

  {
    id: "s045",
    topic: "Influences et ingérences étrangères au Proche et Moyen-Orient.",
    school: "ESCP",
    year: 2016,
    tags: ["Proche et Moyen-Orient", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2016.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s046",
    topic: "Les espaces maritimes, objets de tensions et de conflits entre les États.",
    school: "ESCP",
    year: 2015,
    tags: ["Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2015.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s047",
    topic: "L'Afrique subsaharienne est-elle à l'écart du monde ?",
    school: "ESCP",
    year: 2014,
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2014.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s048",
    topic: "Les États-Unis et l'exercice de la puissance.",
    school: "ESCP",
    year: 2013,
    tags: ["Amériques", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2013.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s049",
    topic: "Les zones d'intégration régionales : étape ou alternative au processus de mondialisation ?",
    school: "ESCP",
    year: 2012,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2012.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s050",
    topic: "Rivalités et rapports de puissance en Asie orientale.",
    school: "ESCP",
    year: 2011,
    tags: ["Asie", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2011.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s051",
    topic: "Les années 1980-2000 sont-elles en rupture ou en continuité par rapport au processus de mondialisation hérité de la Révolution Industrielle ?",
    school: "ESCP",
    year: 2010,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2010.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s052",
    topic: "Les Amériques entre intégrations et fragmentations.",
    school: "ESCP",
    year: 2009,
    tags: ["Amériques", "Mondialisation & Acteurs", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2009.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s053",
    topic: "Que reste-t-il aujourd'hui du clivage Nord-Sud ?",
    school: "ESCP",
    year: 2008,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2008.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s054",
    topic: "La Méditerranée, jeux d'interfaces économiques et géopolitiques de 1945 à nos jours.",
    school: "ESCP",
    year: 2007,
    tags: ["Europe", "Proche et Moyen-Orient", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2007.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s055",
    topic: "Consommation et consommateurs dans les pays d'économie libérale depuis le début des années 1950.",
    school: "ESCP",
    year: 2006,
    tags: ["Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2006.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s056",
    topic: "Les innovations scientifiques et techniques dans l'organisation et la dynamique de la mondialisation.",
    school: "ESCP",
    year: 2006,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-ESCP-2006.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s057",
    topic: "La mobilité des marchandises, des capitaux et des hommes dans l'espace de l'Europe des 15 de 1945 à nos jours.",
    school: "ESCP",
    year: 2005,
    tags: ["Europe", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s058",
    topic: "Hiérarchie et basculements des rapports de force mondiaux depuis 1945.",
    school: "ESCP",
    year: 2004,
    tags: ["Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s059",
    topic: "Les problématiques énergétiques de l'Union européenne à 15 de 1945 à nos jours.",
    school: "ESCP",
    year: 2003,
    tags: ["Europe", "Enjeux durables", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s060",
    topic: "Transports et mutations économiques de l'espace ouest-européen depuis les années 1920.",
    school: "ESCP",
    year: 2002,
    tags: ["Europe", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s061",
    topic: "L'évolution de l'emploi salarié dans l'espace ouest-européen et aux Etats-Unis du début des années 1920 au début des années 1970.",
    school: "ESCP",
    year: 2001,
    tags: ["Europe", "Amériques", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s062",
    topic: "Les transformations des industries états-uniennes et mexicaine depuis les années 1970 dans le cadre de la mondialisation.",
    school: "ESCP",
    year: 2000,
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  // ─────────────────────────────────────────────
  // HGG Grenoble EM
  // ─────────────────────────────────────────────

  {
    id: "s063",
    topic: "Quelle place pour l'Union Européenne dans l'espace méditerranéen ?",
    school: "Grenoble EM",
    year: 2024,
    tags: ["Europe", "Proche et Moyen-Orient", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s064",
    topic: "Une guerre économique permet-elle de régler un différend international ?",
    school: "Grenoble EM",
    year: 2023,
    tags: ["Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Grenoble-EM-2023.pdf",
    copieLink: "https://misterprepa.net/wp-content/uploads/2023/10/Bonne-copie-HGG-GEM-2023-Robin-20-20.pdf",
    copieNote: "20/20"
  },

  {
    id: "s065",
    topic: "Une gouvernance mondiale de plus en plus efficace ?",
    school: "Grenoble EM",
    year: 2022,
    tags: ["Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Grenoble-EM-2022.pdf",
    copieLink: "https://major-prepa.com/wp-content/uploads/2022/11/Copie-0267-00071-925034-2022.pdf",
    copieNote: "19/20"
  },

  {
    id: "s066",
    topic: "La politique commerciale, vecteur de la puissance américaine ?",
    school: "Grenoble EM",
    year: 2021,
    tags: ["Amériques", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Grenoble-EM-2021.pdf",
    copieLink: "https://major-prepa.com/wp-content/uploads/2021/10/BCE-Copie-Geopo-GEM-Thomas-D.-19_20.pdf",
    copieNote: "19/20"
  },

  {
    id: "s067",
    topic: "La Chine est-elle un colosse aux pieds d'argile ?",
    school: "Grenoble EM",
    year: 2020,
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Grenoble-EM-2020.pdf",
    copieLink: "https://misterprepa.net/wp-content/uploads/2020/10/2020-GEOPO-GEM-GEM-Nicolas.pdf",
    copieNote: "20/20"
  },

  {
    id: "s068",
    topic: "Le multilatéralisme est-il menacé ?",
    school: "Grenoble EM",
    year: 2019,
    tags: ["Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Grenoble-EM-2019.pdf",
    copieLink: null,
    copieNote: null
  },

  // ─────────────────────────────────────────────
  // HGG Ecricome
  // ─────────────────────────────────────────────

  {
    id: "s069",
    topic: "L'eau douce, enjeu de développement durable et de paix ?",
    school: "Ecricome",
    year: 2025,
    tags: ["Enjeux durables", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s070",
    topic: "Construire une Europe de la défense depuis les années 1950.",
    school: "Ecricome",
    year: 2025,
    tags: ["Europe", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: "https://www.annales-prepa.fr/wp-content/uploads/Copie-HGG-Ecricome-2025-1920.pdf",
    copieNote: "19/20"
  },

  {
    id: "s071",
    topic: "L'Afrique au 21ème siècle : de nouvelles dépendances post-coloniales ?",
    school: "Ecricome",
    year: 2024,
    tags: ["Afrique", "Mondialisation & Acteurs", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: "https://www.annales-prepa.fr/wp-content/uploads/Geopolitique-Ecricome-2024.pdf",
    copieNote: "20/20"
  },

  {
    id: "s072",
    topic: "Sommes nous entrés dans l'ère de la démondialisation ?",
    school: "Ecricome",
    year: 2024,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s073",
    topic: "FTN, auxiliaires ou concurrentes de la puissance des Etats ?",
    school: "Ecricome",
    year: 2023,
    tags: ["Mondialisation & Acteurs", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: "https://misterprepa.net/wp-content/uploads/2023/08/Copie-Geopo-ECRICOME-2023-195.pdf",
    copieNote: "19/20"
  },

  {
    id: "s074",
    topic: "Chine et Inde, partenaires ou rivales ?",
    school: "Ecricome",
    year: 2023,
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: "https://misterprepa.net/wp-content/uploads/2023/07/LA-COPIE-DE-CASSANDRE-19-GEOPO-ECRICOME-2023.pdf",
    copieNote: "19/20"
  },

  {
    id: "s075",
    topic: "Le nucléaire dans les relations internationales.",
    school: "Ecricome",
    year: 2022,
    tags: ["Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: "https://major-prepa.com/wp-content/uploads/2022/09/Ecricome-Copie-15034370800.pdf",
    copieNote: "18/20"
  },

  {
    id: "s076",
    topic: "Le Pacifique : de nouvelles réalités stratégiques ?",
    school: "Ecricome",
    year: 2022,
    tags: ["Asie", "Amériques", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: "https://misterprepa.net/wp-content/uploads/2022/08/HGG-Alexis-19_20.pdf",
    copieNote: "19/20"
  },

  {
    id: "s077",
    topic: "Le monde arabe entre intégration et fragmentations.",
    school: "Ecricome",
    year: 2021,
    tags: ["Proche et Moyen-Orient", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2021.pdf",
    copieLink: "https://www.cjoint.com/doc/21_10/KJekvaFZz5f_Ecricome-Copie-HGG.pdf",
    copieNote: "19/20"
  },

  {
    id: "s078",
    topic: "Agriculture et alimentation : comment assurer la sécurité alimentaire aujourd'hui et demain ?",
    school: "Ecricome",
    year: 2021,
    tags: ["Enjeux durables", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2021.pdf",
    copieLink: "https://www.cjoint.com/doc/21_10/KJziDZuGn5y_Ecricome-Copie-g%C3%A9opo.pdf",
    copieNote: "19/20"
  },

  {
    id: "s079",
    topic: "L'influence de la France en Europe : héritages et mutations contemporaines.",
    school: "Ecricome",
    year: 2020,
    tags: ["France", "Europe", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2020.pdf",
    copieLink: "https://misterprepa.net/wp-content/uploads/2021/02/Geopo.pdf",
    copieNote: "19/20"
  },

  {
    id: "s080",
    topic: "La recherche et les nouvelles technologies introduisent-elles de nouveaux rapports de force mondiaux ?",
    school: "Ecricome",
    year: 2020,
    tags: ["Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2020.pdf",
    copieLink: "https://major-prepa.com/wp-content/uploads/2020/11/Ecricome-Copie-Geopo-Anonyme-195_20-Sujet-2.pdf",
    copieNote: "19/20"
  },

  {
    id: "s081",
    topic: "La Chine installe-t-elle un nouvel ordre mondial ?",
    school: "Ecricome",
    year: 2019,
    tags: ["Asie", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2019.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s082",
    topic: "Les Etats-Unis et l'Union européenne dans le nouvel ordre économique et géopolitique mondial : la fin de l'Occident ?",
    school: "Ecricome",
    year: 2019,
    tags: ["Amériques", "Europe", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2019.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s083",
    topic: "Le dérèglement climatique : une nouvelle donne pour la géopolitique mondiale et les relations internationales.",
    school: "Ecricome",
    year: 2018,
    tags: ["Enjeux durables", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2018.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s084",
    topic: "La Russie, partenaire ou menace pour l'Union européenne ?",
    school: "Ecricome",
    year: 2018,
    tags: ["Europe", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2018.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s085",
    topic: "Les guerres d'aujourd'hui sont-elles les guerres d'hier ?",
    school: "Ecricome",
    year: 2017,
    tags: ["Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2017.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s086",
    topic: "Au regard de l'évolution de la société américaine depuis les années 1960, y a-t-il encore une place pour un modèle et un rêve américains ?",
    school: "Ecricome",
    year: 2017,
    tags: ["Amériques", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2017.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s087",
    topic: "L'internationalisation et la mondialisation depuis les années 1950 ont-elles réduit les inégalités ?",
    school: "Ecricome",
    year: 2016,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2016.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s088",
    topic: "Le Moyen-Orient depuis les années 1990 : vers un nouvel ordre régional ?",
    school: "Ecricome",
    year: 2016,
    tags: ["Proche et Moyen-Orient", "Gouvernance & Puissance"],
    rapportLink: "https://www.annales-prepa.fr/wp-content/uploads/Rapport-de-jury-HGG-Ecricome-2016.pdf",
    copieLink: null,
    copieNote: null
  },

  {
    id: "s089",
    topic: "Un monde sans frontières : une utopie dépassée ?",
    school: "Ecricome",
    year: 2015,
    tags: ["Mondialisation & Acteurs", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s090",
    topic: "L'Asie de l'Est : nouveau centre géopolitique et économique du monde ?",
    school: "Ecricome",
    year: 2015,
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s091",
    topic: "La mondialisation et les mutations de la société chinoise.",
    school: "Ecricome",
    year: 2014,
    tags: ["Asie", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s092",
    topic: "Les matières premières au cœur des nouveaux enjeux économiques et géopolitiques contemporains ?",
    school: "Ecricome",
    year: 2014,
    tags: ["Gouvernance & Puissance", "Enjeux durables", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s093",
    topic: "L'Inde du sous-développement à la puissance ?",
    school: "Ecricome",
    year: 2013,
    tags: ["Asie", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s094",
    topic: "Les entreprises, acteurs clés de la mondialisation.",
    school: "Ecricome",
    year: 2013,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s095",
    topic: "L'Union européenne face aux défis rencontrés au cours des 3 dernières décennies.",
    school: "Ecricome",
    year: 2012,
    tags: ["Europe", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s096",
    topic: "Les métropoles, territoires dominants de la mondialisation.",
    school: "Ecricome",
    year: 2012,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s097",
    topic: "Le continent africain dans le jeu des puissances depuis la fin de la Guerre froide.",
    school: "Ecricome",
    year: 2011,
    tags: ["Afrique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s098",
    topic: "La montée en puissance des pays émergents : un nouvel ordre mondial ?",
    school: "Ecricome",
    year: 2011,
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s099",
    topic: "Le développement du Proche et du Moyen-Orient, otage des ressources naturelles et des fractures géopolitiques.",
    school: "Ecricome",
    year: 2010,
    tags: ["Proche et Moyen-Orient", "Gouvernance & Puissance", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s100",
    topic: "Le développement durable, une réponse globale à la multiplicité des crises d'aujourd'hui ?",
    school: "Ecricome",
    year: 2010,
    tags: ["Enjeux durables", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s101",
    topic: "Les dynamiques démographiques et leurs incidences économiques, sociales et géopolitiques dans le monde d'aujourd'hui.",
    school: "Ecricome",
    year: 2009,
    tags: ["Enjeux durables", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s102",
    topic: "Les Etats-Unis d'Amérique : la fin de « l'empire » ?",
    school: "Ecricome",
    year: 2009,
    tags: ["Amériques", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s103",
    topic: "Le rapport de l'Europe au monde au début du XXème et au début du XXIème siècle.",
    school: "Ecricome",
    year: 2008,
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s104",
    topic: "Nourrir 6,5 milliards d'hommes.",
    school: "Ecricome",
    year: 2008,
    tags: ["Enjeux durables", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s105",
    topic: "Etats-Unis, Japon, Chine : coopérations et rivalités économiques et géopolitiques dans le monde d'aujourd'hui.",
    school: "Ecricome",
    year: 2007,
    tags: ["Amériques", "Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s106",
    topic: "L'Europe centrale et orientale, de l'expérience communiste à l'intégration européenne (1948-2007).",
    school: "Ecricome",
    year: 2007,
    tags: ["Europe", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s107",
    topic: "Les enjeux de la mondialisation pour les économies et les sociétés d'Amérique latine.",
    school: "Ecricome",
    year: 2006,
    tags: ["Amériques", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s108",
    topic: "Croissance économique et mutations sociales au XXème siècle : y a-t-il une exception française ?",
    school: "Ecricome",
    year: 2006,
    tags: ["France", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s109",
    topic: "Territoire, société et compétitivité de l'économie française depuis la fin des années 1970.",
    school: "Ecricome",
    year: 2005,
    tags: ["France", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s110",
    topic: "Les Etats-Unis et la question énergétique depuis les années 1970.",
    school: "Ecricome",
    year: 2005,
    tags: ["Amériques", "Enjeux durables", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s111",
    topic: "Le capitalisme américain des années 1960 à nos jours.",
    school: "Ecricome",
    year: 2004,
    tags: ["Amériques", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s112",
    topic: "L'Union européenne est-elle en train de devenir une puissance économique majeure ?",
    school: "Ecricome",
    year: 2004,
    tags: ["Europe", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s113",
    topic: "L'évolution de la démographie et de la société française de la fin de la Seconde Guerre mondiale à nos jours.",
    school: "Ecricome",
    year: 2003,
    tags: ["France", "Enjeux durables", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s114",
    topic: "Les enjeux du commerce mondial de 1945 à nos jours.",
    school: "Ecricome",
    year: 2003,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s115",
    topic: "L'impact du Japon sur l'activité économique de ses grands partenaires depuis les années 1960.",
    school: "Ecricome",
    year: 2002,
    tags: ["Asie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s116",
    topic: "Le poids du pétrole dans l'économie des pays de la Triade.",
    school: "Ecricome",
    year: 2002,
    tags: ["Économie & Croissance", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s117",
    topic: "Le dollar : vecteur de l'hégémonie des Etats-Unis depuis 1945.",
    school: "Ecricome",
    year: 2001,
    tags: ["Amériques", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s118",
    topic: "La mondialisation est-elle un facteur d'accroissement ou de réduction des inégalités dans le monde ?",
    school: "Ecricome",
    year: 2001,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s119",
    topic: "Les enjeux de l'agro-alimentaire dans l'économie mondialisée.",
    school: "Ecricome",
    year: 2000,
    tags: ["Mondialisation & Acteurs", "Économie & Croissance", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s120",
    topic: "Le capitalisme français de 1945 à nos jours.",
    school: "Ecricome",
    year: 2000,
    tags: ["France", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  // ─────────────────────────────────────────────
  // HGG HEC
  // ─────────────────────────────────────────────

  {
    id: "s121",
    topic: "1991-2022 : un entre-deux-guerres ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s122",
    topic: "Concurrence et subventions publiques dans l’industrie depuis les années 1970 (Europe, États-Unis, Chine)",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s123",
    topic: "Démographie et puissance en Asie",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s124",
    topic: "Existe-t-il un ordre mondial en 1913 ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s125",
    topic: "Forces et faiblesses de l’euro",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s126",
    topic: "Forces et faiblesses de la diplomatie étasunienne depuis les années 2000",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s127",
    topic: "Géopolitique de l'eau au Moyen-Orient",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s128",
    topic: "L’Afrique, entre rivalités internes et compétition entre puissances extérieures au continent",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s129",
    topic: "L’agriculture en France : une réussite ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s130",
    topic: "L’État, un acteur fragile au Moyen-Orient ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s131",
    topic: "L’inégal développement des pays africains : quels facteurs ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s132",
    topic: "L'intégration régionale en Amérique latine : mythe ou réalité ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s133",
    topic: "L’Union européenne et le Sud global",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s134",
    topic: "L’Union européenne face à la Russie, un affrontement indirect",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s135",
    topic: "La Chine et ses frontières",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s136",
    topic: "La conteneurisation du trafic maritime",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s137",
    topic: "La gouvernance mondiale du climat est-elle une impasse ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s138",
    topic: "La Guerre froide : une compétition technologique ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s139",
    topic: "Le charbon, une énergie du passé ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s140",
    topic: "Le Maghreb dans la mondialisation",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s141",
    topic: "Le Pacifique entre Chine et Etats-Unis",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s142",
    topic: "Le rôle des Etats-Unis dans l’ordre international au lendemain des deux guerres mondiales",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s143",
    topic: "Les ambitions du nationalisme indien",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s144",
    topic: "Les BRICS, héritiers des non-alignés ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s145",
    topic: "Les espaces maritimes : convoitises et appropriations",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s146",
    topic: "Les Etats-Unis dominent-ils l’Amérique latine ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s147",
    topic: "Les firmes multinationales sont-elles incontrôlables ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s148",
    topic: "Les terres rares, géopolitique d'une ressource industrielle stratégique",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s149",
    topic: "Les transitions énergétiques depuis les années 1910",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s150",
    topic: "Un « made in France » est-il encore possible ?",
    school: "HEC",
    year: 2024,
    tags: [],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  // ─────────────────────────────────────────────
  // Sujets Mon Colleur HGG
  // ─────────────────────────────────────────────

  {
    id: "s151",
    topic: "Alimentation : vers la fin de la mal-bouffe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s152",
    topic: "Faut-il condamner l’industrie agroalimentaire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s153",
    topic: "L’agriculture intensive : quel bilan ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s154",
    topic: "L'alimentation et les religions dans le monde, marché ou contrainte ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s155",
    topic: "L’élevage est-il condamné à long terme ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s156",
    topic: "L’obésité, symbole de la malbouffe",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s157",
    topic: "La drogue, premier marché agricole mondial",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s158",
    topic: "La mondialisation alimentaire de 1900 aux années 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s159",
    topic: "La terre agricole dans les PED",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s160",
    topic: "Le bio et le renouveau de l’agriculture",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s161",
    topic: "Le food power dans le monde depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s162",
    topic: "Le vin et la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s163",
    topic: "Les agriculteurs et l'environnement",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s164",
    topic: "Les campagnes des PED sont-elles condamnées à la pauvreté ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s165",
    topic: "Les déséquilibres alimentaires : Afrique versus Asie",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s166",
    topic: "Les famines au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s167",
    topic: "Les famines dans le monde, produit de la guerre ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s168",
    topic: "Les industries agroalimentaires : crainte des riches et espoir des pauvres ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s169",
    topic: "Les risques de la sécurité alimentaire dans le monde au XXIème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s170",
    topic: "Les villes occidentales à l’heure du « bio » et des circuits courts",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s171",
    topic: "Mieux manger : enjeu local ou mondial ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s172",
    topic: "Qu'est-ce qu'une puissance alimentaire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s173",
    topic: "Rivalités commerciales dans l'agriculture mondiale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s174",
    topic: "Un milliard de sous-nourris, un milliard de trop nourris",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s175",
    topic: "Une nouvelle agriculture est-elle à inventer ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Agriculture & Alimentation", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s176",
    topic: "La crise des années 1930 et la crise financière de 2007-2013 : comparez",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Économie & Croissance", "Finance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s177",
    topic: "La crise des crédits subprimes et le fantôme de la crise de 1929",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Économie & Croissance", "Finance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s178",
    topic: "La crise financière (2007-2012) : retour en force ou baroud d'honneur des États ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Économie & Croissance", "Finance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s179",
    topic: "Les bulles immobilières",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Économie & Croissance", "Finance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s180",
    topic: "Les dépressions économiques au 20ème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Économie & Croissance", "Finance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s181",
    topic: "Les déséquilibres au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Économie & Croissance", "Finance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s182",
    topic: "Les grandes crises économiques sont-elles prévisibles ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Économie & Croissance", "Finance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s183",
    topic: "Ordre et désordre de la mondialisation économique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Économie & Croissance", "Finance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s184",
    topic: "La culture est-elle un frein ou un accélérateur à l'internationalisation des entreprises ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Culture & Soft Power", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s185",
    topic: "La culture est-elle un marché ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Culture & Soft Power", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s186",
    topic: "La culture et l’internationalisation des entreprises",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Culture & Soft Power", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s187",
    topic: "La fascination révolutionnaire hors d'Europe au 20ème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Culture & Soft Power", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s188",
    topic: "Le cinéma depuis les années 60",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Culture & Soft Power", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s189",
    topic: "Le cinéma, une forme de soft power au XXème siècle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Culture & Soft Power", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s190",
    topic: "Le métissage : l'avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Culture & Soft Power", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s191",
    topic: "L'âge de départ à la retraite : quels problèmes depuis la fin du XIXème siècle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Démographie", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s192",
    topic: "La croissance démographique au XXème siècle, frein ou moteur au développement ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Démographie", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s193",
    topic: "La démographie enjeu géographique, enjeu politique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Démographie", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s194",
    topic: "La prise en charge des personnes âgées",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Démographie", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s195",
    topic: "Les grandes conférences mondiales sur la population ont-elles un avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Démographie", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s196",
    topic: "Maîtriser la démographie mondiale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Démographie", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s197",
    topic: "Malthus réveille-toi ! Ils pensent avoir maîtrisé la démographie mondiale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Démographie", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s198",
    topic: "Changement climatique et biodiversité : deux causes communes ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s199",
    topic: "Entreprises et développement durable",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s200",
    topic: "Financer l’innovation verte depuis les années 1970",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s201",
    topic: "L'économie verte est-elle un nouveau relais de croissance pour les pays occidentaux ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s202",
    topic: "L’environnement, un frein économique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s203",
    topic: "La biodiversité dans les rapports Nord-Sud",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s204",
    topic: "La biodiversité, en perte de vitesse ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s205",
    topic: "La décroissance pour sauver la planète ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s206",
    topic: "La finance verte : un mirage ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s207",
    topic: "La forêt : menacée ou préservée ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s208",
    topic: "La géopolitique du climat",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s209",
    topic: "La gestion du risque industriel depuis les années 1970 dans les pays développés",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s210",
    topic: "La gouvernance climatique : entrave ou opportunité pour le marché ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s211",
    topic: "La gouvernance mondiale de l’environnement",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s212",
    topic: "La gouvernance mondiale du climat : quels enjeux ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s213",
    topic: "La préservation des grandes zones forestières : un combat perdu ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s214",
    topic: "La protection de l’environnement est-elle compatible avec la recherche d’une nouvelle croissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s215",
    topic: "Le climat : nouvelle bataille diplomatique mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s216",
    topic: "Le climat est-il soluble dans la diplomatie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s217",
    topic: "Le développement durable : une nouvelle fracture Nord-Sud ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s218",
    topic: "Le développement durable a-t-il favorisé l’émergence d’un capitalisme vert ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s219",
    topic: "Le développement durable est-il un objectif illusoire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s220",
    topic: "Le développement durable face à la croissance démographique et économique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s221",
    topic: "Le développement durable, nécessité mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s222",
    topic: "Le développement durable, une approche contestée ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s223",
    topic: "Le plastique, nouvel ennemi de l’environnement",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s224",
    topic: "Le réchauffement climatique et ses conséquences économiques",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s225",
    topic: "Les accords de Paris sur le climat : beaucoup de bruit pour rien ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s226",
    topic: "Les enjeux économiques de la protection de l’environnement dans le monde depuis les années 1970 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s227",
    topic: "Les espaces de la pollution depuis les Trente Glorieuses",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s228",
    topic: "Les ONG, fers de lance de la lutte contre le changement climatique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s229",
    topic: "Les pays du Nord, « obnubilés » par les risques ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s230",
    topic: "Peut-on dire que les accords de Paris sur le climat sont un échec ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s231",
    topic: "Pollution et croissance économique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s232",
    topic: "Y a-t-il encore des fronts pionniers ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Enjeux durables", "Gouvernance & Puissance", "Environnement"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s233",
    topic: "L’eau et les conflits entre États (Afrique, Proche-Orient, Moyen-Orient)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Eau", "Enjeux durables", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s234",
    topic: "L'eau sera-t-elle une ressource rare ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Eau", "Enjeux durables", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s235",
    topic: "L'eau, source de coopérations ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Eau", "Enjeux durables", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s236",
    topic: "L’eau, source de guerre et d’épidémies ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Eau", "Enjeux durables", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s237",
    topic: "L'eau, une ressource plus importante que le pétrole ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Eau", "Enjeux durables", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s238",
    topic: "La guerre de l'eau aura-t-elle lieu ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Eau", "Enjeux durables", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s239",
    topic: "Une question d’avenir : l’eau potable",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Eau", "Enjeux durables", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s240",
    topic: "A qui profite la rente pétrolière depuis les années 70 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s241",
    topic: "Assiste-t-on à la fin des énergies fossiles ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s242",
    topic: "Comment expliquer les variations du prix du baril de pétrole (depuis le début des années 1970) ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s243",
    topic: "Comment le pétrole et l’électricité ont-ils changé le monde depuis le début du 20ème siècle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s244",
    topic: "Faut-il suivre les traces du pétrole pour expliquer les conflits entre les grandes puissances ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s245",
    topic: "Habitat et économie d’énergie depuis les années 1970",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s246",
    topic: "L’avenir énergétique passe-t-il par le nucléaire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s247",
    topic: "L’électronucléaire dans le monde",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s248",
    topic: "L’instabilité des cours des matières premières depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s249",
    topic: "La « transition énergétique » porte-t-elle bien son nom ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s250",
    topic: "La taxe carbone, une vraie solution ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s251",
    topic: "La transition énergétique a-t-elle commencé ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s252",
    topic: "Le charbon a-t-il de l’avenir ? / Le charbon a-t-il un avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s253",
    topic: "Le gaz : aux portes de l'âge d'or ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s254",
    topic: "Le gaz a-t-il la même destinée que le pétrole ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s255",
    topic: "Le gaz et le pétrole sont-ils encore des « armes géopolitiques » ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s256",
    topic: "Le gaz naturel est-il la clé de la transition énergétique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s257",
    topic: "Le gaz, pétrole de demain ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s258",
    topic: "Le nucléaire est-il une énergie d’avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s259",
    topic: "Le peak-oil",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s260",
    topic: "Les atouts et les inconvénients d'un baril bon marché",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s261",
    topic: "Les énergies nouvelles sont-elles vraiment durables ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s262",
    topic: "Les énergies renouvelables peuvent-elles détrôner le charbon ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s263",
    topic: "Les énergies renouvelables peuvent-elles permettre de sortir du nucléaire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s264",
    topic: "Les énergies renouvelables, une idée nouvelle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s265",
    topic: "Les pays occidentaux producteurs de matières premières dans la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s266",
    topic: "Les pays pétroliers préparent-ils l'après pétrole ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s267",
    topic: "Les ressources naturelles peuvent-elles être vues comme une malédiction ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s268",
    topic: "Les routes internationales, terrestres et maritimes, du gaz depuis les années 60",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s269",
    topic: "Marché du carbone, taxe carbone : solutions impossibles ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s270",
    topic: "Peut-on avoir du pétrole et être pauvre ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s271",
    topic: "Que peut-on demander aux énergies vertes dans un monde en croissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s272",
    topic: "Quelle place pour le nucléaire dans la transition énergétique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s273",
    topic: "Quels sont les nouveaux rapports de force au sein des pays producteurs de pétrole ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s274",
    topic: "Tchernobyl et ses conséquences : 1986-2016",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s275",
    topic: "Transition énergétique et création d’emplois",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s276",
    topic: "Iles et archipels, nouveaux enjeux",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s277",
    topic: "L'économie de la mer est-elle la promesse d'une nouvelle croissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s278",
    topic: "La mer, ressource déjà épuisée ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s279",
    topic: "La pêche et l'agriculture intensive, entre marché mondial et développement durable",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s280",
    topic: "La pêche mondiale à l’épreuve du développement durable",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s281",
    topic: "La plage, un territoire mondialisé ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s282",
    topic: "La surexploitation des océans",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s283",
    topic: "Le poisson, un enjeu géopolitique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s284",
    topic: "Le sable et ses tourismes : un mariage réussi ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s285",
    topic: "Les mers et l’énergie : nouvel espace et conquêtes",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s286",
    topic: "Les opérateurs du trafic maritime : diversité, concentration, internationalisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s287",
    topic: "Les routes maritimes mondiales depuis 1914",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s288",
    topic: "Se déplacer sur les mers : enjeux économiques et géopolitiques (XIXème-XXème siècles).",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Énergie & Ressources", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s289",
    topic: "« Le Vatican, combien de divisions ? », une réflexion contredite par l’histoire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s290",
    topic: "A quoi sert l’UNESCO ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s291",
    topic: "Caractéristiques de la guerre froide",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s292",
    topic: "Dans quelle mesure les guerres depuis le début du XXIème siècle diffèrent-elles des guerres du XXème siècle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s293",
    topic: "De l’Empire britannique au Commonwealth",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s294",
    topic: "Dominer le monde par la langue (XXe-XXIe)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s295",
    topic: "Empires coloniaux et guerres mondiales",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s296",
    topic: "Empires coloniaux et hiérarchie des nations avant 1939",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s297",
    topic: "États ou entreprises, qui mène la course à l’espace ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s298",
    topic: "Faut-il supprimer l'ONU ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s299",
    topic: "Grands réseaux et cyberattaques",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s300",
    topic: "Guerre des étoiles : l’Initiative de Défense Stratégique de Reagan",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s301",
    topic: "Islam et économie",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s302",
    topic: "Isthmes et détroits : enjeux géostratégiques",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s303",
    topic: "L’archéologie et le patrimoine archéologique dans les relations internationales",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s304",
    topic: "L’Arctique : géopolitique d’un espace convoité",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s305",
    topic: "L’Arctique, nouvel espace de conquête ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s306",
    topic: "L’arme nucléaire, facteur de paix ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s307",
    topic: "L’efficacité des « murs »",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s308",
    topic: "L’empire français en 1914, un atout majeur pour la puissance économique et politique française ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s309",
    topic: "L'empire linguistique anglo-saxon : le plus grand des empires ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s310",
    topic: "L'empire linguistique britannique : le plus grand des empires ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s311",
    topic: "L'espace depuis 1960, « champ de bataille » des grandes puissances ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s312",
    topic: "L’espace, nouveau terrain d’affrontement des grandes puissances (depuis les années 1950) ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s313",
    topic: "L'espionnage économique est-il une réalité ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s314",
    topic: "L'exercice de la puissance peut-il se passer de la force militaire ? (exemples depuis les années 1980)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s315",
    topic: "L’intelligence économique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s316",
    topic: "L’Islam dans le monde",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s317",
    topic: "L’Islam et ses rapports avec l’économie",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s318",
    topic: "L’ONU est-elle un « machin » ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s319",
    topic: "L'UNESCO est-elle inutile ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s320",
    topic: "La colonisation pacifique a-t-elle existé ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s321",
    topic: "La conquête spatiale a-t-elle un avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s322",
    topic: "La convoitise sur les ressources de l'Arctique est-elle raisonnable ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s323",
    topic: "La domination par la langue depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s324",
    topic: "La fin de la guerre froide a-t-elle apporté la paix ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s325",
    topic: "La fin ou le retour des frontières ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s326",
    topic: "La géopolitique est-elle une science exacte ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s327",
    topic: "La guerre froide : facteur de progrès ou de stagnation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s328",
    topic: "La guerre froide : un accélérateur de progrès ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s329",
    topic: "La guerre froide est-elle facteur de paix ou de guerre ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s330",
    topic: "La guerre froide et « l’équilibre de la terreur »",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s331",
    topic: "La guerre froide, au fond bien utile ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s332",
    topic: "La guerre froide, l’économie au service de la géopolitique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s333",
    topic: "La haute mer : dernière frontière ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s334",
    topic: "La prochaine guerre sera-t-elle cybernétique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s335",
    topic: "La prolifération nucléaire : des traités pour rien ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s336",
    topic: "La prolifération nucléaire : qui est responsable ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s337",
    topic: "La puissance militaire reste-t-elle un élément d'influence pour les États ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s338",
    topic: "La seconde guerre mondiale et ses effets sur le très long terme",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s339",
    topic: "Le commerce des armes dans le monde",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s340",
    topic: "Le conseil de sécurité de l’ONU, quelle utilité depuis 1945 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s341",
    topic: "Le cyberespace, nouvel enjeu géopolitique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s342",
    topic: "Le football est-il encore un sport populaire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s343",
    topic: "Le nucléaire militaire : ordre et désordre depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s344",
    topic: "Le pont, enjeu géopolitique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s345",
    topic: "Le renseignement, clé de la puissance militaire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s346",
    topic: "Le rôle de l’empire colonial français et britannique dans l’entre-deux-guerres",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s347",
    topic: "Le terrorisme, rejeton de la mondialisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s348",
    topic: "Le Vatican, un réel pouvoir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s349",
    topic: "Les colonies furent-elles une « bonne affaire » pour les Européens ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s350",
    topic: "Les dépenses en armement dans le monde depuis la fin de l’Union soviétique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s351",
    topic: "Les dépenses militaires sont-elles source de croissance ? / stimulent-elles la croissance économique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s352",
    topic: "Les détroits en géopolitique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s353",
    topic: "Les enjeux multiscalaires des Jeux olympiques de Paris 2024",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s354",
    topic: "Les guerres mondiales et le progrès",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s355",
    topic: "Les Jeux olympiques depuis 1936 : une affaire de propagande ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s356",
    topic: "Les Jeux olympiques sont-ils un non-sens économique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s357",
    topic: "Les Jeux olympiques, une bonne affaire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s358",
    topic: "Les langues internationales : un élément de soft power ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s359",
    topic: "Les micro-États : quel avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s360",
    topic: "Les militaires et le pouvoir dans les pays en développement",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s361",
    topic: "Les murs/murailles et leur efficacité (exemples au choix depuis un siècle)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s362",
    topic: "Les non-alignés de Bandung à Alger, 1955-1973",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s363",
    topic: "Les nouveaux enjeux économiques de la conquête spatiale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s364",
    topic: "Marine de guerre, technologies et équilibres géostratégiques depuis les années 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s365",
    topic: "Ouverture ou fermeture des frontières ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s366",
    topic: "Peut-on parler d'une nouvelle course à l'espace depuis les années 2000 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s367",
    topic: "Qu’est-ce que le néocolonialisme ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s368",
    topic: "Que reste-t-il de la décolonisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s369",
    topic: "Que reste-t-il des empires coloniaux ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s370",
    topic: "Quelle est l’utilité de l’ONU, de la Cnuced, de la FAO … ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s371",
    topic: "Quelle utilité pour le Commonwealth ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s372",
    topic: "Quelles sont les conséquences de la prolifération nucléaire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s373",
    topic: "Qui a réussi sa décolonisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s374",
    topic: "Qui achète des armes dans le monde depuis 30 ans ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s375",
    topic: "Religions et capitalisme",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s376",
    topic: "Sommes-nous dans l'ère des radicalités religieuses ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s377",
    topic: "Technologie et guerres",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s378",
    topic: "Un certain retour à la guerre froide ? (21eme siècle)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s379",
    topic: "Une grande nation doit-elle aussi être un « marchand de canons » ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s380",
    topic: "Vivons-nous un retour durable des frontières ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s381",
    topic: "Y a-t-il des frontières infranchissables ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s382",
    topic: "1914/1918 : la fin de l’Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s383",
    topic: "Avantages et inconvénients des dévaluations depuis la fin de la première guerre mondiale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s384",
    topic: "Cartels et mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s385",
    topic: "Comment augmenter la productivité (XXème siècle) ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s386",
    topic: "Être paysan en 1900, 1939, 1957",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s387",
    topic: "Faut-il craindre le protectionnisme ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s388",
    topic: "Géopolitique de l’acier",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s389",
    topic: "Histoire économique : Qui a inventé le capitalisme ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s390",
    topic: "L'Allemagne et les États-Unis, locomotives de la seconde révolution industrielle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s391",
    topic: "L’aménagement du territoire : une vieille lubie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s392",
    topic: "L'État est-il un « mal nécessaire » en 1945 au sortir de la guerre (hors pays communistes) ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s393",
    topic: "L’Europe : première puissance économique du monde en 1914 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s394",
    topic: "L’Europe à la fin de la première guerre mondiale : la fin d’une civilisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s395",
    topic: "L’Europe à la veille de la Première Guerre mondiale : un continent intégré ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s396",
    topic: "L’Europe de 1914 s’est-elle suicidée ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s397",
    topic: "L'Europe en 1914, une puissance économique mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s398",
    topic: "L’Europe superpuissance en 1914 et en 1939 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s399",
    topic: "L’héritage économique de la Grande Guerre",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s400",
    topic: "L’inflation a-t-elle du bon ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s401",
    topic: "La concentration des entreprises (exemples sectoriels)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s402",
    topic: "La France a-t-elle gagné la première guerre mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s403",
    topic: "La mode, marché dangereux",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s404",
    topic: "La nouvelle frontière économique du monde : entre protectionnisme et libre-échange",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s405",
    topic: "La planification économique dans les années 1950 et 1960 : vérité à l’ouest, erreur à l’est ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s406",
    topic: "Le capitalisme est-il un allié de la démocratie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s407",
    topic: "Le luxe est-il condamnable ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s408",
    topic: "Le marché du luxe : un marché comme les autres ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s409",
    topic: "Le monde de la contrefaçon et le monde du luxe au vingtième siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s410",
    topic: "Le monde riche en 1913",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s411",
    topic: "Le monopole industriel a-t-il quelques vertus ? (Un exemple au choix) / Le monopole industriel, vice ou vertu ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s412",
    topic: "Le protectionnisme a-t-il quand même quelques vertus ? (exemples au choix)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s413",
    topic: "Le protectionnisme destructeur du commerce au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s414",
    topic: "Le protectionnisme éducateur à la lumière de l'histoire économique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s415",
    topic: "Le protectionnisme et la crise de 1929 : quelles leçons ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s416",
    topic: "Le retour de l’inflation est-il une calamité ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s417",
    topic: "Le traité de Versailles (1919), ce mal-aimé",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s418",
    topic: "Les années 1920 dans les pays occidentaux : quels déséquilibres ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s419",
    topic: "Les capitalistes de la Belle Époque",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s420",
    topic: "Les dévaluations monétaires : un avantage ou un palliatif ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s421",
    topic: "Les dévaluations monétaires dans l’entre-deux-guerres : un atout ou un drame ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s422",
    topic: "Les facteurs de la croissance économique dans le monde industriel au XXe siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s423",
    topic: "Les guerres commerciales dans l’économie mondiale depuis les années 1980",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s424",
    topic: "Les lobbys : indispensables ou nuisibles ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s425",
    topic: "Les Trente Glorieuses, une belle époque ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s426",
    topic: "Les Trente Glorieuses, une parenthèse dans l'histoire de la croissance occidentale depuis 1914 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s427",
    topic: "Libre-échange et protectionnisme dans le monde depuis les années 1930",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s428",
    topic: "Monopole, duopole, oligopole : exemples au choix",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s429",
    topic: "Pourquoi l’industrie du luxe se porte-t-elle bien ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s430",
    topic: "Qu'est-ce qu'un lobby ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s431",
    topic: "Qu'est-ce qu'une révolution industrielle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s432",
    topic: "Quand et comment le modèle taylorien a-t-il trouvé ses limites ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s433",
    topic: "Quand le bâtiment va, tout va ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s434",
    topic: "Quand s’est terminée la première guerre mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s435",
    topic: "Rester un grand producteur d'acier est-ce un signe de puissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s436",
    topic: "Une grande nation doit-elle être une nation industrielle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Histoire économique", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s437",
    topic: "Automobile et environnement",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s438",
    topic: "Industrie automobile et délocalisation (Europe et USA depuis les années 1960)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s439",
    topic: "L’automobile du futur : électrique, hybride, pile à combustible… ou rien ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s440",
    topic: "L’automobile électrique a plus d’un siècle ; a-t-elle aussi un avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s441",
    topic: "L’automobile en 1970 et aujourd'hui : comparez",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s442",
    topic: "L’automobile face à l’abandon du moteur thermique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s443",
    topic: "La désindustrialisation dans les pays développés depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s444",
    topic: "La désindustrialisation des pays avancés est-elle un phénomène irréversible ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s445",
    topic: "La relocalisation industrielle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s446",
    topic: "La voiture en 1945 et aujourd’hui",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s447",
    topic: "Le secteur automobile et la division internationale des processus de production",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s448",
    topic: "Les flux de délocalisations industrielles dans le monde sont-elles la condition nouvelle de la croissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s449",
    topic: "Relocaliser l'économie : une utopie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Industrie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s450",
    topic: "Davos et Porto Alegre, les deux faces d’une même pièce ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s451",
    topic: "Espaces gagnants, espaces perdants de la mondialisation depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s452",
    topic: "Être riche au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s453",
    topic: "Inégalités et accessibilité",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s454",
    topic: "L’altermondialisme : une revanche des sociétés civiles ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s455",
    topic: "L’économie informelle, une réalité structurante ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s456",
    topic: "L’économie solidaire existe-t-elle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s457",
    topic: "L’industrialisation creuse-t-elle les inégalités dans le monde ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s458",
    topic: "La figure du riche dans les pays développés au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s459",
    topic: "La fracture Nord-Sud a-t-elle encore un sens ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s460",
    topic: "La limite Nord-Sud : un non-sens ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s461",
    topic: "La pauvreté dans les pays riches (depuis la fin de la Seconde Guerre mondiale)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s462",
    topic: "La pauvreté en 1900, 1950 et aujourd’hui dans les pays développés",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s463",
    topic: "La précarité dans les pays riches depuis les années 1980",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s464",
    topic: "La protection sociale contre l’emploi ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s465",
    topic: "Les inégalités mondiales de revenu ont-elles tendance à se creuser ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s466",
    topic: "Les oubliés de la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s467",
    topic: "Les perdants de la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s468",
    topic: "Les riches mangent-ils dans la main des pauvres ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s469",
    topic: "Que reste-t-il du clivage nord-sud ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s470",
    topic: "Vivons-nous une accélération des inégalités ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Inégalités", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s471",
    topic: "Dépenses de recherche et hiérarchie des nations",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s472",
    topic: "Existe-t-il une géographie de l’internet ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s473",
    topic: "Formes et enjeux d’une régulation mondiale des géants du numérique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s474",
    topic: "Géopolitique des infrastructures numériques",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s475",
    topic: "Internet : plus de transparence ou la boîte de Pandore ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s476",
    topic: "Internet : une nouvelle culture de la transparence ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s477",
    topic: "Internet a-t-il mis fin aux frontières ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s478",
    topic: "Internet et les réseaux sociaux réinventent-ils la démocratie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s479",
    topic: "Internet et les révolutions commerciales",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s480",
    topic: "Internet peut-il favoriser la croissance des pays les plus pauvres ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s481",
    topic: "L'économie collaborative est-elle soluble dans le capitalisme mondialisé ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s482",
    topic: "L'économie collaborative, un secteur amené à se renforcer ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s483",
    topic: "L’économie de la connaissance génère-t-elle de nouvelles inégalités ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s484",
    topic: "L'informatisation de la société est-elle créatrice d’emplois ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s485",
    topic: "La bataille du savoir, véritable enjeu de suprématie dans le monde aujourd’hui ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s486",
    topic: "La guerre du savoir, un affrontement décisif dans l’avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s487",
    topic: "La R&D et la création d'emploi dans les pays industrialisés",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s488",
    topic: "La recherche et développement, clé de la croissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s489",
    topic: "La troisième révolution industrielle est-elle différente des deux premières ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s490",
    topic: "Le e-learning",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s491",
    topic: "Les « géants » d’Internet",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s492",
    topic: "Les câbles sous-marins et les satellites dans la mondialisation depuis les années 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s493",
    topic: "Les GAFA (Google, Apple, Facebook, Amazon) révolutionnent-ils le monde ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s494",
    topic: "Les GAFA sont-ils un scandale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s495",
    topic: "Les nouvelles règles de l’économie à l’heure d’internet",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s496",
    topic: "Les réseaux de la 5G",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s497",
    topic: "Les sciences comme outil de politique étrangère : le cas américain depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s498",
    topic: "Les technologies numériques permettent-elles de dématérialiser la croissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s499",
    topic: "Recherche et innovation, quels sont les pays leaders ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s500",
    topic: "Troisième, Quatrième Révolution Industrielle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Innovation & Technologie", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s501",
    topic: "A quoi sert le secteur public ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s502",
    topic: "Capitalisme industriel et capitalisme financier, opposés ou complémentaires ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s503",
    topic: "Capitalisme libéral contre capitalisme rhénan : une vision toujours opportune ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s504",
    topic: "Comment expliquer le succès du néolibéralisme depuis les années 1980 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s505",
    topic: "Dans quels contextes économique et idéologique le tournant néo-libéral des économies occidentales prend-t-il forme ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s506",
    topic: "Être ultralibéral depuis les années 1970",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s507",
    topic: "L’État doit-il nous rendre meilleur ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s508",
    topic: "L’État est-il victime du transnational ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s509",
    topic: "L’État, acteur économique : une idée d’avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s510",
    topic: "L'ultra libéralisme existe-t-il ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s511",
    topic: "La nationalisation, une idée du passé ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s512",
    topic: "La politique industrielle a-t-elle-vécu ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s513",
    topic: "Le nationalisme économique est-il mort depuis les années 1980 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s514",
    topic: "Le nationalisme économique est-il une solution ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s515",
    topic: "Le retour de l’idée de nationalisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s516",
    topic: "Les années 80 : fin du nationalisme économique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s517",
    topic: "Les privatisations sont-elles efficaces ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s518",
    topic: "Les services publics sont-ils la clé de la croissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s519",
    topic: "Nationalisme et protectionnisme : même combat au 20ème et 21ème siècles ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s520",
    topic: "Quelle souveraineté économique dans la mondialisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Gouvernance & Puissance", "Économie & Croissance", "Histoire économique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s521",
    topic: "Conflits et déplacements humains au XXème et XXIème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Migrations", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s522",
    topic: "La mobilité dans le monde",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Migrations", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s523",
    topic: "La mobilité des travailleurs États-Unis/Europe depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Migrations", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s524",
    topic: "Les déplacements de population dans le monde depuis les années 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Migrations", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s525",
    topic: "Les diasporas dans l’économie mondiale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Migrations", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s526",
    topic: "Les grands pôles migratoires dans le monde",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Migrations", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s527",
    topic: "Les migrants enfants ou victimes de la mondialisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Migrations", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s528",
    topic: "Les migrants, victimes de la mondialisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Migrations", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s529",
    topic: "Les migrations et les villes de l’hémisphère Sud",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Migrations", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s530",
    topic: "Les migrations internationales depuis la fin du XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Migrations", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s531",
    topic: "Les migrations Nord-Sud",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Migrations", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s532",
    topic: "Sécheresse et mouvements de population depuis 1945 (exemples au choix)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Migrations", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s533",
    topic: "Existe-t-il des régions économiques mondiales ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s534",
    topic: "L’intégration régionale, facteur de stabilisation ou de tensions ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s535",
    topic: "L’OMC : une organisation inadaptée aux enjeux contemporains ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s536",
    topic: "La crise sanitaire de 2020-2021 bouleverse-t-elle la mondialisation des échanges ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s537",
    topic: "La nouvelle mondialisation est-elle une garantie de la croissance des échanges commerciaux ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s538",
    topic: "Le commerce équitable",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s539",
    topic: "Le commerce illicite : comment l’évaluer ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s540",
    topic: "Le commerce transatlantique depuis le début du XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s541",
    topic: "Les échanges entre la Chine et les États-Unis sont-ils un atout ou un danger pour la croissance mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s542",
    topic: "Les zones grises dans le monde",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s543",
    topic: "Que nous apprend le projet de traité d’échange transatlantique entre l’Europe et les États-Unis (TTIP ou TAFTA) sur la gouvernance mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s544",
    topic: "Quel avenir pour le commerce équitable ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s545",
    topic: "Régionalisme commercial et accords bilatéraux menacent-ils l’avenir de l’OMC ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s546",
    topic: "Comment attirer les investisseurs étrangers ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s547",
    topic: "Comment la guerre en Ukraine impacte-t-elle la mondialisation des échanges ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s548",
    topic: "Être global et local à la fois",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s549",
    topic: "Existe-il des territoires en dehors de la mondialisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s550",
    topic: "L’entreprise multinationale est-elle de nulle part ou de partout ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s551",
    topic: "La littoralisation depuis les années 1970",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s552",
    topic: "La mondialisation peut-elle servir le local ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s553",
    topic: "La mondialisation produit-elle de nouveaux territoires ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s554",
    topic: "Le « local » ennemi du « mondial » dans la seconde moitié du XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s555",
    topic: "Le monde d'aujourd'hui est-il multipolaire ou polycentrique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s556",
    topic: "Les entreprises ont-elles encore un territoire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s557",
    topic: "Les grandes multinationales, un acteur des relations internationales ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s558",
    topic: "Les multinationales définissent-elles les règles de la mondialisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s559",
    topic: "Les pays enclavés sont-ils condamnés ? (exemples au choix)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s560",
    topic: "Les pôles économiques de la mondialisation au 21ème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s561",
    topic: "Peut-on parler d’une multipolarisation du monde",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s562",
    topic: "Quel(s) est / sont le(s) centre(s) du monde ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s563",
    topic: "Quelles sont les principales logiques d'intégration territoriale des firmes transnationales ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s564",
    topic: "A quoi sert la bourse ? (depuis la fin de la seconde guerre mondiale)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s565",
    topic: "Contrôler les banques depuis 1929",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s566",
    topic: "Croissance économique et marchés immobiliers en Europe, en Chine et aux Etats-Unis",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s567",
    topic: "Doit-on et peut-on réguler la finance mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s568",
    topic: "Endettement et développement des pays du Sud",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s569",
    topic: "L’économie off-shore est-elle un produit de la mondialisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s570",
    topic: "L’endettement des États : atout ou cauchemar ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s571",
    topic: "L’optimisation fiscale des grandes entreprises",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s572",
    topic: "La financiarisation de l’économie : salutaire ou suicidaire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s573",
    topic: "La géographie de la finance internationale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s574",
    topic: "Le capitalisme actionnarial menace-t-il l’économie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s575",
    topic: "Le FMI et les économies en difficulté",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s576",
    topic: "Le FMI, pompier ou pyromane ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s577",
    topic: "Le micro-crédit, voie d’avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s578",
    topic: "Le secret bancaire existe-t-il encore ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s579",
    topic: "Le yuan, le dollar et l’euro",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s580",
    topic: "Les actionnaires, alibi du capitalisme ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s581",
    topic: "Les centres de la finance mondiale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s582",
    topic: "Les grandes places financières dans le monde",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s583",
    topic: "Les paradis fiscaux : mythe ou réalité ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s584",
    topic: "Les paradis fiscaux : un enfer pour les autres États ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s585",
    topic: "Les places financières des grandes puissances sont-elles encore sensibles aux évènements politiques ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s586",
    topic: "Londres et New York depuis 1918 en tant que places financières",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s587",
    topic: "Paradis fiscaux et centres financiers off-shore dans le monde depuis les années 60",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s588",
    topic: "Paris et Londres, deux places financières d’avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s589",
    topic: "Peut-on se passer des banques et des banquiers ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s590",
    topic: "Poids et action des fonds souverains",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s591",
    topic: "Pourquoi surveille-t-on les banques depuis la crise de 1929 dans les économies de marché ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Finance", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s592",
    topic: "Anciens et nouveaux émergents",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Pays émergents", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s593",
    topic: "La classe moyenne dans les pays en développement, un mythe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Pays émergents", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s594",
    topic: "Les BRICS : pays émergents ou émergés ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Pays émergents", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s595",
    topic: "Les BRICS offrent-ils un nouveau modèle de développement ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Pays émergents", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s596",
    topic: "Les économies émergentes depuis les années 1980 : toujours d’actualité ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Pays émergents", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s597",
    topic: "Les nouveaux riches : Chine, Russie, Golfe…",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Pays émergents", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s598",
    topic: "Les pays émergents dans la mondialisation : frein ou moteur ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Pays émergents", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s599",
    topic: "Les pays émergents peuvent-ils tirer l’économie mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Pays émergents", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s600",
    topic: "On ne parle plus beaucoup des BRICS...",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Pays émergents", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s601",
    topic: "Que sont devenus les BRICS ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Pays émergents", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s602",
    topic: "L’organisation mondiale de la santé (OMS) et la mondialisation de la santé",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Santé & Épidémies", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s603",
    topic: "Les épidémies comme témoignage de la mondialisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Santé & Épidémies", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s604",
    topic: "Les pandémies depuis les années 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Santé & Épidémies", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s605",
    topic: "L'économie touristique mise en péril par le terrorisme",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Tourisme", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s606",
    topic: "La croisière, nouvel horizon de l'économie des loisirs ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Tourisme", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s607",
    topic: "La disneylandisation du monde, un mythe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Tourisme", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s608",
    topic: "Le tourisme dans la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Tourisme", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s609",
    topic: "Le tourisme de masse : comment l’arrêter ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Tourisme", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s610",
    topic: "Le tourisme de masse tue-t-il le tourisme ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Tourisme", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s611",
    topic: "Le tourisme, facteur de mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Tourisme", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s612",
    topic: "Le tourisme, reflet des disparités Nord-Sud",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Tourisme", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s613",
    topic: "Tourisme de masse vs tourisme d’élite",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Tourisme", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s614",
    topic: "Tourisme et essor économique dans les pays en développement",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Tourisme", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s615",
    topic: "1950-1988 : l’âge d’or du transport aérien ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Transports", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s616",
    topic: "Chemin de fer et désenclavement économique (exemples au choix)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Transports", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s617",
    topic: "L'aviation commerciale depuis les années 1980",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Transports", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s618",
    topic: "L'aviation commerciale, source de pollution ou de croissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Transports", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s619",
    topic: "La concurrence dans les transports aériens, une guerre sans fin ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Transports", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s620",
    topic: "Le transport aérien est-il condamné ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Transports", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s621",
    topic: "Le transport aérien, un facteur de la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Transports", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s622",
    topic: "Les grands aéroports, facteurs de la mondialisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Transports", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s623",
    topic: "Les transports, un enjeu de développement durable (pays développés)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Transports", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s624",
    topic: "Banlieues et espaces périurbains",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s625",
    topic: "Des villes trop polluées et trop chaudes ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s626",
    topic: "L’humanité est-elle condamnée à vivre dans les villes ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s627",
    topic: "La métropole de demain, branchée et autonome ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s628",
    topic: "La polarisation sociale et spatiale des mégalopoles s’est-elle aggravée ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s629",
    topic: "La production de richesses se fait-elle uniquement dans les métropoles ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s630",
    topic: "La ville durable est-elle rentable ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s631",
    topic: "Le rôle des métropoles dans la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s632",
    topic: "Les bidonvilles : mode d’habitation fatal ou transitoire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s633",
    topic: "Les bidonvilles de 1950 à nos jours",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s634",
    topic: "Les bidonvilles, une nouvelle façon d’habiter ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s635",
    topic: "Les grandes villes du monde face au changement climatique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s636",
    topic: "Les mégalopoles sont-elles vouées à disparaître ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s637",
    topic: "Les métropoles, actrices du changement climatique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s638",
    topic: "Les richesses économiques sont-elles uniquement produites dans les métropoles ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s639",
    topic: "Les villes globales : géographie, évolutions, enjeux depuis 2000",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s640",
    topic: "Qu'est-ce que la ségrégation urbaine ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s641",
    topic: "Quelles places particulières occupent les mégalopoles dans la mondialisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s642",
    topic: "Quels sont les effets de la transition urbaine sur la croissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s643",
    topic: "Smart grids, smart cities : freins, réalités",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Villes & Métropoles", "Mondialisation & Acteurs", "Enjeux durables"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s644",
    topic: "« Exception culturelle » en Europe depuis 1960 : bilan et avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s645",
    topic: "A-t-on raison de s'endetter dans l'UE des années 2000 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s646",
    topic: "Allemagne et France depuis les années 1980 : deux destins industriels opposés ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s647",
    topic: "Avance américaine versus retard européen : une proposition révisable au XXIe siècle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s648",
    topic: "Banques et banquiers en Europe depuis les années 70",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s649",
    topic: "Bilan de la Banque Centrale Européenne",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s650",
    topic: "Bruxelles fait-elle la construction européenne depuis 1957 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s651",
    topic: "Centres et périphéries dans l’Union Européenne",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s652",
    topic: "Combien l’Europe compte-t-elle de métropoles ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s653",
    topic: "Comment expliquer le retour de l'euroscepticisme ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s654",
    topic: "Comment expliquer les progrès des euroscepticismes ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s655",
    topic: "Comment les structures économiques et sociales des pays d'Europe orientale se sont-elles adaptées à l'UE ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s656",
    topic: "Dans le cadre de l'Union Européenne, l'idée « d'Europe du Sud » a-t-elle un sens ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s657",
    topic: "De l’Europe des 6 à l’Europe des 27 : trop vite, trop grand ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s658",
    topic: "Délocalisations et relocalisations en Europe occidentale depuis 20 ans",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s659",
    topic: "Destins divergents de l’industrie automobile en Europe des années 60 à aujourd’hui",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s660",
    topic: "États, frontières et intégration dans l’Union Européenne",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s661",
    topic: "Euro et compétitivité",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s662",
    topic: "Europe et Japon, malades de la démographie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s663",
    topic: "Existe-t-il encore des patriotismes économiques en Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s664",
    topic: "Existe-t-il une société européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s665",
    topic: "Faut-il renforcer les pouvoirs de la BCE ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s666",
    topic: "Faut-il sauver le petit commerce (France et Europe, années 1950 à nos jours) ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s667",
    topic: "Formation continue, apprentissage et lutte contre le chômage (Union européenne, depuis 1973)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s668",
    topic: "Gauche française et social-démocratie allemande face à l’économie",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s669",
    topic: "Géopolitique de la Méditerranée",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s670",
    topic: "Histoire et mémoire du rideau de fer",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s671",
    topic: "Intérêt des traités commerciaux entre Europe et États-Unis depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s672",
    topic: "L’agriculture européenne à l’avant-garde des mutations agricoles mondiales ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s673",
    topic: "L’Allemagne de l’après réunification est-elle trop puissante ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s674",
    topic: "L’Allemagne peut-elle être un modèle pour l’Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s675",
    topic: "L’Allemagne peut-elle sortir l’Europe de la crise ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s676",
    topic: "L’automobile européenne n’est-elle qu’européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s677",
    topic: "L’énergie en quête d’une politique européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s678",
    topic: "L’énergie et la construction européenne",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s679",
    topic: "L’espace méditerranéen et ses enjeux historiques au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s680",
    topic: "L’espace Schengen : quel bilan pour l’Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s681",
    topic: "L’État Nation en Europe, une résurgence ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s682",
    topic: "L'euro est-il quand même une réussite ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s683",
    topic: "L’euro et les Européens",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s684",
    topic: "L’euro permet-il de fédérer les Européens ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s685",
    topic: "L'euro, clé de voûte de la construction européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s686",
    topic: "L'euro, une histoire ancienne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s687",
    topic: "L’euro, une monnaie mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s688",
    topic: "L’euro, une réussite ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s689",
    topic: "L’Europe : un continent bipolaire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s690",
    topic: "L’Europe : une mini économie monde ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s691",
    topic: "L’Europe a-t-elle encore une capacité militaire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s692",
    topic: "L’Europe a-t-elle une place dans l’espace ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s693",
    topic: "L’Europe de 6 à 27, pourquoi ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s694",
    topic: "L'Europe des miracles économiques après 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s695",
    topic: "L’Europe des Pères fondateurs est-elle encore d’actualité ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s696",
    topic: "L’Europe du Plan Marshall",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s697",
    topic: "L’Europe du Sud est-elle structurellement malade ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s698",
    topic: "L’Europe du Sud est-elle un boulet pour l‘UE ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s699",
    topic: "L'Europe en quête d'une politique énergétique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s700",
    topic: "L'Europe est-elle ouverte au monde ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s701",
    topic: "L'Europe et la mer depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s702",
    topic: "L'Europe et la question turque depuis 1914",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s703",
    topic: "L'Europe et sa démographie faiblissante",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s704",
    topic: "L’Europe et sa fracture Nord-Sud",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s705",
    topic: "L'Europe et ses politiques d'immigration depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s706",
    topic: "L'Europe méditerranéenne, atout ou boulet pour l'économie de l'UE ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s707",
    topic: "L’Europe post-carbone est-elle en marche ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s708",
    topic: "L’Europe, puissance spatiale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s709",
    topic: "L’Europe, terre d’immigration depuis 1945 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s710",
    topic: "L'Europe, terre d'immigration malgré elle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s711",
    topic: "L’Europe, une terre d’immigration ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s712",
    topic: "L’Eurovision et la Ligue des champions, deux évènements d’unité européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s713",
    topic: "L’Eurovision, un événement médiatique européen",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s714",
    topic: "L’excédent commercial, force de l’Allemagne, faiblesse de la France ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s715",
    topic: "L’extension de l’OTAN depuis la fin de la guerre froide ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s716",
    topic: "L’immigration et la solidarité au XXème siècle en Europe",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s717",
    topic: "L'importance géostratégique de la Méditerranée orientale depuis la fin de la première guerre mondiale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s718",
    topic: "L’industrie aéronautique européenne depuis les années 1970",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s719",
    topic: "L’industrie alimentaire en Europe et aux États-Unis, une culture différente ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s720",
    topic: "L'intégration de l'Europe orientale dans l'UE a-t-elle affaibli ou renforcé la cohésion des économies européennes ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s721",
    topic: "L’Italie, une puissance culturelle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s722",
    topic: "L’OTAN : géopolitique d’une alliance militaire",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s723",
    topic: "L’OTAN et son rôle en Europe depuis 1991",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s724",
    topic: "L’UE : l’Est contre l’Ouest ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s725",
    topic: "L'UE : une puissance économique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s726",
    topic: "L'UE a-t-elle été un atout ou un obstacle aux délocalisations ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s727",
    topic: "L'UE a-t-elle une politique contre le chômage ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s728",
    topic: "L’UE doit-elle choisir entre élargissement et approfondissement ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s729",
    topic: "L'UE est-elle mortelle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s730",
    topic: "L'UE est-elle un modèle de transition énergétique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s731",
    topic: "L’UE et les consommateurs",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s732",
    topic: "L’UE et ses voisins : quels grands enjeux géopolitiques ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s733",
    topic: "L'UE se fait-elle à Bruxelles depuis 1957 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s734",
    topic: "L'UE, un ensemble sans cesse à reconstruire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s735",
    topic: "L’Union européenne : fracture Est/Ouest ou Nord/Sud ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s736",
    topic: "L’Union Européenne : un espace post-industriel ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s737",
    topic: "L’Union européenne a-t-elle des frontières ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s738",
    topic: "L’Union européenne a-t-elle éclaté ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s739",
    topic: "L'Union Européenne a-t-elle encore un avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s740",
    topic: "L’Union européenne d’aujourd’hui correspond-elle aux vœux des Pères Fondateurs ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s741",
    topic: "L’Union européenne est-elle une forteresse ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s742",
    topic: "L’Union européenne est-elle une puissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s743",
    topic: "L'Union européenne est-elle une puissance régionale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s744",
    topic: "L’Union européenne et la pauvreté",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s745",
    topic: "L’Union européenne s’impose-t-elle trop de sacrifices ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s746",
    topic: "L’Union européenne, capitale Berlin ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s747",
    topic: "L’Union Européenne, puissance déclinante ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s748",
    topic: "La banlieue, grande oubliée de la croissance économique d’Europe de l’Ouest ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s749",
    topic: "La banlieue, oubliée de la croissance (exemples au choix, Europe de l’Ouest)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s750",
    topic: "La BCE est-elle trop faible ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s751",
    topic: "La chute du mur de Berlin de 1989 et ses conséquences aujourd’hui",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s752",
    topic: "La consommation de masse en Europe après 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s753",
    topic: "La crise des dettes souveraines en Europe",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s754",
    topic: "La crise économique dans les pays d’Europe du Sud",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s755",
    topic: "La crise européenne actuelle des migrants est-elle une crise économique ou politique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s756",
    topic: "La croissance de la dette en Europe depuis les années 1970 : preuve de puissance ou marque de faiblesse ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s757",
    topic: "La fin du travail précaire en Europe : un mythe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s758",
    topic: "La géopolitique de l’espace méditerranéen a-t-elle changé depuis la fin du XXème siècle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s759",
    topic: "La gouvernance européenne depuis 1986",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s760",
    topic: "La Méditerranée a-t-elle un sens politique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s761",
    topic: "La Méditerranée dans le concert européen depuis les années 1980",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s762",
    topic: "La Méditerranée, cimetière des migrants",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s763",
    topic: "La Méditerranée, cimetière marin ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s764",
    topic: "La Méditerranée, un pont ou un fossé depuis les années 1950 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s765",
    topic: "La Méditerranée, une frontière maritime",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s766",
    topic: "La Méditerranée, voie de passage, espace de sédentarisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s767",
    topic: "La mondialisation est-elle un facteur de convergence des économies et des sociétés européennes ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s768",
    topic: "La pêche en Europe, une peau de chagrin ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s769",
    topic: "La place de l'usine dans l'espace européen au XXème et XXIème siècles",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s770",
    topic: "La politique alimentaire de l’Europe depuis les années 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s771",
    topic: "La politique européenne de Mitterrand de 1981 à 1995",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s772",
    topic: "La politique industrielle parent pauvre des économies européennes ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s773",
    topic: "La protection sociale en Europe dans la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s774",
    topic: "La protection sociale en Europe depuis 1945 : un ou des modèles ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s775",
    topic: "La question alimentaire aux États-Unis et en Europe depuis 1945 : culture(s) identique(s) ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s776",
    topic: "La question allemande en Europe",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s777",
    topic: "La question des frontières en Europe est-elle définitivement réglée ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s778",
    topic: "La reconstruction de l'Europe de 1945 aux années 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s779",
    topic: "La réunification allemande de 1989 et ses conséquences aujourd’hui",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s780",
    topic: "La réunification allemande, une réussite ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s781",
    topic: "La Scandinavie est-elle toujours un modèle pour l’Union européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s782",
    topic: "La Turquie, « à la porte » de l’Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s783",
    topic: "Le Brexit est-il une chance pour l’Union européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s784",
    topic: "Le Brexit, une aubaine ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s785",
    topic: "Le centre de gravité économique de l’Europe s’est-il déplacé vers l’est depuis les années 1990 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s786",
    topic: "Le couple franco-allemand et la construction européenne depuis les années 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s787",
    topic: "Le modèle du capitalisme rhénan a-t-il vécu ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s788",
    topic: "Le modèle scandinave : définition et influence en Europe",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s789",
    topic: "Le moteur franco-allemand est-il en panne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s790",
    topic: "Le profil économique de l'Europe actuelle était-il contenu dans le traité de Rome ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s791",
    topic: "Le regard des États-Unis envers la construction européenne",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s792",
    topic: "Le retour de l’OTAN ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s793",
    topic: "Le retraité européen : le meilleur des consommateurs ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s794",
    topic: "Le Royaume Uni, une union fragile ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s795",
    topic: "Le syndicalisme allemand",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s796",
    topic: "Le syndicalisme en Europe occidentale au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s797",
    topic: "Le tassement démographique de l’Europe",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s798",
    topic: "Le train, passé ou avenir de l’Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s799",
    topic: "Le vieillissement de l’Europe et ses conséquences",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s800",
    topic: "Le vieillissement de la population a-t-il un impact négatif sur la croissance européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s801",
    topic: "Le vieillissement des populations européenne et américaine, une aubaine ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s802",
    topic: "Le vieillissement des populations européennes est-il un obstacle pour la croissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s803",
    topic: "Le vieillissement des populations européennes est-il une aubaine ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s804",
    topic: "Les aéroports sont-ils les nouvelles portes d’entrée de l’Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s805",
    topic: "Les ambitions du traité de Rome (1957)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s806",
    topic: "Les années Thatcher",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s807",
    topic: "Les choix énergétiques de l’Europe au XXème siècle : le grand désordre ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s808",
    topic: "Les crises sont-elles les moteurs de la construction européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s809",
    topic: "Les détroits de l’espace européen",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s810",
    topic: "Les enjeux géopolitiques du Brexit",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s811",
    topic: "Les États-Unis face à la construction Européenne",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s812",
    topic: "Les Eurosceptiques",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s813",
    topic: "Les frontières de l’Europe depuis les années 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s814",
    topic: "Les frontières en Europe, réalités économiques et géopolitiques de 1914 à 2014 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s815",
    topic: "Les grandes surfaces en Europe depuis les années 60",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s816",
    topic: "Les guerres commerciales Europe-États-Unis depuis les années 60",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s817",
    topic: "Les inégalités dans l’Union européenne",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s818",
    topic: "Les inégalités régionales du territoire communautaire européen",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s819",
    topic: "Les inégalités territoriales dans l’Union européenne : un problème résolu ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s820",
    topic: "Les institutions européennes de 1951 à nos jours : vers des États-Unis d’Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s821",
    topic: "Les littoraux européens méditerranéens sont-ils uniquement voués au tourisme ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s822",
    topic: "Les littoraux européens, source d’avenir au XXIème siècle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s823",
    topic: "Les littoraux européens, un enjeu majeur du XXIème siècle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s824",
    topic: "Les métropoles européennes",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s825",
    topic: "Les migrants en Europe : 1900, 2015 (une comparaison)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s826",
    topic: "Les migrants et le rêve européen",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s827",
    topic: "Les migrations en Europe",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s828",
    topic: "Les nouveaux irrédentismes en Europe",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s829",
    topic: "Les nouvelles capitales de la culture : loin de l’Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s830",
    topic: "Les nouvelles technologies, frein ou opportunité pour la croissance en Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s831",
    topic: "Les paradis fiscaux en Europe : une durée de vie limitée ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s832",
    topic: "Les pays européens ont-ils encore les moyens de faire la guerre ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s833",
    topic: "Les PECO face à l’Union européenne depuis les années 1980",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s834",
    topic: "Les Pères de l’Europe se reconnaitraient-ils dans l’Union Européenne d’aujourd’hui ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s835",
    topic: "Les Pères fondateurs de l'Europe étaient-ils trop optimistes ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s836",
    topic: "Les PME en France, en Italie, en Allemagne",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s837",
    topic: "Les ports européens à l'heure de la mondialisation/ dans la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s838",
    topic: "Les secteurs nationalisés dans les économies européennes depuis les années 80",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s839",
    topic: "Les transports dans l’Union Européenne depuis les années 1980",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s840",
    topic: "Les villes mondiales européennes",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s841",
    topic: "Les visages du syndicalisme en Europe Occidentale depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s842",
    topic: "Manger en Europe : marques contre terroirs",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s843",
    topic: "Nationalisation et économie européenne depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s844",
    topic: "OTAN et UE dans l’est européen",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s845",
    topic: "Pétrole, gaz et puissance des pays européens au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s846",
    topic: "Peut-on parler d’une politique industrielle de l’Europe ? (depuis les années 1960)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s847",
    topic: "Peut-on parler de désintégration européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s848",
    topic: "Pourquoi les États-Unis s'éloigneraient-ils de l'UE ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s849",
    topic: "Qu’est devenue l’industrie textile en Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s850",
    topic: "Quatre Europe vraiment : Nord, Sud, Est, Ouest ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s851",
    topic: "Quels sont les impacts de la mondialisation sur la sidérurgie européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s852",
    topic: "Qui sont les néo-ruraux en Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s853",
    topic: "Réseaux d'énergie et construction européenne",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s854",
    topic: "Se nourrir en Europe : trop d'information ou pas assez ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s855",
    topic: "Sens économique et social de l'expression « l'esprit de 1945 »",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s856",
    topic: "Situation géopolitique de l’Europe orientale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s857",
    topic: "TAFTA et CETA : que nous apprennent ces deux projets commerciaux sur les évolutions de la mondialisation de l'économie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s858",
    topic: "Temps de travail et croissance en Europe depuis 1970",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s859",
    topic: "Thatcher : bilan et héritages",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s860",
    topic: "Travail et loisir en Europe occidentale depuis 1900",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s861",
    topic: "Une diplomatie nationale est-elle encore possible pour les pays de l'UE ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s862",
    topic: "Vers une désintégration européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Europe", "Gouvernance & Puissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s863",
    topic: "Avantages et désavantages de la métropolisation en France",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s864",
    topic: "Banlieues et espaces périurbains en France",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s865",
    topic: "Banques et banquiers en France depuis les années 60",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s866",
    topic: "Capital et travail en France dans la première moitié du XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s867",
    topic: "Comment comprendre et remédier à l'impossible excédent commercial français ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s868",
    topic: "Comment la mondialisation remodèle-t-elle la géographie économique française ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s869",
    topic: "Être paysan en France aujourd’hui",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s870",
    topic: "Être paysan en France depuis le début du XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s871",
    topic: "Existe-t-il une marque France ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s872",
    topic: "France : personne n’en parle, la dette publique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s873",
    topic: "France joyeuse des années 1960 versus France triste des années 2000",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s874",
    topic: "Géopolitique extérieure de la France",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s875",
    topic: "Grandes écoles et Université en France : qui forme les élites ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s876",
    topic: "Grands patrons et petits patrons en France depuis 1945.",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s877",
    topic: "Industrie du luxe et prestige français",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s878",
    topic: "L’âge de la retraite en France depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s879",
    topic: "L'aménagement du territoire (français), une vieille lubie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s880",
    topic: "L’économie des loisirs, nouveau moteur de l’économie française",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s881",
    topic: "L'économie du luxe : un atout permanent pour la France ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s882",
    topic: "L’entreprise publique en France : 1950-2000. Comparez",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s883",
    topic: "L’État en France : un acteur économique qui s’efface (depuis les années 1980) ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s884",
    topic: "L’image de la grande entreprise en France depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s885",
    topic: "L'impossible excédent commercial de la France",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s886",
    topic: "L’industrie du luxe et l’image de la France",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s887",
    topic: "L’univers culturel de la France : une citadelle assiégée ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s888",
    topic: "La concurrence entre les énergies nationalisées en France au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s889",
    topic: "La croissance française au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s890",
    topic: "La France dans le monde à la Belle Époque et aujourd’hui : comparez",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s891",
    topic: "La France des frères Lumière et des Curie est-elle un « pays en retard » ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s892",
    topic: "La France épicerie fine du monde ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s893",
    topic: "La France est-elle en voie de désindustrialisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s894",
    topic: "La France est-elle une petite puissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s895",
    topic: "La France et l’OTAN",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s896",
    topic: "La France et sa ZEE",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s897",
    topic: "La France et ses investissements depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s898",
    topic: "La France et son univers culturel : repli et prétentions depuis les années 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s899",
    topic: "La France joyeuse des années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s900",
    topic: "La France périphérique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s901",
    topic: "La France un pays d’industries de pointe en 1914 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s902",
    topic: "La France, une puissance maritime",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s903",
    topic: "La francophonie a-t-elle encore un sens ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s904",
    topic: "La francophonie est-elle un atout économique (depuis les années 1960) ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s905",
    topic: "La francophonie et ses usages",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s906",
    topic: "La mobilité dans les grandes villes françaises",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s907",
    topic: "La petite entreprise est-elle condamnée ? (France et Europe depuis 1945)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s908",
    topic: "La place de la France dans la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s909",
    topic: "La place de la langue française dans le monde depuis un siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s910",
    topic: "La région en France depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s911",
    topic: "La région parisienne est-elle trop grosse ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s912",
    topic: "Le déficit commercial français, une fatalité ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s913",
    topic: "Le fonctionnaire, voilà l’ennemi ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s914",
    topic: "Le Grand Paris : une idée déjà ancienne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s915",
    topic: "Le nucléaire est-il un fardeau pour la France ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s916",
    topic: "Le paysan français depuis 1957",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s917",
    topic: "Le programme nucléaire français depuis les années 1970",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s918",
    topic: "Le syndicalisme français",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s919",
    topic: "Le syndicalisme réformiste en France depuis 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s920",
    topic: "Les « Trente Glorieuses » en France : mythes et réalités",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s921",
    topic: "Les effets de la mondialisation sur les territoires français",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s922",
    topic: "Les élites de France : une aristocratie sans renouvellement ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s923",
    topic: "Les élites méritocratiques en France depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s924",
    topic: "Les énergies en France au XXème siècle : choix politiques et acceptation sociale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s925",
    topic: "Les entreprises françaises écrasées par les taxes, un refrain commode ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s926",
    topic: "Les entreprises françaises et allemandes dans la mondialisation.",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s927",
    topic: "Les entreprises publiques françaises depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s928",
    topic: "Les littoraux français : des espaces vulnérables ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s929",
    topic: "Les littoraux français : un atout inexploité ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s930",
    topic: "Les métropoles moyennes : l’avenir de l’urbanisation française ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s931",
    topic: "Les mutations territoriales de l’industrie française depuis un demi-siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s932",
    topic: "Les nationalisations en France depuis les années 1930",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s933",
    topic: "Les patrons américains et français sont-ils semblables ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s934",
    topic: "Les régions françaises limitrophes des pays étrangers",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s935",
    topic: "Les relations économiques de la France et de ses pays limitrophes depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s936",
    topic: "Les riches depuis 1900 en France",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s937",
    topic: "Les socialistes français et l'économie depuis 1981",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s938",
    topic: "Les villes françaises dans la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s939",
    topic: "Mai 1968 : une péripétie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s940",
    topic: "Mai 1968 : une révolution ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s941",
    topic: "Mondialisation et transformations des grandes villes françaises",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s942",
    topic: "Orient, Occident, et l'image de la France",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s943",
    topic: "Paris et le désert français",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s944",
    topic: "Peut-on dire que les campagnes françaises sont de moins en moins agricoles ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s945",
    topic: "Peut-on encore parler d'un paysan français aujourd’hui ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s946",
    topic: "Portrait et rôle des PME-PMI françaises depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s947",
    topic: "Qui aménage le territoire français ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s948",
    topic: "Se loger en France depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s949",
    topic: "Territoires de l'industrie et de la désindustrialisation en France depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s950",
    topic: "Trop de protection sociale en France depuis 1945 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s951",
    topic: "Y-a-t-il un retour de l'État dans les affaires économiques ? (France)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["France", "Économie & Croissance", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s952",
    topic: "Géopolitique de l’extension territoriale russe depuis 1991",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s953",
    topic: "L’expansion de la Russie depuis 1991",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s954",
    topic: "La disparition de l’URSS, une « catastrophe géopolitique » ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s955",
    topic: "La maîtrise de l’espace russe de la Seconde Guerre mondiale à nos jours",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s956",
    topic: "La puissance économique de l’URSS dans les années 1950 et dans les années 1980 : comparez",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s957",
    topic: "La revanche de la Russie sur l’URSS",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s958",
    topic: "La Russie : nouveau pays émergent ou ancienne puissance industrielle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s959",
    topic: "La Russie est-elle dépendante de ses matières premières ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s960",
    topic: "La Russie est-elle différente de l’Union Soviétique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s961",
    topic: "La Russie est-elle une puissance européenne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s962",
    topic: "La Russie et les Européens depuis les années 1980",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s963",
    topic: "La Russie, une périphérie économique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s964",
    topic: "La Russie, une puissance prédatrice ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s965",
    topic: "Le retour de la Russie sur la scène internationale",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s966",
    topic: "Lénine : idéologue ou pragmatique en matière économique et sociale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s967",
    topic: "Les paysans dans le destin de l’économie socialiste soviétique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s968",
    topic: "Penser l'expérience communiste vingt ans après",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s969",
    topic: "Russes et Chinois au XXème siècle : face à face ou dos à dos ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s970",
    topic: "Staline est-il le continuateur de Lénine ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Russie & Ex-URSS", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s971",
    topic: "Faut-il internationaliser l’Amazonie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s972",
    topic: "L'Amazonie entre développement et conservation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s973",
    topic: "L'Amazonie est-elle le symbole des contradictions inhérentes aux pays émergents ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s974",
    topic: "L’Amérique du Sud est-elle brésilienne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s975",
    topic: "L'Amérique latine : tous dominés ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s976",
    topic: "L’Amérique latine est-elle brésilienne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s977",
    topic: "L’Amérique latine est-elle dominée ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s978",
    topic: "L’Amérique latine peut-elle se débarrasser de ses zones grises ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s979",
    topic: "L’intégration régionale en Amérique du Sud : un échec ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s980",
    topic: "La mise en valeur des terres agricoles en Amérique latine au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s981",
    topic: "La revanche des minorités dans l’espace andin",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s982",
    topic: "Le Brésil et l’Amazonie",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s983",
    topic: "Le Brésil voit-il trop grand ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s984",
    topic: "Le Brésil, englué dans la pauvreté ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s985",
    topic: "Le Brésil, futur grand ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s986",
    topic: "Le Brésil, grande puissance mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s987",
    topic: "Le Brésil, une émergence économique manquée ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s988",
    topic: "Le Brésil, une puissance fragile ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s989",
    topic: "Les économies sud-américaines depuis 1945, des économies extraverties ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s990",
    topic: "Y a-t-il un pays pouvant jouer un rôle de leader en Amérique Latine ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Économie & Croissance", "Mondialisation & Acteurs"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s991",
    topic: "Brain drain et puissance des États-Unis",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s992",
    topic: "Comment la frontière a fait évoluer les États-Unis ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s993",
    topic: "D. Trump bouleverse-t-il les fondements de la puissance américaine ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s994",
    topic: "États-Unis et libre échange",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s995",
    topic: "États-Unis/Mexique : le problème de la frontière",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s996",
    topic: "Frontière américano-mexicaine : un nouveau « mur de la honte » ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s997",
    topic: "Gaz de schiste aux États-Unis et en Europe : deux cultures énergétiques ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s998",
    topic: "L’hyperpuissance américaine",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s999",
    topic: "L'industrie américaine est-elle tournée vers le Pacifique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1000",
    topic: "La Californie, laboratoire du monde de demain ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1001",
    topic: "La Mexamerica",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1002",
    topic: "La nouvelle politique énergétique états-unienne",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1003",
    topic: "La place du golfe du Mexique dans l’économie nord-américaine depuis les années 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1004",
    topic: "La puissance étasunienne : déclin ou mutation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1005",
    topic: "La Silicon Valley : un modèle dépassé ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1006",
    topic: "La Silicon Valley invente-t-elle toujours notre avenir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1007",
    topic: "Le choc des civilisations, une vieille peur américaine ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1008",
    topic: "Le consommateur américain, un modèle à ne pas suivre ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1009",
    topic: "Le New Deal entre mythes et réalités",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1010",
    topic: "Le président des États-Unis est-il l’homme le plus puissant du monde ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1011",
    topic: "Le soft power, un fantasme américain ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1012",
    topic: "Le temps de l'hégémonie américaine est-il révolu ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1013",
    topic: "Le vieux Sud et le nouveau Nord aux États-Unis",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1014",
    topic: "Le WASP, une espèce en voie de disparition ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1015",
    topic: "Les bases militaires américaines dans le monde depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1016",
    topic: "Les Blancs aux États-Unis, bientôt une minorité ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1017",
    topic: "Les enjeux énergétiques en Amérique du Nord",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1018",
    topic: "Les États Unis et les leçons de la guerre du Vietnam",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1019",
    topic: "Les États-Unis deviennent-ils une puissance banale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1020",
    topic: "Les Etats-Unis dominent-ils les Amériques ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1021",
    topic: "Les États-Unis et l’indépendance énergétique : mythe ou réalité ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1022",
    topic: "Les États-Unis et le libéralisme",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1023",
    topic: "Les États-Unis peuvent-ils encore servir de modèle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1024",
    topic: "Les États-Unis sont-ils libre-échangistes ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1025",
    topic: "Les États-Unis sont-ils par nature isolationnistes ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1026",
    topic: "Les États-Unis, éternels vainqueurs depuis 1918 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1027",
    topic: "Les Etats-Unis, hyperpuissance en sursis",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1028",
    topic: "Les États-Unis, la Chine et le charbon",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1029",
    topic: "Les États-Unis, nouveaux rois du pétrole ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1030",
    topic: "Les grandes entreprises industrielles aux États Unis en 1970 et aujourd’hui",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1031",
    topic: "Les industries culturelles aux États-Unis depuis les années 1970",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1032",
    topic: "Les relations géoéconomiques et géostratégiques entre les États-Unis, le Mexique et la Chine",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1033",
    topic: "Les relations internationales américaines depuis l’administration Trump",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1034",
    topic: "Les technologies américaines depuis le XIXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1035",
    topic: "Mexamerica ou l’échec d’une région transfrontalière ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1036",
    topic: "New York, symbole de la mondialisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1037",
    topic: "Pourquoi les Etats-Unis perdent-ils la guerre depuis 50 ans ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1038",
    topic: "Pourquoi les États-Unis veulent-ils nourrir la planète ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1039",
    topic: "Vieux et nouveau sud aux États-Unis ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Amériques", "Gouvernance & Puissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1040",
    topic: "Agriculture et environnement : deux enjeux pour sauver l’Afrique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1041",
    topic: "Aide internationale et famines en Afrique depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1042",
    topic: "Conflits et frontières en Afrique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1043",
    topic: "Déplacés et réfugiés en Afrique Centrale de la Mer Rouge à l’Arc Atlantique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1044",
    topic: "Faut-il désespérer de l'Afrique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1045",
    topic: "L’Afrique : un coffre-fort convoité ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1046",
    topic: "L’Afrique dans la mondialisation des échanges",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1047",
    topic: "L’Afrique dans le piège de la démographie",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1048",
    topic: "L'Afrique du nord est-elle la limite de l'Europe du sud ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1049",
    topic: "L’Afrique émerge-t-elle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1050",
    topic: "L’Afrique en proie aux affrontements religieux depuis les indépendances",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1051",
    topic: "L’Afrique est-elle un continent émergent ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1052",
    topic: "L'Afrique et la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1053",
    topic: "L'Afrique et le problème démographique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1054",
    topic: "L’Afrique n’est-elle pas capable de se nourrir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1055",
    topic: "L’Afrique ou la malédiction de la géographie",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1056",
    topic: "L’Afrique peut-elle être garante de sa sécurité ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1057",
    topic: "L’Afrique peut-elle se libérer de son héritage colonial ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1058",
    topic: "L’Afrique sahélo-saharienne en tension",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1059",
    topic: "L’Afrique subsaharienne : quels espoirs ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1060",
    topic: "L’Afrique subsaharienne submergée par sa démographie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1061",
    topic: "L’Afrique, continent de toutes les désolations depuis 1980",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1062",
    topic: "L’Afrique, puissance en plein essor ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1063",
    topic: "L’aide alimentaire en Afrique au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1064",
    topic: "L’économie africaine, une économie de rente ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1065",
    topic: "L’héritage colonial : le fardeau de l’Afrique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1066",
    topic: "La Chine a-t-elle mangé l’Afrique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1067",
    topic: "La Chine en Afrique : une solution ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1068",
    topic: "La Chine en fait-elle trop en Afrique subsaharienne ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1069",
    topic: "La Chine et l’Afrique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1070",
    topic: "La construction de l'État en Afrique subsaharienne : où en est-on ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1071",
    topic: "La Françafrique a-t-elle vécu ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1072",
    topic: "La grande ville africaine : chemin de la promotion sociale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1073",
    topic: "La mondialisation est-elle en faveur de l'Afrique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1074",
    topic: "La mondialisation est-elle une chance pour l’Afrique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1075",
    topic: "La ville africaine : moteur ou frein au développement ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1076",
    topic: "Le Maroc, puissance africaine",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1077",
    topic: "Le Nord de l’Afrique est-il en réalité le Sud de l’Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1078",
    topic: "Le rôle des organisations internationales dans les pays en voie de développement depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1079",
    topic: "Les atouts économiques de l’Afrique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1080",
    topic: "Les Chinois en Afrique, effet de la mondialisation ou nouveau colonialisme ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1081",
    topic: "Les Chinois et la conquête de la terre africaine",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1082",
    topic: "Les côtes africaines et l’eldorado européen au 20ème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1083",
    topic: "Les décolonisations en Afrique : quelle réalité depuis 1960 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1084",
    topic: "Les femmes sont-elles l’avenir de l’Afrique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1085",
    topic: "Les pays du Maghreb entre l’Europe et l’Afrique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1086",
    topic: "Les pays du Maghreb regardent-ils vers l’Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1087",
    topic: "Les questions alimentaires en Afrique dans la seconde moitié du vingtième siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1088",
    topic: "Les ressources en Afrique : une valorisation nationale impossible ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1089",
    topic: "Les villes africaines permettent-elles une promotion sociale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1090",
    topic: "Mondialisation et pauvreté en Afrique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1091",
    topic: "Paix et développement en Afrique subsaharienne depuis les années 1960",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1092",
    topic: "Quel tourisme en Afrique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1093",
    topic: "Ressources naturelles et économies africaines",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1094",
    topic: "Urbanisation et développement en Afrique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1095",
    topic: "Vieillir en Afrique subsaharienne : est-ce possible ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1096",
    topic: "Y a-t-il des puissances africaines ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Afrique", "Mondialisation & Acteurs", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1097",
    topic: "10 ans après : Que reste-t-il des printemps arabes ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1098",
    topic: "2000-2022 : une nouvelle géopolitique au Moyen-Orient ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1099",
    topic: "Chiites et sunnites au Proche et au Moyen-Orient depuis 1980",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1100",
    topic: "Égypte, Irak, Iran… Quel leadership pour le Proche et Moyen-Orient ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1101",
    topic: "Géopolitique des places commerciales et financières du Proche et du Moyen-Orient",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1102",
    topic: "Géopolitique du Moyen Orient. Quels grands acteurs ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1103",
    topic: "Israël a 70 ans : 70 ans de guerre ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1104",
    topic: "Israël et les États-Unis",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1105",
    topic: "Israël et ses pays voisins depuis les printemps arabes",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1106",
    topic: "Israël et ses voisins, question locale ou internationale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1107",
    topic: "Israël/Palestine, une guerre (presque) de cent ans ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1108",
    topic: "L'Iran et l'Arabie Saoudite : un conflit déterminant pour l'avenir du Moyen-Orient ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1109",
    topic: "L’unité du monde arabe en ce début de XXIème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1110",
    topic: "La crise syrienne et le jeu des grandes puissances",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1111",
    topic: "La paix entre Israël et ses voisins : une quête sans espoir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1112",
    topic: "La situation géopolitique du Moyen-Orient depuis 1973",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1113",
    topic: "Le détroit d’Ormuz : les Balkans du XXIème siècle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1114",
    topic: "Le détroit d'Ormuz, lieu de tous les dangers ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1115",
    topic: "Le Moyen Orient : chiisme contre sunnisme ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1116",
    topic: "Le Moyen Orient et la malédiction des matières premières",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1117",
    topic: "Le Moyen Orient et la transition énergétique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1118",
    topic: "Le Moyen Orient rongé par l’islamisme ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1119",
    topic: "Le Moyen Orient, un bourbier américain ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1120",
    topic: "Le printemps arabe a-t-il été enterré ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1121",
    topic: "Le Proche-Orient et ses frontières",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1122",
    topic: "Les États du Golfe : une influence croissante ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1123",
    topic: "Les fractures dans les pays du Golfe",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1124",
    topic: "Les frontières au Moyen-Orient",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1125",
    topic: "Les pays du Golfe : une richesse artificielle ou réelle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1126",
    topic: "Les pays du Golfe ont-ils les moyens d'une politique ambitieuse ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Proche et Moyen-Orient", "Géopolitique", "Gouvernance & Puissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1127",
    topic: "Conflits en Mer de Chine",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1128",
    topic: "Heurts et malheurs de l'intégration régionale en Asie Pacifique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1129",
    topic: "L'Asie centrale dans le grand jeu mondial",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1130",
    topic: "L'Asie du Sud-Est : un élan de croissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1131",
    topic: "L’Asie du Sud-Est : une région en voie d’intégration mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1132",
    topic: "L’Asie du Sud-Est, périphérie chinoise ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1133",
    topic: "L’Asie est-elle multipolaire ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1134",
    topic: "L’Asie et l’Europe : deux continents qui s’ignorent ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1135",
    topic: "L’Asie, centre de gravité de l’économie mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1136",
    topic: "L’émigration des populations asiatiques au XXème siècle : une richesse détournée de l’Europe ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1137",
    topic: "L’environnement en Asie : de la destruction à la protection au 21ème siècle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1138",
    topic: "L’espace Pacifique en 1950 et aujourd’hui",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1139",
    topic: "La colonisation européenne en Asie a-t-elle été un échec ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1140",
    topic: "La diplomatie américaine et les Coréens depuis 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1141",
    topic: "La maritimisation des échanges : quels enjeux pour l’aire asiatique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1142",
    topic: "La mer de Chine est-elle une nouvelle Méditerranée ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1143",
    topic: "La mer de Chine est-elle une zone de tension seulement à cause de quelques îlots ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1144",
    topic: "La mondialisation est-elle une « asiatisation » du monde ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1145",
    topic: "Le communisme en Asie / Les communismes en Asie",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1146",
    topic: "Le Pacifique est-il le centre du monde ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1147",
    topic: "Le Pacifique occidental, région dangereuse ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1148",
    topic: "Les Corées : points faibles de la géopolitique régionale de l’Asie de l’Est ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1149",
    topic: "Les États-Unis d’Amérique, puissance en Asie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1150",
    topic: "Les Européens et l’économie de l’Asie-Pacifique depuis les années 1950",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1151",
    topic: "Les grands rapports de force en Asie du Sud et de l’Est",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1152",
    topic: "Les héritages de la colonisation en Asie",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1153",
    topic: "Mer Rouge des années 1950, mer de Chine des années 2000 : même combat ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1154",
    topic: "Pourquoi la mer de Chine est-elle une zone de tensions internationales ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1155",
    topic: "Quels sont les ressorts du développement dans le sud-est asiatique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1156",
    topic: "Transports et intégration en Asie pacifique depuis les années 50",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1157",
    topic: "Une seule Corée et la face du monde changerait ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Géopolitique"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1158",
    topic: "Aller en Chine ou en partir : attractions et répulsions d’un territoire",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1159",
    topic: "Beijing-Shanghai, capitales du développement non-durable ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1160",
    topic: "Capitalisme et capitalistes dans la Chine contemporaine",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1161",
    topic: "Chine ouverte vs Chine fermée depuis 1976",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1162",
    topic: "Chine, États-Unis : maîtriser l’immensité",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1163",
    topic: "Comment la Chine a-t-elle changé l’économie mondiale depuis les années 1990 ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1164",
    topic: "Diaspora et impérialisme chinois",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1165",
    topic: "Économie et démographie en Chine : liens et perspectives",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1166",
    topic: "Hong Kong : « un pays, deux systèmes »",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1167",
    topic: "L’Asie est-elle en voie de sinisation ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1168",
    topic: "L'attractivité du territoire chinois",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1169",
    topic: "L'avenir de la Chine est-il sur l’eau ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1170",
    topic: "L’avenir de la Chine est-il sur la mer ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1171",
    topic: "La « voie chinoise » dans les années 1960 et aujourd’hui : comparez",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1172",
    topic: "La Chine depuis 1989 : peut-on parler des « Trente Glorieuses » chinoises ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1173",
    topic: "La Chine domine-t-elle sa démographie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1174",
    topic: "La Chine est-elle toujours communiste ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1175",
    topic: "La Chine est-elle une puissance fragile ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1176",
    topic: "La Chine et la mer",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1177",
    topic: "La Chine et la mer : opportunités passées ou à venir ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1178",
    topic: "La Chine et les pays en développement : une diplomatie du cadeau ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1179",
    topic: "La Chine et ses efforts militaires : danger local, danger global ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1180",
    topic: "La Chine et ses ressources naturelles depuis les années 1980",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1181",
    topic: "La Chine peut-elle devenir l’économie dominante de demain ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1182",
    topic: "La Chine peut-elle devenir une économie dominante au XXIème siècle ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1183",
    topic: "La Chine, l’obsession des États-Unis depuis quelques années ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1184",
    topic: "La Chine, les terres rares et les nouvelles technologies",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1185",
    topic: "La Chine, plus que jamais empire du milieu ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1186",
    topic: "La Chine, puissance hégémonique de l’Asie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1187",
    topic: "La Chine, puissance importatrice",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1188",
    topic: "La Chine, puissance maritime",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1189",
    topic: "La croissance actuelle de la Chine peut-elle devenir une donnée permanente de l'équilibre économique mondial ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1190",
    topic: "La montée en puissance de la Chine peut-elle être une donnée durable dans l'équilibre économique mondial ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1191",
    topic: "Le « collier de perles chinois »",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1192",
    topic: "Le bilan économique des années Deng en Chine",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1193",
    topic: "Le marché chinois est-il impénétrable ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1194",
    topic: "Le mirage chinois existe-t-il toujours ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1195",
    topic: "Le rôle du parti communiste en Chine populaire",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1196",
    topic: "Les acteurs du capitalisme chinois",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1197",
    topic: "Les échanges entre les États-Unis et la Chine représentent-ils un risque pour la croissance mondiale ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1198",
    topic: "Les Etats-Unis, la Chine et le rêve de domination économique",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1199",
    topic: "Les failles de la puissance chinoise",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1200",
    topic: "Les firmes chinoises dans la mondialisation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1201",
    topic: "Les fondements de la mondialisation chinoise",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1202",
    topic: "Les frontières de la Chine",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1203",
    topic: "Les politiques démographiques de l’Inde et de la Chine sont-elles des échecs ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1204",
    topic: "Pékin, Shanghai, Hong-Kong",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1205",
    topic: "Pékin, Tokyo et Shanghai",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1206",
    topic: "Taïwan dans les relations sino-américaines",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Gouvernance & Puissance", "Économie & Croissance"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1207",
    topic: "Conflits et tensions entre Chine et Inde (depuis 1949)",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Démographie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1208",
    topic: "Géopolitique de l’océan Indien",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Démographie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1209",
    topic: "Inde-Chine : la bataille des géants ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Démographie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1210",
    topic: "Inde, Chine, deux géants",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Démographie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1211",
    topic: "L’Inde est-elle en Asie ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Démographie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1212",
    topic: "L’Inde et l’océan Indien",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Démographie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1213",
    topic: "L’Inde, « colosse aux pieds d’argile » ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Démographie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1214",
    topic: "L’Inde, un « faux » grand ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Démographie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1215",
    topic: "L’océan Indien est-il stratégique ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Démographie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1216",
    topic: "Le lait en Inde",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Démographie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1217",
    topic: "Nourrir plus d'un milliard d'Indiens",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Démographie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1218",
    topic: "Chine et Japon, entre doux commerce et rivalités politiques",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1219",
    topic: "Corée du Sud-Japon : les voies de la réconciliation",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1220",
    topic: "Japon-Chine : les rivalités peuvent-elles cesser ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1221",
    topic: "L’innovation technologique au Japon au XXème et au XXIème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1222",
    topic: "La tension régionale entre la Chine et le Japon est-elle de nature idéologique ou économique?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1223",
    topic: "Le Japon du MITI a-t-il disparu ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1224",
    topic: "Le Japon et l’Occident au XXème siècle",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1225",
    topic: "Le Japon et la défense depuis 1945",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1226",
    topic: "Le Japon et ses relations avec le monde",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1227",
    topic: "Le Japon face à la Chine depuis les vingt dernières années",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1228",
    topic: "Le Japon peut-il garder une place de leader en Asie de l’Est ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1229",
    topic: "Le Japon, pays du troisième âge",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1230",
    topic: "Le Japon, un acteur mondial ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1231",
    topic: "Le Japon, une puissance en déclin ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1232",
    topic: "Le redéploiement de l'industrie japonaise en Asie orientale et dans le monde",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1233",
    topic: "Les innovations nippones de Sony aux sushis",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  },

  {
    id: "s1234",
    topic: "Pourquoi le Japon n'est-il plus un modèle pour les pays en recherche de croissance ?",
    type: "Colle",
    school: "Autre",
    year: "",
    tags: ["Asie", "Économie & Croissance", "Innovation & Technologie"],
    rapportLink: null,
    copieLink: null,
    copieNote: null
  }

];

// Total: 1230 sujets (146 concours + 1084 colles Mon Colleur, s151→s1234)