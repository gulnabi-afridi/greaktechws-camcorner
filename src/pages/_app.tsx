import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { CoreLayout } from '@/components/CoreLayout';
import Router from 'next/router';
import { useGlobalState } from '../store';

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
    const { showLoading, hideLoading } = useGlobalState();

    Router.events.on('routeChangeComplete', () => hideLoading());
    Router.events.on('routeChangeStart', () => showLoading());
    Router.events.on('routeChangeError', () => hideLoading());

    return (
        <>
            <Head>
                <title>Camcorner</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    fontFamily: 'Montserrat',
                    cursorType: 'pointer',
                    headings: {
                        fontFamily: 'Brittanic Bold',
                        fontWeight: '400',
                        sizes: {
                            h1: { fontSize: '65' },
                            h2: { fontSize: '45' }
                        }
                    },
                    other: {
                        colors: {
                            yellow: '#FDB602',
                            lightGray: '#ECEBE7',
                            blue: '#00539B',
                            offWhite: '#F5F5F5'
                        }
                    },
                    globalStyles: theme => ({
                        '.clickable': {
                            cursor: 'pointer'
                        }
                    }),
                    components: {
                        Button: {
                            variants: {
                                filled: theme => ({
                                    root: {
                                        backgroundColor:
                                            theme.other.colors.yellow
                                    }
                                })
                            },
                            styles: {
                                label: {
                                    fontSize: 18,
                                    fontFamily: 'Montserrat',
                                    fontWeight: 700,
                                    lineHeight: 22,
                                    color: 'black',
                                    textTransform: 'uppercase'
                                }
                            }
                        },
                        Tabs: {
                            styles: theme => ({
                                tabsList: {
                                    borderBottom: `1px solid black`
                                },
                                tab: {
                                    ':hover': {
                                        borderColor: theme.other.colors.yellow
                                    },
                                    '&[data-active]': {
                                        borderBottom: `4px solid ${theme.other.colors.yellow}`,
                                        ':hover': {
                                            borderColor:
                                                theme.other.colors.yellow
                                        }
                                    }
                                }
                            })
                        },
                        TextInput: {
                            styles: theme => ({
                                input: {
                                    backgroundColor: 'white',
                                    '::placeholder': {
                                        color: 'black',
                                        fontSize: 18
                                    }
                                }
                            })
                        },
                        Textarea: {
                            styles: theme => ({
                                input: {
                                    backgroundColor: 'white',
                                    '::placeholder': {
                                        color: 'black',
                                        fontSize: 18
                                    }
                                }
                            })
                        }
                    }
                }}
            >
                <CoreLayout>
                    <Component {...pageProps} />
                </CoreLayout>
            </MantineProvider>
        </>
    );
}
