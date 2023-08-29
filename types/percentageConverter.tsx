export const calcDiscountedPricePercentage = (
  originalPrice: number,
  discountedPrice: number
): string => {
  const discount: number = originalPrice - discountedPrice

  const discountPercentage: number = (discount / originalPrice) * 100

  return discountPercentage.toFixed(2)
}
