import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
function Home() {
    const { t } = useTranslation();
    return (
        <View>
            <Text className="text-red-500">{t('welcome')}</Text>
        </View>
    );
}

export default Home;
