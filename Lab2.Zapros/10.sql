UPDATE products 
SET discount=discount* 1.1 
WHERE products.id IN 
(SELECT basket.product_id
FROM basket 
RIGHT JOIN orders ON basket.order_id=orders.id
WHERE   orders.status SIMILAR TO 'P|F'
GROUP BY  	basket.product_id
HAVING 	COUNT(orders.*) <= 10)
