export const priceFormatedToReal = (price: number) => {
  return Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  }).format(price);
};
