export class Env{
    public static readonly BASE_URL: string = Env.getOrThrow('url');
    public static readonly USER_EMAIL: string = Env.getOrThrow('email');
    public static readonly USER_PASSWORD: string= Env.getOrThrow('password');

    private static getOrThrow(key: string): string {
        const value = process.env[key];
        if (!value) {
          throw new Error(`Missing environment variable: ${key}`);
        }
        return value;
      }
    }