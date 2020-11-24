UPDATE accounts 
SET
   accounts.value =  accounts.value + account_orders.price 
FROM accounts,
  (
    SELECT
      SUM(o.price) AS price,
      SUM(p_o.value) AS paid_value 
    FROM orders o 
      LEFT JOIN payments_orders p_o ON p_o.order_id = o.id 
    WHERE
       o.status = 'C'
      AND o.price = paid_value 
  ) AS account_orders;