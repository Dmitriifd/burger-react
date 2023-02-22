import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  category: [
    { id: nanoid(), title: "burger", rus: "Бургеры", image: "/img/burger.png" },
    { id: nanoid(), title: "snack", rus: "Закуски", image: "/img/snack.png" },
    {
      id: nanoid(),
      title: "hot-dog",
      rus: "Хот-доги",
      image: "/img/hot-dog.png",
    },
    { id: nanoid(), title: "combo", rus: "Комбо", image: "/img/combo.png" },
    {
      id: nanoid(),
      title: "shawarma",
      rus: "Шаурма",
      image: "/img/shawarma.png",
    },
    { id: nanoid(), title: "pizza", rus: "Пицца", image: "/img/pizza.png" },
    { id: nanoid(), title: "wok", rus: "Вок", image: "/img/wok.png" },
    {
      id: nanoid(),
      title: "dessert",
      rus: "Десерты",
      image: "/img/dessert.png",
    },
    { id: nanoid(), title: "sauce", rus: "Соусы", image: "/img/sauce.png" },
  ],
  error: "",
  activeCategory: 0,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory(state, action) {
      console.log(action);
      state.activeCategory = action.payload.indexCategory;
    },
  },
});

export const { changeCategory } = categorySlice.actions;

export default categorySlice.reducer;
