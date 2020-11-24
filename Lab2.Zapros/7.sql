SELECT p.*,
  SUM(b.price) AS basket_value
FROM products p
  RIGHT JOIN basket b ON b.product_id = p.id,
  (
    SELECT o.id, o.price
      SUM(p_o. value) AS paid_value
    FROM
      orders o
      RIGHT JOIN payment_orders p_o ON p_o.order_id = o.id
    GROUP BY
      o.id, p_o.value
  ) AS paid_orders
JOIN basket ON b.order_id = paid_orders.id
WHERE paid_orders.price <= paid_orders.paid_value
  GROUP BY
  p.id
ORDER BY	
  basket_value DESC
LIMIT 10;
