# OAuth Setup Guide

This guide explains how to set up Google and Apple OAuth login for your AstroChitra application.

## 🔧 Current Status

✅ **Frontend Implementation**: Complete  
✅ **OAuth Components**: Ready  
✅ **Development Mode**: Works with mock data  
❌ **Production OAuth**: Requires setup (see instructions below)

## 🚀 Quick Start (Development)

The OAuth login buttons are already functional in development mode with mock data. Users can click the buttons and will be logged in with demo accounts.

## 📋 Production Setup

### 1. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing project
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Configure consent screen with your app details
6. Add authorized JavaScript origins:
   - `http://localhost:5173` (development)
   - `https://yourdomain.com` (production)
7. Add authorized redirect URIs:
   - `http://localhost:5173` (development)
   - `https://yourdomain.com` (production)
8. Copy the **Client ID**

### 2. Apple Sign In Setup

1. Go to [Apple Developer Console](https://developer.apple.com/account/)
2. Navigate to "Certificates, Identifiers & Profiles"
3. Create a new **App ID** (or use existing)
4. Enable "Sign In with Apple" capability
5. Create a **Services ID** for web authentication
6. Configure domains and redirect URLs:
   - Domain: `yourdomain.com`
   - Redirect URL: `https://yourdomain.com/auth/apple/callback`
7. Copy the **Services ID** (this becomes your Client ID)

### 3. Environment Variables

Update your `.env.local` file:

```env
# Replace with your actual credentials
VITE_GOOGLE_CLIENT_ID=your-actual-google-client-id-here
VITE_APPLE_CLIENT_ID=your-actual-apple-services-id-here
VITE_APPLE_REDIRECT_URI=https://yourdomain.com/auth/apple/callback
```

### 4. Backend API Endpoints

Your backend needs to handle these OAuth endpoints:

```
POST /api/auth/google
- Body: { credential: "jwt-token" }
- Verify Google JWT and create/login user

POST /api/auth/apple
- Body: { authorization: {...} }
- Verify Apple authorization and create/login user
```

## 🎯 How It Works

### Login Flow

1. User clicks "Continue with Google/Apple"
2. OAuth popup opens with provider's login page
3. User authorizes your app
4. Provider returns authorization data
5. Your app sends data to backend for verification
6. Backend creates JWT token and returns user data
7. User is logged in and redirected to dashboard

### Current Fallback (Development)

- Google: Decodes JWT locally and creates mock user
- Apple: Creates mock user with provided data
- Both: Store demo token in localStorage

## 🔒 Security Notes

- Never expose client secrets in frontend code
- Always verify OAuth tokens on your backend
- Use HTTPS in production
- Implement proper CSRF protection
- Consider implementing rate limiting

## 🐛 Troubleshooting

### Common Issues

1. **"Invalid client ID"**
   - Check your environment variables
   - Verify client ID is correct
   - Ensure authorized domains are configured

2. **"Popup blocked"**
   - Allow popups for your domain
   - Consider using redirect flow instead

3. **"Redirect URI mismatch"**
   - Verify redirect URIs in OAuth provider console
   - Check for trailing slashes
   - Ensure exact domain match

### Testing in Development

The OAuth buttons work in development mode with mock data:

- Click any OAuth button
- User will be "logged in" with demo account
- Check browser localStorage for stored auth data

## 📚 Additional Resources

- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Apple Sign In Documentation](https://developer.apple.com/documentation/sign_in_with_apple)
- [React OAuth Google Documentation](https://github.com/MomenSherif/react-oauth)
