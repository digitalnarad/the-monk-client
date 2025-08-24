import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CryptoJS from 'crypto-js';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Encryption Functions
const generateEncryptionKey = () => {
  const appName = import.meta.env.VITE_APP_NAME || 'TheMonkLab';
  const appVersion = import.meta.env.VITE_APP_VERSION || '1.0.0';
  const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : 'server';
  
  const keyMaterial = `${appName}-${appVersion}-${userAgent.slice(0, 20)}`;
  return CryptoJS.SHA256(keyMaterial).toString();
};

const encryptionKey = generateEncryptionKey();

export const encrypt = (data) => {
  try {
    const jsonString = JSON.stringify(data);
    return CryptoJS.AES.encrypt(jsonString, encryptionKey).toString();
  } catch (error) {
    console.error('Encryption error:', error);
    return null;
  }
};

export const decrypt = (encryptedData) => {
  try {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, encryptionKey);
    const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
    
    if (!jsonString) {
      return null;
    }
    
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Decryption error:', error);
    return null;
  }
};
