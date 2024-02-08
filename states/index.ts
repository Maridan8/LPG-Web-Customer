import { get, patch, post } from "@/config";
import { API_URL } from "@/env";
import { create } from "zustand";

export const useCheckoutStore = create((set) => ({
  checkoutItems: [],
  addItem: (item: any) => {
    return set((state: any) => ({
      checkoutItems: [item, ...state.checkoutItems],
    }));
  },
  removeItem: (_id: any) => {
    return set((state: any) => ({
      checkoutItems: [...state.checkoutItems.filter((e: any) => e._id != _id)],
    }));
  },
}));

export const useAuthStore = create((set) => ({
  user: null,
  access: null,
  refresh: null,
  authenticate: async (request: any) => {
    const { data } = await post(`users/authenticate`, {
      ...request,
      type: "Customer",
    });
    if (data.status == "success") {
      return set(() => ({ user: data.data[0] }));
    }
  },

  logout: () => {
    return set(() => ({ user: null }));
  },
}));

export const useFaqsStore = create((set) => ({
  faqs: [],
  getFaqs: async () => {
    const { data } = await get(`faqs`);
    if (data.status == "success") {
      return set(() => ({ faqs: data.data }));
    }
  },
}));

export const useMessagesStore = create((set) => ({
  messages: [],
  getMessages: async (user: string) => {
    const { data } = await get(
      `messages?filter={"$or": [{"from": "${user}"}, {"to": "${user}"}]}`
    );
    if (data.status == "success") {
      return set(() => ({ messages: data.data }));
    }
  },
  addMessage: async (request: any) => {
    const { data } = await post(`messages`, request);
    if (data.status === "success") {
      return set((state: any) => ({
        messages: [...state.messages, data.data[0]],
      }));
    }
  },
  addNewMessage: (data: any) => {
    return set((state: any) => ({
      messages: [...state.messages, data],
    }));
  },
}));

export const useAnnouncementsStore = create((set) => ({
  announcements: [],
  getAnnouncements: async () => {
    const { data } = await get(`announcements`);
    if (data.status == "success") {
      return set(() => ({ announcements: data.data }));
    }
  },
}));

export const useItemStore = create((set) => ({
  items: [],
  getItems: async () => {
    const { data } = await get(`items`);
    if (data.status == "success") {
      return set(() => ({ items: data.data }));
    }
  },
  removeItem: (id: any) => {
    set((state: any) => ({
      items: [...state.items.filter((e: any) => e._id != id)],
    }));
  },
}));

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item: any) => {
    return set((state: any) => ({
      cart: [...state.cart, item],
    }));
  },
}));
