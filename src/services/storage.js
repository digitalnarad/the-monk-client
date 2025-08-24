import { encrypt, decrypt } from "../utils.js/helper.js";

const storage = {
  // Create/Update
  // set: (data) => {
  //   try {
  //     const encryptedData = encrypt(JSON.stringify(data));

  //     if (encryptedData) {
  //       localStorage.setItem("auth", encryptedData);
  //       return true;
  //     }

  //     return false;
  //   } catch (error) {
  //     return false;
  //   }
  // },

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
      if (!encryptedData) return null;
      const storData = JSON.parse(
        encryptedData ? decrypt(encryptedData) : "{}"
      );

      const updatedData = { ...storData, [key]: data };

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
      localStorage.setItem("auth", encrypt(JSON.stringify(now)));
      return true;
    } catch (error) {
      console.error("Storage clear error:", error);
      return false;
    }
  },
};

export default storage;
