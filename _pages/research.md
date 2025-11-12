---
permalink: /research/
title: "Research"
author_profile: true
---

<style>
/* ==== Research Page Custom Styling ==== */
.research-grid {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: nowrap;
  gap: 24px;
  margin-top: 20px;
}

.research-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  width: 360px; /* consistent fixed width */
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 520px; /* equal height baseline */
  overflow: hidden;
  position: relative;
}

.research-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}

.research-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}

.research-card h3 {
  margin-top: 0;
  font-size: 1.1rem;
  border-left: 4px solid #E87722;
  padding-left: 10px;
  font-weight: 700;
  flex-shrink: 0;
}

.research-card p {
  font-size: 0.95rem;
  color: #444;
  line-height: 1.45;
  margin-bottom: 6px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: all 0.3s ease;
}

.research-card.expanded {
  height: auto; /* expand card height when description expands */
}

.research-card.expanded p {
  -webkit-line-clamp: unset;
  overflow: visible;
}

/* 🔸 Orange "Show more" link */
.show-more {
  background: none;
  border: none;
  color: #E87722;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  text-align: left;
  display: none;
  font-weight: 600;
  margin-top: 4px;
}

.show-more:hover {
  color: #cf6b1e;
  text-decoration: underline;
}

/* 🔸 Read More button */
.research-card .button {
  display: inline-block;
  margin-top: auto;
  padding: 6px 14px;
  background-color: #E87722;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease;
}

.research-card .button:hover {
  background-color: #cf6b1e;
}

/* Responsive layout: stack on smaller screens */
@media (max-width: 1200px) {
  .research-grid {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>

## Research Highlights

<div class="research-grid">

  <div class="research-card">
    <img src="/pr_makerspace_.jpeg" alt="people sitting at tables doing braille activities">
    <h3>Envisioning the Creation of A Culturally-Responsive and Accessible Makerspace</h3>
    <p>Exploring how communities in Puerto Rico imagine a makerspace that is accessible and reflects their culture.</p>
    <button class="show-more" onclick="toggleDescription(this)">Show more</button>
    <a href="#" class="button">Read More</a>
  </div>

  <div class="research-card">
    <img src="/blv_project.jpeg" alt="A laptop, a MakeyMakey kit, and conductive objects on a table">
    <h3>Community-engaged Partnership with Blind and Low-Vision Youth</h3>
    <p>Developing long-term relationships with a local organization to expose BLV youth to information and opportunities in technology and STEM.</p>
    <button class="show-more" onclick="toggleDescription(this)">Show more</button>
    <a href="#" class="button">Read More</a>
  </div>

  <div class="research-card">
    <img src="/assembly_line_project.jpeg" alt="assembly line work setting">
    <h3>Investigating the Work Practices of Assembly Line Workers with Visual Impairments</h3>
    <p>Studying experiences and challenges of assembly line garment workers, along with strategies and workarounds developed to support workflow and independence.</p>
    <button class="show-more" onclick="toggleDescription(this)">Show more</button>
    <a href="#" class="button">Read More</a>
  </div>

</div>

<script>
function toggleDescription(button) {
  const card = button.closest(".research-card");
  const isExpanded = card.classList.toggle("expanded");
  button.textContent = isExpanded ? "Show less" : "Show more";
}

// Ensure "Show more" appears if text exceeds 4 lines
window.addEventListener("load", () => {
  document.querySelectorAll(".research-card").forEach(card => {
    const p = card.querySelector("p");
    const showMoreBtn = card.querySelector(".show-more");
    const lineHeight = parseFloat(window.getComputedStyle(p).lineHeight);
    const visibleHeight = lineHeight * 4;

    if (p.scrollHeight > visibleHeight + 4) {
      showMoreBtn.style.display = "inline";
    }
  });
});
</script>
