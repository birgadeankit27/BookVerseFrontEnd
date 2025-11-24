
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import ReviewForm from "./components/reviews/ReviewForm";


export default function App() {
  return (
    <>
      <Header />

      {/* Routing pages appear here */}
      <AppRoutes />
      <ReviewForm />
      <Footer />



    </>
  );
}
