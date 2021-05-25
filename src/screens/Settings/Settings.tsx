import React, { FC, useMemo, useCallback } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { Column, Text, Row } from 'src/components';

const Settings: FC = () => {
  const { t, i18n } = useTranslation('language');
  const { colors } = useTheme();

  const languages = useMemo(() => {
    return [
      { name: t('portuguese'), id: 'pt-BR' },
      { name: t('english'), id: 'en-US' }
    ];
  }, [i18n.language]);

  const onPressLanguage = useCallback(language => {
    i18n.changeLanguage(language);
  }, []);

  return (
    <Column alignItems='center' flex={1} justifyContent='center'>
      <FlatList
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        showsVerticalScrollIndicator={false}
        data={languages}
        keyExtractor={(_, index): string => index.toString()}
        renderItem={({ item }): JSX.Element => (
          <Row alignItems='center'>
            <TouchableOpacity onPress={() => onPressLanguage(item.id)}>
              <Text variant='regular'>{item.name}</Text>
            </TouchableOpacity>

            {item.id === i18n.language ? (
              <Column ml='5px' bg={colors.success} width={15} height={15} borderRadius={15} />
            ) : null}
          </Row>
        )}
      />
    </Column>
  );
};

export default Settings;
