SELECT p.category_id COUNT(*)  
FROM products AS p
GROUP BY p.category_id
