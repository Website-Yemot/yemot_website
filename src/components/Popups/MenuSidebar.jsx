import '../Header/main-header.css'; // נשתמש באותו קובץ CSS לצורך פשטות

// הקומפוננטה מקבלת פונקציית גלילה עם סגירה (onScrollAndClose) ופונקציית סגירה רגילה
export const MenuSidebar = ({ onClose, onScrollAndClose }) => {

  const navItems = [
    { id: "demos", text: "Phone Systems" },
    { id: "freefeatures", text: "Features" },
    { id: "whyus", text: "Why us" },
    { id: "pricing", text: "Pricing" },
    { id: "support", text: "Support" },
  ];

  return (
    // ה-overlay מטפל בסגירה בלחיצה מחוץ לתפריט
    <div className="sidebar-overlay" onClick={onClose}>
      
      {/* ה-sidebar עצמו - עוצרים את Propagation כדי שלחיצה עליו לא תסגור אותו */}
      <div className="sidebar-drawer" onClick={(e) => e.stopPropagation()}>
        
        <button className="sidebar-close-btn" onClick={onClose} aria-label="Close menu">
          ✕
        </button>

        <div className="sidebar-nav-items">
          {navItems.map((item) => (
            <div 
              key={item.id}
              className="sidebar-text-wrapper" 
              // כאשר לוחצים, גוללים וסוגרים
              onClick={() => onScrollAndClose(item.id)}
            >
              {item.text}
            </div>
          ))}
        </div>

        {/* אפשר להוסיף כאן גם את כפתורי ה-Log in / Start Free */}
      </div>
    </div>
  );
};