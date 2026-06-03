import axios from "axios";

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const cloudUploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

export const uploadFilesToLocalServer = async (files, folder = "misc") => {
  if (!files?.length) return [];

  if (!cloudName || !cloudUploadPreset) {
    throw new Error("Cloudinary is not configured. Set REACT_APP_CLOUDINARY_CLOUD_NAME and REACT_APP_CLOUDINARY_UPLOAD_PRESET.");
  }

  const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
  const uploadedUrls = [];

  for (const file of files) {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", cloudUploadPreset);
    if (folder) form.append("folder", folder);

    const res = await axios.post(uploadUrl, form);
    uploadedUrls.push(res.data?.secure_url || res.data?.url);
  }

  return uploadedUrls;
};
