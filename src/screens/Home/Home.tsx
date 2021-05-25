import React, { FC } from 'react';
import { useTheme, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { Column, Text, Button } from 'src/components';

const Home: FC = () => {
  const { t } = useTranslation('home');
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  return (
    <Column alignItems='center' flex={1} justifyContent='center'>
      <Text color={colors.primary} variant='regular'>
        {t('title')}
      </Text>

      <Text color={colors.primary} variant='small' my='5px'>
        {t('subtitle')}
      </Text>

      <Button text={t('settings-label')} onPress={() => navigate('Settings')} width='50%' />
    </Column>
  );
};

export default Home;
