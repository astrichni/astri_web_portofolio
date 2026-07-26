import type { Project, SkillCategory, BlogPost, Book } from '../types/portfolio';

export const personalInfo = {
  name: 'Astri Cahyani',
  title: 'Data Analyst & Industrial Engineer',
  tagline: 'Bridging Data Analytics, Supply Chain Operations & Business Intelligence',
  location: 'Indonesia',
  email: 'astricahyani.work@gmail.com',
  linkedin: 'https://linkedin.com/in/astricahyani',
  github: 'https://github.com/astrichni',
  cvUrl: 'https://docs.google.com/document/d/10gIw6lznSoThKRvSfvSgJm5SmIAfXKhx4UK1LYhyfIs/preview?tab=t.0',
  status: 'Open for Early Career Data Roles',
  bio: `I am an Industrial Engineering fresh graduate with a passion for turning complex dataset into actionable business insights. Combining mathematical modeling, supply chain acumen, and technical data tools (SQL, Python, Power BI), I help organizations optimize operations, detect market trends, and make data-driven decisions.`,
  stats: [
    { label: 'Degree', value: 'Industrial Eng.', color: 'bg-pink' },
    { label: 'Core Tools', value: 'SQL • Python • Power BI', color: 'bg-mint' },
    { label: 'Focus Area', value: 'Data & Supply Chain', color: 'bg-sky' },
    { label: 'Approach', value: 'Business-Driven Data', color: 'bg-cream' }
  ]
};

