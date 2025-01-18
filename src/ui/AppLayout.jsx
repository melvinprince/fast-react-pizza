import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const cart = useSelector((store) => store.cart.cart);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <main className="overflow-scroll-hidden mx-w-3x ">
        <Outlet />
      </main>

      {cart.length > 0 && <CartOverview />}
    </div>
  );
}

export default AppLayout;
