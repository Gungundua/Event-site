import React, { useState } from 'react';
import { galleryData } from './photos.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

const categories = ["All", "Mehendi", "Haldi", "Sangeet" , "Anniversary" , "Corporate"];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="gallery">
      <div className="category">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? "active" : ""}
          >
            <span>{cat}</span>
            
          </button>
        ))}
      </div>

      <div className="photos">
        <AnimatePresence mode="wait">
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              className="id"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              <img src={item.images} alt={item.title} className="images" />
              <div className="title">{item.title}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}