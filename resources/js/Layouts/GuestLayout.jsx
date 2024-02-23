import ApplicationLogo from "@/components/LaravelComponents/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen  bg-lightGrey flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
            <div className="ml-12">
                <Link href={route("home")}>
                    <ApplicationLogo />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
