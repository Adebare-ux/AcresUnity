const HouseSVG = ({ color = "#2E7D4F", opacity = 0.6, size = 180 }) => (
  <svg
    viewBox="0 0 200 180"
    width={size}
    height={size * 0.9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 20L180 80V160H20V80L100 20Z"
      fill={color}
      fillOpacity={opacity * 0.28}
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth="2"
    />
    <rect
      x="70"
      y="100"
      width="60"
      height="60"
      fill={color}
      fillOpacity={opacity * 0.38}
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth="1.5"
    />
    <rect
      x="85"
      y="115"
      width="20"
      height="20"
      fill={color}
      fillOpacity={opacity * 0.55}
    />
    <path
      d="M80 80 L120 80 L120 100 L80 100 Z"
      fill={color}
      fillOpacity={opacity * 0.45}
    />
    <path
      d="M60 80 L100 40 L140 80"
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth="2"
      fill="none"
    />
    <line
      x1="100"
      y1="20"
      x2="100"
      y2="40"
      stroke={color}
      strokeOpacity={opacity * 0.5}
      strokeWidth="1"
    />
  </svg>
);

export default HouseSVG;
