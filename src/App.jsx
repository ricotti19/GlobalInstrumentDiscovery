import React, { useState } from 'react';

const instrumentData = [
  { name: "Saxophone", origin: "Belgium", difficulty: 6, years: 5, practice: "45 mins/day", sound: "Smooth, jazzy, and soulful.", url: "https://www.youtube.com/shorts/goacS42HKh8", image: "/images/saxophone.jpg" },
  { name: "Clarinet", origin: "Germany", difficulty: 6, years: 6, practice: "1 hour/day", sound: "Woody, mellow, and agile.", url: "https://www.youtube.com/shorts/VAby_a2U2aM", image: "/images/clarinet.jpg" },
  { name: "Bass", origin: "Europe", difficulty: 6, years: 7, practice: "1 hour/day", sound: "Deep, rhythmic, and foundational.", url: "https://www.youtube.com/shorts/U6LEVqvJBIQ", image: "/images/bass.jpg" },
  { name: "Cello", origin: "Italy", difficulty: 8, years: 10, practice: "1.5 hours/day", sound: "Rich, deep, and human-like.", url: "https://www.youtube.com/shorts/U5HYKusDnHQ", image: "/images/cello.jpg" },
  { name: "Viola", origin: "Italy", difficulty: 7, years: 8, practice: "1.5 hours/day", sound: "Mellow, dark, and warm.", url: "https://www.youtube.com/shorts/pJP2JJ5iQ-U", image: "/images/viola.jpg" },
  { name: "Violin", origin: "Italy", difficulty: 9, years: 10, practice: "2 hours/day", sound: "High-pitched and highly expressive.", url: "https://www.youtube.com/shorts/ie5wSDTZr3k", image: "/images/violin.jpg" },
  { name: "Pipa", origin: "China", difficulty: 9, years: 12, practice: "2 hours/day", sound: "Sharp, percussive lute tones.", url: "https://www.youtube.com/shorts/SY70v_vAUlQ", image: "/images/pipa.jpg" },
  { name: "Oud", origin: "Middle East", difficulty: 8, years: 8, practice: "1 hour/day", sound: "Warm, fretless, and haunting.", url: "https://www.youtube.com/shorts/6kcOh-q6ES4", image: "/images/oud.jpg" },
  { name: "Guitar", origin: "Spain", difficulty: 5, years: 5, practice: "45 mins/day", sound: "Versatile, resonant, and rhythmic.", url: "https://www.youtube.com/shorts/kC5TnTcK-lk", image: "/images/guitar.jpg" },
  { name: "Trombone", origin: "Europe", difficulty: 7, years: 7, practice: "1 hour/day", sound: "Bold, brassy, and sliding tones.", url: "https://www.youtube.com/shorts/iEZNRZH4gWA", image: "/images/trombone.jpg" },
  { name: "Tabla", origin: "India", difficulty: 10, years: 15, practice: "3 hours/day", sound: "Highly rhythmic and melodic drums.", url: "https://www.youtube.com/shorts/RcpGEIHOcyg", image: "/images/tabla.jpg" },
  { name: "Drums", origin: "Global", difficulty: 7, years: 7, practice: "1 hour/day", sound: "Powerful, rhythmic, and percussive.", url: "https://www.youtube.com/shorts/WkcomcZ8Z14", image: "/images/drums.jpg" },
  { name: "Cymbals", origin: "Turkey", difficulty: 3, years: 2, practice: "15 mins/day", sound: "Crashing, shimmering, and bright.", url: "https://www.youtube.com/shorts/X5KPRHZSkJA", image: "/images/cymbals.jpg" },
  { name: "Riqq", origin: "Middle East", difficulty: 8, years: 7, practice: "1 hour/day", sound: "Intricate, jingling tambourine beats.", url: "https://www.youtube.com/shorts/wcz9m0H97Ss", image: "/images/riqq.jpg" },
  { name: "Sitar", origin: "India", difficulty: 10, years: 15, practice: "3 hours/day", sound: "Sympathetic strings with a unique buzz.", url: "https://www.youtube.com/shorts/UA03d54Td9g", image: "/images/sitar.jpg" },
  { name: "Veena", origin: "India", difficulty: 9, years: 12, practice: "2 hours/day", sound: "Deep, ancient, and resonant pluckings.", url: "https://www.youtube.com/shorts/mCUi8_DWCLA", image: "/images/veena.jpg" },
  { name: "Flute", origin: "Global", difficulty: 6, years: 6, practice: "45 mins/day", sound: "Airy, light, and bird-like.", url: "https://www.youtube.com/shorts/QFJ2z7tfcDc", image: "/images/flute.jpg" },
  { name: "Piano", origin: "Italy", difficulty: 7, years: 10, practice: "1.5 hours/day", sound: "Broad range, percussive yet melodic.", url: "https://www.youtube.com/shorts/pZbYM0L4SMA", image: "/images/piano.jpg" },
  { name: "Harp", origin: "Ancient Near East", difficulty: 9, years: 12, practice: "2 hours/day", sound: "Heavenly, cascading, and ethereal.", url: "https://www.youtube.com/shorts/KUx2j49N4Ac", image: "/images/harp.jpg" },
  { name: "Erhu", origin: "China", difficulty: 9, years: 10, practice: "1.5 hours/day", sound: "Two-stringed, singing, and melancholy.", url: "https://www.youtube.com/shorts/uCNNhAT8mZw", image: "/images/erhu.jpg" },
  { name: "Guqin", origin: "China", difficulty: 8, years: 10, practice: "1 hour/day", sound: "Quiet, meditative, and deep pluckings.", url: "https://www.youtube.com/shorts/d1-wni3P43o", image: "/images/guqin.jpg" },
  { name: "Banhu", origin: "China", difficulty: 8, years: 8, practice: "1 hour/day", sound: "High-pitched, loud, and wooden.", url: "https://www.youtube.com/shorts/7w21R51SmX0", image: "/images/banhu.jpg" },
  { name: "Accordion", origin: "Germany", difficulty: 8, years: 8, practice: "1 hour/day", sound: "Bellows-driven, reed-like, and full.", url: "https://www.youtube.com/shorts/UgYJQOcixm8", image: "/images/accordion.jpg" },
  { name: "Harmonium", origin: "Europe/India", difficulty: 4, years: 3, practice: "30 mins/day", sound: "Drone-like, rich, and constant.", url: "https://www.youtube.com/shorts/gmYUT_IFEgc", image: "/images/harmonium.jpg" },
  { name: "Kids Xylophone", origin: "Nursery", difficulty: 1, years: 1, practice: "5 mins/day", sound: "Plinky, plastic, and nostalgic.", url: "https://www.youtube.com/shorts/OGVijJSasKY", image: "/images/xylophone.jpg" }
];

const InstrumentApp = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <div style={{ padding: '40px', backgroundColor: '#f4f7f6', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '40px' }}>Global Instrument Discovery</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', 
        gap: '40px' 
      }}>
        {instrumentData.map((item, index) => (
          <div
            key={index}
            onClick={() => setOpenId(openId === index ? null : index)}
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease',
              transform: openId === index ? 'scale(1.02)' : 'scale(1)'
            }}
          >
            {/* Image Container set to 400px height */}
            <div style={{ height: '400px', backgroundColor: '#e0e0e0', overflow: 'hidden' }}>
                <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/450x400?text=' + item.name; }}
                />
            </div>

            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ margin: '0', fontSize: '1.4rem', color: '#34495e' }}>{item.name}</h2>
                <span style={{ fontWeight: 'bold', color: '#3498db' }}>{openId === index ? '▲' : '▼'}</span>
              </div>
              
              {openId === index && (
                <div style={{ marginTop: '15px', borderTop: '1px solid #eee', paddingTop: '15px', animation: 'fadeIn 0.3s' }}>
                  <p><strong>Origin:</strong> {item.origin}</p>
                  <p><strong>Difficulty:</strong> {item.difficulty}/10</p>
                  <p><strong>Mastery:</strong> {item.years} {item.years === 1 ? 'Year' : 'Years'}</p>
                  <p><strong>Daily Practice:</strong> {item.practice}</p>
                  <p style={{ fontStyle: 'italic', color: '#7f8c8d', marginTop: '10px' }}>"{item.sound}"</p>
                  
                  <button
                    onClick={(e) => { e.stopPropagation(); window.open(item.url, '_blank'); }}
                    style={{
                      marginTop: '15px',
                      width: '100%',
                      padding: '12px',
                      backgroundColor: '#2c3e50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    Hear It! 🎵
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note Added Outside the Grid */}
      <footer style={{ 
        textAlign: 'center', 
        marginTop: '60px', 
        paddingBottom: '20px',
        color: '#95a5a6', 
        fontSize: '0.85rem', 
        fontStyle: 'italic',
        letterSpacing: '0.5px'
      }}>
        *Note: Difficulty rankings and mastery timelines are subjective and based on average learning curves. 
        Individual progress may vary based on prior musical experience.
      </footer>
    </div>
  );
};

export default InstrumentApp;