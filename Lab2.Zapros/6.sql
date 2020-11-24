SELECT AVG(orders.price::numeric::float8) AS srCheck FROM orders
WHERE orders.status='F '
