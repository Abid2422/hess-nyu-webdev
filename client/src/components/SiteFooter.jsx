const palette = {
  background: '#0B0F19',
  border: 'rgba(255,255,255,0.06)',
  text: '#E2E8F0',
  muted: '#94A3B8',
};

export default function SiteFooter({ onAdminLogin, isAdmin }) {
  return (
    <footer
      style={{
        backgroundColor: palette.background,
        borderTop: `1px solid ${palette.border}`,
        padding: '18px 24px',
        fontFamily: 'Montserrat, system-ui, -apple-system, "Segoe UI", sans-serif',
        color: palette.muted,
        fontSize: '0.85rem',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}
    >
      <span>© {new Date().getFullYear()} HESS · NYU.</span>
      <span>
        <a href="mailto:nyuhemmes@gmail.com" style={{ color: palette.text, textDecoration: 'underline', marginRight: '12px' }}>
          nyuhemmes@gmail.com
        </a>
        <a href="https://www.instagram.com/hess.nyu/" target="_blank" rel="noreferrer" style={{ color: palette.text, textDecoration: 'underline' }}>
          @hess.nyu
        </a>
      </span>
      <button
        type="button"
        onClick={onAdminLogin}
        style={{
          background: 'transparent',
          border: 'none',
          color: isAdmin ? palette.text : palette.muted,
          cursor: 'pointer',
          textDecoration: 'underline',
          textUnderlineOffset: '4px',
        }}
      >
        Admin access
      </button>
    </footer>
  );
}


