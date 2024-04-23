import InputError from "@/components/LaravelComponents/InputError";
import PrimaryButton from "@/components/LaravelComponents/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import "./Auth.css";
import ApplicationLogo from "@/components/LaravelComponents/ApplicationLogo";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <section className="login__page">
            <Head title="Forgot Password" />
            <Link href={route("home")}>
                <ApplicationLogo />
            </Link>
            <form className="login-form" onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="input-text"
                        isFocused={true}
                        required
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <InputError
                        message={errors.email}
                        className="error-message"
                    />
                </div>

                {status && <div className="status-message">{status}</div>}

                <div className="form-group description">
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </div>

                <div className="reset__button-container">
                    <PrimaryButton
                        className="login-button"
                        disabled={processing}
                    >
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
        </section>
    );
}
