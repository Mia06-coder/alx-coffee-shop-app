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
    description: "A strong and bold coffee shot.",
  },
  {
    id: "2",
    name: "Flat White",
    type: "Expresso",
    price: 3.53,
    rating: 4.8,
    image: FLAT_WHITE,
    description: "Espresso with steamed milk and foam.",
  },
  {
    id: "3",
    name: "Caffe Panna",
    type: "Ice/Hot",
    price: 5.53,
    rating: 4.8,
    image: CAFFE_PANNA,
    description: "Chilled espresso with milk and ice.",
  },
  {
    id: "4",
    name: "Mocha Fusi",
    type: "Ice/Hot",
    price: 4.5,
    rating: 7.53,
    image: MOCHA_FUSI,
    description: "Espresso with chocolate and steamed milk.",
  },
];
