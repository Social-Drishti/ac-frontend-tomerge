import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function OAuthCallback() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { loginWithApple } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get("code");
      const state = searchParams.get("state");

      if (code && state === "signin") {
        try {
          await loginWithApple({ code });
          navigate("/dashboard");
        } catch (error) {
          console.error("OAuth callback error:", error);
          navigate("/login?error=oauth_failed");
        }
      } else {
        navigate("/login");
      }
    };

    handleCallback();
  }, [searchParams, navigate, loginWithApple]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontSize: "18px",
        color: "#5f6b3a",
      }}
    >
      Processing authentication...
    </div>
  );
}
