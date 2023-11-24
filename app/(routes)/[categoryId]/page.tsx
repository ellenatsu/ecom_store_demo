import getBillboards from "@/actions/get-billboards";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

interface CategoryPageProps {
  categoryId: string;
}
const CategoryPage: React.FC<CategoryPageProps> = async ({ categoryId }) => {
  const category = await getBillboards(categoryId);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default CategoryPage;
