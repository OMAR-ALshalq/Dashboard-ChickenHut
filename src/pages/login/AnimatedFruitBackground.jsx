import "./AnimatedFruitBackground.css";

// عناصر دجاج وبطاطس كرتونية مبسطة تتناسب مع هوية Chickenhut
const chickenItems = [
  {
    id: 1,
    svg: (
      <svg viewBox="0 0 64 64" width="60" height="60">
        {/* دبوس دجاج مقرمش (Drumstick) 🍗 */}
        <path
          d="M16 48 C14 50, 10 52, 8 48 C6 44, 10 40, 14 38 L22 30 L34 42 Z"
          fill="var(--primary-alt)"
        />
        <path
          d="M16 48 L26 38"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
        <path
          d="M30 38 C38 38, 54 34, 56 22 C58 10, 48 6, 38 12 C28 18, 26 30, 30 38 Z"
          fill="var(--complementary-alt)"
        />
        <path
          d="M40 18 C46 16, 50 18, 52 22"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
      </svg>
    ),
    className: "item-drumstick"
  },
  {
    id: 2,
    svg: (
      <svg viewBox="0 0 64 64" width="60" height="60">
        {/* بطاطس مقلية كرتونية 🍟 */}
        {/* العبوة */}
        <path d="M16 28 L48 28 L44 56 L20 56 Z" fill="var(--primary-color)" />
        {/* لوجو أو رمز بسيط على العبوة */}
        <ellipse cx="32" cy="42" rx="8" ry="6" fill="var(--primary-alt)" />
        {/* أصابع البطاطس */}
        <rect
          x="20"
          y="10"
          width="5"
          height="22"
          rx="2"
          fill="var(--primary-alt)"
        />
        <rect
          x="27"
          y="6"
          width="5"
          height="26"
          rx="2"
          fill="var(--primary-alt)"
        />
        <rect
          x="34"
          y="8"
          width="5"
          height="24"
          rx="2"
          fill="var(--primary-alt)"
        />
        <rect
          x="41"
          y="12"
          width="5"
          height="20"
          rx="2"
          fill="var(--primary-alt)"
        />
      </svg>
    ),
    className: "item-fries"
  },
  {
    id: 3,
    svg: (
      <svg viewBox="0 0 64 64" width="60" height="60">
        {/* دلو الدجاج الشهير (Chicken Bucket) 🪣 */}
        {/* قطع الدجاج البارزة من الأعلى */}
        <circle cx="24" cy="20" r="10" fill="var(--complementary-alt)" />
        <circle cx="34" cy="16" r="10" fill="var(--complementary-alt)" />
        <circle cx="44" cy="22" r="9" fill="var(--complementary-alt)" />
        {/* الدلو */}
        <path
          d="M14 24 L50 24 L44 58 L20 58 Z"
          fill="var(--bg-primary)"
          stroke="var(--primary-color)"
          strokeWidth="4"
        />
        {/* خط أحمر ديكوري عريض بالمنتصف */}
        <path d="M16 34 L48 34 L46 44 L18 44 Z" fill="var(--primary-color)" />
      </svg>
    ),
    className: "item-bucket"
  }
];

export default function AnimatedChickenBackground() {
  // توليد 12 عنصراً عائماً وموزعاً بشكل ثابت ذكي لمنع مشاكل الـ Hydration
  const items = Array.from({ length: 12 }, (_, i) => {
    const item = chickenItems[i % chickenItems.length];
    return { ...item, id: i, style: randomPosition(i) };
  });

  return (
    <div className="chicken-background">
      {items.map((item) => (
        <div
          key={item.id}
          className={`chicken-item ${item.className}`}
          style={item.style}
        >
          {item.svg}
        </div>
      ))}
    </div>
  );
}

function randomPosition(seed) {
  // توزيع عشوائي آمن يعتمد على seed لثبات المواقع عند تحديث الصفحة
  const left = (seed * 17 + 9) % 100;
  const top = (seed * 13 + 5) % 100;
  const delay = (seed % 6) * 1.5;
  const duration = 10 + (seed % 5) * 2;
  return {
    left: `${left}%`,
    top: `${top}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`
  };
}