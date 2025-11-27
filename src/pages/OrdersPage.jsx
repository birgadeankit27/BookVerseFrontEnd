// OrdersPage
// src/pages/OrdersPage.jsx
import React, { useEffect, useState } from "react";
import {
  FiShoppingBag,
  FiRefreshCw,
  FiAlertTriangle,
} from "react-icons/fi";

import orderApi from "../api/orderApi";
import OrderCard from "../components/orders/OrderCard";
import { Button } from "../components/common/Button";
import { Loader } from "../components/common/Loader";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);

      // 🔐 Get userId from wherever you store it
      // If you use context, swap this with your AuthContext logic
      const userId = localStorage.getItem("userId");
      if (!userId) {
        throw new Error("User not found. Please login again.");
      }

      const data = await orderApi.getMyOrders(userId);

      // Normalize backend DTO → OrderCard props
      // Backend getMyOrders returns List<OrderResponseDto>
      const normalized = (Array.isArray(data) ? data : []).map((o) => ({
        id: o.orderId || o.id,
        date: o.createdAt || o.date || null, // OrderResponseDto currently doesn't include date; this will show "N/A" until you add it.
        items: o.items || [],
        total: o.totalAmount ?? o.total,
        status: o.status,
      }));

      setOrders(normalized);
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to load your orders.";
      setError(message);
    } finally {
      setLoading(false);
      setInitialLoad(false);
    }
  };

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasOrders = !loading && !error && orders.length > 0;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
              <FiShoppingBag className="text-xl text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                My Orders
              </h1>
              <p className="text-sm text-slate-500">
                View your past orders, their status, and total amounts.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              label="Refresh"
              loading={loading && !initialLoad}
              onClick={fetchOrders}
              loadingPosition="left"
              className="flex items-center gap-2"
            >
              {!loading && <FiRefreshCw className="text-sm" />}
            </Button>
          </div>
        </header>

        {/* Initial loading */}
        {loading && initialLoad ? (
          <section className="flex flex-col items-center justify-center py-16 gap-3">
            <Loader size="lg" text="Loading your orders..." />
            <p className="text-xs text-slate-500">
              Please wait while we fetch your order history.
            </p>
          </section>
        ) : (
          <>
            {/* Error */}
            {error && (
              <section className="mb-6">
                <div className="rounded-2xl border border-rose-200 bg-rose-50/80 px-4 py-3 flex items-start gap-3">
                  <div className="mt-[2px]">
                    <FiAlertTriangle className="text-rose-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-rose-800">
                      Something went wrong
                    </p>
                    <p className="text-xs text-rose-700 mt-1">{error}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button
                        size="sm"
                        variant="primary"
                        label="Try again"
                        onClick={fetchOrders}
                        loading={loading}
                      />
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Empty state */}
            {!error && orders.length === 0 && !loading && (
              <section className="py-14 flex flex-col items-center text-center gap-3">
                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mb-1">
                  <FiShoppingBag className="text-2xl text-slate-400" />
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                  You don&apos;t have any orders yet
                </h2>
                <p className="text-sm text-slate-500 max-w-md">
                  Once you place an order, it will appear here with all
                  the details.
                </p>
              </section>
            )}

            {/* Orders list */}
            {hasOrders && (
              <section className="space-y-4 sm:space-y-5">
                {orders
                  .slice()
                  .sort((a, b) => {
                    if (a.date && b.date) {
                      return new Date(b.date) - new Date(a.date);
                    }
                    return (b.id || 0) - (a.id || 0);
                  })
                  .map((order) => (
                    <OrderCard
                      key={order.id}
                      id={order.id}
                      date={order.date}
                      items={order.items}
                      total={order.total}
                      status={order.status}
                    />
                  ))}
              </section>
            )}

            {/* Refresh loader */}
            {loading && !initialLoad && (
              <div className="flex justify-center mt-6">
                <Loader size="sm" text="Refreshing orders..." />
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
