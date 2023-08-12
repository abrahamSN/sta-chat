import { generateToken } from '../utils/jwt';

class AuthService {
    public static async login(user_id: string, user_name: string, room_id: string) {
        try {
            const token = await generateToken(user_id, user_name, room_id);

            return token;
        } catch (err) {
            throw err;
        }
    }
}

export default AuthService;