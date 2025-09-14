import { CAFFE_MOCHA, CAFFE_PANNA, FLAT_WHITE, MOCHA_FUSI } from "@/constants";
import { ImageSourcePropType } from "react-native";

export type Coffee = {
  id: string;
  name: string;
  type: string;
  image: ImageSourcePropType;
  rating: number;
  price: number;
  description: string;
};

export const coffeeData: Coffee[] = [
  {
    id: "1",
    name: "Caffe Mocha",
    type: "Deep Foam",
    price: 4.53,
    rating: 4.8,
    image: CAFFE_MOCHA,
    description:
      "A delightful fusion of rich espresso, smooth chocolate, and velvety steamed milk, topped with a light layer of foam. Perfect for those who enjoy a balance of bold coffee flavor with a sweet, creamy finish.",
  },
  {
    id: "2",
    name: "Flat White",
    type: "Espresso",
    price: 3.53,
    rating: 4.8,
    image: FLAT_WHITE,
    description:
      "A silky blend of bold espresso and micro-foamed milk, creating a smooth and creamy texture. Known for its balanced strength and velvety mouthfeel, the Flat White is an elegant choice for coffee purists.",
  },
  {
    id: "3",
    name: "Caffe Panna",
    type: "Ice/Hot",
    price: 5.53,
    rating: 4.8,
    image: CAFFE_PANNA,
    description:
      "A luxurious shot of espresso crowned with a generous swirl of lightly whipped cream. Served hot or cold, Caffe Panna offers a creamy sweetness that perfectly balances the robust intensity of espresso.",
  },
  {
    id: "4",
    name: "Mocha Fusi",
    type: "Ice/Hot",
    price: 4.8,
    rating: 7.53,
    image: MOCHA_FUSI,
    description:
      "An indulgent mix of freshly brewed espresso, steamed milk, and rich cocoa, topped with frothy foam. Mocha Fusi is the perfect treat for chocolate and coffee lovers looking for comfort in every sip.",
  },
];
