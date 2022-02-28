MATCH (p:Person{name:$name})-[r]-(m:Movie)
RETURN m,r