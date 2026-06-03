# Cloudinary Integration Guide

## What Changed
Your app now uploads files/images directly to **Cloudinary** (not Firebase Storage) and stores the returned URLs in **Firestore**. This keeps your frontend static and avoids Firebase Storage payment requirements.

---

## Setup Steps

### 1. Verify `.env` File
A `.env` file has been created in your project root with these values:
```
REACT_APP_USE_CLOUDINARY=true
REACT_APP_CLOUDINARY_CLOUD_NAME=df5qmzplg
REACT_APP_CLOUDINARY_UPLOAD_PRESET=portfolio_uploads
REACT_APP_UPLOAD_API_PATH=/api/uploads
```

✅ These credentials are already configured in your Cloudinary account.

### 2. Restart Dev Server
After the `.env` file is in place, restart your React dev server:
```bash
cd "D:\Projects\MyPortfolio"
npm start
```

The app will now read the Cloudinary environment variables and upload directly to Cloudinary instead of Firebase Storage.

---

## Upload Flow (What Happens When You Upload)

1. **User selects file** in the browser (e.g., profile picture, project image).
2. **React component calls** `uploadFilesToLocalServer(files, folder)`.
3. **Helper detects Cloudinary** is configured and sends the file directly to:
   ```
   https://api.cloudinary.com/v1_1/df5qmzplg/auto/upload
   ```
4. **Cloudinary stores the file** and returns a `secure_url` (e.g., `https://res.cloudinary.com/...`).
5. **React component saves the URL** to Firestore (e.g., in `users.profileImage` or `projects.images[]`).
6. **Frontend displays the image** by reading the URL from Firestore and rendering it.

---

## Testing the Upload

### Test 1: Upload Profile Image
1. Go to your app (http://localhost:3000).
2. Open **Account → Basic Information**.
3. Click the camera icon on the profile picture.
4. Select an image file.
5. Click **Save Changes**.
6. Check browser console for any errors; check if a success alert appears.
7. Check **Firestore** → `users` collection → your user doc → verify `profileImage` has a Cloudinary URL like `https://res.cloudinary.com/...`.

### Test 2: Upload Project Images
1. Go to **Management → Projects** → Create or Edit a project.
2. Drop or select images in the upload area.
3. Fill in project details and click **Submit**.
4. Check **Firestore** → `projects` collection → verify `images[]` contains Cloudinary URLs.

### Test 3: Verify Image Renders
1. Once a Cloudinary URL is stored in Firestore, visit the page where the image is displayed.
2. The image should load from `https://res.cloudinary.com/...` (Cloudinary CDN).
3. Right-click → Inspect to verify the `<img src="...">` points to Cloudinary.

---

## Manual Curl Test (Optional)
Test Cloudinary upload directly from your machine:
```bash
curl -X POST "https://api.cloudinary.com/v1_1/df5qmzplg/auto/upload" \
  -F "file=@C:\path\to\image.jpg" \
  -F "upload_preset=portfolio_uploads" \
  -F "folder=profiles"
```

Expected response:
```json
{
  "public_id": "profiles/...",
  "secure_url": "https://res.cloudinary.com/df5qmzplg/image/upload/...",
  "url": "http://res.cloudinary.com/df5qmzplg/image/upload/...",
  ...
}
```

---

## Code Changes Summary

### Updated Files
1. **`src/app/views/account/BasicInformation.jsx`**
   - ❌ Removed: Firebase Storage imports and `uploadBytes`, `getDownloadURL`
   - ✅ Added: `uploadFilesToLocalServer()` from Cloudinary helper
   - ✅ Saves Cloudinary URL to Firestore and localStorage

2. **`src/app/utils/localUpload.js`** (already had Cloudinary support)
   - Detects `REACT_APP_USE_CLOUDINARY=true`
   - Sends files to Cloudinary `auto/upload` endpoint
   - Returns `secure_url` from Cloudinary

3. **`src/app/utils/localAssets.js`** (already handles https:// URLs)
   - Passes through Cloudinary URLs (`https://...`) as-is
   - No transformation needed

---

## Data Flow in Firestore

### Before (Firebase Storage)
```
users/{userId}
  ├── name: "John"
  ├── profileImage: "gs://bucket/project-files/profile_123"  ❌ Firebase Storage ref
  └── ...
```

### After (Cloudinary)
```
users/{userId}
  ├── name: "John"
  ├── profileImage: "https://res.cloudinary.com/df5qmzplg/image/upload/.../image.jpg"  ✅ Cloudinary CDN URL
  └── ...
```

Same for projects:
```
projects/{projectId}
  ├── name: "My Project"
  ├── images: [
      "https://res.cloudinary.com/df5qmzplg/image/upload/.../image1.jpg",
      "https://res.cloudinary.com/df5qmzplg/image/upload/.../image2.jpg"
    ]  ✅ Cloudinary URLs
  └── ...
```

---

## Troubleshooting

### Issue: Upload fails (4xx or 5xx error in console)
- Check `.env` file exists in project root with correct values.
- Verify `REACT_APP_USE_CLOUDINARY=true` (must be string `"true"`).
- Restart the dev server after editing `.env`.

### Issue: Image doesn't load (404 or blank)
- Check Firestore has a valid `profileImage` or `images[...]` URL.
- Verify the URL starts with `https://res.cloudinary.com/...`.
- Check browser console for CORS errors (unlikely; Cloudinary allows cross-origin).

### Issue: `uploadFilesToLocalServer is not imported`
- Ensure the file imports it: `import { uploadFilesToLocalServer } from "../../utils/localUpload";`
- Check file paths match your project structure.

### Issue: Environment variables not loading
- Create `.env` at project root, not elsewhere.
- Environment variable names must start with `REACT_APP_` (CRA requirement).
- Restart dev server after creating/editing `.env`.

---

## Security & Compliance

✅ **Cloudinary unsigned uploads** are safe because:
- Restricted by upload preset (e.g., allowed formats, file size, folder).
- Cloudinary enforces rate limits.
- Files are scanned for malware.

⚠️ **If you need tighter control** (e.g., user-specific upload limits):
- Implement signed uploads: backend generates a signature, browser sends signed request.
- Contact Cloudinary support for enterprise features.

---

## Summary

You're now using **Cloudinary** instead of Firebase Storage:
- ✅ No more Firebase Storage payment required
- ✅ Files stored on Cloudinary CDN (fast worldwide delivery)
- ✅ URLs stored in Firestore (lightweight, queryable)
- ✅ Frontend remains fully static (no backend needed)
- ✅ Same user experience as before

**Next**: Restart your dev server and test uploading a profile image or project image!
