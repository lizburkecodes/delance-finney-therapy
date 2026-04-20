import '../styles/community.css';

function Community() {
  return (
    <section className="community-page">
      <header className="community-header">
        <h1>Community Organizer</h1>
        <p className="community-intro">
          My work includes organizing workshops and events focused on bringing
          people together, whether through advocacy work, events, or shared spaces.
          I have experience in labor organizing, coordinating community events,
          and supporting environments where people can connect and take action
          together.
        </p>
      </header>

      <section className="community-section">
        <article className="community-card">
          <h2>The CHAAD Project</h2>
          <p className="role-meta">Volunteer Worker Organizer · 2022-Present</p>
          <p>
            Through{' '}
            <a
              href="https://www.thechaadproject.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              The CHAAD Project
            </a>
            , I support workshops and trainings focused on labor rights,
            worker power, and community-building in the hospitality industry.
            My work includes contributing to campaigns, supporting in-person
            events, and helping create spaces where workers can build
            relationships, share knowledge, and organize for better conditions.
          </p>
        </article>

        <article className="community-card">
          <h2>Switch Socials</h2>
          <p className="role-meta">Community Organizer · 2022-Present</p>
          <p>
            I organize recurring Nintendo Switch social events in Chicago, creating
            welcoming spaces for people to gather, play, and build community. I manage
            logistics, coordinate technology needs, and help make each event accessible,
            consistent, and community-centered.
          </p>

          <div className="event-schedule">
            <h3>Monthly Schedule</h3>

            <div className="event-item">
              <p className="event-title">The Native</p>
              <p>Last Wednesday of every month</p>
              <p>2417 N Milwaukee Ave, Chicago, IL 60647</p>
              <p>(872) 206-5526</p>
            </div>

            <div className="event-item">
              <p className="event-title">Beermiscuous</p>
              <p>Second Tuesday of every month</p>
              <p>2812 N Lincoln Ave, Chicago, IL 60657</p>
              <p>(773) 698-6824</p>
            </div>

            <a
              href="https://www.instagram.com/switchsocials/"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link ig-link"
            >
              Follow Switch Socials on Instagram
            </a>
          </div>
        </article>
      </section>

      <section className="community-values">
        <h2>What guides my approach</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Relationship-building</h3>
            <p>
              Centering trust, listening, and meaningful connection as the
              foundation for community.
            </p>
          </div>

          <div className="value-card">
            <h3>Collective empowerment</h3>
            <p>
              Supporting people in developing their voice, their agency, and
              ability to act together.
            </p>
          </div>

          <div className="value-card">
            <h3>Inclusive spaces</h3>
            <p>
              Creating environments where people feel respected, welcomed, and
              encouraged to participate fully.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Community;