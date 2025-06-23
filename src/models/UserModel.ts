import pool from "../config/database";

interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
}

class UserModel {
  async create(user: User): Promise<User> {
    const { name, email, password } = user;
    const result = await pool.query(
      `INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, email, password]
    );
    return result.rows[0];
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    return result.rows[0] || null;
  }
}

export default new UserModel();
export type { User };
