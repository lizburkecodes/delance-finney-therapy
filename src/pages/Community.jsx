import '../styles/community.css';

function Community() {
  return (
    <section className="community-page">
      <header className="community-header">
        <h1>Community Organizer</h1>
        <p className="community-intro">
          My work includes organizing workshops, events, and recurring community
          gatherings across Chicago. I focus on creating spaces where people can
          connect, build relationships, and feel welcomed into something
          consistent and community-driven.
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
      </section>

      <section className="switch-socials-feature">
        <div className="switch-socials-text">
          <p className="section-label">Switch Socials</p>
          <h2>Monthly Nintendo Switch events built around fun and connection.</h2>

          <p>
            My name is Delancey Finney and I host Switch Socials, an event I
            created with the intent of having people come make friends, grab a
            few drinks, and participate in a casual Mario Kart competition.
          </p>

          <p>
            I've been hosting Switch Socials for 4 years now at two locations:
            Beermiscuous on the second Tuesday of the month and The Native on
            the last Wednesday of the month, both from 8pm to 11pm.
          </p>

          <p>
            During the event, I encourage participants to interact with one
            another, building a sense of community over time. I pass out drink
            tokens for winners of preliminary races, with rules determined by a
            wheel I bring, and I award gift cards from the business for first-
            and second-place winners of a larger race toward the end of the
            event.
          </p>

          <div className="event-schedule">
            <h3>Monthly Schedule</h3>

            <div className="event-item">
              <p className="event-title">Beermiscuous</p>
              <p>Second Tuesday of every month · 8pm-11pm</p>
              <p>2812 N Lincoln Ave, Chicago, IL 60657</p>
            </div>

            <div className="event-item">
              <p className="event-title">The Native</p>
              <p>Last Wednesday of every month · 8pm-11pm</p>
              <p>2417 N Milwaukee Ave, Chicago, IL 60647</p>
              <p>(872) 206-5526</p>
            </div>
          </div>

          <div className="switch-links">
            <a
              href="https://www.instagram.com/switchsocials?igsh=OG0yZzhsNnN4dXQ0&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              Follow Switch Socials on Instagram
            </a>

            <a
              href="https://venmo.com/u/dullantsy"
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
            >
              Support via Venmo
            </a>
          </div>
        </div>

        <div className="switch-socials-images">
          <img
            src="/switch-social-1.jpeg"
            alt="Guests gathered at a Switch Socials event"
            className="event-photo"
          />
          <img
            src="/switch-social-2.jpeg"
            alt="Participants playing Mario Kart at Switch Socials"
            className="event-photo"
          />
        </div>
      </section>
    </section>
  );
}

export default Community;