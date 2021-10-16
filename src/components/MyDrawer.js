import React, { useContext, useEffect } from 'react'
import {
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Button,
	Input,
	useDisclosure,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
} from '@chakra-ui/react'
import { modalOpenContext } from '../context/modalOpenContext'
import { profolioList } from '../projectList'
export default function MyDrawer() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { drawerState, setDrawerState, setModalState } = useContext(modalOpenContext)

	function triggerModal(index, type) {
		setModalState((pre) => (pre = { index: index, type: type }))
	}

	useEffect(() => {
		if (drawerState === 'open') {
			onOpen()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [drawerState])
	return (
		<Drawer
			isOpen={isOpen}
			placement="right"
			onClose={() => {
				setDrawerState('close')
				onClose()
			}}
		>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>選單</DrawerHeader>
				<DrawerBody>
					<Accordion>
						{profolioList.map((items, i) => (
							<AccordionItem key={i}>
								<h2>
									<AccordionButton>
										<Box flex="1" textAlign="left">
											{items.title}
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									{items.project.map((item, j) => (
										<Box
											onClick={() => {
												setDrawerState('close')
												onClose()
												triggerModal(j, items.title)
											}}
											key={j}
											textAlign="left"
											cursor="pointer"
											p=".3rem 0rem .3rem 0.5rem"
											_hover={{ backgroundColor: 'rgb(240,240,240)' }}
										>
											{item.title}
										</Box>
									))}
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	)
}
