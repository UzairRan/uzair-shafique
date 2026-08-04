// ========================================
// PROJECT DATA
// ========================================
const projectsData = [
    {
        id: 'qsar',
        title: 'QSAR Prediction System',
        description: 'Predict molecular bioactivity from SMILES using machine learning, RDKit, FastAPI, and Streamlit. Built as a complete end-to-end workflow with explainable AI and REST APIs.',
        image: 'assets/images/projects/qsar.jpg',
        placeholderIcon: 'fa-dna',
        tech: ['Python', 'XGBoost', 'FastAPI', 'Streamlit', 'RDKit', 'SHAP', 'Docker'],
        github: 'https://github.com/UzairRan/QSAR-AI-Drug-Predictor',
        demo: 'https://qsar-ai-drug-predictor.streamlit.app/',
        extra: 'https://qsar-ai-drug-predictor.onrender.com/docs'
    },
    {
        id: 'studymind',
        title: 'StudyMind AI',
        description: 'A Retrieval-Augmented Generation (RAG) study assistant supporting both local and cloud inference. Upload PDFs, retrieve context, ask questions, and generate quizzes.',
        image: 'assets/images/projects/studymind.jpg',
        placeholderIcon: 'fa-graduation-cap',
        tech: ['Python', 'LangChain', 'FAISS', 'Streamlit', 'Ollama', 'Gemini'],
        github: 'https://github.com/UzairRan/StudyMind-AI',
        demo: 'https://studymindai.streamlit.app/'
    },
    {
        id: 'medicare',
        title: 'Medicare Part D Forecasting',
        description: 'Forecast Medicare Part D drug spending using LightGBM and Optuna. Includes feature engineering, interactive dashboards, and healthcare analytics.',
        image: 'assets/images/projects/medicare.jpg',
        placeholderIcon: 'fa-chart-line',
        tech: ['Python', 'LightGBM', 'Optuna', 'Pandas', 'Streamlit', 'SHAP'],
        github: 'https://github.com/UzairRan/medicare-partd-forecasting-tool',
        demo: 'https://rxveritas.streamlit.app/'
    },
    {
        id: 'nexus',
        title: 'Nexus IT Assistant',
        description: 'AI IT support agent built with LangGraph and ReAct pattern. Automatically switches between local Ollama and cloud Gemini while maintaining the same workflow.',
        image: 'assets/images/projects/nexus.jpg',
        placeholderIcon: 'fa-robot',
        tech: ['Python', 'LangGraph', 'LangChain', 'Streamlit', 'Ollama', 'Gemini'],
        github: 'https://github.com/UzairRan/nexus-it-assistant',
        demo: 'https://nexus-it-assistant.streamlit.app/'
    },
    {
        id: 'ocr',
        title: 'DocScan OCR MLOps System',
        description: 'Production-ready OCR pipeline using EasyOCR, FastAPI, MLflow, Docker, and Streamlit with experiment tracking, drift monitoring, and containerization.',
        image: 'assets/images/projects/ocr.jpg',
        placeholderIcon: 'fa-file-alt',
        tech: ['Python', 'EasyOCR', 'FastAPI', 'MLflow', 'Docker', 'Streamlit'],
        github: 'https://github.com/UzairRan/easyocr-mlops',
        demo: null
    },
    {
        id: 'churnshield',
        title: 'Telco ChurnShield Dashboard',
        description: 'Customer churn prediction dashboard with React frontend, Flask API, and Docker deployment. Includes prediction, scenario simulation, and model explainability.',
        image: 'assets/images/projects/churnshield.jpg',
        placeholderIcon: 'fa-users',
        tech: ['Python', 'Flask', 'React', 'Scikit-learn', 'Docker', 'Render'],
        github: 'https://github.com/UzairRan/Telco-ChurnShield-Dashboard',
        demo: 'https://telco-churnshield-dashboard.onrender.com/'
    }
];

// ========================================
// CERTIFICATION DATA
// ========================================
const certificationsData = [
    {
        name: 'Retrieval Augmented Generation (RAG) with LangChain',
        issuer: 'DataCamp',
        year: '2026',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/59987d9623e9fe4f81b1a3b53e8e271f00e9f1e7?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa' // Replace with actual link
    },
    {
        name: 'Amazon Web Services Machine Learning Essential Training',
        issuer: 'Linkedin Learning',
        year: '2024',
        link: 'https://www.linkedin.com/learning/certificates/e0436e75896857778087b5003a7e89982c99e493ad1d03154f96d55ac17f1f62' // Replace with actual link
    },
    {
        name: 'Python for ML and DS',
        issuer: 'Great Learning',
        year: '2023',
        link: 'https://olympus.mygreatlearning.com/courses/86169/certificate' // Replace with actual link
    },
    {
        name: 'SQL for data science',
        issuer: 'Great Learning',
        year: '2023',
        link: 'https://olympus.mygreatlearning.com/courses/40120/certificate' // Replace with actual link
    },
    {
        name: 'Artificial Intelligence Governance',
        issuer: 'DataCamp',
        year: '2026',
        link: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/4e282e4511ec8e38e2016ed90818e7dc1ed3bec9?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa' // Replace with actual link
    },
    {
        name: 'AI for Healthcare',
        issuer: 'Great Learning',
        year: '2023',
        link: 'https://olympus.mygreatlearning.com/courses/71016/certificate' // Replace with actual link
    }
]; 