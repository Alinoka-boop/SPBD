SELECT o.*,
  MIN(b.created_at) AS basket_first,
  MAX(p_o.created_at) AS payment_last,
  SUM(p_o.value) AS paid_value 
FROM orders o 
  LEFT JOIN payments_orders p_o ON p_o.order_id  =  o.id 
  LEFT JOIN basket b ON b.order_id = o.id 
WHERE
   orders.price = (SELECT SUM(payments_orders.value) FROM payments_otders)
  AND (
    SELECT
      date_part
(  'hour', 
   (SELECT MAX(payments_orders.create_at)-MIN(basket.create_at) FROM payments_orders, basket)
)
  ) <= 1
GROUP BY o.id;
