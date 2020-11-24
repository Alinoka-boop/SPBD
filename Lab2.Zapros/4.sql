SELECT orders.id, SUM(payments_orders.value) FROM orders 
JOIN payments_orders ON orders.status!= 'D' 
   AND payments_orders.value>'0.00' 
   AND payments_orders.order_id=orders.id
GROUP BY orders.id 
