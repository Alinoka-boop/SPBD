DELETE FROM products
  WHERE products.id NOT IN (
    SELECT basket.product_id
      FROM basket
  )
