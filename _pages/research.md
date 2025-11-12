---
permalink: /research/
title: "Research"
author_profile: true
layout: wide
---

<style>
/* ==== Research Page Custom Styling ==== */

.research-grid {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: 32px; /* wider gap for breathing room */
  margin-top: 20px;
}

/* Each card now expands evenly and fills the entire row */
.research-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  
  /* This tells all cards to grow equally to fill the space */
  flex: 1; 
  
  padding: 22px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 560px;
  max-height: 560px; /* equal height for all cards */
  overflow: hidden;
  position: relative;
}

.research-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}

.research-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
}

.research-card h3 {
  margin-top: 0;
  font-size: 1.2rem;
  border-left: 4px solid #E87722;
  padding-left: 10px;
  font-weight: 700;
  margin-bottom: 10px;
}

/* Scrollable description area */
.research-card p {
  font-size: 0.96rem;
  color: #444;
  line-height: 1.5;
  overflow-y: auto;
  max-height: 140px;
  padding-right: 6px;
  margin-bottom: 18px;
}

/* Subtle scrollbar */
.research-card p::-webkit-scrollbar {
  width: 6px;
}
.research-card p::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}
.research-card p::-webkit-scrollbar-thumb:hover {
  background: #E87722;
}

/* Read More button */
.research-card .button {
  display: inline-block;
  margin-top: auto;
  padding: 10px 16px;
  background-color: #E87722;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease;
}

.research-card .button:hover {
  background-color: #cf6b1e;
}

/* Responsive behavior */
@media (max-width: 1250px) {
  .research-grid {
    flex-wrap: wrap;
    justify-content: center;
  }
  .research-card {
    flex: 1 1 45%;
    max-width: 45%;
  }
}

@media (max-width: 800px) {
  .research-card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>

## Research Highlights

<div class="research-grid">

  <div class="research-card">
    <img src="/pr_makerspace_.jpeg" alt="people sitting at tables doing braille activities">
    <h3>Envisioning the Creation of A Culturally-Responsive and Accessible Makerspace</h3>
    <p>Exploring how communities in Puerto Rico imagine a makerspace that is accessible and reflects their culture.</p>
    <a href="#" class="button">Read More</a>
  </div>

  <div class="research-card">
    <img src="/blv_project.jpeg" alt="A laptop, a MakeyMakey kit, and conductive objects on a table">
    <h3>Community-engaged Partnership with Blind and Low-Vision Youth</h3>
    <p>Developing long-term relationships with a local organization to expose BLV youth to information and opportunities in technology and STEM.</p>
    <a href="#" class="button">Read More</a>
  </div>

  <div class="research-card">
    <img src="/assembly_line_project.jpeg" alt="assembly line work setting">
    <h3>Investigating the Work Practices of Assembly Line Workers with Visual Impairments</h3>
    <p>Studying experiences and challenges of assembly line garment workers, along with strategies and workarounds developed to support workflow and independence.</p>
    <a href="#" class="button">Read More</a>
  </div>

</div>
