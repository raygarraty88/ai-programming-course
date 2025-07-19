import React, { useState } from 'react';
import './App.css';
import PrivacyModal from './PrivacyModal';


function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preference: '',
    message: '',
    consentGiven: false, // NEW
  });
  const [modalVisible, setModalVisible] = useState(false); // NEW
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus(null);
  setError(null); // reset previous error

  if (!formData.consentGiven) {
    alert("You must accept the privacy policy to proceed.");
    return;
  }

  try {
    const { consentGiven, ...submissionData } = formData; // exclude from submission
    const response = await fetch('https://formspree.io/f/xdkgjqbd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        preference: '',
        message: '',
        consentGiven: false,
      });
    } else {
      setStatus('error');
    }
  } catch (err) {
    console.error(err);
    setStatus('error');
  }
};



  return (
    <div className="App">
      <header className="hero">
        <h1>Learn Programming from Zero — Powered by AI</h1>
        <p>In-person & Online | Valencia, Spain | English Only</p>
        <a href="#apply" className="cta">Apply Now</a>
      </header>

      <section className="what-youll-learn" id="learn">
        <h2>🧠 What You’ll Learn</h2>
        <p className="intro-text">
          This 6-month course will take you from beginner to confident junior developer, with a strong focus on backend development using .NET and C#, powered by AI tools and basic frontend knowledge.
        </p>

        <div className="learn-grid">


          <div className="learn-block">
            <h3>🤖 AI Tools for Developers</h3>
            <ul>
              <li>Use GitHub Copilot to boost productivity</li>
              <li>Prompt engineering & debugging with ChatGPT</li>
              <li>Generate documentation with AI</li>
              <li>Smart code review & testing assistance</li>
              <li>Best practices for ethical AI use</li>
            </ul>
          </div>

          <div className="learn-block">
            <h3>🔧 Backend Development<br />with .NET & C#</h3>
            <ul>
              <li>Programming fundamentals using C#</li>
              <li>Object-Oriented Programming (OOP)</li>
              <li>Build REST APIs with ASP.NET Core</li>
              <li>Work with databases via Entity Framework</li>
              <li>Dependency injection, middleware, testing</li>
            </ul>
          </div>

          <div className="learn-block">
            <h3>🎨 Frontend Basics<br />with React</h3>
            <ul>
              <li>HTML, CSS, JavaScript essentials</li>
              <li>React components & props/state</li>
              <li>Consume backend APIs in frontend</li>
              <li>Basic routing & user interaction</li>
              <li>Frontend deployment tips</li>
            </ul>
          </div>

          <div className="learn-block">
            <h3>☁️ Deploy on Azure<br />and Go Live</h3>
            <ul>
              <li>Learn how to deploy .NET APIs to Azure App Services</li>
              <li>Use Azure SQL and Blob Storage for real data</li>
              <li>Set up CI/CD pipelines (GitHub Actions)</li>
              <li>Host your React frontend on Azure Static Web Apps</li>
              <li>Understand pricing, monitoring, and scaling basics</li>
            </ul>
          </div>

          <div className="learn-block">
            <h3>🗣️ Improve Your English<br />for Tech Careers</h3>
            <ul>
              <li>Practice technical vocabulary in real context</li>
              <li>Code and communicate in English from day one</li>
              <li>Daily speaking practice in a supportive group</li>
              <li>Build confidence for interviews and teamwork</li>
              <li>Get used to global, remote-first workflows</li>
            </ul>
          </div>


          <div className="learn-block">
            <h3>🚀 Real-World Projects<br />& Team Collaboration</h3>
            <ul>
              <li>Solo and team full-stack projects</li>
              <li>Agile workflow & version control with Git</li>
              <li>Weekly sprints & peer reviews</li>
              <li>Prepare a strong developer portfolio</li>
              <li>Present your final project demo</li>
            </ul>
          </div>
        </div>


      </section>

      <section className="for">
        <h2>👥 Who's It For?</h2>
        <p>Expats, students, and career changers living in Valencia — or joining remotely. No tech background needed.</p>
      </section>

      <section className="curriculum">
        <h2>📚 Course Breakdown</h2>
        <ul>
          <li>Weeks 1–6: Programming Fundamentals in C# + AI Tools for Learning</li>
          <li>Weeks 7–12: OOP in C# + Building Simple Console & Web Apps</li>
          <li>Weeks 13–18: Web APIs with ASP.NET + React Frontend Integration</li>
          <li>Weeks 19–22: Full-Stack Project with Azure Deployment</li>
          <li>Weeks 23–24: Portfolio Polish, Team Project Demo & Career Prep</li>
        </ul>
      </section>

      <section className="course-schedule" id="schedule">
        <h2>🗓️ Course Schedule</h2>
        <p>
          The course runs for approximately <strong>6 months</strong> with sessions held 
          <strong> twice per week</strong> in the evenings. Exact days and times will be
          scheduled based on demand to accommodate both on-site and online participants.
        </p>
        <p>
          Each group will have a consistent schedule once formed. Sessions are expected to last
          2 hours each and will be recorded for flexible access. Additional support sessions
          and office hours will be available throughout the course.
        </p>
      </section>

      <section className="course-pricing" id="pricing">
        <h2>💰 Pricing</h2>
        <p>
          The full course costs <strong>€1,200</strong> (or 6 × €200 monthly).
        </p>
        <ul>
          <li>✅ Try first week for free</li>
          <li>✅ 24 weeks of instructor-led sessions</li>
          <li>✅ Real project mentorship & portfolio support</li>
          <li>✅ Deployment on Azure & GitHub</li>
          <li>✅ Access to AI tools & developer community</li>
        </ul>
        <p>Early bird discount: <strong>€900 (or 6 × €150 monthly)</strong> if you enroll before August 15.</p>
      </section>

      <section className="apply" id="apply">
        <h2>📩 Apply Now</h2>
        <p>Leave your details and we'll get in touch:</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone number (optional)"
            value={formData.phone}
            onChange={handleChange}
          />

          <select
            name="preference"
            value={formData.preference}
            onChange={handleChange}
            required
          >
            <option value="">I can join...</option>
            <option value="On-site in Valencia">On-site in Valencia</option>
            <option value="Online">Online</option>
          </select>

          <textarea
            name="message"
            placeholder="Optional message..."
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className="consent-container">
          <input
            type="checkbox"
            name="consentGiven"
            checked={formData.consentGiven}
            onChange={handleChange}
            required
          />
          <label onClick={() => setModalVisible(true)} style={{ cursor: 'pointer' }}>
            Al enviar este formulario, aceptas nuestra <u>política de privacidad</u>.
          </label>
          </div>

         {modalVisible && <PrivacyModal onClose={() => setModalVisible(false)} />}

          <button type="submit">Send Application</button>
        </form>

        {status === 'success' && (
          <p style={{ color: 'green', fontWeight: 600, marginTop: '1rem' }}>
            ✅ Thank you! We’ll be in touch soon.
          </p>
        )}
        {status === 'error' && (
          <p style={{ color: 'red', fontWeight: 600, marginTop: '1rem' }}>
            ❌ Something went wrong. Please try again later.
          </p>
        )}
      </section>

      <footer>
        <p>&copy; 2025 Programming with AI - Valencia</p>
      </footer>
    </div>
  );
}


export default App;
