import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "poject008",
  password: "38329",
  port: 5432,
});

export default pool;
