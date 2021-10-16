import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Link, Divider, Box, List, ListIcon, ListItem, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Image } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'
import { FiExternalLink } from 'react-icons/fi'
import { modalOpenContext } from '../context/modalOpenContext'
import { localStorageGetter, readStatusManager } from '../utils/readStatus'
import { AiFillCheckCircle } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'

const CardBox = styled(Box)`
	border-radius: 15px;
	width: 100%;
	max-width: 400px;
	height: 300px;
	margin: 1rem 0;
	transition: all 0.2s ease;
	position: absolute;
	display: flex;
	flex-direction: column;
	border-radius: 15px;
	overflow: hidden;
	box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.4);
`

export const MemoedCard = function Card({ item, index, type }) {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { modalState, setModalState } = useContext(modalOpenContext)

	useEffect(() => {
		if (modalState.type && modalState.index >= 0) {
			if (modalState.type === type && modalState.index === index) {
				readStatusManager(modalState.type, modalState.index)
				onOpen()
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modalState])
	return (
		<>
			<CardBox
				cursor="pointer"
				onClick={() => {
					readStatusManager(type, index)
					onOpen()
				}}
			>
				<Box backgroundImage={`${item.image}`} backgroundPosition="center" backgroundSize="cover" transition="all .5s ease" h="100%" _hover={{ transform: 'scale(1.2)' }}></Box>
				<Box fontSize="1rem" w="100%" position="absolute" bottom="0" backgroundColor="rgba(222,222,222,.9)" px="1em" py=".5em">
					<Text fontSize="1.2rem" fontWeight="700">
						{item.title}
					</Text>
					<Text>{item.company}</Text>
					<Box pos="absolute" right="1rem" bottom="0.5rem">
						{localStorageGetter(type, index) ? (
							<Box color="green.600" fontSize="1.5rem">
								<AiFillCheckCircle />
							</Box>
						) : (
							<Box color="red.600" fontSize="1.5rem">
								<GiCancel />
							</Box>
						)}
					</Box>
				</Box>
			</CardBox>
			<Modal
				isOpen={isOpen}
				onClose={() => {
					setModalState({ type: '', index: null })
					onClose()
				}}
				scrollBehavior="inside"
			>
				<ModalOverlay />
				<ModalContent maxW="95%" w="500px">
					<ModalHeader>{item.title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody mb="1em">
						<Box borderRadius="15px" overflow="hidden">
							<Image src={item.image} mx="auto" maxHeight="300px" />
						</Box>

						<Link href={item.webLink} isExternal d="flex" alignItems="center" color="gray.400" textDecoration="underline">
							{item.webLink ? '前往網站' : '暫無連結'} <FiExternalLink />
						</Link>
						<Box my="1em" fontWeight="700">
							{item.des}
						</Box>
						<Divider mb="1em" />
						{item.title !== '履歷' && item.title !== 'Notion專案/開發進度管理' ? (
							<>
								<Box fontWeight="bold">負責項目</Box>
								<List spacing={1}>
									{item.resDetail
										? item.resDetail.map((list, i) => (
												<ListItem key={i}>
													<ListIcon as={MdCheckCircle} color="green.500" />
													{list}
												</ListItem>
										  ))
										: null}
								</List>
								<Divider my="1em" />
								<Box fontWeight="bold">使用技術</Box>
								<List spacing={1}>
									{item.stack
										? item.stack.map((list, i) => (
												<ListItem key={i}>
													<ListIcon as={MdCheckCircle} color="green.500" />
													{list}
												</ListItem>
										  ))
										: null}
								</List>
							</>
						) : null}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}
