// src/firebase/seed.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";

// Lista de productos mock
const products = [
  {
    name: "AK-47 | Redline",
    price: 25,
    image: "https://cs2skins.com/images/ak47_redline.png"
  },
  {
    name: "AWP | Asiimov",
    price: 120,
    image: "https://cs2skins.com/images/awp_asiimov.png"
  },
  {
    name: "Desert Eagle | Blaze",
    price: 80,
    image: "https://cs2skins.com/images/deagle_blaze.png"
  },
  {
    name: "M4A4 | Howl",
    price: 1800,
    image: "https://cs2skins.com/images/m4a4_howl.png"
  }
];

export const seedProducts = async () => {
  try {
    for (const product of products) {
      await addDoc(collection(db, "products"), product);
      console.log(`✅ Producto agregado: ${product.name}`);
    }
    console.log("🔥 Todos los productos fueron agregados correctamente.");
  } catch (error) {
    console.error("❌ Error agregando productos:", error);
  }
};
