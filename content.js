/* ==========================================================
   EDIT THIS FILE to change your app. No coding needed:
   1. SETTINGS  - your contact details, UPI ID, WhatsApp
   2. SERVICES  - your consultancy offers and prices
   3. POSTS     - your blog (articles, opinions, viewpoints)
   After editing, upload the changed file to GitHub. The app
   updates itself the next time people open it online.
   ========================================================== */

var SETTINGS = {
  name: "Dr. Surjeet Singh Dhaka",
  short: "Dr. S. S. Dhaka",
  tagline: "Agribusiness expert · Researcher · Consultant",
  whatsapp: "919983518781",              // country code + number, no + or spaces
  phone: "+91 99835 18781",
  email: "surjeetdhaka.iabm@gmail.com",
  email2: "surjeet.singh@cup.edu.in",
  upi: "dhakasurjeet@okicici",                               // e.g. "yourname@okhdfcbank". Leave empty to hide the Pay button until you add it
  upiName: "Surjeet Singh Dhaka",
  website: "https://ssdhaka.github.io/SSDhaka/",
  scholar: "https://scholar.google.com/citations?user=It6hf1EAAAAJ",
  vidwan: "https://vidwan.inflibnet.ac.in/profile/125379",
  orcid: "https://orcid.org/0000-0002-0129-5838",
  cup: "https://www.cup.edu.in/Dr_Surjeet_Singh_Dhaka.php",
  address: "Lab No. 221, 2nd Floor, Aryabhata Academic Block, Department of Applied Agriculture, School of Basic Sciences, Central University of Punjab, V.P.O. Ghudda, Bathinda, Punjab, India - 151401"
};

/* ---- SERVICES -----------------------------------------------------
   PRICES BELOW ARE SAMPLE PRICES. Change them to what you want to charge.
   price: number in rupees, or 0 for "Custom quote".
   unit: text shown after the price.                                  */
var SERVICES = [
  { id:"call", icon:"phone", color:"#1f9d55", title:"Quick Advice Call", price:200, unit:"30 min",
    desc:"A focused one-to-one call on your farm business, startup idea, FPO, marketing or research question.",
    points:["30-minute video or phone call","Clear, practical next steps","Summary sent on WhatsApp"] },
  { id:"plan", icon:"doc", color:"#f47c20", title:"Agribusiness Plan Review", price:500, unit:"per plan",
    desc:"I review your business plan or startup idea and tell you what works, what is risky and what to fix first.",
    points:["Written feedback on your plan","Market and value-chain check","30-minute follow-up call"] },
  { id:"report", icon:"chart", color:"#13a3a8", title:"Market & Price Analysis Report", price:500, unit:"per commodity",
    desc:"Price trend and forecast analysis for one agricultural commodity, with a plain-language summary you can act on.",
    points:["Price trends and seasonality","Forecast using time-series models","Short report with charts"] },
  { id:"thesis", icon:"cap", color:"#7b4bd6", title:"Research & Thesis Guidance", price:1100, unit:"per month",
    desc:"Guidance for MBA and Ph.D. students on topic selection, methodology, data analysis and writing.",
    points:["Research design and methods","Data analysis help (SPSS, Excel, Python)","Draft feedback and viva preparation"] },
  { id:"retainer", icon:"team", color:"#d62f4b", title:"FPO / Agri-Startup Advisory", price:1200, unit:"per month",
    desc:"Ongoing advisory for farmer producer organisations and agri-startups on strategy, marketing and supply chains.",
    points:["Monthly strategy sessions","Marketing and branding support","Supply chain and pricing advice"] },
  { id:"workshop", icon:"mic", color:"#2f7fe0", title:"Workshop / Guest Lecture", price:2500, unit:"per day",
    desc:"Talks and training for universities, FPOs, companies and government programmes on agribusiness topics.",
    points:["Agribusiness, agripreneurship, price analytics","On-site or online","Tailored to your audience"] }
];

/* ---- BLOG POSTS ---------------------------------------------------
   type: "Article" | "Opinion" | "Viewpoint"
   draft:true shows a "Santulan संतुलन" label. Remove that line when you
   have reviewed a post and want it to look final.
   body: paragraphs separated by a blank line (use \n\n).
   Newest posts first.                                                */
