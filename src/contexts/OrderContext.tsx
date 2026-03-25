import { createContext, useContext, useState, ReactNode } from 'react';

interface OrderContextType {
  selectedPackage: string | null;
  setSelectedPackage: (pkg: string) => void;
  scrollToOrder: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const scrollToOrder = () => {
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <OrderContext.Provider value={{ selectedPackage, setSelectedPackage, scrollToOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within OrderProvider');
  }
  return context;
}
