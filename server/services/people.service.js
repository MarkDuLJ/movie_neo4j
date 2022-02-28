import { toNativeTypes, combinePersonAndRel } from "../utils.js";

export default class PeopleService {
  constructor(driver) {
    this.driver = driver;
  }

  async findByName(name) {
    const session = this.driver.session();

    const res = await session.readTransaction((tx) =>
      tx.run(
        `
    MATCH (p:Person{name:$name})-[r]-(m:Movie)
    RETURN m  ,r
    
  `,
        { name }
      )
    );
    const movie = res.records.map((row) => toNativeTypes(row.get("m")));
    const relation = res.records.map((row) => toNativeTypes(row.get("r")));
    const table = combinePersonAndRel(movie, relation);
    await session.close();

    return table;
  }
}
