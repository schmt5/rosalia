import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { pb } from "@/lib/pb";
import { TextInput } from "../components/ui/TextInput";

export function Logout() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        pb.authStore.clear();
        navigate('/trips');
    }

    const handleCancel = () => {
        navigate(-1);
    }

    return (
        <div>
            <TextInput
                label="Name"
                name="name"
                value={pb.authStore.model.username}
                disabled
            />
            <TextInput
                label="Email"
                name="email"
                value={pb.authStore.model.email}
                disabled
            />

            <Button
                onClick={handleLogout}
                variant="destructive"
                className='w-full mt-8 mb-2'
            >
                Logout
            </Button>

            <Button
                onClick={handleCancel}
                variant="secondary"
                className="w-full"
            >
                Zurück
            </Button>
        </div>
    )
}
