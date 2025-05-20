import Link from "next/link";
import { SignUp } from "../SignUp";

export default function Signup() {
    return (
        <>
            <div>
                <SignUp />
            </div>

            <div className="mt-6 text-center">
                <p>
                    have account?{" "}
                    <Link href="/sign-up" className="text-primary">
                        Sign In
                    </Link>
                </p>
            </div>
        </>
    );
}
