import { hookstate, useHookstate } from '@hookstate/core';
import {
    NOTIFICATION_TYPE,
    TOKEN_CHOCOLATE_CHIP_COOKIE
} from '../constants/applicationTypes';
import cookies from 'js-cookie';

const initialState = hookstate({
    isLoggedIn: false,
    loading: false,
    notification: {
        notificationMessage: '',
        notificationTitle: '',
        notificationType: ''
    },
    notificationVisible: false,
    user: {
        token: '',
        role: ''
    }
});

export const useGlobalState = () => {
    const state = useHookstate(initialState);

    return {
        isNotificationVisible: () => state.notificationVisible.value,
        getNotification: () => state.notification.value,
        isAppLoading: () => state.loading.value,
        getUser: () => state.user.value,
        showLoading: () => {
            state.loading.set(true);
        },
        hideLoading: () => {
            state.loading.set(false);
        },
        showNotification: (
            errorMessage,
            title = 'There was an error',
            type = NOTIFICATION_TYPE.ERROR
        ) => {
            state.notificationVisible.set(true);
            state.notification.set({
                notificationMessage: errorMessage,
                notificationTitle: title,
                notificationType: type
            });
        },
        hideNotification: () => {
            state.notificationVisible.set(false);
        },
        setUser: data => {
            cookies.set(TOKEN_CHOCOLATE_CHIP_COOKIE, data.token);
            state.isLoggedIn.set(true);
            state.user.set({ token: data.token, role: data.role });
        },
        logout: () => {
            state.isLoggedIn.set(false);
            cookies.remove(TOKEN_CHOCOLATE_CHIP_COOKIE);
        }
    };
};
