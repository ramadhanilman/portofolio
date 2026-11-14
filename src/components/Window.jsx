export default function Window({ title, children }) {
  return (
    <div className="window">
      <div className="window-bar">
        <span>{title}</span>
        <div className="window-dots" aria-hidden="true">
          <i></i><i></i><i></i>
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}