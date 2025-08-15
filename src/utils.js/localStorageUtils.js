const localStorageUtils = {
  save: (key, data) => {
    if (!key) {
      console.error("Key is required to save data to localStorage.");
      return;
    }
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(key, jsonData);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  },

  get: (key) => {
    if (!key) {
      console.error("Key is required to get data from localStorage.");
      return null;
    }
    try {
      const jsonData = localStorage.getItem(key);
      return jsonData ? JSON.parse(jsonData) : null;
    } catch (error) {
      console.error("Error getting from localStorage:", error);
      return null;
    }
  },

  update: (key, newData) => {
    if (!key) {
      console.error("Key is required to update data in localStorage.");
      return;
    }
    try {
      const currentData = localStorageUtils.get(key) || {};
      const updatedData = { ...currentData, ...newData };
      localStorageUtils.save(key, updatedData);
    } catch (error) {
      console.error("Error updating localStorage:", error);
    }
  },

  remove: (key) => {
    if (!key) {
      console.error("Key is required to remove data from localStorage.");
      return;
    }
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage:", error);
    }
  },

  clearAll: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  },
};

export default localStorageUtils;
