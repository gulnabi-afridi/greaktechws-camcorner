import React, { PropsWithChildren } from 'react';
import {
    AppShell,
    LoadingOverlay,
    useMantineTheme,
    Alert
} from '@mantine/core';
import { HeaderComponent } from '../Header';
import { Footer } from '../Footer';
import { useGlobalState } from '@/store';
import { IconAlertCircle } from '@tabler/icons-react';
import { NOTIFICATION_TYPE } from '../../constants/applicationTypes';

const CoreLayout = ({ children }: PropsWithChildren) => {
    const {
        isAppLoading,
        getNotification,
        hideNotification,
        isNotificationVisible
    } = useGlobalState();
    const theme = useMantineTheme();

    return (
        <>
            <AppShell
                padding={0}
                fixed={false}
                header={<HeaderComponent />}
                footer={<Footer />}
            >
                <>
                    {isNotificationVisible() ? (
                        <Alert
                            icon={<IconAlertCircle size="1rem" />}
                            title={getNotification().notificationTitle}
                            color={
                                getNotification().notificationType ===
                                NOTIFICATION_TYPE.ERROR
                                    ? 'red'
                                    : 'green'
                            }
                            withCloseButton
                            closeButtonLabel="Close Notification"
                            onClose={hideNotification}
                        >
                            {getNotification().notificationMessage}
                        </Alert>
                    ) : (
                        <></>
                    )}
                    <LoadingOverlay
                        loaderProps={{
                            size: 'xl',
                            color: theme.other.colors.main
                        }}
                        overlayColor={theme.other.colors.bg}
                        visible={isAppLoading()}
                    />
                    {children}
                </>
            </AppShell>
        </>
    );
};

export { CoreLayout };
