SELECT COUNT(*) AS pau_inside FROM orders
JOIN payments_orders  
ON orders.id=payments_orders.order_id
WHERE
 orders.status=’P’ AND 
payments_orders.payment_id IS NULL AND 
payments_orders.from_account IS TRUE
GROUP BY orders.id
