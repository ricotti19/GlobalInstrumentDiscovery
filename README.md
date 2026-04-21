# Global Instrument Discovery 🎵

A responsive React application that serves as a curated database of musical instruments from around the world. This project explores data hierarchy, relational attributes, and interactive UI design, specifically focusing on the varying degrees of mastery required for different instrumentation.
As a developer with a background in music, I wanted to build a tool that treats musical mastery as a **quantifiable data point**, of course though nothing in the arts is purely objective and there is a lot of subjectivity in the numbers included in the feature. 

## 🚀 Features

- **Interactive Instrument Gallery:** A grid-based UI that allows users to explore 25 unique instruments.
- **Curated Data Schema:** Each instrument includes specific metadata:
  - Origin (Geography)
  - Subjective Difficulty Rating (1-10)
  - Estimated Years to Mastery (also subjective)
  - Recommended Daily Practice
  - Descriptive Sound Profiles
- **Direct Audio/Visual Integration:** "Hear It!" functionality that links directly to curated demonstrations.
- **Dynamic Content Rendering:** React state management handles expansion and conditional formatting (e.g., singular/plural grammar for mastery years).

## 🛠️ Technical Stack

- **Frontend:** React.js
- **Tooling:** Vite (Lightning Fast HMR)
- **Styling:** CSS-in-JS (Inline styles for modularity)
- **Data Management:** JSON-based Relational Objects

## 📋 Data Highlights

This project intentionally showcases a wide spectrum of data, ranging from:
* **High-Mastery Traditional Instruments:** (e.g., Tabla and Sitar) requiring 15+ years of dedicated practice.
* **Accessible/Modern Instruments:** (e.g., Harmonium and Saxophone).
* **Niche/Casual Data Points:** (e.g., Kids Xylophone) to demonstrate data diversity and UI edge-case handling.

## 📋 Project Structure

```text
GlobalInstrumentDiscovery/
├── public/              # Static assets such as images
├── src/
│   ├── assets/          # Starter icons (react.svg, vite.svg)
│   ├── App.css          # Styling sheet
│   ├── App.jsx          # Main application logic
│   ├── index.css        # Global styles
│   └── main.jsx         # React entry point
├── index.html           # Root HTML
├── package.json         # Dependencies & scripts
└── README.md            # Project documentation
```

## ⚙️ Installation & Setup
To get a local instance of this project running, follow these steps. Ensure you have **Node.js** installed.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ricotti19/GlobalInstrumentDiscovery.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd GlobalInstrumentDiscovery
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

5. **Access the App:** Open your browser to the local URL provided in your terminal (usually http://localhost:5173 or 5174).

<img width="1916" height="1160" alt="image" src="https://github.com/user-attachments/assets/afa631db-a314-499c-a212-e4022ce4d2e9" />

