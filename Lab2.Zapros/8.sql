SELECT p.*
FROM products p 
RIGHT JOIN basket b ON b.product_id = p.id  and b.order_id IS NULL
GROUP BY p.id
HAVING SUM(b.quantity)<SUM(p.quantity)
