import "./StatCard.css";

function StatCard({
  title,
  value,
  subtitle,
  icon,
  borderColor,
  iconBg,
  iconColor,
}) {
  return (
    <div
      className="stat-card"
      style={{
        borderTop: `4px solid ${borderColor}`,
      }}
    >
      <div className="stat-card-top">
        <div>
          <p className="stat-title">{title}</p>

          <h2 className="stat-value">{value}</h2>

          <span
            className="stat-subtitle"
            style={{ color: borderColor }}
          >
            {subtitle}
          </span>
        </div>

        <div
          className="stat-icon"
          style={{
            background: iconBg,
            color: iconColor,
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatCard;