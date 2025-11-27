// OrderCard component
// src/components/orders/OrderCard.jsx
import React from "react";
import {
  FiCalendar,
  FiDollarSign,
  FiTruck,
  FiBookOpen,
} from "react-icons/fi";

function getStatusStyles(status) {
  if (!status) return "bg-gray-100 text-gray-700 border border-gray-200";

  switch (status.toUpperCase()) {
    case "PENDING":
      return "bg-amber-50 text-amber-700 border border-amber-200";
    case "SHIPPED":
      return "bg-blue-50 text-blue-700 border border-blue-200";
    case "DELIVERED":
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    case "CANCELLED":
      return "bg-rose-50 text-rose-700 border border-rose-200";
    default:
      return "bg-gray-100 text-gray-700 border border-gray-200";
  }
}

function formatDate(date) {
  if (!date) return "N/A";
  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) return "N/A";

  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Reusable order card
 * Props:
 *  - id
 *  - date (optional)
 *  - items: [{ title?, bookId?, quantity, price }]
 *  - total
 *  - status
 */
export default function OrderCard({ id, date, items = [], total, status }) {
  const itemCount = items.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  return (
    <article className="w-full rounded-2xl border border-slate-200 bg-white/80 shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5 flex flex-col gap-4">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="space-y-1">
          <p className="text-[11px] font-medium text-slate-500 tracking-wide">
            ORDER ID
          </p>
          <p className="text-sm sm:text-base font-semibold text-slate-900">
            #{id}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full ${getStatusStyles(
              status
            )}`}
          >
            <FiTruck className="text-sm" />
            <span>{status}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
            <FiCalendar className="text-sm" />
            <span>{formatDate(date)}</span>
          </span>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Items */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <FiBookOpen className="text-slate-500" />
            <h3 className="text-sm font-semibold text-slate-800">
              Items ({itemCount})
            </h3>
          </div>

          {items.length === 0 ? (
            <p className="text-xs text-slate-500">
              No items found for this order.
            </p>
          ) : (
            <ul className="space-y-2">
              {items.map((item, idx) => {
                const title =
                  item.title || `Book #${item.bookId || item.id || idx + 1}`;
                const quantity = item.quantity || 1;
                const price =
                  item.price !== undefined && item.price !== null
                    ? Number(item.price)
                    : null;
                const subtotal =
                  price !== null ? price * quantity : null;

                return (
                  <li
                    key={item.id || item.bookId || idx}
                    className="flex justify-between gap-3 text-xs sm:text-sm text-slate-700"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium truncate max-w-[220px] sm:max-w-[260px]">
                        {title}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Qty: {quantity}
                        {item.bookId && <> • Book ID: {item.bookId}</>}
                      </span>
                    </div>

                    {price !== null && (
                      <div className="text-right">
                        <p className="font-semibold">
                          ₹{price.toFixed(2)}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Subtotal:{" "}
                          {subtotal !== null
                            ? `₹${subtotal.toFixed(2)}`
                            : "—"}
                        </p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Summary */}
        <aside className="w-full lg:w-64 lg:border-l lg:border-slate-100 lg:pl-4 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <FiDollarSign className="text-lg" />
              <span>Total</span>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-slate-900">
                ₹
                {total !== undefined && total !== null
                  ? Number(total).toFixed(2)
                  : "0.00"}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
