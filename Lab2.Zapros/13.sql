SELECT
  delivery_top.*,
  payment_top.*
FROM
  (
    SELECT d.*,
      COUNT(d_o.*) AS orders_count 
    FROM delivery d 
      LEFT JOIN delivery_orders d_o ON d_o.delivery_id = d.id 
    ORDER BY
       orders_count DESC
GROUP BY d.id 
    LIMIT 1
  ) AS delivery_top,
  (
    SELECT p.*,
      COUNT(p_o .*) AS orders_count 
    FROM payments p 
      LEFT JOIN payments_orders p_o ON p_o.payment_id = p.id 
    ORDER BY
       orders_count DESC
GROUP BY p.id
 LIMIT 1
  ) AS payment_top;

