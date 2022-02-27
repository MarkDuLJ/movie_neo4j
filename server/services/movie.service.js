import { int } from "neo4j-driver";
import { toNativeTypes } from "../utils.js";

export default class MovieService {
  constructor(driver) {
    this.driver = driver;
  }

  async all(
    sort = "released",
    order = "DESC",
    limit = 6,
    skip = 0,
    userId = undefined
  ) {
    const session = this.driver.session();

    const res = await session.readTransaction((tx) =>
      tx.run(
        `
    MATCH (m:Movie)
    WHERE m.\`${sort}\` IS NOT NULL
    RETURN m { .* } AS movie
    ORDER BY m.\`${sort}\` ${order}
    SKIP $skip
    LIMIT $limit
  `,
        { skip: int(skip), limit: int(limit) }
      )
    );

    const movies = res.records.map((row) => toNativeTypes(row.get("movie")));

    await session.close();

    return movies;
  }
}
