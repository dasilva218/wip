import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../database/dbconnect';
import Users from '../../../models/users';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        // connexion
        connectMongo().catch((error) => {
          error: 'Connection Failed...!';
        });
        // check si l'utilisateur existe

        const user = await Users.findOne({
          username: credentials.name,
        });
        // si pas d'utilisateur
        if (!user) {
          throw new Error("Pas d'utilisateur avec ce nom");
        }

        // vérifie si le mot de passe correspond
        const checkPassword = credentials.password === user.password;
        // si non
        if (!checkPassword) {
          throw new Error("Le mot de passe n'est pas le bon");
        }

        return {
          name:user,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
}
export default NextAuth(authOptions)

