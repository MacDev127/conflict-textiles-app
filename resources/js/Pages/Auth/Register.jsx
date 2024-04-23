import { useEffect } from "react";
import InputError from "@/Components/LaravelComponents/InputError";
import PrimaryButton from "@/Components/LaravelComponents/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import "./Auth.css";
import ApplicationLogo from "@/components/LaravelComponents/ApplicationLogo";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
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

        post(route("register"));
    };

    return (
        <section className="login__page">
            <Link href={route("home")}>
                <ApplicationLogo />
            </Link>
            <Head title="Register" />

            <form className="login-form" onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        className="input-text"
                        autoComplete="name"
                        required
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    <InputError
                        message={errors.name}
                        className="error-message"
                    />
                </div>

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
                    <Link href={route("login")} className="link">
                        Already registered?
                    </Link>

                    <PrimaryButton
                        className="login-button"
                        disabled={processing}
                    >
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
}
