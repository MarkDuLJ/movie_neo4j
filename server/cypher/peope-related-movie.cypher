MATCH (p:Person)-[r]-(m:Movie{title:$title})
RETURN p,r