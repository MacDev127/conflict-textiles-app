import { Head, Link, useForm } from "@inertiajs/react";
import "./Auth.css";
import ApplicationLogo from "@/components/LaravelComponents/ApplicationLogo";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <section className="login__page">
            <Head title="Email Verification" />
            <Link href={route("home")}>
                <ApplicationLogo />
            </Link>

            <div className="verification-message">
                Thanks for signing up! Before getting started, could you verify
                your email address by clicking on the link we just emailed to
                you? If you didn't receive the email, we will gladly send you
                another.
            </div>

            {status === "verification-link-sent" && (
                <div className="status-message">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <form className="login-form" onSubmit={submit}>
                <div className="form-action-group">
                    <PrimaryButton
                        className="login-button"
                        disabled={processing}
                    >
                        Resend Verification Email
                    </PrimaryButton>

                    <Link
                        href={route("logout")}
                        method="post"
                        as="button"
                        className="link"
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </section>
    );
}
