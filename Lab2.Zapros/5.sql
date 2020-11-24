SELECT u.id
  COUNT(o.*) filter (
    WHERE o.status = 'N'  ) AS n_count,
  count(o.*) filter (
    WHERE o.status = 'D'  ) AS d_count,
  count(o.*) filter (
    WHERE o.status = 'P'  ) AS p_count,
  count(o.*) filter (
    WHERE o.status = 'F'  ) AS f_count,
  count(o.*) filter (
    WHERE o.status = 'C') AS c_count,
FROM users u
	RIGHT JOIN orders o ON o.user_id = u.id
GROUP BY u.id;