export const projectsData: Project[] = [
  {
    id: 'nlp-indobert',
    title: 'NLP Sentiment Analysis & Topic Modeling of E-Wallet Reviews',
    subtitle: 'IndoBERT & BERTopic Pipeline',
    category: 'NLP & ML',
    description: 'Scraped, preprocessed, classified, and topic-modeled customer reviews from Google Play Store for major Indonesian E-Wallet platforms (DANA, GoPay, ShopeePay) using fine-tuned IndoBERT and BERTopic.',
    longDescription: 'Developed a portfolio-grade, end-to-end NLP data science pipeline combining IndoBERT (indobenchmark/indobert-base-p2) transformer fine-tuning for sentiment classification with BERTopic, SentenceTransformers, UMAP, and HDBSCAN clustering. Automatically extracts granular product friction points (payment verification delays, customer assistant timeouts, app lag) and feature delights for product teams.',
    keyMetric: '94.2%',
    metricLabel: 'Model Accuracy',
    tags: ['Python', 'IndoBERT', 'BERTopic', 'PyTorch', 'Transformers', 'Sastrawi', 'Plotly'],
    tools: ['Python', 'IndoBERT', 'BERTopic', 'Transformers', 'PyTorch', 'UMAP', 'HDBSCAN', 'Sastrawi'],
    color: 'bg-pink',
    githubUrl: 'https://github.com/astrichni/nlp-indobert-bertopic-ewallet',
    liveUrl: '#',
    featured: true,
    problemStatement: 'E-wallet service providers receive thousands of raw reviews daily on app stores, making manual analysis of user friction impossible.',
    methodology: [
      'Data Scraping & Preprocessing: Scraping Play Store reviews with google-play-scraper, colloquial lexicon normalization & Sastrawi Indonesian stemming.',
      'IndoBERT Fine-Tuning: Fine-tuning indobenchmark/indobert-base-p2 for 3-class sentiment classification.',
      'BERTopic Modeling: SentenceTransformer embeddings, UMAP dimensionality reduction & HDBSCAN clustering on sentiment subsets.',
      'CLI & Visualizations: CLI pipeline execution with C-TF-IDF topic word extractions and Plotly charts.'
    ],
    businessImpact: [
      'Identified 5 major user friction points in transaction timeouts and pending payments.',
      'Achieved 94.2% sentiment accuracy vs 81% baseline with traditional models.',
      'Provided actionable UX recommendations to decrease negative review velocity by 25%.'
    ]
  },
  {
    id: 'supply-chain-inventory',
    title: 'Supply Chain Inventory & Safety Stock Optimizer',
    subtitle: 'Automated EOQ & Lead-Time Variance Analysis',
    category: 'Supply Chain',
    description: 'Designed a Python & SQL data pipeline calculating Economic Order Quantity (EOQ), reorder points (ROP), and safety stock levels across 500+ manufacturing SKUs.',
    longDescription: 'In industrial manufacturing, overstocking leads to high holding costs while understocking causes lost sales. By combining industrial engineering inventory modeling with automated SQL data pipelines, this project dynamically adjusts safety stock levels based on supplier lead-time variability and seasonal demand shifts.',
    keyMetric: '18.5%',
    metricLabel: 'Holding Cost Reduced',
    tags: ['SQL', 'Python', 'Supply Chain Analytics', 'Pandas', 'Power BI'],
    tools: ['PostgreSQL', 'Python', 'Power BI', 'Excel VBA'],
    color: 'bg-mint',
    githubUrl: 'https://github.com/astrichni/inventory-safety-stock-optimizer',
    liveUrl: '#',
    featured: true,
    problemStatement: 'High inventory holding costs and frequent stockouts caused by static safety stock policies in dynamic demand environments.',
    methodology: [
      'SQL Data Extraction: Querying historical sales orders, lead times, and SKU unit costs.',
      'Statistical Modeling: Normal distribution fitting for lead-time demand variability.',
      'EOQ & Safety Stock Calculation: Dynamic daily computation of optimal reorder points.',
      'Power BI Visualization: Executive dashboard showing SKU health and reorder alerts.'
    ],
    businessImpact: [
      'Reduced total holding costs by 18.5% across 500+ SKUs.',
      'Eliminated stockout instances by 92% during peak seasonal demand periods.',
      'Automated daily inventory alerts for procurement managers.'
    ]
  },
  {
    id: 'nyc-taxi-fare',
    title: 'NYC Taxi Fare Prediction & Spatial Analytics',
    subtitle: 'XGBoost Regression & Time-Series Feature Engineering',
    category: 'Data Analytics',
    description: 'Built a predictive machine learning model to estimate taxi trip fares in New York City based on pickup/dropoff coordinates, distance math, and temporal trends.',
    longDescription: 'Processed millions of ride records using Python pandas and spatial geometry. Extracted haversine distances, airport proximity features, and rush-hour indicators to train gradient boosting models (XGBoost, Random Forest). Engineered interactive heatmaps for peak fare spatial distribution.',
    keyMetric: '$2.14',
    metricLabel: 'RMSE Fare Error',
    tags: ['Python', 'XGBoost', 'Feature Engineering', 'Folium Maps', 'Geopandas'],
    tools: ['Python', 'Scikit-Learn', 'Seaborn', 'Folium'],
    color: 'bg-sky',
    githubUrl: 'https://github.com/astrichni/nyc-taxi-fare-prediction',
    liveUrl: '#',
    featured: true,
    problemStatement: 'Ride-hailing pricing strategies require transparent and precise trip cost predictions under varying traffic and pickup conditions.',
    methodology: [
      'Data Cleaning: Filtering outlier coordinates, zero-passenger trips, and negative fares.',
      'Spatial Feature Engineering: Calculating Haversine distance & airport bounding boxes.',
      'Model Training: Comparing Linear Regression, Decision Trees, and XGBoost.',
      'Spatial Viz: Building Folium map overlays for trip density.'
    ],
    businessImpact: [
      'Achieved low RMSE of $2.14 on test validation dataset.',
      'Identified top 3 revenue-generating spatial hubs (JFK, LaGuardia, Midtown).',
      'Demonstrated time-series pricing dynamics for peak surge optimization.'
    ]
  },
  {
    id: 'executive-sales-bi',
    title: 'Retail Executive Business Intelligence Dashboard',
    subtitle: 'Power BI KPI Tracking & Customer Cohort Analysis',
    category: 'BI Dashboards',
    description: 'Developed an interactive multi-page Power BI dashboard for retail executives to track sales performance, customer retention cohorts, and margin leakages.',
    longDescription: 'Transformed fragmented sales data into an executive-ready analytics platform. Designed custom DAX measures for Year-over-Year (YoY) growth, customer lifetime value (CLV), cohort retention heatmaps, and product cannibalization rates.',
    keyMetric: '+12%',
    metricLabel: 'Margin Visibility',
    tags: ['Power BI', 'DAX', 'SQL', 'Data Modeling', 'Business Intelligence'],
    tools: ['Power BI Desktop', 'PostgreSQL', 'DAX Studio', 'Excel'],
    color: 'bg-cream',
    githubUrl: 'https://github.com/astrichni/retail-bi-dashboard',
    liveUrl: '#',
    featured: false,
    problemStatement: 'Executive team lacked real-time visibility into regional sales drops and customer churn patterns across retail branches.',
    methodology: [
      'Star Schema Modeling: Creating FactSales, DimCustomer, DimProduct, and DimDate tables.',
      'DAX Calculations: YoY sales, rolling 30-day revenue, cohort retention matrix.',
      'UI/UX Dashboard Layout: User-centric layout with drill-through capabilities.'
    ],
    businessImpact: [
      'Enabled executive team to spot regional margin drop-offs in under 3 clicks.',
      'Uncovered customer churn segment accounting for $45,000 in monthly lost revenue.'
    ]
  },
  {
    id: 'demand-forecasting-plant',
    title: 'Manufacturing Demand Forecasting & Scheduling',
    subtitle: 'Time Series ARIMA & Prophet Forecasting',
    category: 'Supply Chain',
    description: 'Applied statistical time series forecasting (ARIMA, Facebook Prophet) on 3 years of manufacturing plant demand to optimize machine capacity & labor shifts.',
    longDescription: 'Leveraging industrial engineering principles of capacity planning, this project forecasts product line demand to eliminate overtime costs and bottleneck idle time in production plants.',
    keyMetric: '91.5%',
    metricLabel: 'Forecast Accuracy',
    tags: ['Python', 'Prophet', 'ARIMA', 'Time Series', 'Capacity Planning'],
    tools: ['Python', 'Statsmodels', 'Prophet', 'Matplotlib'],
    color: 'bg-purple-300',
    githubUrl: 'https://github.com/astrichni/demand-forecasting-manufacturing',
    liveUrl: '#',
    featured: false,
    problemStatement: 'Unpredictable demand surges caused expensive last-minute shift overtime and raw material procurement rushes.',
    methodology: [
      'Seasonality Decomposing: Analyzing trend, weekly, and annual seasonal cycles.',
      'Prophet & ARIMA Fitting: Cross-validating forecast horizons from 1 to 12 weeks.',
      'Shift Schedule Optimization: Aligning worker schedules with forecasted demand peaks.'
    ],
    businessImpact: [
      'Improved forecast accuracy from 74% to 91.5%.',
      'Cut unneeded shift overtime expenses by 14%.'
    ]
  },
  {
    id: 'rupiah-reader',
    title: 'Rupiah Reader - Currency Detection System',
    subtitle: 'Bangkit Academy Capstone Project (C241-PS460)',
    category: 'NLP & ML',
    description: 'Developed a Computer Vision & Deep Learning mobile solution to identify Indonesian Rupiah banknote denominations for assisting visually impaired users and cash transaction logging.',
    longDescription: 'As part of Bangkit Academy Capstone Project C241-PS460, collaborated across Machine Learning, Mobile Development, and Cloud Computing paths. Built lightweight MobileNet CNN image classification models for real-time banknote denomination detection under varying lighting and wear conditions, integrated with Cloud API backends and Android app.',
    keyMetric: '98.7%',
    metricLabel: 'Classification Accuracy',
    tags: ['Python', 'TensorFlow', 'MobileNet', 'Computer Vision', 'FastAPI', 'Android'],
    tools: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Google Cloud Platform', 'Android Studio'],
    color: 'bg-orange-300',
    githubUrl: 'https://github.com/Rupiah-Reader-C241-PS460',
    liveUrl: '#',
    featured: false,
    problemStatement: 'Visually impaired individuals face challenges identifying banknote denominations independently, while micro-merchants require automated cash transaction logging.',
    methodology: [
      'Dataset Curation & Augmentation: Collecting & augmenting Indonesian banknote dataset with lighting, rotation, and wear simulations.',
      'Model Architecture & Quantization: Fine-tuning & quantizing MobileNet CNN model for mobile edge deployment.',
      'Cloud & Mobile Integration: Building REST API endpoints on GCP & integrating with native Android application.',
      'Cross-Functional Collaboration: Collaborating across ML, Mobile (MD), and Cloud (CC) team tracks.'
    ],
    businessImpact: [
      'Achieved 98.7% test accuracy across all 7 current Rupiah bill denominations.',
      'Successfully delivered Bangkit Academy 2024 Capstone Solution C241-PS460.'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data Analytics & Programming',
    iconName: 'Database',
    color: 'bg-pink',
    skills: [
      { name: 'SQL (PostgreSQL / MySQL)', level: 'Intermediate', description: 'Complex JOINs, Window Functions, CTEs, Aggregations & Query Optimization' },
      { name: 'Python for Data Science', level: 'Intermediate', description: 'Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, PyTorch' },
      { name: 'R Programming', level: 'Intermediate', description: 'Statistical Analysis, Hypothesis Testing, ggplot2' },
      { name: 'ETL & Data Wrangling', level: 'Intermediate', description: 'Data cleaning, validation, transformation pipelines & automation' },
      { name: 'Statistical Analysis', level: 'Intermediate', description: 'A/B Testing, Regression Analysis, Probability Distributions, ANOVA' }
    ]
  },
  {
    title: 'Business Intelligence & Visualization',
    iconName: 'BarChart3',
    color: 'bg-mint',
    skills: [
      { name: 'Power BI', level: 'Intermediate', description: 'Data Modeling (Star Schema), DAX Measures, Custom Reports, Drill-Throughs' },
      { name: 'Tableau', level: 'Intermediate', description: 'Interactive Dashboards, Calculated Fields, Story Points' },
      { name: 'Advanced Excel & Google Sheets', level: 'Advanced', description: 'Pivot Tables, VLOOKUP/XLOOKUP, Power Query, VBA Macros' },
      { name: 'Data Storytelling', level: 'Intermediate', description: 'Translating raw numbers into compelling executive narratives' }
    ]
  },
  {
    title: 'Industrial Engineering & Supply Chain',
    iconName: 'Truck',
    color: 'bg-sky',
    skills: [
      { name: 'Supply Chain Analytics', level: 'Intermediate', description: 'Inventory Optimization (EOQ, Safety Stock, ROP), Lead-time Analysis' },
      { name: 'Demand Forecasting', level: 'Intermediate', description: 'Time-series forecasting (ARIMA, Exponential Smoothing, Prophet)' },
      { name: 'Process Optimization', level: 'Intermediate', description: 'Value Stream Mapping (VSM), Bottleneck Removal, Lean Six Sigma' },
      { name: 'Operations Research', level: 'Intermediate', description: 'Linear Programming, Capacity Planning, Facility Layout Design' }
    ]
  },
  {
    title: 'Tools & Soft Skills',
    iconName: 'Wrench',
    color: 'bg-cream',
    skills: [
      { name: 'Git & GitHub', level: 'Intermediate', description: 'Version control, repository management, collaborative code' },
      { name: 'Jira & Agile Methodology', level: 'Intermediate', description: 'Sprint planning, backlog prioritization, project execution' },
      { name: 'Business Acumen', level: 'Intermediate', description: 'Understanding P&L drivers, margin analysis, ROI metrics' },
      { name: 'Cross-Functional Communication', level: 'Intermediate', description: 'Bridging engineering team outputs with business stakeholders' }
    ]
  }
];

export const blogPostsData: BlogPost[] = [
  {
    title: 'Why Industrial Engineers Make Exceptional Data Analysts',
    excerpt: 'How combining systems thinking, process optimization, and mathematical modeling creates a high-impact data mindset.',
    date: 'Jul 20, 2026',
    readTime: '6 min read',
    category: 'Industrial Eng',
    color: 'bg-pink',
    featured: true,
    link: '#'
  },
  {
    title: 'Building Automated Safety Stock Pipelines with Python & SQL',
    excerpt: 'Step-by-step guide to dynamically adjusting reorder points based on lead time volatility and demand variance.',
    date: 'Jul 05, 2026',
    readTime: '8 min read',
    category: 'Supply Chain',
    color: 'bg-mint',
    featured: false,
    link: '#'
  },
  {
    title: 'Decoding Indonesian E-Wallet Customer Feedback using IndoBERT',
    excerpt: 'How transformer-based NLP uncovers granular product friction points that standard keyword searches miss.',
    date: 'Jun 18, 2026',
    readTime: '7 min read',
    category: 'NLP & AI',
    color: 'bg-sky',
    featured: false,
    link: '#'
  }
];

export const booksData: Book[] = [
  {
    title: 'Storytelling with Data',
    author: 'Cole Nussbaumer Knaflic',
    description: 'Essential guide to data visualization and communicating key insights effectively to stakeholders.',
    rating: 5,
    pages: '288',
    category: 'Data & Analytics',
    color: 'bg-pink'
  },
  {
    title: 'Supply Chain Management: Strategy, Planning, and Operation',
    author: 'Sunil Chopra',
    description: 'Comprehensive framework for understanding supply chain performance, inventory control, and logistics.',
    rating: 5,
    pages: '544',
    category: 'Supply Chain',
    color: 'bg-mint'
  },
  {
    title: 'Python for Data Analysis',
    author: 'Wes McKinney',
    description: 'The definitive handbook by pandas founder for data manipulation, cleaning, and processing in Python.',
    rating: 5,
    pages: '550',
    category: 'Data & Analytics',
    color: 'bg-sky'
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    description: 'Deep dive into data systems, storage engines, distributed data processing, and reliable architecture.',
    rating: 5,
    pages: '616',
    category: 'Engineering',
    color: 'bg-purple-400'
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'Proven system for building daily learning habits, continuous self-improvement, and focused execution.',
    rating: 5,
    pages: '320',
    category: 'Productivity',
    color: 'bg-amber-400'
  }
];
