import { Button } from "../components/ui/button";
import { pb } from "../lib/pb";


export function Login() {

    const login = async () => {
        const authData = await pb.collection('users').authWithPassword(
            'tiri',
            'tirirocks',
        );

        console.log(authData);
    }

    return (
        <div>
            <Button className="w-full" onClick={login}>Login</Button>
        </div>
    )
}