import { Billboard, Category } from "@/types";

const getBillboards = async (categoryId: string): Promise<Billboard[]> => {
  getCategory(categoryId).then((cateRes) => {
    const getBillURL = `${process.env.NEXT_PUBLIC_API_URL}/billboards/${cateRes.id}`;
    const res = await fetch(getBillURL);

    return res.json();
  });

  
};

const getCategory = async (categoryId: string): Promise<Category> => {
  const getCateUrl = `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`;
  const res = await fetch(getCateUrl);

  return res.json();
};

export default getBillboards;
