type BreadType = {
  product_name: string;
  description: string;
  price: number;
  image: string;
};

export const Bread = ({
  product_name,
  description,
  price,
  image,
}: BreadType) => {
  return (
    <div className="bg-brown-200 items-center gap-15 p-5">
      <h1 className="bg-orange-400/50">{product_name}</h1>
      <h2 className="bg-yellow-200">{description}</h2>
      <h3 className="bg-brown-300">{price}</h3>
      <h4>{image}</h4>
    </div>
  );
};
