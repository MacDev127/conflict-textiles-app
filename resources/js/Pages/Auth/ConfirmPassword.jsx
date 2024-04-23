import { Head, useForm, Link } from "@inertiajs/react";
import InputError from "@/components/LaravelComponents/InputError";
import PrimaryButton from "@/components/LaravelComponents/PrimaryButton";
import "./Auth.css";
import ApplicationLogo from "@/components/LaravelComponents/ApplicationLogo";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <section className="login__page">
            <Link href={route("home")}>
                <ApplicationLogo />
            </Link>
            <Head title="Confirm Password" />

            <form className="login-form" onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="input-text"
                        required
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError
                        message={errors.password}
                        className="error-message"
                    />
                </div>

                <div className="verification-message">
                    This is a secure area of the application. Please confirm
                    your password before continuing.
                </div>

                <div className="form-action-group">
                    <PrimaryButton
                        className="login-button"
                        disabled={processing}
                    >
                        Confirm
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
}
