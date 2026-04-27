// main.js — TechCorp Website

document.getElementById('root').innerHTML = `
  <div>
    
    <section class="hero">
      <h1 class="hero-title">Welcome to TechCorp</h1>
      <p class="hero-subtitle">Building the future, one line at a time.</p>
      <button class="subscribe-btn" onclick="handleSubscribe()">Get Started</button>
    </section>
    
    <section class="services">
      <h2>Our Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <h3>Web Development</h3>
          <p>We build fast, modern, and responsive websites tailored to your needs.</p>
        </div>
        <div class="service-card">
          <h3>Mobile Apps</h3>
          <p>Cross-platform mobile applications that work seamlessly on any device.</p>
        </div>
        <div class="service-card">
          <h3>UI/UX Design</h3>
          <p>Beautiful and intuitive designs that users love.</p>
        </div>
      </div>
    </section>
    
    <footer class="footer">
      <p>2024 TechCorp. All rights reserved.</p>
    </footer>
  </div>
`;

function handleSubscribe() {
  alert('Thanks! We will be in touch soon.');
}