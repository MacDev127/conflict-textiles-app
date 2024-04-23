import { useEffect } from "react";
import InputError from "@/components/LaravelComponents/InputError";
import PrimaryButton from "@/components/LaravelComponents/PrimaryButton";
import { Head, useForm, Link } from "@inertiajs/react";
import "./Auth.css";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("password.update"));
    };

    return (
        <section className="login__page">
            <Link href={route("home")}>
                <ApplicationLogo />
            </Link>
            <Head title="Reset Password" />

            <form className="login-form" onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="input-text"
                        autoComplete="username"
                        required
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError
                        message={errors.email}
                        className="error-message"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="input-text"
                        autoComplete="new-password"
                        required
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError
                        message={errors.password}
                        className="error-message"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password_confirmation">
                        Confirm Password
                    </label>
                    <input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="input-text"
                        autoComplete="new-password"
                        required
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="error-message"
                    />
                </div>

                <div className="form-action-group">
                    <PrimaryButton
                        className="login-button"
                        disabled={processing}
                    >
                        Reset Password
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
}
