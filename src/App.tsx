import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import PayTransfer from "./pages/PayTransfer";
import Invest from "./pages/Invest";
import PlanTrack from "./pages/PlanTrack";
import Deposit from "./pages/Deposit";
import Transfer from "./pages/Transfer";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import SpecialOffer from "./pages/SpecialOffer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/pay-transfer" element={<PayTransfer />} />
          <Route path="/dashboard/invest" element={<Invest />} />
          <Route path="/dashboard/plan-track" element={<PlanTrack />} />
          <Route path="/dashboard/deposit" element={<Deposit />} />
          <Route path="/dashboard/transfer" element={<Transfer />} />
          <Route path="/dashboard/notifications" element={<Notifications />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/special-offer" element={<SpecialOffer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
