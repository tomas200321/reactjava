import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export const saveOrder = async (orderData) => {
  try {
    const ordersCollection = collection(db, "orders");
    const docRef = await addDoc(ordersCollection, {
      ...orderData,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error guardando pedido:", error);
    throw error;
  }
};
