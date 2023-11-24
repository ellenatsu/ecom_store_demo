import { Billboard } from "@/types";

const Url = `${process.env.NEXT_PUBLIC_API_URL}/billboards/`;
const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${Url}/${id}`);

  return res.json();
};

// const getCategory = async (categoryId: string): Promise<Category> => {
//   const getCateUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`;
//   const res = await fetch(getCateUrl);

//   return res.json();
// };

export default getBillboard;
