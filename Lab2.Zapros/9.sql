SELECT * FROM users
JOIN orders ON orders.user_id=users.id AND orders.status=’N’
JOIN payments_orders ON orders.id=payments_orders.order_id
AND payments_orders.create_at>=(SELECT NOW()-INTERVAL  '30'  DAY)
ORDER BY users.id
