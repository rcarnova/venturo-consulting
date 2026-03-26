const LaunchBanner = () => {
  const today = new Date();
  const launchDate = new Date('2026-03-26');
  const showBanner = today.toDateString() === launchDate.toDateString();

  if (!showBanner) return null;

  return (
    <div
      className="w-full text-center"
      style={{
        background: '#E1FF00',
        color: '#0A0A0A',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        fontSize: '14px',
        padding: '10px 24px',
      }}
    >
      Stasera lanciamo Venturo. Se sei a Milano e vuoi fare un brindisi con noi, scrivici →{' '}
      <a href="mailto:info@venturoconsulting.it" className="underline font-bold">
        info@venturoconsulting.it
      </a>
    </div>
  );
};

export default LaunchBanner;
