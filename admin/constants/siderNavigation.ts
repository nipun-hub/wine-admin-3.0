import { BaggageClaim, Box, LayoutDashboard, Percent, ListFilter } from 'lucide-react';

type SiderNavigationItem = {
  title: string;
  url: string;
  isActive?: boolean,
  icon?: React.ComponentType;
  subItems?: SiderNavigationItem[];
};

export const siderNavigation: SiderNavigationItem[] = [
  {
    title: 'Dashboard',
    url: '/',
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: 'Products',
    url: '/products',
    icon: Box,
    subItems: [
      {
        title: 'Discount',
        url: '/products/discount',
        icon: Percent,
      },
      {
        title: 'Category',
        url: '/products/category',
        icon: ListFilter,
      },
    ],
  },
  {
    title: 'Orders',
    url: '/orders',
    icon: BaggageClaim,
  },
];
