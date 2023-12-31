import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLanguage } from "../Context/LanguageProvider";

export default function Settings() {
    const { t, i18n } = useTranslation();
    const { language, updateLanguage } = useLanguage(i18n.language);
    const [selectedLanguage, setSelectedLanguage] = useState()
    const handleLanguageChange = async (value) => {
        try {
            await AsyncStorage.setItem('FLVendorLanguage', value);
            setSelectedLanguage(value);
            i18n.changeLanguage(value);
        } catch (error) {
            console.log('Error saving language:', error);
        }
    };

    useEffect(() => {
        setSelectedLanguage(i18n.language)
    }, [i18n.language])

    return (
        <View className="flex-col mt-10">
            <Text className="text-center text-xl">{t('version')}</Text>
            <Text className="text-center mb-10 text-2xl"></Text>
            <Text className="text-center text-xl">{t('language')}</Text>
            <View>
                <Picker selectedValue={selectedLanguage} onValueChange={(value) => handleLanguageChange(value)}>
                    <Picker.Item label="Device: English(en)" value="en" />
                    <Picker.Item label="English" value="en" />
                    <Picker.Item label="Español" value="es" />
                    <Picker.Item label="Kreyòl Ayisyen" value="hc" />
                </Picker>
            </View>
        </View>
    )
}
