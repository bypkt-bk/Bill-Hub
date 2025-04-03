export type User = {
  id: number;
  email: string;
  name: string;
  taxId: string | null;
  phoneNumber: string | null;
  ownedStores: Store[];
  adminStores: Store[];
};
export type Store = {
  id: number;
  name: string;
  address: string;
  owner: User[] | null;
  admin: User[] | null;
  revenue: number;
  bill: Bill[];
};
export type Product = {
  id: number;
  name: string;
  price: number;
};
export enum Status {
  unpaid = "unpaid",
  paid = "paid",
}
export type Bill = {
  id: number;
  total: number;
  orderDate: string;
  shippingOn: string | null;
  status: Status;
  customer: Customer;
  product: BillProduct[];
  storeId: number;
};
export type BillProduct = {
  billId: number;
  product: Product;
  quantity: number;
};
export type Customer = {
  id: number;
  name: string;
  address: string;
};