var POSTS = [
  { id:"price-forecasting-farmers", type:"Article", date:"2026-11-10", read:3, draft:true,
    title:"Why price forecasting matters for Indian farmers",
    summary:"Farmers decide what to grow months before they know what it will sell for. Forecasting can narrow that gap.",
    body:"A farmer sows in one season and sells in another. In between, prices can move sharply, and most small farmers decide with little more than last year's memory.\n\nPrice forecasting uses past market prices to estimate where prices may head. Simple time-series models such as ARIMA look at the trend, the seasonal pattern and the random swings in prices. In my own research on crops such as chickpea and garlic, these models gave useful early signals for planning.\n\nForecasts are never certain, and a good forecast is not a promise. Their real value is in changing decisions: which crop to sow, when to hold stock, when to sell. Advice that reaches a farmer in simple language and on time can matter more than a very accurate model that nobody reads.\n\nThe next step is to make forecasts easy to use: short messages in local languages, linked to the nearest mandi, from sources farmers trust." },
  { id:"fpo-business-mindset", type:"Opinion", date:"2026-11-05", read:2, draft:true,
    title:"FPOs will succeed only when they think like businesses",
    summary:"Farmer Producer Organisations need more than registration and grants. They need customers, discipline and a clear product.",
    body:"Many Farmer Producer Organisations are formed with good intentions. Far fewer become sustainable businesses.\n\nMy view is that the difference lies in mindset. A successful FPO knows who its buyers are before it collects produce. It keeps honest accounts, grades its produce, and builds a brand that buyers trust. It treats members as shareholders in a business, not as beneficiaries of a scheme.\n\nGrants and training help, but they cannot replace sales. An FPO that cannot find repeat customers will struggle once the support ends.\n\nIf I could give FPO leaders one piece of advice, it would be this: start with the market, then work backwards to production." },
  { id:"agripreneur-job-creator", type:"Viewpoint", date:"2026-10-28", read:2, draft:true,
    title:"From job seeker to job creator: the agripreneurship opportunity",
    summary:"Agriculture still needs more entrepreneurs who solve real problems in the value chain.",
    body:"Every year thousands of agriculture and management graduates look for jobs. Meanwhile the agri value chain is full of unsolved problems: storage, grading, transport, market access, processing, branding.\n\nEach of those problems is also a business opportunity. Agripreneurs who start small, learn from customers and stay close to farmers can build ventures that create jobs in their own districts.\n\nThe key is to begin with a problem you understand well, not with a fashionable idea. Test it at small scale, count the costs honestly, and talk to the people who will buy.\n\nUniversities have a role too: giving students real projects, mentors and early contact with the market." },
  { id:"climate-resilient-agribusiness", type:"Article", date:"2026-10-20", read:3, draft:true,
    title:"Three questions every agri-business should ask about climate risk",
    summary:"Climate change is a business risk, not only an environmental one. Three practical questions to start with.",
    body:"Heat, erratic rain and water stress now affect almost every agribusiness, from input dealers to processors. Three questions can help any business start planning.\n\n1. Where is my supply most exposed? Identify the crops, regions and seasons where a bad year would hurt most, and find alternative sources.\n\n2. How flexible is my business? Can I change products, buyers or processes quickly if conditions change? Flexibility is a form of insurance.\n\n3. Who shares the risk with me? Contracts, crop insurance, producer groups and diversified customers all spread risk beyond a single balance sheet.\n\nResilient business models do not remove uncertainty. They make sure a shock does not become a collapse." }
];

/* ---- PROFILE (shown in the Profile tab) --------------------------- */
var PROFILE = {
  role: "Assistant Professor, Department of Applied Agriculture",
  org: "Central University of Punjab, Bathinda",
  stats: [["139","Citations"],["7","h-index"],["5","i10-index"],["20","Papers"]],
  about: "I work where agriculture meets markets, turning data into decisions that help farmers, firms and policymakers. I am an Assistant Professor of Agribusiness at the Central University of Punjab, Bathinda, and I lead the AgriBusiness Intelligence Lab, an international group of Ph.D. scholars from India, Afghanistan and Ghana.",
  interests: ["Agricultural price modelling and forecasting","Agripreneurship","Climate-resilient agribusiness models","Consumer behaviour in food systems","Smart farming and its socioeconomic impact"],
  education: [["Ph.D. Agribusiness","IABM, SKRAU Bikaner, 2017"],["M.B.A. Agribusiness","IABM, SKRAU Bikaner, 2013"],["B.Sc. (Hons) Horticulture","Dr. Y. S. Parmar University, Solan, 2011"]],
  experience: [["Assistant Professor","Central University of Punjab, 2020 - present"],["Assistant Professor","Banaras Hindu University, 2019 - 2020"],["Assistant Professor","MSAMB PG College of Agri Business Mgmt, Pune, 2018 - 2019"],["Assistant Manager, Sales & Marketing","Matix Fertilisers, Kolkata, 2017 - 2018"],["Senior Research Fellow","NIAP-ICAR Market Intelligence project, 2015 - 2017"]],
  projects: [["Network Project on Market Intelligence","Completed · 2015-16 · Rs 5.07 Lac"],["JNU PAIR Network on Science for Sustainable Future","Working · 2025 - present"],["Vocal for Local: Marketing of Agricultural Products as District Brand in Punjab","Completed · PI · 2021-23 · Rs 1.50 Lac"]],
  patent: "An IoT based precision soil fertility measurement system for organic farming. South Africa Patent Grant No. ZA202201589B (29 June 2022).",
  papers: [
    ["Cowpeas for sustainable agriculture and nutrition security","Discover Food, 2025","31"],
    ["Climate change and food security nexus in Ghana: The role of renewable energy","Science of The Total Environment, 2025","23"],
    ["Insights into Blossom End-Rot Disorder in Tomato","Plant Molecular Biology Reporter, 2024","17"],
    ["Integration of cumin markets in Rajasthan","J. Energy and Natural Resource Mgmt, 2016","11"],
    ["Preference for MBA agribusiness programme: A conjoint analysis","IOSR J. Business and Management, 2014","11"],
    ["Millets as a Source of Nutrients and Nutraceuticals","Springer, 2024","9"]
  ],
  committees: [["Training and Placement Committee","Member · Jul 2025 - Jul 2027"],["School Board of Social Sciences","Member · Apr 2026"],["School Board of Basic Sciences","Member · May 2025"],["Institution's Innovation Council 6-9","Start-up Activity Coordinator · Feb 2024"],["DST-iTBI Research & Development Foundation","Project Implementation Group · Jan 2023"],["Academic Advisory Committee, Applied Agriculture","Convener · May 2021"]]
};
