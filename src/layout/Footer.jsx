import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} · Delancey Finney · All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;