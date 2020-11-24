SELECT users.id users.login FROM users
JOIN orders ON users.id=orders.users_id AND orders.status=’C’
