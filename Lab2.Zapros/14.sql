DELETE FROM categories c
   WHERE c.id NOT IN (SELECT products.category_id FROM products)
