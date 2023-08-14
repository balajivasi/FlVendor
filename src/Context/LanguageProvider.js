import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Make sure to install and import AsyncStorage
import '../../i18n';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('');
  const { i18n } = useTranslation();

  // Load language from local storage on component mount
  useEffect(() => {
    const getStoredLanguage = async () => {
      try {
        const storedLanguage = await AsyncStorage.getItem('FLVendorLanguage');
        if (storedLanguage) {
          setLanguage(storedLanguage);
          i18n.changeLanguage(storedLanguage);
        } else {
          // If local storage is empty, get the device's default language
          // You might need to adapt this part based on your use case
          const deviceLanguage = 'en'; // Replace with your logic to get the device's default language
          setLanguage(deviceLanguage);
        }
      } catch (error) {
        console.error('Error loading language from local storage:', error);
      }
    };

    getStoredLanguage();
  }, []);

  const updateLanguage = useCallback((newLanguage) => {
    //setLanguage(newLanguage);
    //dispatch(setProfileLanguage(language));
    i18n.changeLanguage(newLanguage);
  }, [i18n]);

  // Update language in local storage whenever it changes
  // useEffect(() => {
  //   if (language) {
  //     AsyncStorage.setItem('FLVendorLanguage', language).catch((error) =>
  //       console.error('Error saving language to local storage:', error)
  //     );
  //   }
  // }, [language]);

  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
