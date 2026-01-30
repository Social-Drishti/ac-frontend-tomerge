import AppleSignin from "react-apple-signin-auth";
import { useAuth } from "../../context/AuthContext";

export default function AppleLoginButton() {
  const { loginWithApple } = useAuth();

  const handleAppleSuccess = async (response) => {
    try {
      await loginWithApple(response);
    } catch (error) {
      console.error("Apple login failed:", error);
    }
  };

  const handleAppleError = (error) => {
    console.error("Apple login error:", error);
  };

  return (
    <div className="oauth-button-wrapper">
      <AppleSignin
        authOptions={{
          clientId: import.meta.env.VITE_APPLE_CLIENT_ID,
          scope: "name email",
          redirectURI: import.meta.env.VITE_APPLE_REDIRECT_URI,
          state: "signin",
          nonce: "nonce-" + Math.random().toString(36).substr(2, 9),
          usePopup: true,
        }}
        onSuccess={handleAppleSuccess}
        onError={handleAppleError}
        skipScript={false}
        iconProp={{
          style: {
            width: "20px",
            height: "20px",
            marginRight: "8px",
          },
        }}
        buttonExtraChildren="Continue with Apple"
        render={(props) => (
          <button {...props} className="apple-signin-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ marginRight: "8px" }}
            >
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.89C10.15 6.87 11.36 7.74 12.1 7.74C12.83 7.74 14.29 6.68 15.87 6.84C16.46 6.87 18.08 7.1 19.05 8.82C18.97 8.87 17.46 9.75 17.48 11.54C17.5 13.78 19.4 14.5 19.42 14.51C19.38 14.67 19.02 15.84 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
            </svg>
            Continue with Apple
          </button>
        )}
      />
    </div>
  );
}
