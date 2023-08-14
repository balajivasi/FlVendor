import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

function Home() {
    const { t } = useTranslation();
    const message = useSelector(state => state.user.message);
    return (
        <View>
            <Text className="text-red-500">{t('welcome')}</Text>
            <Text className="text-red-500">{message}</Text>
        </View>
    );
}

export default Home;
