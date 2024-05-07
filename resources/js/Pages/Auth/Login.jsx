import { useEffect } from "react";
import Checkbox from "@/components/LaravelComponents/Checkbox";
import InputError from "@/components/LaravelComponents/InputError";
import PrimaryButton from "@/components/LaravelComponents/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import ApplicationLogo from "@/components/LaravelComponents/ApplicationLogo";
import "./Auth.css";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <section className="login__page">
            <Link href={route("home")}>
                <ApplicationLogo />
            </Link>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="form__container">
                <form className="login-form" onSubmit={submit}>
                    <div className="form-group">
                        <label htmlFor="email" value="Email">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="input-text"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError
                            message={errors.email}
                            className="error-message"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" value="Password">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="input-text"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="error-message"
                        />
                    </div>

                    <div className="form-group large-margin">
                        <label className="checkbox-container">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="checkbox-label">Remember me</span>
                        </label>
                    </div>

                    <div className="form-action-group">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="link"
                            >
                                Forgot your password?
                            </Link>
                        )}
                        <Link href={route("register")} className="link">
                            New here?
                        </Link>

                        <PrimaryButton
                            className="login-button"
                            disabled={processing}
                        >
                            Log in
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </section>
    );
}
