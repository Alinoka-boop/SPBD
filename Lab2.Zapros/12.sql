UPDATE orders
SET discount = discount*1.5 
WHERE orders.user_id IN 
(SELECT user.id FROM users
  RIGHT JOIN accounts ON accounts.user_id = users.id
WHERE
accounts.is_vip = true
GROUP BY users.id
) AND  orders.status = 'N';
