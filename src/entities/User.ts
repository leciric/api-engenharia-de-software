class User {
    id?: string;
    name: string;
    email: string;
    password: string;
    coins?: number;
  
    private constructor({ name, email, password }: User) {
      return Object.assign(this, {
        name,
        email,
        password,
        coins: 50,
      });
    }
  
    static create({ name, password, email }: User) {
      const user = new User({ name, password, email });
      return user;
    }
  }
  
  export { User };