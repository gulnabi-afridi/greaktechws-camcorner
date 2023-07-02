import React, { useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { IconChevronLeft } from '@tabler/icons-react';
import { Center, Flex, Button, Text, useMantineTheme } from '@mantine/core';

const Pagination = () => {
    const theme = useMantineTheme();

    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPage: 6
    });

    return (
        <Center mt={8}>
            <Flex justify={Center} gap={15} align={Center}>
                <Button
                    disabled={pagination.currentPage === 1}
                    onClick={() =>
                        setPagination({
                            ...pagination,
                            currentPage: pagination.currentPage - 1
                        })
                    }
                    w={39}
                    h={38}
                    bg={'transparent'}
                    styles={() => ({
                        root: {
                            display: 'flex',
                            justifyContent: 'flex-center',
                            '&:hover': {
                                backgroundColor: 'transparent'
                            },
                            '&:disabled': {
                                backgroundColor: 'transparent'
                            }
                        }
                    })}
                    leftIcon={
                    <Flex justify={'center'} align={'center'}>

                        <IconChevronLeft
                            size={33}
                            color={`${
                                pagination.currentPage === 1
                                    ? 'lightGray'
                                    : theme.other.colors.yellow
                            }`}
                        />
                    </Flex>
                    }
                ></Button>
                <Text color="black" fw={700} lh={2.3} fs="16">
                    Page {pagination.currentPage} of {pagination.totalPage}
                </Text>
                <Button
                    disabled={pagination.currentPage === pagination.totalPage}
                    onClick={() =>
                        setPagination({
                            ...pagination,
                            currentPage: pagination.currentPage + 1
                        })
                    }
                    w={10}
                    h={38}
                    bg={'transparent'}
                    styles={() => ({
                        root: {
                            '&:hover': {
                                backgroundColor: 'transparent'
                            },
                            '&:disabled': {
                                backgroundColor: 'transparent'
                            }
                        }
                    })}
                    leftIcon={
                    <Flex justify={'center'} align={'center'}>
                        <IconChevronRight
                            size={33}
                            color={`${
                                pagination.totalPage === pagination.currentPage
                                    ? 'lightGray'
                                    : theme.other.colors.yellow
                            }`}
                        />
                    </Flex>
                    }
                ></Button>

            </Flex>
        </Center>
    );
};

export default Pagination;
