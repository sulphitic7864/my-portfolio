export const resolveAssetUrl = (assetPath) => {
  if (!assetPath) return assetPath;

  if (
    assetPath.startsWith("http://") ||
    assetPath.startsWith("https://") ||
    assetPath.startsWith("blob:") ||
    assetPath.startsWith("data:")
  ) {
    return assetPath;
  }

  if (assetPath.startsWith("/api/uploads/")) {
    return assetPath;
  }

  if (assetPath.startsWith("/uploads/")) {
    return process.env.NODE_ENV === "development" ? `http://localhost:5001${assetPath}` : assetPath;
  }

  return assetPath;
};
