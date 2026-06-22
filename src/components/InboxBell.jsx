// ─────────────────────────────────────────────────────────────
// src/components/InboxBell.jsx
// Header bell icon + dropdown panel.
//
// Usage:
//   import InboxBell from '@/components/InboxBell';
//   <InboxBell userId={user.id} />
//
// Styling: uses Tailwind utility classes. Adjust to match your design system.
// Replace the inline SVGs with your icon library (lucide, heroicons, etc.) if you prefer.
// ─────────────────────────────────────────────────────────────

import { useState, useRef, useEffect } from 'react';
import { useInbox } from '../hooks/useInbox';

function timeAgo(iso) {
  const s = Math.max(1, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
  if (s < 60)        return `${s}s ago`;
  if (s < 3600)      return `${Math.floor(s / 60)}m ago`;
  if (s < 86400)     return `${Math.floor(s / 3600)}h ago`;
  return `${Math.floor(s / 86400)}d ago`;
}

export default function InboxBell({ userId }) {
  const [open, setOpen] = useState(false);
  const wrapperRef      = useRef(null);

  const {
    items, unreadCount, showRead, loading,
    openBell, toggleShowRead, deleteOne,
  } = useInbox(userId);

  // Click bell → open panel + mark all read
  const handleBellClick = async () => {
    if (!open) {
      setOpen(true);
      await openBell();
    } else {
      setOpen(false);
    }
  };

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open]);

  const handleItemClick = (item) => {
    if (item.click_url) {
      window.location.href = item.click_url;
    }
  };

  return (
    <div ref={wrapperRef} className="relative inline-block">
      {/* Bell button */}
      <button
        type="button"
        aria-label="Notifications"
        onClick={handleBellClick}
        className="relative p-2 rounded-full hover:bg-gray-100 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1
                           bg-red-500 text-white text-[11px] font-semibold rounded-full
                           flex items-center justify-center">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 max-h-[480px] bg-white rounded-lg shadow-xl
                        border border-gray-200 overflow-hidden z-50 flex flex-col">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <span className="font-semibold text-gray-800">Notifications</span>
            <label className="text-xs text-gray-500 flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                checked={showRead}
                onChange={toggleShowRead}
                className="cursor-pointer"
              />
              Show read
            </label>
          </div>

          {/* List */}
          <div className="overflow-y-auto flex-1">
            {loading && items.length === 0 && (
              <div className="px-4 py-8 text-center text-sm text-gray-400">Loading…</div>
            )}

            {!loading && items.length === 0 && (
              <div className="px-4 py-12 text-center text-sm text-gray-400">
                {showRead ? 'No notifications yet' : "You're all caught up 🎉"}
              </div>
            )}

            {items.map((item) => (
              <div
                key={item.id}
                className={
                  'group px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ' +
                  (item.is_read ? 'opacity-60' : 'bg-blue-50/40')
                }
                onClick={() => handleItemClick(item)}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-900 truncate">
                      {item.title}
                    </div>
                    {item.body && (
                      <div className="text-xs text-gray-600 mt-0.5 line-clamp-2">
                        {item.body}
                      </div>
                    )}
                    <div className="text-[11px] text-gray-400 mt-1">
                      {timeAgo(item.created_at)}
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Delete"
                    onClick={(e) => { e.stopPropagation(); deleteOne(item.id); }}
                    className="opacity-0 group-hover:opacity-100 transition p-1 rounded
                               hover:bg-gray-200 text-gray-400 hover:text-gray-600"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
