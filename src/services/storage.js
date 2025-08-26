import { encrypt, decrypt } from "../utils.js/helper.js";

const storage = {
  // Read
  get: (key) => {
    if (!key) return null;
    try {
      const encryptedData = localStorage.getItem("auth");
      if (!encryptedData) return null;
      const storData = JSON.parse(decrypt(encryptedData));
      return storData[key];
    } catch (error) {
      return null;
    }
  },

  // Update
  set: (key, data) => {
    if (!key) return false;
    try {
      const encryptedData = localStorage.getItem("auth");
      const storData = JSON.parse(decrypt(encryptedData));

      const updatedData = { ...(storData ? storData : {}), [key]: data };

      const encryptedUpdatedData = encrypt(JSON.stringify(updatedData));
      if (!encryptedUpdatedData) return false;

      localStorage.setItem("auth", encryptedUpdatedData);
      return true;
    } catch (error) {
      return false;
    }
  },

  // Clear all
  clear: () => {
    try {
      localStorage.clear();
      const now = new Date();
      localStorage.setItem("time", encrypt(JSON.stringify(now)));
      return true;
    } catch (error) {
      console.error("Storage clear error:", error);
      return false;
    }
  },
};

export default storage;
