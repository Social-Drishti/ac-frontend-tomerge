import GoogleLoginButton from "./GoogleLogin";
import AppleLoginButton from "./AppleLogin";

export default function SocialLogins() {
  return (
    <div className="social-logins">
      <div className="social-divider">
        <span className="social-divider-text">or continue with</span>
      </div>

      <div className="social-buttons">
        <GoogleLoginButton />
        <AppleLoginButton />
      </div>

      <style jsx>{`
        .social-logins {
          margin: 24px 0;
          width: 100%;
        }

        .social-divider {
          position: relative;
          text-align: center;
          margin: 20px 0;
        }

        .social-divider::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #e0e0e0;
          z-index: 1;
        }

        .social-divider-text {
          background: white;
          padding: 0 16px;
          color: #666;
          font-size: 14px;
          position: relative;
          z-index: 2;
        }

        .social-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .oauth-button-wrapper {
          width: 100%;
        }

        .apple-signin-btn {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #000;
          color: white;
          font-size: 16px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .apple-signin-btn:hover {
          background: #333;
        }

        .apple-signin-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
