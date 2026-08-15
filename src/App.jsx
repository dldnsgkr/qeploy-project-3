import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // 부드러운 스크롤 애니메이션을 위한 Intersection Observer 설정
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    // 애니메이션 대상 요소들 관찰
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // 부드러운 스크롤 네비게이션
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skills = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'TypeScript', level: 80, color: '#3178C6' },
    { name: 'Node.js', level: 75, color: '#339933' },
    { name: 'Python', level: 70, color: '#3776AB' },
    { name: 'CSS/SCSS', level: 85, color: '#CC6699' },
  ]

  return (
    <div className="app">
      {/* 네비게이션 바 */}
      <nav className="navbar">
        <div className="nav-logo">Portfolio</div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('hero')}>홈</button></li>
          <li><button onClick={() => scrollToSection('about')}>소개</button></li>
          <li><button onClick={() => scrollToSection('skills')}>기술</button></li>
          <li><button onClick={() => scrollToSection('contact')}>연락처</button></li>
        </ul>
      </nav>

      {/* 히어로 섹션 */}
      <section id="hero" className="hero-section">
        <div className="hero-content fade-in">
          <div className="profile-image">
            <div className="profile-placeholder">
              <span>👨‍💻</span>
            </div>
          </div>
          <h1 className="hero-title">안녕하세요, <span className="highlight">개발자</span>입니다</h1>
          <p className="hero-subtitle">창의적인 웹 솔루션을 만드는 풀스택 개발자</p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              연락하기
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('about')}>
              더 알아보기
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>스크롤</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* 자기소개 섹션 */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title fade-in">About Me</h2>
          <div className="about-content fade-in">
            <div className="about-text">
              <p>
                안녕하세요! 저는 <strong>사용자 경험을 중시하는 웹 개발자</strong>입니다.
                최신 기술 트렌드를 따라가며, 깔끔하고 효율적인 코드를 작성하는 것을 좋아합니다.
              </p>
              <p>
                <strong>문제 해결</strong>에 열정을 가지고 있으며, 복잡한 문제를 단순하고 
                우아한 솔루션으로 변환하는 것에 보람을 느낍니다. 팀워크를 중시하며, 
                함께 성장하는 개발 문화를 지향합니다.
              </p>
              <p>
                끊임없이 <strong>학습하고 발전</strong>하는 것을 목표로 하며,
                새로운 기술과 도구를 익히는 것을 즐깁니다.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Done</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 스택 섹션 */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title fade-in">Skills & Expertise</h2>
          <div className="skills-grid fade-in">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card" style={{ '--delay': `${index * 0.1}s` }}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      '--progress': `${skill.level}%`,
                      backgroundColor: skill.color 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="additional-skills fade-in">
            <h3>그 외 역량</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">REST API</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Agile/Scrum</span>
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <p className="contact-intro fade-in">
            프로젝트 협업이나 궁금한 점이 있으시면 언제든지 연락해 주세요!
          </p>
          <div className="contact-content fade-in">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>이메일</h4>
                  <a href="mailto:developer@email.com">developer@email.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-details">
                  <h4>전화번호</h4>
                  <a href="tel:+821012345678">010-1234-5678</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>위치</h4>
                  <span>서울특별시, 대한민국</span>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link github">
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <span>LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 Portfolio. All rights reserved.</p>
          <p>Made with ❤️ and React</p>
        </div>
      </footer>
    </div>
  )
}

export default App
