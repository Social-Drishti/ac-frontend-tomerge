import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../context/AuthContext";

export default function GoogleLoginButton() {
  const { loginWithGoogle } = useAuth();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      await loginWithGoogle(credentialResponse.credential);
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const handleGoogleError = (error) => {
    console.error("Google login error:", error);
  };

  return (
    <div className="oauth-button-wrapper">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        theme="outline"
        size="large"
        width="100%"
        text="signin_with"
        shape="rectangular"
      />
    </div>
  );
}
